import Header from "./Header";
import Sidebar from "./Sidebar";
import Card from "./Card";
import Graph from "./Graph";

function Dashboard({ data, attendance }) {
  return (
    <div className="w-full h-screen bg-gray-100 flex">
      {/* FIXED SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-col ml-[250px] w-[calc(100%-250px)] px-6 py-4">
        {/* HEADER FULL WIDTH */}
        <Header />

        {/* SPACE BELOW HEADER */}
        <div className="mt-6">
          <Card data={data} attendance={attendance} />
        </div>

        {/* GRAPH SECTION */}
        <div className="mt-6">
          <Graph attendance={attendance} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
