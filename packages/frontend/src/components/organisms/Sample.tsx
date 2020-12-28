import React from "react";

type Props = {
  value?: string;
};

export const Sample: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
