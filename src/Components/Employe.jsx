import React from 'react';

const UserProfileForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <form>
        {/* Basic Information Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input 
              type="text" 
              value="Asif Khan" 
              disabled
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Date of Birth</label>
            <input 
              type="date" 
              value="2002-04-14" 
              disabled
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">CNIC Number</label>
            <input 
              type="text" 
              value="3320-21388-7869" 
              disabled
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Gender</label>
            <select 
              value="Male" 
              disabled
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Contact Details Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700">Home Address</label>
            <input 
              type="text" 
              value="Plot #1-K/4, 19-Shahab Market Nazimabad" 
              disabled
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">City</label>
            <input 
              type="text" 
              value="Karachi" 
              disabled
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Country</label>
            <input 
              type="text" 
              value="Pakistan" 
              disabled
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Personal Email</label>
            <input 
              type="email" 
              value="asifalpha@gmail.com" 
              disabled
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Emergency Contact</label>
            <input 
              type="text" 
              value="033-8021-3984" 
              disabled
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Roles & Work Details Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Roles & Work Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700">Job Title</label>
            <input 
              type="text" 
              value="Senior Graphic Designer" 
              disabled
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Reporting Manager</label>
            <input 
              type="text" 
              value="Salman Zia" 
              disabled
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Date of Joining</label>
            <input 
              type="date" 
              value="2025-08-13" 
              disabled
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Department</label>
            <input 
              type="text" 
              value="Marketing" 
              disabled
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Work Type</label>
            <select 
              value="Onsite" 
              disabled
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            >
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserProfileForm;
