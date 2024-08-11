'use client'

import Loader from "@/components/loder";
import { ClientSideSuspense, LiveblocksProvider } from "@liveblocks/react/suspense";
import { ReactNode } from "react";

const Provider = ({children}: {children: ReactNode}) => {
  return ( 
    <LiveblocksProvider 
      authEndpoint='/api/liveblocks-auth'
      resolveUsers={async ({userIds}) => {
        //const users = await getClerkUsers()

        return undefined
      }}
    >
        <ClientSideSuspense fallback={<Loader />}>
          {children}
        </ClientSideSuspense>
    </LiveblocksProvider>
   );
}
 
export default Provider;