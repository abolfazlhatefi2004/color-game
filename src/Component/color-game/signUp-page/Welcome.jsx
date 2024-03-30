import { memo } from "react";
import { Link } from "react-router-dom";


export default memo(function Welcome() {
    return (
        <div className="fixed top-0 right-0 left-0 z-50 flex flex-col items-center  md:inset-0 h-screen max-h-full bg-gray-100">
            <div className="xl:w-8/12 lg:w-11/12 w-full lg:h-[70%] h-[50%] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/images/welcome.png')` }}>
            </div>
            <Link to="/" className="flex items-center justify-center gap-4 text-white rounded-lg md:px-7 px-4 md:py-3 py-2 uppercase font-semibold md:text-2xl text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                Home
                <svg className="rtl:rotate-180 md:w-6 w-4 md:h-6 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>
    );
});