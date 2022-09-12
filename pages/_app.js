import * as React from 'react';

// Global styles
import '../sass/style.scss';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
