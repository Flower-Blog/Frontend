import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store";

import Navbar from "@/components/Navbar";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="bg-threefish-or">
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
