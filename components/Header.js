import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <ul className="bg-red-400 h-20 flex justify-evenly items-center text-xl text-white">
      <li>
        <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/product">
          <a className="hover:underline">Product</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a className="hover:underline">Contact</a>
        </Link>
      </li>
    </ul>
  );
};

export default Header;
