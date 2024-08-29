import React from 'react'

const Skills = () => {
  return (
       <div className="py-0 grid gap-3 items-center justify-center">
                <h1 className="text-xl text-white font-bold text-center md:text-3xl ">
                    SKILLS
                </h1>
                <div className="grid grid-cols-1 gap-4 font-medium md:grid-cols-2 text-3xl  lg:grid-cols-2 lg:text-5xl ">
                    <div className=" bg-slate-600 text-center rounded-lg  min-h-20 min-w-96 "> 
                        HTML
                    </div>
                    <div className=" bg-slate-600 text-center rounded-lg   min-h-20 min-w-96">
                         CSS 
                    </div>
                    <div className=" bg-slate-600 text-center rounded-lg  min-h-20 min-w-96"> 
                        Nextjs 
                    </div>
                    <div className=" bg-slate-600 text-center rounded-lg  min-h-20 min-w-96  "> 
                        Tailwindcss 
                    </div>
                </div>
         </div>
  )
}

export default Skills
