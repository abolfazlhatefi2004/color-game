

export default function Explanation({ text }) {
    return (
        <p className="lg:w-7/12 w-11/12 lg:p-4 p-2 bg-gray-200 rounded capitalize lg:text-bace text-sm">
            {text.map((item, index) => <span className="block" key={index}>{item}</span>)}
        </p>
    );
}