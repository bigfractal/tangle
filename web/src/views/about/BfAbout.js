import React from 'react';
import ReactDOM from 'react-dom';
import "../../images/hero-bg.svg";
import "../../images/hero-01.png";
import "../../images/user-01.png";
import "../../images/hero-02.png";

export default function BfAbout() {
    return (

        <section id="home" class="rounded-b-[50px] relative overflow-hidden z-10 pb-10 pt-4">

            <div>
                <div class="absolute bottom-0 left-0 rounded-b-[50px] w-full h-full bg-gray"></div>
                <div class="hidden lg:block absolute bottom-0 left-0 rounded-b-[50px] w-full h-full">
                    <img src="./images/hero-bg.svg" alt="hero"/>
                </div>
            </div>

            <div class="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 relative z-1">
                <div class="flex flex-wrap gap-x-7.5 gap-y-9">

                    <div
                        class="max-w-[1170px] w-full flex flex-col lg:flex-row lg:items-center gap-7.5 lg:gap-11 bg-white shadow-1 rounded-xl p-4 lg:p-2.5">
                        <div class="lg:max-w-[536px] w-full">
                            <a href="blog-single.html"> <img class="w-full" src="./images/hero-01.png" alt="hero"/>
                            </a>
                        </div>

                        <div class="lg:max-w-[540px] w-full">
                            <a href="category.html"
                               class="inline-flex text-purple-dark bg-purple/[0.08] font-medium text-sm py-1 px-3 rounded-full mb-4">Habits</a>
                            <h1 class="font-bold text-custom-4 xl:text-heading-4 text-dark mb-4">
                                 About
                            </h1>
                            <p class="max-w-[524px]">
                                This comprehensive post serves as your cheat-sheet to swiftly familiarize yourself with
                                Ghost. Packed with crucial... </p>
                            <div class="flex items-center gap-2.5 mt-5">
                                <a href="author.html" class="flex items-center gap-3">
                                    <div class="flex w-6 h-6 rounded-full overflow-hidden">
                                        <img src="./images/user-01.png" alt="user"/>
                                    </div>
                                    <p class="text-sm">Adrio Devid</p>
                                </a>

                                <span class="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>

                                <p class="text-sm">Sep 10, 2025</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>

    );
}