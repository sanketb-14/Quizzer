import React from 'react'

function Main({children}) {
  return (
    <div className=' bg-base-100   min-h-screen flex justify-center w-full  '>
          <div className="w-screen flex justify-center flex-col items-center  m-8 rounded-xl bg-base-200 ">
              {children}
        </div>
    </div>
  )
}

export default Main