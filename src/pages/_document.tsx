import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from "next/document";

import { i18n } from "next-i18next";

export default class MyDocument extends Document<DocumentInitialProps> {
  render() {
    return (
      <Html lang={i18n?.language}>
        <Head />
        <body className="min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
