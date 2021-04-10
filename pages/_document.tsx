import { ColorModeScript } from "design-system";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { theme } from "design-system";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
