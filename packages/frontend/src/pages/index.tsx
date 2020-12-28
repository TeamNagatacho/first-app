import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { App } from "@components/templates/App";

type Props = {
  sampleValue?: string;
  host: string;
};

const RootPage: NextPage<Props> = (props: Props) => (
  <App>
    <Link href="/404">
      <a>404へ</a>
    </Link>
    <div>
      {props.sampleValue}
      {props.host}
    </div>
  </App>
);

export default RootPage;
