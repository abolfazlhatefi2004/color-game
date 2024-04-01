import { useState } from "react";
import PrintPlayers from "./PrintPlayers";


const initialFlag = {
    edit: false,
    delete: false,
    userName: ''
};

export default function Players() {
    const [modalFlag, setModalFlag] = useState(initialFlag);

    const playersStore = JSON.parse(localStorage.getItem('players'));
    let playersFlag = playersStore === null ? false : true;

    let cancelHandler = e => {
        e.preventDefault();
        setModalFlag(initialFlag);
    };
    let clickHandler = e => {
        e.preventDefault();
        const elmt = e.target.parentElement;
        if (elmt.tagName === 'BUTTON') {
            if (elmt.dataset.type === "edit") {
                setModalFlag({ edit: true, delete: false, userName: elmt.dataset.user });
            } else {
                setModalFlag({ edit: false, delete: true, userName: elmt.dataset.user });
            }
        }
    };
    return (
        <>
            {playersFlag ? <PrintPlayers playersStore={playersStore} cancelHandler={cancelHandler} clickHandler={clickHandler} modalFlag={modalFlag} /> : <div className="w-full h-[80%] flex justify-center items-center text-5xl text-gray-300 font-bold font-serif uppercase select-none">we have no player yet</div>}
        </>
    );
};