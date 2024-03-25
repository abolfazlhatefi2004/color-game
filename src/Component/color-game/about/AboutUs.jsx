import { memo } from "react";



export default memo(function AboutUs() {
    return (
        <div className="w-full lg:py-[120px] lg:p-4 flex justify-center flex-wrap">
            <div className="w-2/3 flex justify-center flex-wrap lg:flex-nowrap ">
                <div className="lg:w-[200px] w-[150px] lg:h-[200px] h-[150px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/images/my-brand.png')` }}></div>
                <div className="lg:h-fulln lg:w-auto bg-gray-100 lg:p-4 font-mono round">
                    <h3 className="lg:text-3xl text-2xl uppercase font-bold lg:pt-0 pt-2 pb-4  lg:text-left text-center">about us</h3>
                    <p className="lg:text-xl font-normal lg:px-0 px-2 lg:text-left text-center">Hi,I am Abolfazl Hatefi a developer.so I developed this game as a present for the Norooz celebration and I hope enjoy that.<span className="block lg:w-[30px] lg:h-[30px] bg-cover bg-no-repeat bg-center rounded-full lg:mb-0 mb-4" style={{ backgroundImage: `url('/images/laughing.png')` }}></span></p>
                </div>
            </div>
            <div className="w-2/3 mt-[30px]">
                <h3 className="w-full text-2xl capitalize font-bold pb-4 text-center">ways to contact me</h3>
                <div className="flex justify-center items-center gap-4 text-5xl ">
                    <a href="https://www.instagram.com/abolfazl_hatef_/" className="cursor-pointer"><i className='bx bxl-instagram' style={{ color: '#8d054d' }}></i></a>
                    <a href="https://web.telegram.org/k/#@abolfazlhatefi1" className="cursor-pointer"><i className='bx bxl-telegram' style={{ color: '#0fd3f8' }}></i></a>
                </div>
            </div >
        </div >
    );
});