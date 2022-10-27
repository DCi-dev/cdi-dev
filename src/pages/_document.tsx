import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Logo */}
        <link
          rel="preload"
          href="/fonts/Squartiqa/Squartiqa4FStrike.ttf"
          as="font"
          crossOrigin="anonymous"
        />

        {/* Ubuntu */}
        <link
          rel="preload"
          href="/fonts/Ubuntu/Ubuntu-Regular.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Ubuntu/Ubuntu-Italic.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Ubuntu/Ubuntu-Bold.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Ubuntu/Ubuntu-BoldItalic.ttf"
          as="font"
          crossOrigin="anonymous"
        />

        {/* OpenSans */}
        <link
          rel="preload"
          href="/fonts/OpenSans/OpenSans-Regular.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/OpenSans/OpenSans-Italic.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/OpenSans/OpenSans-Bold.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/OpenSans/OpenSans-BoldItalic.ttf"
          as="font"
          crossOrigin="anonymous"
        />

        {/* Tailwind CSS Typography  */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/@tailwindcss/typography@0.4.x/dist/typography.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
