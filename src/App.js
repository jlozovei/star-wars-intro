import React, { Suspense } from 'react';

import Routes from 'routes';
import Loader from 'components/Loader';

const App = () => {
  return (
    <Suspense fallback={<Loader global={true} />}>
      <Routes />
    </Suspense>
  );
};

export default App;
