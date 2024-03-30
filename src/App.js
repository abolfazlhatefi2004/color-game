import { Route, Routes } from "react-router-dom";
import ContainerColor from "./Component/color-game/ContainerColor";
import Home from "./Component/color-game/home/Home";
import AboutUs from "./Component/color-game/about/AboutUs";
import Game from "./Component/color-game/game-page/Game";
import Description from "./Component/color-game/description/Description";
import SignUp from "./Component/color-game/signUp-page/SignUp";
import Players from "./Component/color-game/players/Players";



export default function App() {


    return (
        <Routes>
            <Route element={<ContainerColor />}>
                <Route index element={<Home />}></Route>
                <Route path="/About-us" element={<AboutUs />}></Route>
                <Route path="Description" element={<Description />}></Route>
                <Route path="/Players" element={<Players />}></Route>
                <Route path="/play-game" element={<Game />}></Route>
                <Route path="/sign-up" element={<SignUp />}></Route>
            </Route>
        </Routes>

    );
}