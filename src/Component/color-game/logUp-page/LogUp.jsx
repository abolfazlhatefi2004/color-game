import { useState } from "react";
import { json } from "react-router-dom";

const initialInp = [
    { name: 'name', value: '' },
    { name: 'userName', value: '' },
    { name: 'password', value: '' }
]
const playersStore = localStorage.getItem('players');

export default function LogUp() {
    const [showEye, setShowEye] = useState(true);
    const [inpValue, setInpValue] = useState(initialInp);
    const [players, setPlayers] = useState(playersStore === null ? [] : playersStore);
    
    localStorage.setItem('players', JSON.stringify(players));
    let showHandler = e => {
        e.preventDefault();
        setShowEye(prev => !prev);
    }
    let changeHandler = e => {
        const inpName = e.target.getAttribute('name');
        setInpValue(prev => prev.map(item => item.name === inpName ? { ...item, value: e.target.value } : item));
    }
    let submitHandler = e => {
        e.preventDefault();
        let obj = {};
        inpValue.forEach(item => obj = { ...obj, [item.name]: item.value });
        obj = { ...obj, highestScore: 0 };
        if (players.some(item => item.userName === obj.userName)) {
            alert('please write another username');
        } else {
            setPlayers(prev => prev.length === 0 ? [obj] : [...prev, obj]);
            setInpValue(initialInp);
        }
    }

    return (
        <section className="w-full h-[calc(100%-4rem)] py-[50px]">
            <div className="w-full h-[calc(100%-2rem)] flex items-center justify-center gap-4">
                <div className="w-5/12 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
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
                                    <input type={showEye ? "text" : "password"} name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => changeHandler(e)} value={inpValue[2].value} required />
                                    <button className="absolute top-7 right-5 text-xl" onClick={e => showHandler(e)}>
                                        {showEye ? <i className='bx bx-show-alt'></i> : <i className='bx bx-low-vision'></i>}
                                    </button>
                                </label>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="w-5/12 h-full  bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/images/illustration.svg')` }}></div>
            </div>
        </section>
    );
};