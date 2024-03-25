


export default function Panel({ answerColor , scoreCounter}) {
    return (
        <div className="mt-5 py-2 px-7 flex justify-between items-center">
            <div className="lg:w-16 w-12 lg:h-16 h-12 rounded-full lg:ring-8 ring-4 ring-green-600 bg-white flex justify-center items-center"><span className="lg:text-4xl text-3xl font-bold">{scoreCounter}</span></div>
            <div className="lg:w-5/12 w-7/12 bg-gray-50 py-1 rounded">
                <h3 className="w-full text-center lg:text-2xl text-xl font-bold"><span className="text-red-600">r</span><span className="text-green-600">g</span><span className="text-blue-600">b</span>({`${answerColor[0]},${answerColor[1]},${answerColor[2]}`})</h3>
                <ul className="w-full flex justify-center items-center gap-5 py-3">
                    <li className="w-2/12 py-3 rounded" style={{ background: `rgb(${answerColor[0]},0,0)` }}></li>
                    <li className="w-2/12 py-3 rounded" style={{ background: `rgb(0,${answerColor[1]},0)` }}></li>
                    <li className="w-2/12 py-3 rounded" style={{ background: `rgb(0,0,${answerColor[2]})` }}></li>
                </ul>
            </div>
        </div>
    );
}