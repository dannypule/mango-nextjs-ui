import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <title>Danny Pule - Javascript Engineer</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <link rel="icon" type="image/x-icon" href="favicon.ico"> */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.4.0/gridlex.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Arvo:400,700"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
