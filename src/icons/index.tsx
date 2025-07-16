import type { JSX } from "react";

export const POSIcon = ({
  className = "w-10 h-10",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="6"
      width="20"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <rect x="4" y="8" width="16" height="2" fill="currentColor" />
    <rect x="4" y="12" width="4" height="2" fill="currentColor" />
    <rect x="4" y="14" width="6" height="2" fill="currentColor" />
    <circle cx="16" cy="14" r="2" fill="currentColor" />
  </svg>
);

// Omnicanal Icon
export const OmnichannelIcon = ({
  className = "w-10 h-10",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="3"
      width="20"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <rect x="8" y="21" width="8" height="1" fill="currentColor" />
    <path d="M12 17v4" stroke="currentColor" strokeWidth="2" />
    <rect x="16" y="5" width="4" height="2" fill="currentColor" />
    <rect x="16" y="8" width="4" height="2" fill="currentColor" />
    <rect x="4" y="5" width="10" height="8" fill="currentColor" opacity="0.3" />
    <circle cx="6" cy="19" r="1" fill="currentColor" />
    <circle cx="18" cy="19" r="1" fill="currentColor" />
  </svg>
);

// Microsite Icon
export const MicrositeIcon = ({
  className = "w-10 h-10",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <rect x="3" y="4" width="18" height="4" fill="currentColor" />
    <circle cx="6" cy="6" r="0.5" fill="white" />
    <circle cx="7.5" cy="6" r="0.5" fill="white" />
    <circle cx="9" cy="6" r="0.5" fill="white" />
    <rect x="6" y="11" width="12" height="2" fill="currentColor" />
    <rect x="6" y="14" width="8" height="1" fill="currentColor" />
  </svg>
);

// Inventory Icon
export const InventoryIcon = ({
  className = "w-10 h-10",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="7"
      width="18"
      height="12"
      rx="1"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <rect x="5" y="9" width="4" height="3" fill="currentColor" />
    <rect x="10" y="9" width="4" height="3" fill="currentColor" />
    <rect x="15" y="9" width="4" height="3" fill="currentColor" />
    <rect x="5" y="13" width="4" height="3" fill="currentColor" />
    <rect x="10" y="13" width="4" height="3" fill="currentColor" />
    <path
      d="M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

// Loan/Financing Icon
export const LoanIcon = ({
  className = "w-10 h-10",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="6"
      width="20"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="7"
      cy="12"
      r="2"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path d="M7 10v4M5 12h4" stroke="currentColor" strokeWidth="1.5" />
    <rect x="12" y="9" width="8" height="2" fill="currentColor" />
    <rect x="12" y="13" width="6" height="2" fill="currentColor" />
    <path
      d="M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

// Mobile App Icon
export const MobileIcon = ({
  className = "w-10 h-10",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="6"
      y="2"
      width="12"
      height="20"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <rect x="8" y="6" width="8" height="10" fill="currentColor" opacity="0.3" />
    <rect x="9" y="8" width="6" height="1" fill="currentColor" />
    <rect x="9" y="10" width="4" height="1" fill="currentColor" />
    <rect x="9" y="12" width="5" height="1" fill="currentColor" />
    <circle cx="12" cy="19" r="1" fill="currentColor" />
  </svg>
);

// Analytics Icon
export const AnalyticsIcon = ({
  className = "w-10 h-10",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <rect x="6" y="13" width="2" height="4" fill="currentColor" />
    <rect x="10" y="9" width="2" height="8" fill="currentColor" />
    <rect x="14" y="11" width="2" height="6" fill="currentColor" />
    <rect x="18" y="7" width="2" height="10" fill="currentColor" />
    <path
      d="M7 8L11 6L15 8L19 6"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

// Marketplace Icon
export const MarketplaceIcon = ({
  className = "w-10 h-10",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 8V6a6 6 0 0112 0v2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="4"
      y="8"
      width="16"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="12"
      cy="14"
      r="2"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path d="M12 16v2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="8" y="10" width="8" height="1" fill="currentColor" />
  </svg>
);

// Accounting Icon
export const AccountingIcon = ({
  className = "w-10 h-10",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="3"
      width="16"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <rect x="7" y="7" width="10" height="1" fill="currentColor" />
    <rect x="7" y="9" width="6" height="1" fill="currentColor" />
    <rect x="7" y="11" width="8" height="1" fill="currentColor" />
    <rect x="7" y="13" width="4" height="1" fill="currentColor" />
    <rect x="7" y="15" width="7" height="1" fill="currentColor" />
    <rect x="15" y="13" width="2" height="1" fill="currentColor" />
    <rect x="14" y="9" width="3" height="1" fill="currentColor" />
  </svg>
);

// CRM Icon
export const CRMIcon = ({
  className = "w-10 h-10",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="8"
      r="3"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M12 11c-4 0-7 2-7 5v3h14v-3c0-3-3-5-7-5z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="18" cy="6" r="2" fill="currentColor" />
    <circle cx="6" cy="6" r="2" fill="currentColor" />
    <circle cx="18" cy="18" r="2" fill="currentColor" />
    <circle cx="6" cy="18" r="2" fill="currentColor" />
    <path
      d="M16 6L8 6M16 18L8 18"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.5"
    />
  </svg>
);

// Wallet Icon
export const WalletIcon = ({
  className = "w-10 h-10",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="6"
      width="20"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="16"
      y="10"
      width="4"
      height="4"
      rx="1"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="18" cy="12" r="1" fill="currentColor" />
    <path
      d="M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <rect x="6" y="9" width="4" height="1" fill="currentColor" />
    <rect x="6" y="11" width="6" height="1" fill="currentColor" />
  </svg>
);

// Masspay Icon
export const MasspayIcon = ({
  className = "w-10 h-10",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="2" />
    <circle cx="6" cy="6" r="2" fill="currentColor" />
    <circle cx="18" cy="6" r="2" fill="currentColor" />
    <circle cx="6" cy="18" r="2" fill="currentColor" />
    <circle cx="18" cy="18" r="2" fill="currentColor" />
    <path
      d="M8 8L12 12M16 8L12 12M8 16L12 12M16 16L12 12"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.5"
    />
  </svg>
);
