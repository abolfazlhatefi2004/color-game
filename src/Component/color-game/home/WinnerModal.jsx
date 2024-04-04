

export default function WinnerModal({ closeHandler, print }) {

    const playersRows = print.players.map((item, index) => {
        return (<tr className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b dark:bg-gray-800 dark:border-gray-700`} key={index}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
            </th>
            <td className="px-6 py-4">
                {item.userName}
            </td>
            <td className="px-6 py-4 flex items-center text-xl">
                <span className={`block w-[40px] h-[32px] bg-cover bg-no-repeat bg-center`} style={{ backgroundImage: `url(${require('../../../images/place-' + ((index + 1) < 4 ? (index + 1) : 4) + '.png')})` }}></span>
                #{index + 1}
            </td>
            <td className="px-6 py-4 text-xl">
                {item.highestScore}
            </td>
        </tr>);
    });

    return (
        <div className="fixed top-0 right-0 left-0 w-full z-50 flex justify-center  md:inset-0 h-screen max-h-full bg-black bg-opacity-80 lg:px-0 lg:py-0 px-4 py-6">
            <button type="button" className="text-gray-400 absolute lg:top-4 top-2 lg:left-4 left-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={e => closeHandler(e)}>
                <svg aria-hidden="true" className="lg:w-5 w-4 lg:h-5 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="lg:w-10/12 w-full relative overflow-x-auto shadow-md sm:rounded-lg my-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 bg-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    user name
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    place
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    score
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {playersRows}
                    </tbody>
                </table>
            </div>
        </div>
    )
};