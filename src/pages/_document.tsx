import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script type='text/javascript' src='/scripts/admin-redirect.js' />
        </body>
      </Html>
    )
  }
}
