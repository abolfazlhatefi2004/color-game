import { memo, useRef } from "react";
import ColorWheel from "./ColorWheel";
import HomeBtn from "./HomeBtn";

let margin = {};
export default memo(function Home() {
    const home = useRef();



    let getCoordinates = elem => {
        const rect = elem.getBoundingClientRect();
        const rectX = rect.x + rect.width / 2;
        const rectY = rect.y + rect.height / 2;
        return { x: rectX, y: rectY };
    }
    let getAngle = (x, y, crt) => {
        const dx = crt.x - x;
        const dy = crt.y - y;
        const rad = Math.atan2(dy, dx);
        const deg = rad * 180 / Math.PI;
        margin = {
            x: Math.round(dx / 10) > 25 ? 25 : Math.round(dx / 10) < -25 ? -25 : Math.round(dx / 10),
            y: Math.round(dy / 8) > 20 ? 20 : Math.round(dy / 8) < -20 ? -20 : Math.round(dy / 8)
        }
        return deg
    }
    let moveHandler = e => {
        const wheels = {
            Beige: home.current.children[1].children[0].children[0],
            purple: home.current.children[1].children[0].children[1],
            blue: home.current.children[1].children[0].children[2],
            green: home.current.children[1].children[0].children[3],
        }
        const circle = home.current.children[1].children[1].children[0];
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const coordinates = getCoordinates(circle);
        const angleDeg = getAngle(mouseX, mouseY, coordinates);
        circle.style.transform = `rotate(${angleDeg - 40}deg)`;
        wheels.Beige.style.marginTop = `${margin.y}px`;
        wheels.Beige.style.marginLeft = `${margin.x}px`;
        wheels.purple.style.marginTop = `${(margin.y * -1) - 15}px`;
        wheels.purple.style.marginLeft = `${(margin.x * -1) - 15}px`;
        wheels.blue.style.marginTop = `${margin.y + 15}px`;
        wheels.blue.style.marginLeft = `${margin.x + 20}px`;
        wheels.green.style.marginTop = `${margin.y + 15}px`;
        wheels.green.style.marginLeft = `${margin.x - 20}px`;
    }
    return (
        <div className="w-full lg:h-[90%] lg:px-4 lg:py-4 py-8 flex justify-center items-center flex-wrap flex-col-reverse lg:flex-row gap-16" ref={home} onMouseMove={e => moveHandler(e)}>
            <HomeBtn />
            <ColorWheel />
        </div>
    );
});