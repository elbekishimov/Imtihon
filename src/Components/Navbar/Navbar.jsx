import { Link, Outlet } from 'react-router-dom'
import vcare from '../../IMG/vcare trans 2.png'



export default function Navbar() {
    return (
        <>
            <div className=" flex justify-between items-center">
                <div className='w-44'>
                    <img className='w-full h-full' src={vcare} alt="" />
                </div>
                <div className=" flex gap-5 items-center">
                    <ul className="flex gap-7">
                        <Link to={'/home'}><li className='font-semibold text-xl'>Home</li></Link>
                        <Link to={'/services'}><li className='font-semibold text-xl'>Services</li></Link>
                        <Link to={'/products'}><li className='font-semibold text-xl'>Products</li></Link>
                        <Link to={'/blog'}><li className='font-semibold text-xl'>Blog</li></Link>
                        <Link to={"/contact"}><li className='font-semibold text-xl'>Contact</li></Link>
                    </ul>
                </div>
                <div className='flex gap-3'>
                    <Link to={'/sign-in'}><button className="border px-5 py-3 rounded-lg">Sign In</button></Link>
                    <Link to={'/sign-up'}><button className='border px-5 py-3 rounded-lg bg-[#0088CA] text-white'>Sign Up</button></Link>
                </div>
            </div>
            <main className='Asosiy flex-grow'><Outlet /></main>

        </>
    )
}
