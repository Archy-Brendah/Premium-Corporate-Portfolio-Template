"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function CursorHighlight() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    if (reducedMotion) return;
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
      if (!visible) setVisible(true);
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [reducedMotion, visible, x, y]);

  if (reducedMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-40 hidden h-8 w-8 rounded-full border border-electric-indigo-soft bg-electric-indigo-soft shadow-[0_0_40px_rgba(99,102,241,0.4)] blur-[1px] md:block"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    />
  );
}

