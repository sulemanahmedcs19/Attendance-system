import React from 'react';
import Header from './Components/Header';
import Sidebar  from './Components/Sidebar';
import Card from './Components/Card';




function App() {
  return (
    <>
      <div className="App flex bg-gray-100">

        <Sidebar />
        <div className="ml-[20%] w-[80%] flex flex-col mt-[2%]">
          <Header />
           <Card />
        </div>

      </div>
    </>
  );
}

export default App;
