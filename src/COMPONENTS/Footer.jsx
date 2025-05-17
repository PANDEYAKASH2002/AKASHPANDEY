import React from 'react'

function Footer() {
     const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <footer className="bg-black  shadow-sm  " >
    <div className=" mx-20 p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/logo.png" className="h-8 rounded-xl" alt=" Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>
            </a>
            <ul className="flex flex-wrap items-center  text-sm font-medium text-gray-500  dark:text-gray-400">
                <li>
                    <button onClick={() => handleScroll("about")} className="hover:underline text-yellow-500 text-xl px-1">About</button>
                </li>
                <li>
                   <button  className="hover:underline text-yellow-500 text-xl px-1">Privacy Policy</button>
                </li>
                <li>
                    <button onClick={() => handleScroll("contact")} className="hover:underline text-yellow-500 text-xl px-1">Contact</button>
                </li>
              
             
            </ul>
            <ul className='text-white'>
                <li>pandeyaakash7491@gmail.com</li>
                <li>+918957447491</li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline"></a>. All Rights Reserved.</span>
    </div>
</footer>
    </div>
  )
}

export default Footer
