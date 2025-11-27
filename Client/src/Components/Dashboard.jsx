import Header from "./Header";
import Sidebar from "./Sidebar";
import Card from "./Card";
import Graph from "./Graph";

function Dashboard({ employees, attendance }) {
  return (
    <div className="w-full h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex flex-col ml-[250px] w-[calc(100%-250px)] px-6 py-4">
        <Header />
        <div className="mt-6">
          <Card employees={employees} attendance={attendance} />
        </div>
        <div className="mt-6">
          <Graph attendance={attendance} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
