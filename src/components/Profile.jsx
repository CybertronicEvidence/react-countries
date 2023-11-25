import { useState, useEffect } from "react";
import { FaPen } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import evidence from "../assets/86728008.png";

const Profile = () => {
  const initialUserData = {
    firstName: "John",
    lastName: "Doe",
    short: "JD",
    email: "john@example.com",
    tel: "+2348095376702",
    // Other user data...
  };

  const [userData, setUserData] = useState({ ...initialUserData });
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    setEditMode(false);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Assuming a successful save, now fetching updated data from the server
    try {
      //   const response = await fetch('your-server-endpoint');
      //   if (!response.ok) {
      //     throw new Error('Network response was not ok');
      //   }
      //   const updatedUserData = await response.json();
      //   setUserData(updatedUserData);
    } catch (error) {
      console.error("Error fetching updated data:", error);
      // Reset the user data to its initial state if the fetch fails
      setUserData({ ...initialUserData });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className="sm:p-16 bg-gray-300">
      <div className="p-4">
        <div className="flex items-center">
          <div className="pb-8">
            <img
              className="rounded-full w-36 sm:w-40 "
              src={evidence}
              alt="evidence"
            />
          </div>
          <div className="pl-4 sm:pl-20 ">
            <p className="uppercase font-semibold pb-2">
              {"Evidence"} {"Adejuwon"}
            </p>
            <p className="pb-6 text-base text-gray-600">Junior Developer</p>
          </div>
        </div>
        <div>
          {editMode ? (
            <div>
              <div
                className="flex justify-center cursor-pointer"
                onClick={handleSave}
              >
                <FaSave />
                <p className="pl-2">Save information</p>
              </div>
              <form className="flex flex-col space-y-4">
                <div className="sm:flex">
                  <div className="flex flex-col sm:space-y-4 sm:pr-36">
                    <label className="mb-1">
                      First Name:
                      <input
                        type="text"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md px-2 py-1"
                      />
                    </label>
                    <label className="mb-1">
                      Last Name:
                      <input
                        type="text"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md px-2 py-1"
                      />
                    </label>
                    <label className="mb-1">
                      Short Name:
                      <input
                        type="text"
                        name="short"
                        value={userData.short}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md px-2 py-1"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col ">
                    <label className="mb-1">
                      Email:
                      <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md px-2 py-1"
                      />
                    </label>
                    <label className="mb-1">
                      Tel:
                      <input
                        type="tel"
                        name="tel"
                        value={userData.tel}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md px-2 py-1"
                      />
                    </label>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <div
                className="flex justify-center cursor-pointer"
                onClick={handleEdit}
              >
                <FaPen />
                <p className="pl-2">Edit information</p>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="sm:flex">
                  <div className="flex flex-col space-y-4 pr-36 ">
                    <p className="mb-1">
                      First name:{" "}
                      <span className="sm:px-2 sm:py-1">
                        {userData.firstName}
                      </span>
                    </p>
                    <p className="mb-1">
                      Last name:{" "}
                      <span className="sm:px-2 sm:py-1">
                        {userData.lastName}
                      </span>
                    </p>
                    <p className="mb-1">
                      Short name:{" "}
                      <span className="sm:px-2 sm:py-1">{userData.short}</span>
                    </p>
                  </div>
                  <div className="pt-4 sm:pt-0 flex flex-col space-y-4">
                    <p className="mb-1">
                      Email:{" "}
                      <span className="sm:px-2 sm:py-1">{userData.email}</span>
                    </p>
                    <p className="mb-1">
                      Tel:{" "}
                      <span className="sm:px-2 sm:py-1">{userData.tel}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
