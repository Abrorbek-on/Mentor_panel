import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    const [open, setOpen] = useState(false);
    return (

        <>

            <section className="w-full py-8 flex justify-center mt-[50px]">
                <div className='max-w-[1300px] m-auto'>
                    <div className='flex justify-center'>
                        <img
                            src="/assets/logo-dark.svg"
                            alt="IT Live Logo"
                            className=""
                        />
                    </div><br />
                    <strong className='text-[25px] flex justify-center'>Biz bilan muvaffaqiyatga erishing</strong>
                    <p className='text-gray-600 flex justify-center'>Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan</p>

                    <div className='flex gap-[30px] justify-center py-6'>
                        <button
                            className="border w-[25%] h-[40px] rounded-sm hover:bg-gray-100 transition-all"
                            onClick={() => setOpen(true)}
                        >
                            Intro video
                        </button>
                        {open && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                <div className="bg-white p-4 rounded-lg w-[80%] max-w-[600px] relative">
                                    <button
                                        className="absolute top-2 right-2 text-gray-500 hover:text-black"
                                        onClick={() => setOpen(false)}
                                    >
                                        ✖
                                    </button>

                                    <div className="aspect-video">
                                        <iframe
                                            width="100%"
                                            height="315"
                                            src="https://www.youtube.com/embed/0mqjPKMcku0?si=Ljt9D4JzID1G7dvL"
                                            title="Intro Video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        )}

                        <Link
                            to="/boglanish"
                            className="bg-blue-500 text-white w-[25%] h-[40px] rounded-sm flex items-center justify-center hover:bg-blue-600 transition-all"
                        >
                            Bog`lanish
                        </Link>


                    </div>
                </div>
            </section>

            <section>
                <div className='max-w-[1300px] m-auto'>
                    <hr /><br />
                    <div className='flex justify-between'>
                        <div>
                            <p>© ITLIVE 2024. Barcha huquqlar himoyalangan</p>
                        </div>
                        <div>
                            <p>Xavfsizlik</p>
                        </div>
                    </div>
                </div><br />
            </section></>
    )
}

export default Footer