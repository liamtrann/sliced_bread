import React from "react";

const InfoRow: React.FC<{ label: string; value: React.ReactNode }> = ({
  label,
  value,
}) => (
  <p>
    <strong>{label}:</strong> {value}
  </p>
);

export default InfoRow;
