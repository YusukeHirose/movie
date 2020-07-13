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
  contents: [
    {"id": "1", "title": "title", "release_date": "2020-01-01"},
    {"id": "2", "title": "title2", "release_date": "2020-01-02"},
    {"id": "1", "title": "title", "release_date": "2020-01-01"},
    {"id": "2", "title": "title2", "release_date": "2020-01-02"},
    {"id": "1", "title": "title", "release_date": "2020-01-01"},
    {"id": "2", "title": "title2", "release_date": "2020-01-02"},
  ]
};

export default App;
