import "@/styles/globals.css";
// import ThemeProvider from "./components/ThemeProvider";
export default function App({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
