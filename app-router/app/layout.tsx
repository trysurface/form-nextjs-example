import Script from "next/script";
import SurfaceFormScript from "./SurfaceFormScript";
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
      </head>
      <body>
        {children}
        <SurfaceFormScript
          formUrl="REPLACE ME WITH FORM URL" // Replace this with a Surface Form URL
          embedType="popup"
          popupSize="medium"
          buttonClassName="surface-form-button"
        />
      </body>
    </html>
  );
}
