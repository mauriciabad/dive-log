import { get, set, del } from "idb-keyval";
import type { PersistedClient, Persister } from '@tanstack/react-query-persist-client';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { QueryClient } from "@tanstack/react-query";
import type { ReactNode, FC } from "react";
import React from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
})

const persister = createIDBPersister()

/**
 * Creates an Indexed DB persister
 * @see https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
 */
function createIDBPersister(idbValidKey: IDBValidKey = "reactQuery") {
  return {
    persistClient: async (client: PersistedClient) => {
      set(idbValidKey, client);
    },
    restoreClient: async () => {
      return await get<PersistedClient>(idbValidKey);
    },
    removeClient: async () => {
      await del(idbValidKey);
    },
  } as Persister;
}

const CustomPersistQueryClientProvider: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  return <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
  >
    {children}
  </ PersistQueryClientProvider>
}

export default CustomPersistQueryClientProvider