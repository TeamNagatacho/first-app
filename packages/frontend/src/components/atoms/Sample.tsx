import React from "react";
import "@styles/components/atoms/Sample.module.scss";

type Props = {
  value?: string;
};

export const Sample: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
