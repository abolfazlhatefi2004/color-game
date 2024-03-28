import { Outlet } from "react-router-dom";
import NavbarColor from "./navbar/NavbarColor";


export default function ContainerColor() {

    return (
        <div className="bg-gray-100 relative">
            <div className="container bg-white h-screen">
                <NavbarColor />
                <Outlet />
            </div>
        </div>
    );
}

// https://github.com/abolfazlhatefi2004/color-game