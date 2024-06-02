import Link from 'next/link';
import Image from "next/image";
import avatarPFP from '../public/images/avatarpfp.jpg';
import { CiStar } from "react-icons/ci";
import { FaCrown } from "react-icons/fa";

function App() {
  return (
    <div className='bg-zinc-900 min-h-screen items-center justify-center p-2'>
      <div className='flex items-center justify-between p-5 pb-0'>
        <div className="">
        <span>Level: <span className='font-semibold'>B1</span></span>
        <br />
        <span className='font-bold'>Score: <span className='font-semibold'>115 XP</span></span>
        </div>

        <span className="flex items-center"><FaCrown size={30}/></span>
      </div>

      <div className='flex justify-center'>
        <div className='content-wrapper w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12 bg-zinc-850 p-6 rounded-lg'>
          <div className="profile-info text-center mt-">
            <span className='flex justify-center'><Image className="rounded-full mb-4 mx-auto" src={avatarPFP} alt="pfp" width={180}></Image></span>
            <span className="mt-6 text-lg font-semibold">@Mona</span>
          </div>

          <div className="mt-6 gap-4">
            <ul className="gap-4">
              <Link href='/exams'><li className="p-3 mt-3 rounded-lg bg-white text-black text-center">Try B1 Exams</li></Link>
              <Link href='/'><li className="p-3 mt-3 rounded-lg bg-white text-black text-center"><FaCrown size={20}/> Go Premium <FaCrown size={20}/></li></Link>
              <span><Link href='/'><li className="p-3 mt-3 rounded-lg bg-white text-black text-center">Refer a friend</li></Link></span>
              <Link href='/'><li className="p-3 mt-3 rounded-lg bg-white text-black text-center">Rate the App</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
