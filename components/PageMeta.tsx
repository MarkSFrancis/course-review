import { FC } from "react";
import Head from "next/head";

export const PageMeta: FC<{ title?: string }> = (props) => {
  const title = `${props.title ? `${props.title} - ` : ""}Course Review`;

  return (
    <Head>
      <title>{title}</title>
      {props.children}
    </Head>
  );
};
