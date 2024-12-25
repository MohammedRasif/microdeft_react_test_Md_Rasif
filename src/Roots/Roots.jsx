import { Outlet } from "react-router-dom";
import Home from "../component/Home";

const Roots = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;