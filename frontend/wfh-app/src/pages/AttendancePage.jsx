import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const AttendancePage = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const checkInUser = async () => {
    const payload = {
      id: user.id,
      timestamp: new Date(),
    };
    try {
      const response = await axios.post("/api/user/checkin", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      alert(response.data.message);
      setIsCheckedIn(true)
    } catch (error) {
      console.log("Failed checking in: ", error);
      alert("Failed to check in");
    }
  };
  const checkOutUser = async () => {
    const payload = {
      id: user.id,
      timestamp: new Date(),
    };
    try {
      const response = await axios.post("/api/user/checkout", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      alert(response.data.message);
      setIsCheckedIn(false)
    } catch (error) {
      console.log("Failed checking out: ", error);
      alert("Failed to check out");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-96 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">
          Don't Forget to check in and check out daily
        </h1>
        <div className="flex gap-4 py-10">
          <button
            className="hover:cursor-pointer w-52 p-3 rounded-2xl bg-green-500 text-xl text-white shadow-xl"
            onClick={checkInUser}
          >
            Check In
          </button>
          <button
            className="hover:cursor-pointer w-52 p-3 rounded-2xl bg-red-500 text-xl text-white shadow-xl"
            onClick={checkOutUser}
          >
            Check Out
          </button>
        </div>
        <div>
             {isCheckedIn == true ?  <h2 className="text-2xl font-semibold">You already checked in</h2> : <h2 className="text-2xl font-semibold">You already checked out</h2> }
         
        </div>
      </div>
    </>
  );
};

export default AttendancePage;
