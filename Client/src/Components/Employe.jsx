import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function Employe() {
  return (
  <>
   
   <Header/>
   <Sidebar />
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-30">
      <form>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">CNIC / NIC Number</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Gender</label>
            <select
              className="mt-1 p-2 w-full border border-purple-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white text-gray-900"
              defaultValue=""
            >
              <option  >
                Select Gender
              </option>
              <option >Male</option>
              <option >Female</option>
              <option >Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Upload CNIC Photo</label>
            <select
              className="mt-1 p-2 w-full border border-purple-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white text-gray-900"
              defaultValue=""
            >
              <option >
                Select Side
              </option>
              <option>Front</option>
              <option>Back</option>
            </select>
          </div>
        </div>

       
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Home Address</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">City</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Country</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Personal Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Emergency Contact</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Roles & Work Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Job Title</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Reporting Manager</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date of Joining</label>
            <input
              type="date"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Department</label>
            <select
              className="mt-1 p-2 w-full border border-purple-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white text-gray-900"
              defaultValue=""
            >
              <option disabled value="">
                Select Department
              </option>
              <option>Developer</option>
              <option>Designer</option>
              <option>Sales</option>
              <option>Marketing</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Work Type</label>
            <select
              className="mt-1 p-2 w-full border border-purple-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white text-gray-900"
              defaultValue=""
            >
              <option disabled value="">
                Select Work Type
              </option>
              <option>Onsite</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default Employe;
