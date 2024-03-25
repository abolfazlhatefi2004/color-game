import { memo } from "react";


const itemsList = {
    selected: 'text-white bg-purple-600 rounded',
    unSelected: 'text-gray-700 hover:bg-gray-50  lg:hover:text-purple-600 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
}
export default memo(function LevelGame({ selecting, clickHandler , newGameHandler }) {
    return (
        <nav className="mt-5 lg:py-3 py-1.5 lg:px-7 px-3 flex justify-between items-center bg-gray-50 rounded">
            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg lg:text-base text-sm lg:px-5 px-3 lg:py-3 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 uppercase" onClick={e => {newGameHandler(e)}}>new color</button>
            <ul className="flex flex-row lg:mt-4 font-medium lg:space-x-8 lg:mt-0 capitalize lg:text-xl text-sm" onClick={e => clickHandler(e)}>
                <li><button type="button" className={`py-2 pr-4 pl-3 lg:border-0 dark:text-gray-400 ${selecting[0].flag ? itemsList.selected : itemsList.unSelected}`} data-name={selecting[0].name}>easy</button></li>
                <li><button type="button" className={`py-2 pr-4 pl-3  lg:border-0  dark:text-gray-400 ${selecting[1].flag ? itemsList.selected : itemsList.unSelected}`} data-name={selecting[1].name}>normal</button></li>
                <li><button type="button" className={`py-2 pr-4 pl-3 dark:text-white ${selecting[2].flag ? itemsList.selected : itemsList.unSelected}`} data-name={selecting[2].name}>hard</button></li>
            </ul>
        </nav>
    );
});

// https://sahil-mor.github.io/RED-GREEN-BLUE-COLOR-GAME/