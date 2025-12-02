import React from 'react';
import imgi from "../../../assets/home/knowmore/about-01.png"; // Woman in Pink
import imgii from "../../../assets/home/knowmore/about-02.png"; // Man
import imgiii from "../../../assets/home/knowmore/about-03.png"; // Woman in Green
import Image from "next/image";

const T = () => {
    return (
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-[1350px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left Column: Image Composition */}
                    {/* Increased height to accommodate larger images */}
                    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
                        
                        {/* Image 2: Top Right (Man) */}
                        {/* Positioned at top right, sits behind */}
                        <div className="absolute top-0 right-0 lg:right-4 w-[180px] md:w-[240px] lg:w-[260px] h-[180px] md:h-[240px] lg:h-[260px] rounded-2xl overflow-hidden z-0">
                            <div className="w-full h-full bg-[#E6CFA5]"> {/* Beige background */}
                                <Image 
                                    src={imgii} 
                                    alt="Student" 
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>

                        {/* Image 1: Main Left (Woman in Pink) */}
                        {/* Significantly larger and positioned to the left */}
                        <div className="absolute top-10 md:top-14 left-0 w-[260px] md:w-[340px] lg:w-[380px] h-[340px] md:h-[440px] lg:h-[480px] rounded-2xl overflow-hidden z-10 shadow-2xl">
                            <div className="w-full h-full bg-[#D142FF]"> {/* Vibrant Purple background */}
                                <Image 
                                    src={imgi} 
                                    alt="Student" 
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>

                        {/* Image 3: Bottom Right (Woman in Green) */}
                        {/* Overlaps the bottom right area */}
                        <div className="absolute bottom-0 right-4 lg:right-12 w-[220px] md:w-[280px] lg:w-[320px] h-[280px] md:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden z-20 shadow-2xl">
                            <div className="w-full h-full bg-[#2E9E67]"> {/* Green background */}
                                <Image 
                                    src={imgiii} 
                                    alt="Instructor" 
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full pl-0 lg:pl-8">
                        {/* Tag */}
                        <div className="inline-block px-4 py-2 bg-[#FEF2F2] rounded-full mb-5">
                            <span className="text-[#FF6B6B] font-bold text-xs md:text-sm uppercase tracking-wider">
                                Know About Us
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#111827] leading-[1.15] mb-8">
                            Know About Histudy Learning Platform
                        </h2>

                        {/* Description */}
                        <p className="text-gray-500 text-lg leading-relaxed mb-10">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                        </p>

                        {/* Features List */}
                        <div className="space-y-8 mb-12">
                            {/* Feature 1 */}
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#FEF2F2] flex items-center justify-center text-[#FF6B6B]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Flexible Classes</h4>
                                    <p className="text-gray-500 text-base leading-relaxed">
                                        It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 - Learn From Anywhere (Included for completeness based on design context) */}
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#3B82F6]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Learn From Anywhere</h4>
                                    <p className="text-gray-500 text-base leading-relaxed">
                                        Sed distinctio repudiandae eos recusandae laborum eaque non eius iure suscipit laborum eaque non eius iure suscipit.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="group inline-flex items-center gap-2.5 bg-[#8053FA] hover:bg-[#6a42d4] text-white text-lg font-semibold px-9 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                            More About Us
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default T;