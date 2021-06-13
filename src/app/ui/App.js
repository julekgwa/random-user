import React from 'react';

import {
  GlobalStyles
} from 'app/core/styles/globalStyle';

import {
  Home
} from 'app/ui/home/home';

function App() {

  return (<React.Fragment>
    <GlobalStyles />
    <Home />
  </React.Fragment>);

}

// eslint-disable-next-line import/no-default-export
export default App;
