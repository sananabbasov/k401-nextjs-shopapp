"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Menuu from "./Menuu";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getUserCart } from "@/redux/actions/CartActions";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Header() {

  const { cart } = useSelector(x => x.cart)
  const [settings, setSettings] = useState(false)

  const { data: session } = useSession();

  const dispatch = useDispatch()


  useEffect(() =>{
    dispatch(getUserCart(session?.user?.token))
  },[session?.user?.token])






  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
        <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-9/12 m-auto block flex-grow lg:flex lg:items-center lg:w-auto text-center">
        <div className="relative text-sm lg:flex-grow border-[1px] border-black">
          <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </Link>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Examples
          </a>
          <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Categories
            <ul className="bg-gray-800 absolute z-10 flex flex-wrap left-0 w-full">
              <li className="w-1/4"><Link href={"/"}>item</Link></li>
              <li className="w-1/4"><Link href={"/"}>item</Link></li>
              <li className="w-1/4"><Link href={"/"}>item</Link></li>
              <li className="w-1/4"><Link href={"/"}>item</Link></li>
              <li className="w-1/4"><Link href={"/"}>item</Link></li>
              <li className="w-1/4"><Link href={"/"}>item</Link></li>
              <li className="w-1/4"><Link href={"/"}>item</Link></li>
              <li className="w-1/4"><Link href={"/"}>item</Link></li>
              <li className="w-1/4"><Link href={"/"}>item</Link></li>
            </ul>
          </span>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Blog
          </a>
        </div>
        <div>

          {
            session?.user ?
              (
                <div className="flex">
                  <Link className="text-white mr-3" href={"/"}>
                    <ShoppingCartIcon /> 
                    <sup className="bg-[#5b6e40] py-1 px-2 rounded-[100%]">
                      {cart.data?.wish_lists.length}
                    </sup>
                  </Link>
                  <button onClick={() => setSettings(!settings)} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 relative">
                    {session.user.first_name} {session.user.last_name}
                    <div className={`absolute bg-teal-500 ${settings ? "" : "hidden"}`}>
                      <ul>
                        <li><Link href={"/"}>Orders</Link></li>
                        <li><Link href={"/"}>Wishlist</Link></li>
                        <li><Link href={"/"}>Add product</Link></li>

                      </ul>
                    </div>

                  </button>
                  <button onClick={() => signOut()} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Logout
                  </button>

                </div>
              ) : (

                <>
                  <button onClick={() => signIn()} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Login
                  </button>
                </>
              )
          }

        </div>
      </div>
    </nav>
  )
}

export default Header