import Header from "./Header";
import Sidebar from "./Sidebar";
import Card from "./Card";
import Graph from "./Graph";

function Dashboard({ data, attendance }) {
  return (
    <div className="App flex bg-gray-100">
      <Sidebar />
      <div className="ml-[20%] w-[80%] flex flex-col mt-[2%]">
        <Header />
        <Card data={data} attendance={attendance} />
        <Graph attendance={attendance} />
      </div>
    </div>
  );
}

export default Dashboard;
