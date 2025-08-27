import React from 'react'
import Navbar from '../components/Header'
import Footer from '../components/Footer'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa'

function About() {
    return (
        <>
            <Navbar />

            <section>
                <div className="max-w-[1300px] m-auto mt-[120px]">
                    <div className='max-w-[1250px] m-auto'>
                        <strong className="text-[50px]">Biz haqimizda</strong>
                        <p className='text-gray-800'>
                            IT LIVE ACADEMY - 08.09.2022 yil tashkil etilgan va hozirgacha faoliyat olib kelmoqda. IT LIVE ACADEMY kompaniyasining asosiy faoliyat turi ikkiga bo'linadi, -Kelajak kasblariga <br /> o'qitish -IT sohasida xizmatlarini yetkazib berish dan iborat. Bizning akademiyamiz axborot texnologiyalarining barcha tendensiyalari bilan yaqindan <br /> tanishtiradi. Shinam o‘quv binosi va zamonaviy texnologiyalarga asoslangan kurslar dasturi bilan yurtimizning eng yirik, xalqaro kompaniyalarida IT karyerangizni <br /> boshlaysiz.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className='max-w-[1250px] m-auto mt-[50px]'>
                    <strong className="text-[40px]">Media galareya</strong>
                    <div className='grid grid-cols-3 gap-[20px]'>
                        <div>
                            <img
                                src="assets/img1.png"
                                alt="team"
                            />
                        </div>
                        <div>
                            <img
                                src="assets/img2.png"
                                alt="team"
                            />
                        </div>
                        <div>
                            <img
                                src="assets/img3.png"
                                alt="team"
                            />
                        </div>
                    </div>
                    <div className='flex justify-between mt-[20px] gap-[20px]'>
                        <div>
                            <img
                                src="assets/img4.png"
                                alt="team"
                                className=""
                            />
                        </div>

                        <div>
                            <img
                                src="assets/img5.png"
                                alt="team"
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 p-5">
                <div className="max-w-[1250px] m-auto mt-[50px]">
                    <strong className="text-[40px] block mb-8">Sertifikat va guvohnomalar</strong>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                        <div className="rounded-xl shadow-md overflow-hidden w-full max-w-[300px]">
                            <img
                                src="assets/guvohnoma.jpg"
                                alt="guvohnoma"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="rounded-xl shadow-md overflow-hidden w-full max-w-[300px]">
                            <img
                                src="assets/guvohnoma.jpg"
                                alt="guvohnoma"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-6 w-full max-w-[300px]">
                            <div className="rounded-xl shadow-md overflow-hidden">
                                <img
                                    src="assets/guvohnoma-itpark (1).jpg"
                                    alt="itpark guvohnoma"
                                    className="w-full h-[195px] object-cover"
                                />
                            </div>
                            <div className="rounded-xl shadow-md overflow-hidden">
                                <img
                                    src="assets/guvohnoma-itpark (1).jpg"
                                    alt="itpark guvohnoma"
                                    className="w-full h-[195px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="max-w-[1300px] m-auto mt-[50px]">
                    <div className='mt-[120px]'>
                        <p className='text-center'><strong className='text-[40px]'>Tajribali Mentorlar</strong> <br /> <span className='text-[20px] text-gray-600'> Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan</span>
                        </p>

                    </div>
                    <div className="flex justify-between mt-[20px] gap-[20px]">

                        {Array(4)
                            .fill(0)
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className="relative w-[350px] h-[380px] overflow-hidden rounded-xl shadow-lg group"
                                >
                                    <img
                                        src="assets/Screenshot from 2025-08-26 15-48-02.png"
                                        alt="team"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                                        <h3 className="text-white text-lg font-semibold">Safarov Oybek</h3>
                                        <p className="text-gray-300 text-sm mb-2">Mobile dasturchi</p>

                                        <div className="flex gap-3 text-white text-xl">
                                            <a href="#"><FaTelegram className="hover:text-blue-400" /></a>
                                            <a href="#"><FaInstagram className="hover:text-pink-400" /></a>
                                            <a href="#"><FaFacebook className="hover:text-blue-500" /></a>
                                            <a href="#"><FaGithub className="hover:text-gray-400" /></a>
                                            <a href="#"><FaLinkedin className="hover:text-blue-600" /></a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section >
            <Footer />
        </>
    )
}

export default About