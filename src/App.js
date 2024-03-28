import { Route, Routes } from "react-router-dom";
import ContainerColor from "./Component/color-game/ContainerColor";
import Home from "./Component/color-game/home/Home";
import AboutUs from "./Component/color-game/about/AboutUs";
import Game from "./Component/color-game/game-page/Game";
import Description from "./Component/color-game/description/Description";
import LogUp from "./Component/color-game/logUp-page/LogUp";



export default function App() {


    return (
        <Routes>
            <Route element={<ContainerColor />}>
                <Route index element={<Home />}></Route>
                <Route path="/About-us" element={<AboutUs />}></Route>
                <Route path="Description" element={<Description />}></Route>
                <Route path="/play-game" element={<Game />}></Route>
                <Route path="/log-up" element={<LogUp />}></Route>
            </Route>
        </Routes>

    );
}