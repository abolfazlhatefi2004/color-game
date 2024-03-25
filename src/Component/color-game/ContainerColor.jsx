import { Outlet } from "react-router-dom";
import NavbarColor from "./NavbarColor";


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
// <brandhub-social-media-box-item icon-name="twitter" link-url="https://twitter.com/mercedesbenz" link-title="Twitter" item-index="2">
// </brandhub-social-media-box-item>