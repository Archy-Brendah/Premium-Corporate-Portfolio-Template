type IconName = "consulting" | "strategy" | "design" | "development";

const icons: Record<IconName, React.ReactNode> = {
  consulting: (
    <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="48" height="48" rx="8" fill="#E8F0FA" />
      <path d="M24 14v20M14 24h20" stroke="#0056B3" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="4" stroke="#0056B3" strokeWidth="2" fill="none" />
    </svg>
  ),
  strategy: (
    <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="48" height="48" rx="8" fill="#E8F0FA" />
      <path d="M14 34L24 18l10 16" stroke="#0056B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="18" r="2.5" fill="#0056B3" />
    </svg>
  ),
  design: (
    <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="48" height="48" rx="8" fill="#E8F0FA" />
      <rect x="12" y="14" width="24" height="20" rx="2" stroke="#0056B3" strokeWidth="2" fill="none" />
      <path d="M12 22h24" stroke="#0056B3" strokeWidth="2" />
      <circle cx="18" cy="18" r="2" fill="#0056B3" />
      <circle cx="24" cy="18" r="2" fill="#0056B3" />
      <circle cx="30" cy="18" r="2" fill="#0056B3" />
    </svg>
  ),
  development: (
    <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="48" height="48" rx="8" fill="#E8F0FA" />
      <path d="M16 18l6 6-6 6M28 18l6 6-6 6" stroke="#0056B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 14h4v20h-4V14z" fill="#0056B3" />
    </svg>
  ),
};

export default function ServiceIcon({ name }: { name: IconName }) {
  return <span className="flex-shrink-0">{icons[name] ?? icons.consulting}</span>;
}
