import { useEffect, useState } from "react";
import Form from "./Form";
import "./style.css";
import { ImUser } from "react-icons/im";
import {  useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetchData();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("access-token"); 
    navigate("/login"); 
  };

  const fetchData = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const response = await fetch(
        `https://react-interview.crd4lc.easypanel.host/api/course`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result.data.data);
      setData(result.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 via-green-400 to-green-500">
      <h1 className="text-5xl uppercase font-bold text-green-700 text-center py-5">
        Microdeft React Test Md Rasif
      </h1>
      <button
      onClick={handleLogout}
      className="bg-green-600 uppercase font-bold ml-[45%] mb-10 text-white px-4 py-2 rounded hover:bg-green-700 "
    >
      Logout
    </button>
  
      <div className="flex ">
        {/* Form Section */}
        <div className="w-1/2 ">
          <Form />
        </div>
        {/* -------------------------------------- Cart Section */}
        <div className="card-container flex flex-wrap gap-4">
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className="card">
                <div className="card-image relative">
                  <img
                    src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1727429593/samples/smile.jpg"
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="status-badge">{item.badge_text}</div>
                </div>
                <div className="card-content ">
                  <div className="icon-text">
                    <ImUser className="icon" />

                    <span>{item.instructor_name}</span>
                  </div>

                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description ">{item.description}</p>
                  <button className="view-detail ">VIEW DETAIL</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white">No data found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
