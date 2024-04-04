

export default function Movie() {
    return (
        <div className="lg:w-7/12 w-full p-4">
            <h3 className="lg:text-xl text-bace uppercase font-bold text-amber-400 flex items-center">
                now you can see how to play
                <i className='bx bxs-down-arrow-square text-xl' style={{ color: '#fbbf24' }}></i>
            </h3>
            <video className="w-full bg-gray-100" controls muted autoPlay loop>
                <source src={require("../../../movies/hint-movie.mp4")} type="video/mp4" />
            </video>
        </div>
    );
}