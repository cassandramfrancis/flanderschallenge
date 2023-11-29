'use client';

import type React from "react";
import { defaultStore, globalStoreContext } from '../store'

export function Providers({ children }: { children: React.ReactNode }) {
  return <>
    <globalStoreContext.Provider value={defaultStore}>
      {children}
    </globalStoreContext.Provider>
  </>
}