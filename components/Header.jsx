import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex justify-between items-center gap-4  ">
      <div className="flex items-center gap-3 ">
                <h1 className=" font-bold text-xl bg-sky-500 text-white px-3 py-1 rounded md:text-5xl mx-1 my-2 "  >
                    D
                </h1>
                <p className="font-bold text-xl hover:text-sky-500 md:text-3xl lg:text-5xl">
                    Dozie
                </p>
      </div>

      <div className="flex gap-4 px-4 md:text-xl lg:text-2xl font-bold   ">
                <Link href="/">Home</Link>
                <Link href="/about">About Me </Link>
      </div>
    </div>
   
  )
}

export default Header
