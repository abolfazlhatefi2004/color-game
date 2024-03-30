import PrintPlayers from "./PrintPlayers";



const playersStore = JSON.parse(localStorage.getItem('players'));

export default function Players() {

    let playersFlag = playersStore === null ? false : true;
    return (
        <>
            {playersFlag ? <PrintPlayers playersStore={playersStore} /> : <div className="w-full h-[80%] flex justify-center items-center text-5xl text-gray-300 font-bold font-serif uppercase select-none">we have no player yet</div>}
        </>
    );
};