import { memo } from "react";
import { Link } from "react-router-dom";

const content = {
    gameOver: {
        title: 'game over',
        body: 'you lose, man! common try again.'
    },
    newRecord: {
        title: 'congratulation',
        body: 'you set a new record body! common try again.'
    }
};

export default memo(function Modal({ clickHandler, newRecordFlag }) {
    return (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center  md:inset-0 h-screen max-h-full bg-black bg-opacity-80">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-3 md:p-5">
                    <h3 className={`lg:text-2xl text-xl uppercase font-semibold ${newRecordFlag ? `text-amber-300` : `text-blue-800`} dark:text-white p-1 md:p-2`}>
                        {newRecordFlag ? content.newRecord.title : content.gameOver.title}
                    </h3>
                    <p className="lg:text-xl text-bace text-gray-700 dark:text-gray-400 p-1 md:p-2 capitalize">
                        {newRecordFlag ? content.newRecord.body : content.gameOver.body}
                    </p>
                    <div className="flex items-center justify-end p-1 pt-3 md:p-3 rounded-b gap-1.5">
                        <Link to="/" className="lg:py-2 py-1.5 lg:px-3 px-2 ms-3 lg:text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-2 border-gray-300 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 uppercase">home</Link>
                        <button type="button"
                            className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium lg:text-lg rounded-lg lg:py-2 py-1.5 lg:px-3 px-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase" onClick={e => clickHandler(e)}>try
                            again</button>
                    </div>
                </div>
            </div>
        </div>);
});