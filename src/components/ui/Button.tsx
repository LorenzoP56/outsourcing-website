import {Link} from "@/i18n/navigation";
import { COLORS } from "@/lib/constants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
}

export default function Button({ children, href, className = "", onClick, style, type, ...props }: ButtonProps) {
  const baseClasses = "px-6 py-4 text-lg font-bold rounded-[16px] flex items-center justify-center text-center text-[18px] leading-[18px] min-w-[160px]";
  const combinedClasses = `${baseClasses} ${className}`.trim();
  const buttonStyle = {
    background: COLORS.PRIMARY,
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
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type || "button"}
      className={combinedClasses}
      style={buttonStyle}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

