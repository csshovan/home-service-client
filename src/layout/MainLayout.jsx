import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/Footer";





const MainLayout = () => {
    return (
        <div>
             <div className="max-w-7xl mx-auto space-y-5">
                <Navbar></Navbar>
                <Outlet></Outlet>

             </div>
             <Footer></Footer>
        </div>
    );
};

export default MainLayout;