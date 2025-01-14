import { PropsWithChildren } from "react";

interface IconButtonProps extends PropsWithChildren {
  onClick: () => void;
  ariaLabel: string;
}

export function IconButton({ onClick, children, ariaLabel }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "5px"
      }}
    >
      {children}
    </button>
  );
}
