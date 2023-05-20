import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "store";

import Navbar from "@/components/Navbar";

import ErrorBoundary from "./ErrorBoundary";
declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const PageComponent = Component as React.ComponentType<any>;
  console.log("123123");
  console.log(`Rendering page: ${PageComponent.displayName || PageComponent.name}`);
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <div className="bg-threefish-or">
            <Navbar rootClassName="navbar-root-class-name"></Navbar>
            <Component {...pageProps} />
          </div>
        </Provider>
      </Suspense>
    </ErrorBoundary>
  );
}
