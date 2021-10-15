import React from 'react';
import { AppLoader } from './AppLoader';

import useCachedResources from './hooks/useCachedResources';

export default function App() {
  const isLoadingComplete = useCachedResources();
  // const isLoggedIn = useLoginProvider();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppLoader isLoggedIn={true} />
    );
  }
}
