import { Link } from "react-router-dom";



export default function ColorWheel({ playerFlag, clickHandler }) {
    return (
        <div className="lg:w-[450px] w-[250px] lg:h-[450px] h-[250px] relative">
            <div className="w-full h-full rounded-full absolute">
                <div className="w-full h-full rounded-full absolute top-0 left-0 bg-[#ffbf004d] scale-0 lg:scale-100"></div>
                <div className="w-full h-full rounded-full absolute top-0 left-0 bg-[#ff00c04d] scale-0 lg:scale-100"></div>
                <div className="w-full h-full rounded-full absolute top-0 left-0 bg-[#0040ff4d] scale-0 lg:scale-100"></div>
                <div className="w-full h-full rounded-full absolute top-0 left-0 bg-[#00ff3f4d] scale-0 lg:scale-100"></div>
            </div>
            <div className="w-full h-full bg-cover bg-no-repeat bg-center rounded-full flex justify-center items-center flex-wrap absolute" style={{ backgroundImage: `url('/images/colorCircle.png')` }}>
                <div className="lg:w-[360px] w-[200px] lg:h-[360px] h-[200px] rounded-full absolute">
                    <span className="block lg:w-10 w-6 lg:h-10 h-6 rounded-full absolute lg:top-9 top-4 left-0 lg:border-8 border-4 border-black"></span>
                </div>
                {playerFlag ? <Link to="/play-game" className="lg:w-[360px] w-[200px] lg:h-[360px] h-[200px] bg-white rounded-full flex justify-center content-center flex-wrap cursor-pointer absolute">
                    <h4 className="block w-full py-5 text-cneter font-bold lg:text-8xl text-6xl capitalize text-center">color</h4>
                    <p className="font-normal lg:text-2xl text-xl">click to get started</p>
                </Link> : <button type="button" className="lg:w-[360px] w-[200px] lg:h-[360px] h-[200px] bg-white rounded-full flex justify-center content-center flex-wrap cursor-pointer absolute" onClick={e => clickHandler(e)}>
                    <h4 className="block w-full py-5 text-cneter font-bold lg:text-8xl text-6xl capitalize text-center">color</h4>
                    <p className="font-normal lg:text-2xl text-xl">click to get started</p>
                </button>}
            </div>
        </div>
    );
}