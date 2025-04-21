"use client";
import Link from "next/link";
import React from "react";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import HeaderBottom from "./header-bottom";
import useUser from "../../hooks/useUser";

const Header = () => {
  const { user, isLoading } = useUser();
  return (
    <div className="w-full bg-white">
      <div className="w-[80%] py-5 m-auto flex items-center justify-between">
        <div>
          <Link href="/">
            <span className="text-3xl font-[600]">Eshop</span>
          </Link>
        </div>
        <div className="w-[50%] relative">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full px-4 font-poppins font-medium border-[2.5px] border-[#3489ff] outline-none h-[55px]"
          />
          <div className="w-[60px] h-[55px] cursor-pointer flex items-center justify-center bg-[#3489ff] absolute top-0 right-0">
            <Search color="#fff" />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            {!isLoading && user ? (
              <>
                <Link
                  href="/profile"
                  className="border-2 w-[50px] h-[50px] flex items-center justify-center rounded-full border-[#010f1c1a]"
                >
                  <User />
                </Link>
                <Link href="/profile">
                  <span className="block font-medium">Hello,</span>
                  <span className="font-semibold">
                    {user?.name?.split(" ").length > 1
                      ? user?.name?.split(" ")[1]
                      : user?.name}
                  </span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="border-2 w-[50px] h-[50px] flex items-center justify-center rounded-full border-[#010f1c1a]"
                >
                  <User />
                </Link>
                <Link href="/login">
                  <span className="block font-medium">Hello,</span>
                  <span className="font-semibold">
                    {isLoading ? "..." : "Sign in"}
                  </span>
                </Link>
              </>
            )}
          </div>
          <div className="flex items-center gap-5">
            <Link href="/wishlist" className="relative">
              <Heart />
              <div className="w-6 h-6 border-2 border-white rounded-full  bg-red-500 flex items-center justify-center absolute top-[-10px] right-[-10px]">
                <span className="text-white font-medium text-sm">0</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/wishlist" className="relative">
              <ShoppingCart />
              <div className="w-6 h-6 border-2 border-white rounded-full  bg-red-500 flex items-center justify-center absolute top-[-10px] right-[-10px]">
                <span className="text-white font-medium text-sm">0</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-b-[#99999938]"></div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
