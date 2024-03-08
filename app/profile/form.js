"use client";
import { useState } from "react";

export default function ProfileForm({ userData }) {
  const [profile, setProfile] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    emailAddress: userData.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let inputs = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
    };

    const response = await fetch(`/api/auth/updateProfile`, {
      method: "POST",
      body: JSON.stringify(inputs),
    });

    if (response.ok) {
      console.log("Profile updated successfully");
      // Optionally, handle any actions post-update (e.g., display a success message)
    } else {
      console.error("Failed to update profile");
      // Optionally, handle any actions on failure (e.g., display an error message)
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-md m-auto bg-white shadow-lg rounded-lg p-6 space-y-4 border border-orange-200"
      >
        <h1 className="text-2xl font-bold text-orange-600 mb-4">
          Profile Page
        </h1>

        <div>
          <label className="block text-orange-600">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-orange-600">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-orange-600">Email Address:</label>
          <input
            type="text"
            name="email"
            value={profile.emailAddress}
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
