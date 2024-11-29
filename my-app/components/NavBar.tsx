'use client'
import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"
import { useState } from "react"
import React from "react"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className=" flexBetween max-container
     padding-container relative z-30 py-5">
        <Link href="/">
         <Image src="/hilink-logo.svg" alt="Logo" width={74} height={29}/>
         </Link>

         <ul className={`${menuOpen ? "flex-col absolute top-[4rem] lg:relative lg:top-0" : ""}hidden h-full gap-12 lg:flex lg:flex-row`}>
          {NAV_LINKS.map((link)=> (
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
          <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"/>
        </ul>

        
        <Image 
          src='menu.svg'
          alt="menu"
          width={32}
          height={32}
          className="inline-block lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}/>
          
       
     </nav>
)
}

export default NavBar