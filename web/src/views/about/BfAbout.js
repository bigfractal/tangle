import React from 'react';
import ReactDOM from 'react-dom';
import "../../images/tangleBannerShort.png"

export default function BfAbout() {
    return (

        <section id="home" class="rounded-b-[50px] relative overflow-hidden z-10 pb-10 pt-4">

            <div class="mx-auto max-w-[1200px] px-4 sm:px-8 xl:px-0 relative z-1">
                <div class="mx-auto max-w-[900px] ">

                    <div
                        class="w-full bg-white shadow-1 rounded-xl p-4 lg:p-2.5">
                        <div class="lg:max-w-[900px] items-center w-full">
                            <img class="w-full" src="./images/tangleBannerShort.png" alt="tangle banner"/>
                        </div>

                        <div class="mx-auto lg:max-w-[800px] w-full p-10 text-xl leading-10">
                            <p className="mb-4">
                                Tired of software dev tutorials with both too much and too little detail? Want to know how it's really done at the highest level?
                            </p>
                            <p className="mb-4">
                                Follow 30-year software veteran Timothy Falconer as he teaches everything all at once while building a full end-to-end software product. Learn best practices gathered while working for clients such as Meta, Lowes, Marriott, and many others.
                            </p>
                            <p className="">
                                Whether leading teams of 80+ on multi-million dollar projects or helping companies transform into a streamlined digital future, Tim has a knack for finding the simple, and teaching it too.
                            </p>
                        </div>
                    </div>



                </div>
            </div>
        </section>

    );
}