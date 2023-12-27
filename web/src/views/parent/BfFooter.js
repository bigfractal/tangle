import React from 'react';
import ReactDOM from 'react-dom';

export default function BfFooter() {
    return (

        <footer class="relative z-10 py-8 border-t border-gray-3">
            <div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
                <div
                    class="flex flex-wrap items-center justify-center flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-between">
                    <div>
                        <p class="text-custom-sm">&copy; 2023-2024 by Timothy Falconer</p>
                    </div>

                    <div>
                        <ul class="flex flex-wrap items-center gap-2.5">
                            <li>
                                <a target="_blank" href="https://bigfractal.atlassian.net/jira/software/c/projects/TAN/boards/2"
                                   class="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark">
                                    <span class="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">Jira</span>
                                </a>
                            </li>
                            <li>
                                <span class="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/bigfractal/tangle"
                                   class="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark">
                                    <span
                                        class="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">GitHub</span>
                                </a>
                            </li>
                            <li>
                                <span class="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                            </li>
                            <li>
                                <a target="_blank" href="https://primereact.org/autocomplete/"
                                   class="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark">
                                    <span
                                        class="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">PrimeReact</span>
                                </a>
                            </li>
                            <li>
                                <span class="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                            </li>
                            <li>
                                <a target="_blank" href="https://tailwindcss.com/docs/padding"
                                   class="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark">
                                    <span
                                        class="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">Tailwind</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div class="flex items-center gap-3">
                            <p class="font-medium text-custom-sm text-dark">Follow Me:</p>


                            <div class="flex items-center gap-1.5">
                                <a target="_blank" id="youtubeFooterBtn" aria-label="YouTube social link" href="https://www.youtube.com/@BigFractal"
                                   className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"
                                         viewBox="-35.20005 -41.33325 305.0671 247.9995">
                                        <path
                                            d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.554 7.652 7.602 15.655 4.904 25.817 0 44.237 0 82.667 0 82.667s0 38.43 4.904 56.85c2.698 10.162 10.65 18.164 20.747 20.881 18.3 4.935 91.682 4.935 91.682 4.935s73.383 0 91.683-4.935c10.097-2.717 18.048-10.72 20.747-20.88 4.904-18.422 4.904-56.851 4.904-56.851s0-38.43-4.904-56.85"
                                            fill="#282828"/>
                                        <path d="M93.333 117.558l61.334-34.89-61.334-34.893z" fill="#fff"/>
                                    </svg>
                                </a>
                                <a target="_blank" id="linkedinFooterBtn" aria-label="linkedin social link" href="https://www.linkedin.com/in/teefal/"
                                   className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark">
                                    <svg className="fill-current" width="19" height="18" viewBox="0 0 19 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.50004 3.50068C5.49976 4.11141 5.12924 4.661 4.56318 4.89028C3.99713 5.11957 3.34858 4.98277 2.92335 4.54439C2.49812 4.10601 2.38114 3.45359 2.62755 2.89478C2.87397 2.33597 3.43458 1.98236 4.04504 2.00068C4.85584 2.02502 5.5004 2.68951 5.50004 3.50068ZM5.54504 6.11068H2.54504V15.5007H5.54504V6.11068ZM10.2851 6.11068H7.30004V15.5007H10.2551V10.5732C10.2551 7.82816 13.8326 7.57316 13.8326 10.5732V15.5007H16.7951V9.55316C16.7951 4.92568 11.5001 5.09818 10.2551 7.37066L10.2851 6.11068Z"
                                            fill=""/>
                                    </svg>
                                </a>
                                <a target="_blank" id="twitterFooterBtn" aria-label="twitter social link" href="https://twitter.com/teefal"
                                        className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark">
                                <svg className="fill-current" width="19" height="18" viewBox="0 0 19 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_739_364)">
                                        <path
                                            d="M16.2781 4.30313L17.3469 2.95313C17.6562 2.5875 17.7406 2.30625 17.7688 2.16562C16.925 2.67188 16.1375 2.84063 15.6312 2.84063H15.4344L15.3219 2.72813C14.6469 2.1375 13.8031 1.82812 12.9031 1.82812C10.9344 1.82812 9.3875 3.45938 9.3875 5.34375C9.3875 5.45625 9.3875 5.625 9.41563 5.7375L9.5 6.3L8.90938 6.27188C5.30937 6.15938 2.35625 3.06563 1.87813 2.53125C1.09063 3.9375 1.54063 5.2875 2.01875 6.13125L2.975 7.70625L1.45625 6.8625C1.48438 8.04375 1.93437 8.97188 2.80625 9.64688L3.56562 10.2094L2.80625 10.5188C3.28437 11.9531 4.35313 12.5438 5.14062 12.7688L6.18125 13.05L5.19688 13.725C3.62188 14.85 1.65312 14.7656 0.78125 14.6813C2.55313 15.9188 4.6625 16.2 6.125 16.2C7.22188 16.2 8.0375 16.0875 8.23438 16.0031C16.1094 14.1469 16.475 7.11563 16.475 5.70938V5.5125L16.6438 5.4C17.6 4.5 17.9937 4.02188 18.2188 3.74063C18.1344 3.76875 18.0219 3.825 17.9094 3.85313L16.2781 4.30313Z"
                                            fill=""/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_739_364">
                                            <rect width="18" height="18" fill="white" transform="translate(0.5)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                                <a target="_blank" id="facebookFooterBtn" aria-label="facebook social link" href="https://www.facebook.com/yimmetee"
                                    class="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark">
                                <svg class="fill-current" width="19" height="18" viewBox="0 0 19 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.4 8.58585V6.07664C10.4 5.10529 11.2059 4.31785 12.2 4.31785H14V1.67966L11.5565 1.50912C9.47255 1.36368 7.7 2.97636 7.7 5.01777V8.58585H5V11.224H7.7V16.5H10.4V11.224H13.1L14 8.58585H10.4Z"
                                        fill=""/>
                                </svg>
                            </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}