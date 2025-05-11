"use client";

import StoreProvider from "./store/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default Providers;
