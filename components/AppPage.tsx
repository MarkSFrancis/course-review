import { FC } from "react";
import Head from "next/head";

export const PageMeta: FC<{ title?: string }> = (props) => {
  const title = `Course Review${props.title ? ` | ${props.title}` : ""}`;

  return (
    <Head>
      <title>{title}</title>
      {props.children}
    </Head>
  );
};
