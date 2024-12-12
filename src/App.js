import React from 'react'
import Home from './components/Home';
import DataProvider from './context/DataProvider';

const App = () => {
  return (
  <div>
  <DataProvider>
  <Home/>
  </DataProvider>
  
  </div>
  )
}

export default App