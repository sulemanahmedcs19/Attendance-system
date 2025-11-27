import React, { useState, useEffect } from "react";
import sun from "../assets/card/sun.png";
import date from "../assets/card/date.png";
import emp from "../assets/card/employe.png";
import earlydeparture from "../assets/card/earlydeparture.png";
import weather from "../assets/card/weather.png";
import timeo from "../assets/card/time-out.png";
import Graph from "./Graph";

function Card({ data, attendance }) {
  const te = Array.isArray(data) ? data.length : 0;

  // === REALTIME TIME & DATE STATES ===
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  // === USE EFFECT FOR REALTIME CLOCK ===
  useEffect(() => {
    const update = () => {
      const now = new Date();

      // Time
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );

      // Date
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
    <>
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
              <p className="text-lg ml-12 text-[#252C58]">
                Today: {currentDate}
              </p>

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
                  <p className="text-4xl font-bold mr-2">{te}</p>
                  <img src={emp} className="w-5 h-5" />
                </div>
                <p className="text-lg text-[#252C58] mt-2 p-3">
                  Total Employees
                </p>
                <p className="text-[#252C58]">+ {te} new employees added!</p>
              </div>
            </div>

            {/* On Time */}
            <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <p className="text-4xl font-bold">08</p>
                  <img src={date} className="w-5 h-5 ml-20" />
                </div>
                <p className="text-lg text-[#252C58] p-3">On Time</p>
                <p className="text-[#252C58]">-10% Less than yesterday</p>
              </div>
            </div>

            {/* Absent */}
            <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <p className="text-4xl font-bold"></p>
                  <img src={weather} className="w-5 h-5 ml-20" />
                </div>
                <p className="text-lg text-[#252C58] p-3">Absent</p>
                <p className="text-[#252C58]">+3% Increase than yesterday</p>
              </div>
            </div>

            {/* Late Arrival */}
            <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <p className="text-4xl font-bold">03</p>
                  <img src={timeo} className="w-5 h-5 ml-20" />
                </div>
                <p className="text-lg text-[#252C58] p-3">Late Arrival</p>
                <p className="text-[#252C58] mt-2">
                  +3% Increase than yesterday
                </p>
              </div>
            </div>

            {/* Early Departures */}
            <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <p className="text-4xl font-bold">01</p>
                  <img src={earlydeparture} className="w-5 h-5 ml-20" />
                </div>
                <p className="text-lg text-[#252C58] p-3">Early Departures</p>
                <p className="text-[#252C58] mt-2">-10% Less than yesterday</p>
              </div>
            </div>

            {/* Present */}
            <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <p className="text-4xl font-bold"></p>
                  <img src={date} className="w-5 h-5 ml-20" />
                </div>
                <p className="text-lg text-[#252C58] p-3">Present</p>
                <p className="text-[#252C58] mt-2">
                  2% Increase than yesterday
                </p>
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
            <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold"></p>
                <p className="text-lg text-[#252C58]">Check-in</p>
                <p className="text-[#252C58] mt-2">
                  +3% Increase than yesterday
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold">02</p>
                <p className="text-lg text-[#252C58]">Check-out</p>
                <p className="text-[#252C58] mt-2">
                  2% Increase than yesterday
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
