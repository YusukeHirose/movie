import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Contents from './Contents'

const App = ({contents}) => {
  return (
    <div className="App">
      <Header />
      <Contents contents={contents} />
    </div>
  );
}

App.defaultProps = {
  contents: [],
};

export default App;
