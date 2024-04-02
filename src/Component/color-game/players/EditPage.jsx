import { useState } from "react";


export default function EditPage({ player, editCompleted }) {
    const [inpValue, setInpValue] = useState([
        { name: 'name', value: player.name },
        { name: 'userName', value: player.userName },
        { name: 'password', value: player.password }
    ]);
    const players = JSON.parse(localStorage.getItem('players'));


    let changeHandler = e => {
        const inpName = e.target.getAttribute('name');
        setInpValue(prev => prev.map(item => item.name === inpName ? { ...item, value: e.target.value } : item));
    };
    let submitHandler = e => {
        e.preventDefault();
        let playerStorage = JSON.parse(localStorage.getItem('player'));
        let filterPlayers = players.filter(item => item.userName !== player.userName);
        let obj = {};
        inpValue.forEach(item => obj = { ...obj, [item.name]: item.value });
        obj = { ...obj, highestScore: player.highestScore };
        if (filterPlayers.some(item => item.userName === obj.userName)) {
            alert('please write another username');
        } else {
            filterPlayers = [...filterPlayers, obj];
            localStorage.setItem('players', JSON.stringify(filterPlayers));
            playerStorage.userName === player.userName && localStorage.setItem('player', JSON.stringify(obj));
            editCompleted(e);
        }
    };

    return (
        <div className="lg:w-5/12 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <button type="button" className="text-gray-400 absolute top-4 left-4 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={e => editCompleted(e)}>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 space-y-4 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    edit your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="post" onSubmit={e => submitHandler(e)}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">
                            your name
                            <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abolfazl..." onChange={e => changeHandler(e)} value={inpValue[0].value} required />
                        </label>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">
                            your userName
                            <input type="text" name="userName" placeholder="@abolfazl12..." className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => changeHandler(e)} value={inpValue[1].value} required />
                        </label>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white relative">Password
                            <input type="text" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => changeHandler(e)} value={inpValue[2].value} required />
                        </label>
                    </div>
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >edit your account</button>
                </form>
            </div>
        </div>
    );
}