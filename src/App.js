import React from 'react';
import Header from './component/Header';
import Fotter from './component/Fotter';
import AddTask from './component/AddTask';
const App = () => {
  return (
    <div className='wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex-col py-10'>
    <Header/>
    <AddTask/>
    <Fotter/>
    </div>
  );
};

export default App;
