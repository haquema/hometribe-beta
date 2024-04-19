"use client";
import { useState } from "react";

export default function AddChildrenForm({ parentId }) {
  const [child, setChild] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: null,
  });

  // console.log("profile form.js userData", parentId);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChild({ ...child, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let inputs = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      gender: formData.get("gender"),
      age: formData.get("age"),
      parentId: parentId,
    };
    console.log('this is the inputs being sent to api', inputs);

    const response = await fetch(`/api/addChild`, {
      method: "POST",
      body: JSON.stringify(inputs),
    });

    if (response.message == 'success') {
      console.log("Child added successfully");
      // Optionally, handle any actions post-update (e.g., display a success message)
    } else {
      console.error("Failed to add child");
      // Optionally, handle any actions on failure (e.g., display an error message)
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-md m-auto bg-white shadow-lg rounded-lg p-6 space-y-4 border border-orange-200"
      >
        <h1 className="text-2xl font-bold text-orange-600 mb-4">
          Add children
        </h1>

        <div>
          <label className="block text-orange-600">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={child.firstName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-orange-600">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={child.lastName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-orange-600">Gender:</label>
          <select name="gender" id="gender" type="text">
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
          {/* <input
            type="text"
            name="gender"
            value={child.gender}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          /> */}
        </div>
        <div>
          <label className="block text-orange-600">Age:</label>
          <input
            type="number"
            name="age"
            value={child.age}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4border bg-gradient-to-r from-red-500 via-red-600 to-red-500 rounded-md text-white w-full py-2 mt-6 mb-12 shadow h-10"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
} 