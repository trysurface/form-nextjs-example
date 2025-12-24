import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/gh/trysurface/scripts@latest/surface_tag.min.js"
          data-site-id="SITE_ID" // Replace this with your Site ID
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
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
