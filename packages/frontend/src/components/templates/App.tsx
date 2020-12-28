import React from "react";

type Props = {
  value?: string;
};

export const App: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
