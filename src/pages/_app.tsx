import '@/styles/globals.css';
import type { AppProps } from 'next/app';
/**
 * * Use fontsource for any custom google fonts. It improves the performance and takes care of preloading.
 * * Check the fontsource documentation if there is a variable version available use it.
 * * https://fontsource.org/docs/introduction
 */
import '@fontsource/inter/variable.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
