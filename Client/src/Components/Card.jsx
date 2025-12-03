import React, { useEffect, useState } from "react";
import sun from "../assets/card/sun.png";
import Graph from "./Graph";
import employee from "../assets/card/employe.png";
import absentIcon from "../assets/card/absent.png";
import presentIcon from "../assets/card/pressent.png";

function Card() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const [totalEmployees, setTotalEmployees] = useState(0);
  const [attendanceList, setAttendanceList] = useState([]);

  const [present, setPresent] = useState(0);
  const [absent, setAbsent] = useState(0);
  const [checkInCount, setCheckInCount] = useState(0);
  const [checkOutCount, setCheckOutCount] = useState(0);

  const shiftStartHour = 20;
  const shiftEndHour = 9;

  // REAL-TIME CLOCK
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: true }));
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

  // TOTAL EMPLOYEES
  useEffect(() => {
    fetch(
      "https://attendance-system-backend-n5c2.onrender.com/api/employee/getAllEmployees"
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setTotalEmployees(data.length);
      })
      .catch(console.log);
  }, []);

  //FETCH ATTENDANCE
  useEffect(() => {
    fetch(
      "https://attendance-system-backend-n5c2.onrender.com/api/attendance/getAllAttendance"
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.attendance)) setAttendanceList(data.attendance);
      })
      .catch(console.log);
  }, []);

  //ATTENDANCE LOGIC
  useEffect(() => {
    if (!attendanceList.length) {
      setPresent(0);
      setAbsent(totalEmployees);
      setCheckInCount(0);
      setCheckOutCount(0);
      return;
    }

    const now = new Date();

    let shiftStart = new Date(now);
    shiftStart.setHours(shiftStartHour, 0, 0, 0);

    let shiftEnd = new Date(now);
    shiftEnd.setHours(shiftEndHour, 0, 0, 0);

    if (shiftStartHour > shiftEndHour) {
      if (now.getHours() < shiftEndHour) {
        shiftStart.setDate(shiftStart.getDate() - 1);
      } else {
        shiftEnd.setDate(shiftEnd.getDate() + 1);
      }
    }

    const shiftActive = now >= shiftStart && now <= shiftEnd;

    if (!shiftActive) {
      setPresent(0);
      setAbsent(totalEmployees);
      setCheckInCount(0);
      setCheckOutCount(0);
      return;
    }

    let presentCount = 0;
    let checkIn = 0;
    let checkOut = 0;

    attendanceList.forEach((a) => {
      if (!a.CheckIn) return;

      const checkInDate = new Date(a.CheckIn);
      const checkOutDate = a.CheckOut ? new Date(a.CheckOut) : null;

      const inShift =
        (checkInDate >= shiftStart && checkInDate <= shiftEnd) ||
        (checkOutDate &&
          checkOutDate >= shiftStart &&
          checkOutDate <= shiftEnd);

      if (inShift) {
        presentCount += 1;
        checkIn += 1;
        if (checkOutDate) checkOut += 1;
      }
    });

    setPresent(presentCount);
    setCheckInCount(checkIn);
    setCheckOutCount(checkOut);
    setAbsent(totalEmployees - presentCount);
  }, [attendanceList, totalEmployees]);

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex gap-4">
        {/* LEFT CARD */}
        <div className="bg-white shadow-md rounded-lg p-4 w-[34%] h-[400px] flex items-center justify-center">
          <div>
            <div className="flex items-center mb-2">
              <img src={sun} className="w-9 h-9 mr-4" />
              <p className="text-2xl text-[#252C58]">{currentTime}</p>
            </div>
            <p className="text-lg ml-12 mb-4 text-[#252C58]">
              Realtime Insight
            </p>
            <p className="text-lg ml-12 text-[#252C58]">Today: {currentDate}</p>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-3 gap-4 w-2/3">
          <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center">
            <div className="flex items-center gap-4">
              <img src={employee} className="w-10 h-10" />
              <div>
                <p className="text-4xl font-bold">{totalEmployees}</p>
                <p className="text-lg text-[#252C58] mt-2">Total Employees</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center">
            <div className="flex items-center gap-4">
              <img src={presentIcon} className="w-10 h-10" />
              <div>
                <p className="text-4xl font-bold">{present}</p>
                <p className="text-lg text-[#252C58] mt-2">Present</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center">
            <div className="flex items-center gap-4">
              <img src={absentIcon} className="w-10 h-10" />
              <div>
                <p className="text-4xl font-bold">{absent}</p>
                <p className="text-lg text-[#252C58] mt-2">Absent</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center">
            <div className="flex items-center gap-4">
              <img src={presentIcon} className="w-10 h-10" />
              <div>
                <p className="text-4xl font-bold">{checkInCount}</p>
                <p className="text-lg text-[#252C58] mt-2">Check-in</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center">
            <div className="flex items-center gap-4">
              <img src={presentIcon} className="w-10 h-10" />
              <div>
                <p className="text-4xl font-bold">{checkOutCount}</p>
                <p className="text-lg text-[#252C58] mt-2">Check-out</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="bg-white shadow-md rounded-lg p-4 w-[60%] h-[400px]">
          <Graph />
        </div>
      </div>
    </div>
  );
}

export default Card;
