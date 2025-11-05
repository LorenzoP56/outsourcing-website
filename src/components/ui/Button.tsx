import Link from "next/link";
import { COLORS } from "@/lib/constants";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function Button({ children, href, className = "", onClick, style }: ButtonProps) {
  const baseClasses = "px-8 py-4 text-lg font-bold rounded-[24px] inline-block";
  const combinedClasses = `${baseClasses} ${className}`.trim();
  const buttonStyle = {
    backgroundColor: COLORS.PRIMARY,
    color: COLORS.TEXT_WHITE,
    fontFamily: 'var(--font-jost)',
    ...style
  };

  if (href) {
    return (
      <Link 
        href={href} 
        className={combinedClasses}
        style={buttonStyle}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={combinedClasses}
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

