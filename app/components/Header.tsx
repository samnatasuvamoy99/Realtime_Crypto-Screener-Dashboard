"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {cn} from "@/lib/utils"
import { use } from "react";


function Header() {

      const pathname = usePathname();

      return (
            <header>
                  <div className="main-container inner">
                          <div className="flex gap-4">
<Link href="/">
        <Image src="logo.svg" alt="marketplace" width={55} height={25} className='rounded-3xl shadow-2xs border-2 border-none '/>
                        </Link> 
                                <div className="mt-2  -webkit-font-smoothing: antialiased, font-style: italic text-1xl  font-semibold  shadow-4xl">
                                     MarKetLedGer
                                </div>
                          </div>
                        
                          
                        {/* for link the all routes name  */}
                        <nav>
                            <Link href='/' className={cn('nav-link' ,{'is-active': pathname === '/' , 'is-home':true})}>
                            Home
                            </Link>

                            <p> Search Model</p>

                            <Link href='/coins' className={cn('nav-link' , {
                               'is-active' : pathname === "/coins",
                            })}
                            >
                              All Coins
                             </Link>

                        </nav>

                  </div>
            </header>
      )
}

export default Header