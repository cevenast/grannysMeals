export default function Hamburger({handleHamburgerClick, handleHamburgerBlur}){
    return(
        <button type="button" id="hamburger-btn" onClick={handleHamburgerClick} onBlur={handleHamburgerBlur} className="
                                                                        p-2 ml-1 text-gray-500 rounded-lg
                                                                        sm:hidden
                                                                        hover:bg-gray-100 
                                                                        focus:outline-none focus:ring-2 focus:ring-gray-200 
                                                                        dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
                                                                    "                                             >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>

    )
}
