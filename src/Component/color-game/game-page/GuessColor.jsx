

export default function GuessColor({ square, clickHandler }) {
    return (
        <div className="flex justify-center lg:pt-4 pt-2">
            <div className={`lg:w-5/12 w-10/12 p-4 grid grid-cols-3 grid-rows-${square.length / 3} gap-4 rounded-md border-2 border-blue-900`} onClick={e => clickHandler(e)} style={{ height: `${143 * (square.length / 3)}px` }}>
                {square.map((item, index) => <div className="rounded-lg cursor-pointer transition-all duration-700" style={{ background: `rgb(${item.color[0]},${item.color[1]},${item.color[2]})` }} key={index} data-id='color' data-flag={item.flag}></div>)}
            </div>
        </div>
    );
}