import PlayersModalo from "./PlayersModal";



export default function PrintPlayers({ playersStore, cancelHandler, modalFlag , clickHandler}) {

    const rows = playersStore.map((item, index) => {
        return (
            <tr className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b dark:bg-gray-800 dark:border-gray-700`} key={index}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.name}
                </th>
                <td className="px-6 py-4">
                    {item.userName}
                </td>
                <td className="px-6 py-4">
                    {item.highestScore}
                </td>
                <td className="px-6 py-4 text-right text-2xl" onClick={e => clickHandler(e)}>
                    <button type="button" className="hover:text-blue-600 dark:text-white mr-2" data-type="edit" data-user={item.userName}><i className='bx bx-pencil'></i></button>
                    <button type="button" className="hover:text-red-700 dark:text-white" data-type="delete" data-user={item.userName}><i className='bx bx-trash'></i></button>
                </td>
            </tr>
        );
    });
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
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
                                highest score
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            {(modalFlag.edit || modalFlag.delete) && <PlayersModalo modalFlag={modalFlag} cancelHandler={cancelHandler} />}
        </div>

    );
};