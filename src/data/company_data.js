/**
 * COMPANY DATA — Single source of truth for corporate portfolio.
 * Edit this file to customize brand, metrics, testimonials, and contact in one place.
 */

export const companyData = {
  // Brand & industry
  companyName: "Your Company",
  industry: "Engineering",
  tagline: "Professional solutions for growth-oriented companies.",
  // For SEO and JSON-LD
  siteUrl: "https://yourcompany.com",
  email: "contact@yourcompany.com",
  foundedYear: "2004",

  // Navigation
  nav: {
    logoText: "Your Company",
    links: [
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Insights", href: "#insights" },
      { label: "About", href: "#about" },
    ],
    ctaLabel: "Request Quote",
    ctaHref: "#contact",
  },

  // Metrics bar (credibility for enterprise)
  stats: [
    { value: "20+", label: "Years in business" },
    { value: "Fortune 500", label: "Trusted by leaders" },
    { value: "150+", label: "Projects delivered" },
    { value: "98%", label: "Client retention" },
  ],

  // Services (4 columns)
  services: [
    {
      id: "consulting",
      title: "Consulting",
      description: "Expert guidance to align your strategy with market realities and growth objectives.",
      icon: "consulting",
    },
    {
      id: "strategy",
      title: "Strategy",
      description: "Data-driven roadmaps and execution plans that turn vision into measurable results.",
      icon: "strategy",
    },
    {
      id: "design",
      title: "Design",
      description: "Human-centered design that improves usability, brand consistency, and conversion.",
      icon: "design",
    },
    {
      id: "development",
      title: "Development",
      description: "Robust, scalable solutions built with modern stack and best practices.",
      icon: "development",
    },
  ],

  // Case studies
  caseStudies: [
    {
      id: 1,
      title: "Global Infrastructure Upgrade",
      category: "Consulting & Strategy",
      excerpt: "Led strategy and delivery for a multi-site infrastructure modernization.",
      image: "/placeholders/case-1.jpg",
      slug: "global-infrastructure-upgrade",
      readMoreLabel: "Read More",
      industry: "Infrastructure",
    },
    {
      id: 2,
      title: "Digital Transformation Initiative",
      category: "Design & Development",
      excerpt: "End-to-end product design and development for a Fortune 500 client.",
      image: "/placeholders/case-2.jpg",
      slug: "digital-transformation",
      readMoreLabel: "Read More",
      industry: "Technology",
    },
    {
      id: 3,
      title: "Operational Excellence Program",
      category: "Consulting",
      excerpt: "Process redesign and change management across 12 business units.",
      image: "/placeholders/case-3.jpg",
      slug: "operational-excellence",
      readMoreLabel: "Read More",
      industry: "Manufacturing",
    },
  ],

  // Testimonials (executive social proof)
  testimonials: [
    {
      quote: "They delivered beyond our expectations. The strategic clarity and execution discipline set a new standard for our organization.",
      author: "Sarah Chen",
      role: "Chief Strategy Officer",
      company: "Global Tech Corp",
    },
    {
      quote: "A true partner—not just a vendor. Their team understood our complexity and drove measurable outcomes from day one.",
      author: "James Mitchell",
      role: "VP of Operations",
      company: "Fortune 500 Industrial",
    },
  ],

  // Thought leadership / Insights (for enterprise credibility)
  insights: [
    {
      id: 1,
      title: "The Future of Enterprise Architecture",
      excerpt: "How leading organizations are rethinking infrastructure for scale and resilience.",
      slug: "future-enterprise-architecture",
      date: "2025-02-15",
      category: "Strategy",
    },
    {
      id: 2,
      title: "Building Trust in Digital Transformation",
      excerpt: "Why culture and change management determine success in large-scale initiatives.",
      slug: "trust-digital-transformation",
      date: "2025-01-28",
      category: "Consulting",
    },
  ],

  // Trust bar — partners / clients
  partners: [
    { name: "Partner One", logo: "/placeholders/partner-1.svg" },
    { name: "Partner Two", logo: "/placeholders/partner-2.svg" },
    { name: "Partner Three", logo: "/placeholders/partner-3.svg" },
    { name: "Partner Four", logo: "/placeholders/partner-4.svg" },
  ],

  // Certifications / awards (optional badges in footer or about)
  certifications: [
    { name: "ISO 27001", title: "Information Security" },
    { name: "Industry Award 2024", title: "Excellence in Delivery" },
  ],

  // Contact form
  contact: {
    formTitle: "Request a Quote",
    formSubtitle: "Tell us about your project. We'll respond within one business day.",
    inquiryTypes: [
      { value: "", label: "Select inquiry type" },
      { value: "general", label: "General inquiry" },
      { value: "rfp", label: "RFP / Proposal request" },
      { value: "partnership", label: "Partnership" },
      { value: "enterprise", label: "Enterprise engagement" },
    ],
    fields: {
      name: { label: "Name", placeholder: "Your full name", required: true },
      company: { label: "Company", placeholder: "Company name", required: true },
      email: { label: "Work email", placeholder: "work@company.com", required: true },
      projectDetails: {
        label: "Project details",
        placeholder: "Describe your project, goals, and timeline...",
        required: true,
      },
    },
    submitLabel: "Send request",
    successMessage: "Thank you. We'll be in touch within one business day.",
    submitEndpoint: "/api/contact",
  },

  // Scheduling (Calendly or similar)
  schedule: {
    title: "Schedule a Call",
    description: "Prefer a live conversation? Book a 30-minute call with our team.",
    calendlyUrl: "https://calendly.com/your-company/intro-call",
    ctaLabel: "Open scheduling",
  },

  // Footer
  footer: {
    copyright: "© 2025 Your Company. All rights reserved.",
    tagline: "Engineering the future, one partnership at a time.",
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    showNewsletter: true,
    newsletterTitle: "Stay informed",
    newsletterPlaceholder: "Your work email",
  },

  // Cookie / consent bar (GDPR-style; set to false to hide)
  cookieConsent: {
    enabled: true,
    message: "We use cookies to improve your experience and analyze site traffic. By continuing, you accept our use of cookies.",
    acceptLabel: "Accept",
    policyLabel: "Privacy Policy",
    policyHref: "/privacy",
  },
};

export default companyData;
