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
                    <Button id="navLogo" link id="appTitle" onClick={ () => navigate( "/" ) }> <img src="/images/tangleLogo.png" alt="Logo"/> </Button>

                </div>

                <div class="w-full lg:w-8/12 h-0 lg:h-auto lg:flex items-center justify-between">

                    <nav>
                        <ul class="flex lg:items-center ml-3 mt-3 lg:ml-0 lg:mt-0 flex-row gap-5 lg:pl-6 lg:gap-10">

                            <li className="nav__menu lg:py-6.5">
                                <Button id="navEpisodes" link onClick={ () => navigate( "/episodes" ) } className="hover:text-dark">Episodes</Button>
                            </li>
                            <li className="nav__menu lg:py-6.5">
                                <Button id="navAbout" link onClick={ () => navigate( "/about" ) } className="hover:text-dark">About</Button>
                            </li>
                        </ul>
                    </nav>

                    <div class="flex flex-wrap items-center gap-8.5 mt-7 lg:mt-0">

                        <div class="flex items-center gap-4.5">

                            <button onClick={ () => location.href = "https://www.youtube.com/@BigFractal" }
                                class="rounded-md text-white font-medium flex py-2.5 px-5.5 bg-dark hover:opacity-90 lg:transition-all lg:ease-linear lg:duration-200">
                                YouTube
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </header>

</>

);
}
