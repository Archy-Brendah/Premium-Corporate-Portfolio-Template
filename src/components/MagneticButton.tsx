"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const STIFFNESS = 150;
const DAMPING = 20;
const RANGE = 12;

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  [key: string]: unknown;
};

/**
 * Button/link that subtly follows the cursor (magnetic pull) on hover.
 * Disabled on touch devices. Use for primary CTAs.
 */
export default function MagneticButton({
  children,
  className = "",
  as: Component = "button",
  href,
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: STIFFNESS, damping: DAMPING });
  const springY = useSpring(y, { stiffness: STIFFNESS, damping: DAMPING });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;
    x.set(Math.max(-RANGE, Math.min(RANGE, deltaX * RANGE * 2)));
    y.set(Math.max(-RANGE, Math.min(RANGE, deltaY * RANGE * 2)));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const motionProps = {
    ref: ref as React.RefObject<HTMLAnchorElement & HTMLButtonElement>,
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  if (Component === "a") {
    return (
      <motion.a
        href={href}
        className={className}
        target={rest.target as string | undefined}
        rel={rest.rel as string | undefined}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" className={className} {...motionProps}>
      {children}
    </motion.button>
  );
}
