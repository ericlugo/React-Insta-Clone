import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import SearchBar from './components/SearchBar/SearchBar';
import './App.sass';

library.add(fab, far);

function App() {
  return (
    <div className='App'>
      <SearchBar />
    </div>
  );
}

export default App;
