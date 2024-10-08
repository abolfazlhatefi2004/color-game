import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import LoginModal from "./LoginModal";


const itemList = {
    selected: 'text-white bg-primary-700 lg:bg-transparent lg:text-primary-700 rounded',
    unSelected: 'text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
}
let itemFlag = [
    { name: 'home', flag: true },
    { name: 'description', flag: false },
    { name: 'players', flag: false },
    { name: 'aboutUs', flag: false }
];

export default function NavbarColor() {
    const [select, setSelect] = useState(itemFlag);
    const [modalFlag, setModalFlag] = useState(false);
    const menu = useRef();

    let player = JSON.parse(localStorage.getItem('player'));
    let playerFlag = (player === null) ? false : true;


    let clickHandler = e => {
        e.preventDefault();
        menu.current.classList.toggle('hidden');
    }
    let setColor = e => setSelect(prev => e.target.tagName === 'A' ? prev.map(item => item.name === e.target.dataset.name ? { ...item, flag: true } : { ...item, flag: false }) : prev);
    let logInHandler = e => {
        e.preventDefault();
        setModalFlag(true);
    };
    let sigUpHandler = () => setModalFlag(false);
    onpopstate = e => {
        const loc = e.currentTarget.location.pathname;
        let Coordinates = '';
        loc.slice(1, loc.length) === '' ? Coordinates = 'home' : loc.slice(1, loc.length) === 'About-us' ? Coordinates = 'aboutUs' : Coordinates = loc.slice(1, loc.length).toLowerCase();
        setSelect(prev => prev.map(item => item.name === Coordinates ? { ...item, flag: true } : { ...item, flag: false }));
    };
    return (
        <header>
            <nav className="bg-gray-100 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <h1 className="flex items-center select-none">
                        <img src={require("../../../images/icons8-color-96.png")} className="mr-2 h-7 sm:h-10" alt="color game Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{playerFlag ? player.name : 'color-game'}</span>
                    </h1>
                    <div className="flex items-center lg:order-2">
                        <button className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" onClick={e => logInHandler(e)}>Log in</button>
                        <Link to="/color-game/sign-up" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</Link>
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false" onClick={e => clickHandler(e)}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2" ref={menu}>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0" onClick={e => setColor(e)}>
                            <li>
                                <Link to="/color-game/" className={`block py-2 pr-4 pl-3 lg:p-0 dark:text-white ${select[0].flag ? itemList.selected : itemList.unSelected}`} data-name={select[0].name}>Home</Link>
                            </li>
                            <li>
                                <Link to="/color-game/Description" className={`block py-2 pr-4 pl-3 border-b border-gray-100  lg:border-0 lg:p-0 dark:text-gray-400 ${select[1].flag ? itemList.selected : itemList.unSelected}`} data-name={select[1].name}>Decription</Link>
                            </li>
                            <li>
                                <Link to="/color-game/Players" className={`block py-2 pr-4 pl-3 border-b border-gray-100  lg:border-0 lg:p-0 dark:text-gray-400 ${select[2].flag ? itemList.selected : itemList.unSelected}`} data-name={select[2].name}>Players</Link>
                            </li>
                            <li>
                                <Link to="/color-game/About-us" className={`block py-2 pr-4 pl-3 border-b border-gray-100  lg:border-0 lg:p-0 dark:text-gray-400 ${select[3].flag ? itemList.selected : itemList.unSelected}`} data-name={select[3].name}>About us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {modalFlag && <LoginModal sigUpHandler={sigUpHandler} />}
        </header>
    );
};