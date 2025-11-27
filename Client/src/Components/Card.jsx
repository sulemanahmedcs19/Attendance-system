import React, { useEffect, useState } from "react";
import sun from "../assets/card/sun.png";
import emp from "../assets/card/employe.png";
import dateIcon from "../assets/card/date.png";
import timeo from "../assets/card/time-out.png";
import earlydeparture from "../assets/card/earlydeparture.png";
import weather from "../assets/card/weather.png";
import Graph from "./Graph";

function Card({ data, attendance }) {
  // Ensure arrays exist
  const totalEmployees = Array.isArray(data) ? data.length : 0;
  const presentCount = Array.isArray(attendance)
    ? attendance.filter((a) => a.Status === "Present").length
    : 0;
  const absentCount = Array.isArray(attendance)
    ? attendance.filter((a) => a.Status === "Absent").length
    : 0;
  const checkInCount = Array.isArray(attendance)
    ? attendance.filter((a) => a.CheckIn).length
    : 0;
  const checkOutCount = Array.isArray(attendance)
    ? attendance.filter((a) => a.CheckOut).length
    : 0;

  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  // Real-time clock
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setCurrentDate(
        now.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex gap-4">
        {/* ===== LEFT SIDE LARGE CARD ===== */}
        <div className="bg-white shadow-md rounded-lg p-4 w-[34%] h-[400px] flex items-center justify-center text-lg font-bold">
          <div>
            <div className="flex items-center mb-2">
              <img src={sun} alt="sun-icon" className="w-9 h-9 mr-4" />
              <p className="text-2xl text-[#252C58]">{currentTime}</p>
            </div>

            <p className="text-lg ml-12 mb-4 text-[#252C58]">
              Realtime Insight
            </p>
            <p className="text-lg ml-12 text-[#252C58]">Today: {currentDate}</p>

            <button className="mt-6 p-2 bg-[#b52fc8] text-[#ffffff] rounded-md hover:bg-[#9e24a3]">
              Advanced Configuration
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 w-2/3">
          {/* Total Employees */}
          <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-16">
                <p className="text-4xl font-bold mr-2">{totalEmployees}</p>
                <img src={emp} className="w-5 h-5" />
              </div>
              <p className="text-lg text-[#252C58] mt-2 p-3">Total Employees</p>
              <p className="text-[#252C58]">
                + {totalEmployees} new employees added!
              </p>
            </div>
          </div>

          {/* Present */}
          <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-16">
                <p className="text-4xl font-bold">{presentCount}</p>
                <img src={dateIcon} className="w-5 h-5" />
              </div>
              <p className="text-lg text-[#252C58] mt-2 p-3">Present</p>
              <p className="text-[#252C58] mt-1">Today Present</p>
            </div>
          </div>

          {/* Absent */}
          <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-16">
                <p className="text-4xl font-bold">{absentCount}</p>
                <img src={weather} className="w-5 h-5" />
              </div>
              <p className="text-lg text-[#252C58] mt-2 p-3">Absent</p>
              <p className="text-[#252C58] mt-1">Today Absent</p>
            </div>
          </div>

          {/* Check-in */}
          <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-16">
                <p className="text-4xl font-bold">{checkInCount}</p>
                <img src={dateIcon} className="w-5 h-5" />
              </div>
              <p className="text-lg text-[#252C58] mt-2 p-3">Check-in</p>
            </div>
          </div>

          {/* Check-out */}
          <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-16">
                <p className="text-4xl font-bold">{checkOutCount}</p>
                <img src={timeo} className="w-5 h-5" />
              </div>
              <p className="text-lg text-[#252C58] mt-2 p-3">Check-out</p>
            </div>
          </div>
        </div>
      </div>

      {/* Graph Section */}
      <div className="flex gap-4">
        <div className="bg-white shadow-md rounded-lg p-4 w-[60%] h-[400px] flex items-center justify-center text-lg font-bold">
          <Graph />
        </div>

        <div className="flex flex-col gap-4 w-[40%]">
          {/* Late Arrival */}
          <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold">03</p>
              <p className="text-lg text-[#252C58]">Late Arrival</p>
              <p className="text-[#252C58] mt-2">+3% Increase than yesterday</p>
            </div>
          </div>

          {/* Early Departure */}
          <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold">01</p>
              <p className="text-lg text-[#252C58]">Early Departures</p>
              <p className="text-[#252C58] mt-2">-10% Less than yesterday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
