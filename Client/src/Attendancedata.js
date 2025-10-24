import { nanoid } from 'nanoid'



function Attendancedata() {
  return [
    {
      id: nanoid(),
      employee: "DilShaad",
      role: "Development",
      department: "Production",
      date: "26 July 2025",
      status: "Work from office",
      checkIn: "08:00",
      checkOut: "05:00",
      workHours: "10h 2m",
    },
    {
      id: nanoid(),
      employee: "Ghazali",
      role: "Senior Executive",
      department: "Sales",
      date: "26 July 2025",
      status: "Absent",
      checkIn: "00:00",
      checkOut: "00:00",
      workHours: "0m",
    },
    {
      id: nanoid(),
      employee: "Hamza",
      role: "Senior Manager",
      department: "Design",
      date: "26 July 2025",
      status: "Late arrival",
      checkIn: "10:30",
      checkOut: "18:00",
      workHours: "8h 30m",
    },
    {
      id: nanoid(),
      employee: "Kinza",
      role: "Senior Manager",
      department: "Marketing",
      date: "26 July 2025",
      status: "Late arrival",
      checkIn: "10:30",
      checkOut: "18:00",
      workHours: "8h 30m",
    },
    {
      id: nanoid(),
      employee: "Shahzaib Umrani",
      role: "Senior Manager",
      department: "Design",
      date: "26 July 2025",
      status: "Late arrival",
      checkIn: "10:30",
      checkOut: "18:00",
      workHours: "8h 30m",
    },
    {
      id: nanoid(),
      employee: "Asim Khan",
      role: "Senior Manager",
      department: "Design",
      date: "26 July 2025",
      status: "Late arrival",
      checkIn: "10:30",
      checkOut: "18:00",
      workHours: "8h 30m",
    },
  ];
}

export default Attendancedata;
