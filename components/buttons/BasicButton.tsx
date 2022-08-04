import React from "react";

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "LARGE",
}

type Props = {
  isOutlined?: boolean;
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
};

export const BasicButton: React.FC<Props> = ({
  isOutlined = false,
  size = ButtonSize.MEDIUM,
  children,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`
        rounded
        ${size === ButtonSize.MEDIUM ? "px-5 py-1" : "px-3 py-1 text-sm"}
        ${
          isOutlined
            ? "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            : "border-none bg-blue-600 text-white hover:bg-blue-500"
        }
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
