import Header from './Header';
<<<<<<< HEAD:src/Components/Dashboard.jsx
import Sidebar  from './Sidebar';
import Card from './Card';
import Graph from './Graph';

function Dashboard() { 
    return (
      
        <div className="App flex bg-gray-100">

        <Sidebar />
        <div className="ml-[20%] w-[80%] flex flex-col mt-[2%]">
          <Header />
           <Card />
           <Graph />
        </div>

      </div>
    );
}

export default Dashboard;
=======
import Sidebar from './Sidebar';
import Card from './Card';
import Graph from './Graph';
import React from 'react';  

function Dashboard() 
{
    return(


        <>
        {/* <div className="App flex bg-gray-100"> */}
        <Sidebar />
        <div className="ml-[20%] w-[80%] flex flex-col mt-[2%]">
          <Header />
            <Card />
            <Graph />
          </div>
      {/* </div> */}
        
        
        </>
    )

  }

  export default Dashboard;
>>>>>>> 3a79fa249f534802c090aabd145bcaa6921a3558:Client/src/Components/Dashboard.jsx
