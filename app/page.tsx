import Link from 'next/link';
import Image from "next/image";
import avatarPFP from '../public/images/avatarpfp.jpg';
import { CiStar } from "react-icons/ci";

function App() {
  return (
    <div className='bg-zinc-900 min-h-screen items-center justify-center p-2'>
      <div className='flex items-center justify-between p-5 pb-0'>
        <span>Level: <span className='font-semibold'>B1</span></span>
        <span className='font-bold'>115 XP</span>
        <span className="flex items-center"><CiStar size={20}/></span>
      </div>

      <div className='flex justify-center'>
        <div className='content-wrapper w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12 bg-zinc-850 p-6 rounded-lg'>
          <div className="profile-info text-center mt-">
            <span className='flex justify-center'><Image className="rounded-full mb-4 mx-auto" src={avatarPFP} alt="pfp" width={180}></Image></span>
            <span className="mt-6 text-lg font-semibold">Mona Lingua</span>
          </div>

          <div className="mt-6 gap-4" width={20}>
            <ul className="gap-4">
              <Link href='/Exams'><li className="p-3 mt-3 rounded-lg bg-white text-black text-center">All Exams</li></Link>
              <Link href='/'><li className="p-3 mt-3 rounded-lg bg-white text-black text-center">Reffer a fren</li></Link>
              <Link href='/'><li className="p-3 mt-3 rounded-lg bg-white text-black text-center">Flashcards</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
