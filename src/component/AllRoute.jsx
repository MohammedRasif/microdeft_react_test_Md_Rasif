import { Link } from "react-router-dom";

const AllRoute = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-500 via-green-400 to-green-500 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl uppercase font-bold text-green-700 text-center py-5">
        Microdeft React Test Md Rasif
      </h1>
        <h1 className="text-5xl font-bold text-green-700 mb-5">Hello Sir/Madam</h1>
        <p className="text-2xl text-green-700 mb-5">
        Would you like to add to the cart? If so, please click the button below.
                </p>
        <Link to="/home">
          <button className="px-6 py-3 bg-green-700 text-white text-xl font-semibold rounded-lg hover:bg-green-800 transition-colors duration-300">
            Click 
          </button>
        </Link>
      </div>
    );
};

export default AllRoute;