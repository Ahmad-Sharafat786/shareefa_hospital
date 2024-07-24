// App.jsx

import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from './Navigation/RouterConfig';

import DynamicFavicon from './components/atoms/DynamicFavicon';
import { LoaderPageWithoutBG } from './components/atoms/Loader';


function App() {
  return (
    <Suspense fallback={<LoaderPageWithoutBG />}>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
      <DynamicFavicon color="#FF6060" />
    </Suspense>
  );
}

export default App;
