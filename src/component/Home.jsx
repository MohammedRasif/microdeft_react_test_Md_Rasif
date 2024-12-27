import { useEffect, useState } from "react";
import Form from "./Form";
import "./style.css";

const Home = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {

    fetchData();
  }, []);
  const fetchData = async () => {
    const token = sessionStorage.getItem('token')
    try {
      const response = await fetch( `https://react-interview.crd4lc.easypanel.host/api/course`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization:`Bearer ${token}`
            },
            
        }
    );
      const result = await response.json();
      console.log(result.data.data)
      console.log('hello world')
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
      <div className="flex items-center">
        {/* Form Section */}
        <div className="w-1/2">
          <Form />
        </div>
        {/* -------------------------------------- Cart Section */}
        <div className="card-container flex flex-wrap gap-4">
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className="card bg-white shadow-lg rounded-lg">
                <div className="card-image relative">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div
                    className={`status-badge absolute top-2 right-2 px-3 py-1 rounded-full text-white ${
                      item.badge_color ? item.badge_color.toLowerCase() : "bg-gray-500"
                    }`}
                  >
                    {item.badge_text || "N/A"}
                  </div>
                </div>
                <div className="card-content p-4">
                  <div className="author flex items-center gap-2 mb-2">
                    <img
                      src="https://via.placeholder.com/40"
                      alt={item.instructor_name}
                      className="author-image w-8 h-8 rounded-full"
                    />
                    <span>{item.instructor_name || "Unknown"}</span>
                  </div>
                  <h3 className="card-title font-bold text-lg">
                    {item.title || "Untitled"}
                  </h3>
                  <p className="card-description text-gray-600 text-sm">
                    {item.description || "No description available."}
                  </p>
                  <button className="view-detail mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                    VIEW DETAIL
                  </button>
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

