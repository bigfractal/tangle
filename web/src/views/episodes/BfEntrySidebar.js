import React from 'react';
import ReactDOM from 'react-dom';

export default function BfEntrySidebar() {
    return (
        <div class="max-w-[370px] w-full">
            <div className="flex flex-col gap-10">
                <div
                    className="max-w-[370px] w-full rounded-[10px] border border-gray-3 p-4 sm:p-7.5 lg:p-10"
                >
                    <h4 className="font-semibold text-custom-4 text-dark mb-7.5">
                        Recent Posts
                    </h4>

                    <div className="flex flex-col gap-7.5">

                        <a href="blog-single-3.html" className="group flex gap-6.5">
                            <div className="max-w-[70px] w-full h-17.5 rounded-full">
                                <img src="./images/blog/blog-small-01.png" alt="blog" />
                            </div>

                            <div>
                                <h5
                                    className="font-medium text-sm text-dark duration-200 ease-in mb-1.5 group-hover:text-primary"
                                >
                                    The Most Beautiful Green Field on Earth
                                </h5>

                                <div className="flex items-center gap-2">
                                    <p className="text-custom-xs">Rhiel Madsen</p>
                                    <span
                                        className="flex w-[3px] h-[3px] rounded-full bg-dark-2"
                                    ></span>
                                    <p className="text-custom-xs">Sep 10, 2025</p>
                                </div>
                            </div>
                        </a>

                        <a href="blog-single-3.html" className="group flex gap-6.5">
                            <div className="max-w-[70px] w-full h-17.5 rounded-full">
                                <img src="./images/blog/blog-small-02.png" alt="blog" />
                            </div>

                            <div>
                                <h5
                                    className="font-medium text-sm text-dark duration-200 ease-in mb-1.5 group-hover:text-primary"
                                >
                                    Facts About Business That Will Help You Success
                                </h5>

                                <div className="flex items-center gap-2">
                                    <p className="text-custom-xs">Jordyn Culhne</p>
                                    <span
                                        className="flex w-[3px] h-[3px] rounded-full bg-dark-2"
                                    ></span>
                                    <p className="text-custom-xs">Mar 12, 2025</p>
                                </div>
                            </div>
                        </a>

                        <a href="blog-single-3.html" className="group flex gap-6.5">
                            <div className="max-w-[70px] w-full h-17.5 rounded-full">
                                <img src="./images/blog/blog-small-03.png" alt="blog" />
                            </div>

                            <div>
                                <h5
                                    className="font-medium text-sm text-dark duration-200 ease-in mb-1.5 group-hover:text-primary"
                                >
                                    5 Easy Ways You Can Turn Future Into Success
                                </h5>

                                <div className="flex items-center gap-2">
                                    <p className="text-custom-xs">Ane Madsen</p>
                                    <span
                                        className="flex w-[3px] h-[3px] rounded-full bg-dark-2"
                                    ></span>
                                    <p className="text-custom-xs">Nov 25, 2025</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div
                    className="max-w-[370px] w-full rounded-[10px] border border-gray-3 p-4 sm:p-7.5 lg:p-10"
                >
                    <h4 className="font-semibold text-custom-4 text-dark mb-8">
                        Explore Topics
                    </h4>

                    <div className="flex flex-col gap-3">
                        <a
                            href="#"
                            className="group flex items-center justify-between gap-2"
                        >
                            <p className="ease-in duration-200 group-hover:text-dark">
                                Celebration
                            </p>

                            <span
                                className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-dark group-hover:border-dark"
                            >
                        02
                      </span>
                        </a>

                        <a
                            href="#"
                            className="group flex items-center justify-between gap-2"
                        >
                            <p className="ease-in duration-200 group-hover:text-dark">
                                Culture
                            </p>

                            <span
                                className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-dark group-hover:border-dark"
                            >
                        05
                      </span>
                        </a>

                        <a
                            href="#"
                            className="group flex items-center justify-between gap-2"
                        >
                            <p className="ease-in duration-200 group-hover:text-dark">
                                Fashion
                            </p>

                            <span
                                className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-dark group-hover:border-dark"
                            >
                        12
                      </span>
                        </a>

                        <a
                            href="#"
                            className="group flex items-center justify-between gap-2"
                        >
                            <p className="ease-in duration-200 group-hover:text-dark">
                                Inspiration
                            </p>

                            <span
                                className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-dark group-hover:border-dark"
                            >
                        30
                      </span>
                        </a>

                        <a
                            href="#"
                            className="group flex items-center justify-between gap-2"
                        >
                            <p className="ease-in duration-200 group-hover:text-dark">
                                Lifestyle
                            </p>

                            <span
                                className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-dark group-hover:border-dark"
                            >
                        45
                      </span>
                        </a>

                        <a
                            href="#"
                            className="group flex items-center justify-between gap-2"
                        >
                            <p className="ease-in duration-200 group-hover:text-dark">
                                Political
                            </p>

                            <span
                                className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-dark group-hover:border-dark"
                            >
                        23
                      </span>
                        </a>

                        <a
                            href="#"
                            className="group flex items-center justify-between gap-2"
                        >
                            <p className="ease-in duration-200 group-hover:text-dark">
                                Trending
                            </p>

                            <span
                                className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-custom-sm border border-gray-3 ease-in duration-200 group-hover:text-white group-hover:bg-dark group-hover:border-dark"
                            >
                        03
                      </span>
                        </a>
                    </div>
                </div>

                <div
                    className="max-w-[370px] w-full rounded-[10px] border border-gray-3 p-4 sm:p-7.5 lg:p-10"
                >
                    <h4 className="font-semibold text-custom-4 text-dark mb-7.5">
                        Newsletter
                    </h4>
                    <p className="font-medium text-custom-lg mb-5.5">
                        Join 70,000 subscribers!
                    </p>

                    <form>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your Email"
                            className="rounded-md border border-gray-3 bg-white placeholder:text-dark-5 w-full py-3.5 px-5 outline-none text-center focus:shadow-input focus:ring-2 focus:ring-dark-4/20 focus:border-transparent"
                        />
                        <button
                            class="font-medium rounded-md text-white bg-dark flex justify-center text-center w-full py-3 px-5 hover:opacity-90 transition-all duration-200 mt-4"
                        >
                            Subscribe Now
                        </button>
                    </form>

                    <p class="text-custom-sm mt-5 text-center">
                        By signing up, you agree to our
                        <a href="privacy-policy.html" class="text-dark"
                        >Privacy Policy</a
                        >
                    </p>
                </div>
            </div>
        </div>
    );
}