import React from 'react';
import { Link } from 'react-router-dom';

function Employe() {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <form>
       
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Basic Information</h1>
        <div className="flex flex-wrap gap-6 mb-6">
          <div className="w-85 ">
            <label className=" text-gray-700">Full Name</label>
            <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
          </div>
          <div className="w-85 ">
            <label className=" text-gray-700">Date of Birth</label>
            <input
              type="date" className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
          </div>

          <div className="w-85">
            <label className=" text-gray-700">CNIC Number</label>
            <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
          </div>
          <div className="w-85">
            <label className=" text-gray-700">Gender</label>
            <select className="mt-1 p-2 w-full border border-gray-300 rounded-md">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

            <div className="w-85">
            <label className=" text-gray-700">Upload CNIC Photo</label>
            <select className="mt-1 p-2 w-full border border-gray-300 rounded-md">
              <option value="Male">Front</option>
              <option value="Female">Bck</option>
              
            </select>
          </div>


        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Details</h2>
        <div className="flex flex-wrap gap-6 mb-6">
          <div className="w-85">
            <label className=" text-gray-700">Home Address</label>
            <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
          </div>
          <div className="w-85">
            <label className=" text-gray-700">City</label>
            <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
          
          </div>
          <div className="w-85">
            <label className=" text-gray-700">Country</label>
            <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
            
          </div>
          <div className="w-85">
            <label className=" text-gray-700">Personal Email</label>
            <input type="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
          </div>
          <div className="w-85">
            <label className=" text-gray-700">Emergency Contact</label>
            <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
          </div>
        </div>

       
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Roles & Work Details</h2>
        <div className="flex flex-wrap gap-6 mb-6">
          <div className="w-85">
            <label className=" text-gray-700">Job Title</label>
            <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
          </div>
          <div className="w-85">
            <label className=" text-gray-700">Reporting Manager</label>
            <input
              type="text"className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
          </div>
          <div className="w-85">
            <label className=" text-gray-700">Date of Joining</label>
            <input
              type="date" className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
          </div>
          <div className="w-85">
            <label className=" text-gray-700">Department</label>
            <input
              type="text"className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
          </div>
          <div className="w-85">
            <label className=" text-gray-700">Work Type</label>
            <select className="mt-1 p-2 w-full border border-gray-300 rounded-md">
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Employe;
