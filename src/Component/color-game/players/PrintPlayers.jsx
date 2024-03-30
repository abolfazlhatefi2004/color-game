import { useState } from "react";


const initialFlag = {
    edit: false,
    delete: false
};

export default function PrintPlayers({ playersStore }) {
    const [modalFlag, setModalFlag] = useState(initialFlag);



    let clickHandler = e => {
        e.preventDefault();
        const elmt = e.target.parentElement;
        if (elmt.tagName === 'BUTTON') {
            if (elmt.dataset.type === "edit") {
                setModalFlag({ edit: true, delete: false });
            } else {
                setModalFlag({ edit: false, delete: true });
            }
        }
    }

    const rows = playersStore.map((item, index) => {
        return (
            <tr class={`${index / 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b dark:bg-gray-800 dark:border-gray-700`} key={index} data-user={item.userName}>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.name}
                </th>
                <td class="px-6 py-4">
                    {item.userName}
                </td>
                <td class="px-6 py-4">
                    {item.highestScore}
                </td>
                <td class="px-6 py-4 text-right text-2xl" onClick={e => clickHandler(e)}>
                    <button type="button" class="hover:text-blue-600 dark:text-white mr-2" data-type="edit"><i class='bx bx-pencil'></i></button>
                    <button type="button" class="hover:text-red-700 dark:text-white" data-type="delete"><i class='bx bx-trash'></i></button>
                </td>
            </tr>
        );
    });
    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 bg-gray-200">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                                user name
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">
                                highest score
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>

    );
};