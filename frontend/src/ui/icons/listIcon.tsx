import { ViewIconProps } from "./types";

export const ListIcon = ({ isActive }: ViewIconProps) => {
  const fillColor = isActive ? "#000000" : "#4d5656";
  return (
    <svg
      enable-background="new 0 0 32 32"
      height="48px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 32 32"
      width="32px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Layer_3">
        <g>
          <rect fill={fillColor} height="6" width="6" y="10" />
          <rect fill={fillColor} height="6" width="6" y="19.917" />
          <rect fill={fillColor} height="6" width="6" y="30.084" />
          <rect fill={fillColor} height="6" width="38" x="10" y="10" />
          <rect fill={fillColor} height="6" width="38" x="10" y="19.917" />
          <rect fill={fillColor} height="6" width="38" x="10" y="30.084" />
        </g>
      </g>
    </svg>
  );
};
