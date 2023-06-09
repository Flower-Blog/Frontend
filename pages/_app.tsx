import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store";

import Layout from "@/components/layout/Layout";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="bg-threefish-or">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </Provider>
  );
}
