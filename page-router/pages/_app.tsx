import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SurfaceFormScript from "./SurfaceFormScript";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SurfaceFormScript
        formUrl="REPLACE ME WITH FORM URL" // Replace this with a Surface Form URL
        embedType="popup"
        popupSize="medium"
        buttonClassName="surface-form-button"
      />
    </>
  );
}
