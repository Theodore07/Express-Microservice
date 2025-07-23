import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const checkRole = async () => {
    try {
      const response = await axios.get("/api/user/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const user = response.data.data;
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
      setRole(user.role);
    } catch (error) {
      console.error("Failed to fetch role", error);
    }
  };

  useEffect(() => {
    checkRole();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <div className="flex text-xl justify-around bg-gray-500 text-white min-h-fit py-5">
        <div>
          <button onClick={() => navigate('/home')} className="hover:cursor-pointer">Home</button>
        </div>
        <div>
          <button onClick={() => navigate('/attendance')} className="hover:cursor-pointer">Check In</button>
        </div>
        {role == "admin" ? 
        <div>
          <button onClick={() => navigate('/dashboard')} className="hover:cursor-pointer">Dashboard</button>
        </div> : null}
        <div>
          <button onClick={handleLogout} className="hover:cursor-pointer">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
