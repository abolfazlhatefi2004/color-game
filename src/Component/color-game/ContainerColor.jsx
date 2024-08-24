import { Route, Routes } from "react-router-dom";
import NavbarColor from "./navbar/NavbarColor";
import Home from "./home/Home";
import AboutUs from "./about/AboutUs";
import Game from "./game-page/Game";
import Description from "./description/Description";
import SignUp from "./signUp-page/SignUp";
import Players from "./players/Players";

export default function ContainerColor() {

    return (
        <div className="bg-gray-100 relative">
            <div className="container bg-white h-screen">
                <NavbarColor />
                <Routes >
                    <Route path="/color-game" element={<Home />} />
                    <Route path="/color-game/About-us" element={<AboutUs />} />
                    <Route path="/color-game/Description" element={<Description />} />
                    <Route path="/color-game/Players" element={<Players />} />
                    <Route path="/color-game/play-game" element={<Game />} />
                    <Route path="/color-game/sign-up" element={<SignUp />} />
                </Routes>
            </div>
        </div>
    );
}

// https://github.com/abolfazlhatefi2004/color-game