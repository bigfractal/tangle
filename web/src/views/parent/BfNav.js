import React from 'react';
import ReactDOM from 'react-dom';
import "../../images/tangleLogo.png";
import {useNavigate} from "react-router-dom";
import {Button} from "primereact/button";

export default function BfNav() {
    const navigate = useNavigate();
    return (
<>
        <header class="flex-auto w-full z-9999 bg-white py-7 lg:py-0 transition-all ease-in-out duration-300">
            <div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-between relative">
                <div class="max-w-sm lg:w-3/12 flex items-center justify-between">
                    <Button link id="appTitle" onClick={ () => navigate( "/" ) }> <img src="/images/tangleLogo.png" alt="Logo"/> </Button>

                    <button id="menuToggler" aria-label="button for menu toggle" class="bg-red-500 lg:hidden block">
                      <span class="block relative cursor-pointer w-5.5 h-5.5">
                          <span class="du-block absolute right-0 w-full h-full">
                            <span
                                class="block relative top-0 left-0 bg-dark rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-[0]"> </span>
                            <span
                                class="block relative top-0 left-0 bg-dark rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150"> </span>
                            <span
                                class="block relative top-0 left-0 bg-dark rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200"> </span>
                          </span>
                          <span class="du-block absolute right-0 w-full h-full rotate-45">
                            <span
                                class="block bg-dark rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-full"> </span>
                            <span
                                class="block bg-dark rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-2.5 w-full h-0.5"> </span>
                          </span>
                        </span>
                    </button>

                </div>

                <div class="w-full lg:w-8/12 h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between">

                    <nav>
                        <ul class="flex lg:items-center flex-col lg:flex-row gap-5 lg:pl-6 lg:gap-10">

                            <li className="nav__menu lg:py-6.5">
                                <Button link onClick={ () => navigate( "/" ) } className="hover:text-dark">About</Button>
                            </li>
                            <li className="nav__menu lg:py-6.5">
                                <Button link onClick={ () => navigate( "/episodes" ) } className="hover:text-dark">Episodes</Button>
                            </li>
                            <li class="nav__menu lg:py-6.5">
                                <Button link onClick={ () => navigate( "/signup" ) } class="hover:text-dark">Signup</Button>
                            </li>
                            <li className="nav__menu lg:py-6.5">
                                <Button link onClick={ () => navigate( "/login" ) } className="hover:text-dark">Login</Button>
                            </li>
                        </ul>
                    </nav>

                    <div class="flex flex-wrap items-center gap-8.5 mt-7 lg:mt-0">

                        <div class="flex items-center gap-4.5">

                            <button id="searchModalButton" aria-label="button for modal open"
                                    class="flex items-center justify-center w-11 h-11 rounded-full bg-gray lg:transition-all lg:ease-linear lg:duration-200 hover:bg-gray-2 hover:text-dark">
                                <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.1875 17.4063L14.0313 13.2188C16.1563 10.3125 15.9375 6.15625 13.2812 3.53125C11.875 2.125 10 1.34375 8 1.34375C6 1.34375 4.125 2.125 2.71875 3.53125C-0.1875 6.4375 -0.1875 11.1875 2.71875 14.0938C4.125 15.5 6 16.2813 8 16.2813C9.90625 16.2813 11.6875 15.5625 13.0938 14.2813L18.3125 18.5C18.4375 18.5938 18.5938 18.6563 18.75 18.6563C18.9688 18.6563 19.1562 18.5625 19.2812 18.4063C19.5312 18.0938 19.5 17.6563 19.1875 17.4063ZM8 14.875C6.375 14.875 4.875 14.25 3.71875 13.0938C1.34375 10.7188 1.34375 6.875 3.71875 4.53125C4.875 3.375 6.375 2.75 8 2.75C9.625 2.75 11.125 3.375 12.2812 4.53125C14.6562 6.90625 14.6562 10.75 12.2812 13.0938C11.1562 14.25 9.625 14.875 8 14.875Z"
                                        fill=""/>
                                </svg>
                            </button>

                            <button
                                class="rounded-md text-white font-medium flex py-2.5 px-5.5 bg-dark hover:opacity-90 lg:transition-all lg:ease-linear lg:duration-200">
                                Subscribe
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </header>

</>

);
}
