import { useState } from "react";
import WinnerModal from "./WinnerModal";


const initailPrint = {
    players: [],
    flag: false
};

export default function HomeBtn({ player, playerFlag }) {
    const [print, setPrint] = useState(initailPrint);

    let clickHandler = e => {
        e.preventDefault();
        let players = JSON.parse(localStorage.getItem('players'));
        const tidyPlayers = players.map(item => {
            let highestScore = 0;
            let user = '';
            let obj = {};
            players.forEach(item => {
                if (item.highestScore >= highestScore) {
                    highestScore = item.highestScore;
                    user = item.userName;
                }
            });
            obj = players.filter(item => item.userName === user)[0];
            players = players.filter(item => item.userName !== user);
            return obj;
        });
        setPrint({ players: tidyPlayers, flag: true });
    };
    let closeHandler = e => {
        e.preventDefault();
        setPrint(prev => { return { ...prev, flag: false } });
    }
    return (
        <div className="lg:w-3/12 w-8/12 flex justify-center content-center flex-wrap gap-5">
            <button className="w-full border-2 border-gray-300 hover:border-gray-500 transition duration-500 text-gray-500 p-3 flex flex-wrap justify-between items-center" onClick={e => clickHandler(e)}>
                <div className="w-2/12 h-[60px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/images/icons8-prize-100.png')` }}></div>
                <div className="w-9/12">
                    <h4 className="text-black font-medium text-2xl">records</h4>
                    <p>look the recoeds bro but be careless keep going to win</p>
                </div>
            </button>
            <button className="w-full border-2 border-gray-300 hover:border-gray-500 transition duration-500 text-gray-500 p-3 flex flex-wrap justify-between items-center">
                <div className="w-2/12 h-[40px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/images/icons8-trophy-48.png')` }}></div>
                <div className="w-9/12">
                    <h4 className="text-black font-medium text-xl">your record</h4>
                    <p><span className="text-red-600">your best record is:{`  `}</span>{playerFlag ? player.highestScore : 0}</p>
                </div>
            </button>
            {print.flag && <WinnerModal closeHandler={closeHandler} print={print} />}
        </div>

    );
}