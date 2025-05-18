import React from "react";
import MobileSidebar from "./MobileSidebar";
import links, { NavLinkType } from "./links";
import Image from "next/image";
import NavLink from "./NavLink";
import logoKodia from "@/assets/images/logo-kodia-white.png";
import AvatarImg from "@/assets/images/image-avatar.png";

const Navbar = () => {
  return (
    <nav className="bg-dark-blue text-gray w-full lg:w-[156px] lg:p-7">
      <div className="flex bg-semi-dark-blue px-6 items-center min-h-[90px] lg:rounded-[20px] lg:p-8 lg:flex-col lg:h-[calc(100vh-60px)] lg:gap-6">
        <MobileSidebar>
          <NavLinks />
        </MobileSidebar>
        <div className="flex justify-center items-center md:justify-start md:pl-10 lg:pl-0 grow lg:grow-0">
          <div className="relative w-[100px] h-[20px] lg:w-[76px]">
            <Image
              alt="kodia-logo"
              src={logoKodia}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col grow">
          <NavLinks />
        </div>
        <div className="block relative w-[32px] h-[32px] border-[1px] border-white rounded-full">
          <Image
            src={AvatarImg}
            alt="logo-avatar"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

function NavLinks() {
  return (
    <>
      {links.map((link: NavLinkType) => {
        const { text, path, id, icon: Icon } = link;
        return (
          <NavLink key={id} href={path}>
            <div className="block w-[16px] h-[16px] cursor-pointer md:w-[24px] md:h-[24px]">
              <Icon className="w-full block" />
            </div>
            <div className="lg:opacity-0 group-hover:lg:opacity-100 text-sm font-semibold lg:text-sm lg:font-normal lg:capitalize lg:max-w-[100px] lg:truncate">
              {text}
            </div>
          </NavLink>
        );
      })}
    </>
  );
}
