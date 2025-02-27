import React from "react";

interface StyledTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function StyledText({
  children,
  className = "",
}: StyledTextProps) {
  return (
    <p
      className={`amatic-sc-bold  text-4xl md:text-6xl text-gray/90 leading-relaxed tracking-wide ${className}`}
    >
      {children}
    </p>
  );
}
