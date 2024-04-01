import { useEffect, useState } from "react";
import EditPage from "./EditPage";
import DeletePage from "./DeletePage";



export default function PlayersModalo({ modalFlag, cancelHandler }) {
   const [inpVal, setInpVal] = useState('');
   const [player, setPlayer] = useState({});
   const [showEye, setShowEye] = useState(true);
   const [compFlag, setCompFlag] = useState(true);
   useEffect(() => { (Object.keys(player).length !== 0) && (player.password === inpVal ? setCompFlag(false) : alert('password is wrong')); }, [player]);

   const text = {
      title: {
         delete: 'for deleting an acount first inter password',
         edit: 'for editing an acount first inter password'
      },
   };

   let showHandler = e => {
      e.preventDefault();
      setShowEye(prev => !prev);
   };
   let continueHandler = e => {
      e.preventDefault();
      const playersGroup = JSON.parse(localStorage.getItem('players'));
      const userName = modalFlag.userName;
      playersGroup.forEach(item => item.userName === userName && setPlayer(item));
   };
   let changeHandler = e => setInpVal(e.target.value);

   return (
      <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center  md:inset-0 h-screen max-h-full bg-black bg-opacity-80">
         {compFlag ? <div className="md:w-full w-9/12 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  first inter password
               </h1>
               <form className="space-y-4 md:space-y-6" onSubmit={e => continueHandler(e)}>
                  <div>
                     <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white relative">
                        Password
                        <input type={showEye ? "text" : "password"} name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={inpVal} onChange={e => changeHandler(e)} />
                        <button className="absolute top-7 right-5 text-xl" onClick={e => showHandler(e)}>
                           {showEye ? <i className='bx bx-show-alt'></i> : <i className='bx bx-low-vision'></i>}
                        </button>
                     </label>
                  </div>
                  <div className="w-full flex gap-5">
                     <button type="button" class="w-[50%] text-gray-900 dark:text-white hover:bg-gray-50 hover:text-primary-600    focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 border-2 border-gray-200" onClick={e => cancelHandler(e)}>cancel</button>
                     <button type="submit" className="w-[50%] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">contiue</button>
                  </div>
               </form>
            </div>
         </div> : modalFlag.edit ? <EditPage player={player} editCompleted={cancelHandler} /> : <DeletePage player={player} cancelHandler={cancelHandler} />}
      </div>
   );
};