import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <Script
          src="https://cdn.jsdelivr.net/gh/trysurface/scripts@latest/surface_tag.min.js"
          data-site-id="SITE_ID" // Replace this with your site id
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
