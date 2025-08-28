import React, { useEffect, useState } from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function About() {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        axios
            .get("https://fn3.fixoo.uz/users/mentors")
            .then((res) => {
                setMentors(res.data.data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <Navbar />

            <section>
                <div className="max-w-[1300px] m-auto mt-[120px]">
                    <div className="max-w-[1250px] m-auto">
                        <strong className="text-[50px]">Biz haqimizda</strong>
                        <p className="text-gray-800">
                            IT LIVE ACADEMY - 08.09.2022 yil tashkil etilgan va hozirgacha
                            faoliyat olib kelmoqda. IT LIVE ACADEMY kompaniyasining asosiy
                            faoliyat turi ikkiga bo'linadi, -Kelajak kasblariga
                            <br /> o'qitish -IT sohasida xizmatlarini yetkazib berish dan
                            iborat.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-[1250px] m-auto mt-[50px]">
                    <strong className="text-[40px]">Media galareya</strong>
                    <div className="grid grid-cols-3 gap-[20px]">
                        <div>
                            <img src="assets/img1.png" alt="team" />
                        </div>
                        <div>
                            <img src="assets/img2.png" alt="team" />
                        </div>
                        <div>
                            <img src="assets/img3.png" alt="team" />
                        </div>
                    </div>
                    <div className="flex justify-between mt-[20px] gap-[20px]">
                        <div>
                            <img src="assets/img4.png" alt="team" />
                        </div>
                        <div>
                            <img src="assets/img5.png" alt="team" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 p-5">
                <div className="max-w-[1250px] m-auto mt-[50px]">
                    <strong className="text-[40px] block mb-8">
                        Sertifikat va guvohnomalar
                    </strong>
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

            <section className="mt-[120px] max-w-[1120px] mx-auto flex flex-col gap-5 items-center text-center">
                <h1 className="text-5xl font-bold">Tajribali Mentorlar</h1>
                <p className="mt-2 text-[20px]">
                    Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan
                </p>

                {mentors.length > 0 ? (
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="w-full mt-10"
                    >
                        {mentors.map((el, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative h-[400px] w-[300px] rounded-3xl overflow-hidden group mx-auto">
                                    <img
                                        src={`https://fn3.fixoo.uz/uploads/mentors/${el.image}`}
                                        alt={el.fullName}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all"></div>
                                    <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[90%] py-4 bg-gray-800/90 rounded-xl text-white text-center transition-all duration-500 group-hover:bottom-6">
                                        <h2 className="font-bold text-lg">{el.fullName}</h2>
                                        <p className="text-sm">{el.role}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p className="text-gray-500">Mentorlar hozircha mavjud emas</p>
                )}
            </section>

            <Footer />
        </>
    );
}

export default About;
