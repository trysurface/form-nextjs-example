import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          src="https://cdn.jsdelivr.net/gh/trysurface/scripts@latest/surface_tag.min.js"
          data-site-id="SITE_ID" // Replace this with your site id
          strategy="beforeInteractive"
        />
        <Script
          strategy="afterInteractive"
          id="surface-form-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const surface_src = "REPLACE ME WITH FORM URL"
                const surface_embed_type = "popup"
                const target_element_class = "surface-form-button"
                const c = new SurfaceEmbed(surface_src, surface_embed_type, target_element_class)
              })();
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
