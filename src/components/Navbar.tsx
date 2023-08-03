import { useState } from "react";
import { Button } from "react-bootstrap";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useShoppingCart } from "../context/ShoppingCartContext"
import { NavLink } from "react-router-dom";

import "./comp.css"







const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart()
  const [nav, setNav] = useState(false);


  const handleNav = () => {
    setNav(!nav);
  };


const handleCheck = () => {
  const href = "http://localhost:5173/"
  if(window.location.href === href){
    return <h1 className=" w-full pr-22 text-3xl font-bold">
    <a href="/store" className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#fff] to-[#0b0b0b] hover:text-[#adb5bd]">
      Start Shopping
    </a>
  </h1>
  }else{
    return <h1 className=" w-full pr-22 text-3xl font-bold">
    <a href="/" className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#fff] to-[#000300] hover:text-[#adb5bd]">
      Z-Adventures.
    </a>
  </h1>
  }
}
 
const heads = handleCheck()
  return (
    
    <div className="z-10 md:sticky top-0 font-serif">
      
      <div className="flex justify-between items-center h-24 max-w-[1900px] ml-[6%] px-4 font-bold  text-[#adb5bd]">
        <h1 className=" w-full pr-22 text-3xl font-bold">
          <a href="/" className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#fff] to-[#000300] hover:text-[#adb5bd]">
            {heads}
          </a>
        </h1>
        <div className="nav">
        <ul className="hidden min-[960px]:flex">
          <li className="p-4">
          <NavLink onClick={window.location.reload} to="/" className="text-[18px] font-bold font-serif hover:text-[#f8f8ff]">
            Home
          </NavLink>
          </li>
          <li className="p-4">
          <NavLink onClick={window.location.reload} to="/store" className="text-[18px] font-bold font-serif hover:text-[#f8f8ff]">
            Shopping
          </NavLink>
          </li>
          <li className="p-4">
          <NavLink onClick={window.location.reload} to="/blog" className="text-[18px] font-bold font-serif hover:text-[#f8f8ff]">
            Blog
          </NavLink>
          </li>
          <li className="p-4">
          <NavLink to="/about" className="text-[18px] font-bold font-serif hover:text-[#f8f8ff]">
            About
          </NavLink>
          </li>
          <li className="p-4">
          <NavLink to="/contact" className="text-[18px] font-bold font-serif hover:text-[#f8f8ff]">
            Contact
          </NavLink>
          </li>
          {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>

            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
        </ul>
        </div>
        <div onClick={handleNav} className="block min-[960px]:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#fff] to-[#000300] m-4">
            Z-Adventures.
          </h1>
          <li className="p-4 border-b border-gray-600"><a onClick={handleNav} href="/">Home</a></li>
          <li className="p-4 border-b border-gray-600"><a onClick={handleNav}  href="/store">Shopping</a></li>
          <li className="p-4 border-b border-gray-600"><a onClick={handleNav}  href="/blog">Blog</a></li>
          <li className="p-4 border-b border-gray-600"><a onClick={handleNav}  href="/about">About Us</a></li>
          <li className="p-4 border-b border-gray-600"><a onClick={handleNav} href="/contact">Contact</a></li>
        </ul>
      </div>
    
    </div>
  );
};

export default Navbar;
