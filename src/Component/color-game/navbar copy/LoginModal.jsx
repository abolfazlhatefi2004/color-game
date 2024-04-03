import { useState } from "react";
import { Link } from "react-router-dom";


const initialInpValue = [
    { name: 'userName', value: '' },
    { name: 'password', value: '' }
];

export default function LoginModal({ sigUpHandler }) {
    const [inpValue, setInpValue] = useState(initialInpValue);
    const [showEye, setShowEye] = useState(true);

    let player = {};

    let showHandler = e => {
        e.preventDefault();
        setShowEye(prev => !prev);
    };
    let changeHandler = e => {
        const inpName = e.target.getAttribute('name');
        setInpValue(prev => prev.map(item => item.name === inpName ? { ...item, value: e.target.value } : item));
    };
    let submitHandler = e => {
        e.preventDefault();
        let playersGroup = JSON.parse(localStorage.getItem('players'));
        if (playersGroup.some(item => item.userName === inpValue[0].value)) {
            playersGroup.forEach(item => item.userName === inpValue[0].value && (player = item));
            if (player.password === inpValue[1].value) {
                localStorage.setItem('player', JSON.stringify(player));
                sigUpHandler();
            } else {
                alert('password is wrong');
            }
        } else {
            alert('user name is wrong');
        };
    };
    return (
        <section className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center  md:inset-0 h-screen max-h-full bg-black bg-opacity-80">
            <div className="lg:w-5/12 w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={e => submitHandler(e)}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your userName
                                    <input type="text" name="userName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="@abolfazl12..." required onChange={e => changeHandler(e)} value={inpValue[0].value} />
                                </label>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white relative">Password
                                    <input type={showEye ? "text" : "password"} name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => changeHandler(e)} value={inpValue[1].value} required />
                                    <button className="absolute top-7 right-5 text-xl" onClick={e => showHandler(e)}>
                                        {showEye ? <i className='bx bx-show-alt'></i> : <i className='bx bx-low-vision'></i>}
                                    </button>
                                </label>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account yet? <Link to="/sign-up" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={e => sigUpHandler(e)}>Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};