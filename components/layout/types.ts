import React from "react";

export type HeaderProps = {
  search?: string;
  cate?: string;
  query?: string;
} & React.HTMLAttributes<HTMLDivElement>;
