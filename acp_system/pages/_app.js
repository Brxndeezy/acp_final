import "../styles/globals.css";
import "../styles/form.css";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return <Component {...pageProps} />;
}
