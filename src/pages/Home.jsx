import React, { useState } from 'react'
import Navbar from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const categories = [
    "Barcha kurslar",
    "Backend",
    "Frontend",
    "Foundation",
    "Mobil",
    "IT Matematika",
    "Buxgalteriya",
];

function Home() {
    const [active, setActive] = useState("Barcha kurslar");

    return (
        <>
            <Navbar />
            <section className="w-full bg-white py-8">
                <div className="max-w-[1300px] m-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">
                    <div className="text-center md:text-left max-w-xl">
                        <h1 className="text-4xl md:text-[65px] font-bold leading-snug">
                            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                                Kelajak kasblarini
                            </span>{" "} biz bilan o‘rganing!

                        </h1>
                        <p className="mt-4 text-gray-600 text-lg">
                            Dasturlashni arzon va sifatli o‘qib, o‘z karyerangizni quring.
                        </p>
                        <Link
                            to="/kurslar"
                            className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full shadow-md transition inline-block"
                        >
                            Kurslar bilan tanishish
                        </Link>

                    </div>
                    <div className="mt-[80px] md:mb-0">
                        <img
                            src="/assets/home.png"
                            alt="Hero"
                            className="max-w-sm md:max-w-md lg:max-w-lg"
                        />
                    </div>
                </div>
            </section>

            <section className='w-full bg-white py-8'>
                <div className='max-w-[1300px] m-auto'>
                    <span className='flex justify-center text-[60px]'>
                        <strong>Ommabop kurslar</strong>
                    </span>
                    <p className='text-center text-[20px] text-gray-600 mb-6'>
                        Kasbga yo'naltirilgan amaliy mashg'ulotlar yordamida tez va samarali ravishda mutaxassislar safiga qo'shiling. Har bir mashg'ulot <br /> sohaning yetakchi mutaxassislari tomonidan eng zamonaviy o'quv dasturi asosida tayyorlangan.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center py-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`px-4 py-2 rounded-md border text-sm font-medium transition 
                                    ${active === cat
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "text-blue-600 border-blue-600 hover:bg-blue-100"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-start justify-start">
                        <div className="flex gap-6">
                            <div className="w-[380px] h-[410px] bg-white rounded-sm shadow-lg overflow-hidden">
                                <div className="relative">
                                    <img
                                        src="assets/pbf_fd37e99b-5b08-4e7f-b4af-595bb64707bf.png"
                                        alt="Laravel"
                                        className="w-full h-[180px] object-cover bg-red-500"
                                    />
                                    <span className="absolute top-3 left-3 bg-red-300 text-white text-sm font-semibold px-3 py-1 rounded-full">
                                        PHP LARAVEL
                                    </span>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <img
                                            src="assets/Screenshot from 2025-08-26 15-48-02.png"
                                            alt="Instructor"
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <h3 className="text-gray-700 font-semibold">Ergashev Abdulla</h3>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3">PHP LARAVEL</h2>

                                    <div className="flex justify-between items-center mb-3">
                                        <p className="text-gray-600">Chegirma:</p>
                                        <span className="text-xl font-bold">60%</span>
                                    </div>

                                    <p className="text-gray-600 mb-1">Kurs narxi:</p>
                                    <div className="flex items-center gap-3 justify-between">
                                        <span className="line-through text-gray-400 text-lg">
                                            997500 UZS
                                        </span>
                                        <span className="text-2xl font-bold text-black">399000 UZS</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[380px] h-[410px] bg-white rounded-sm shadow-lg overflow-hidden">
                                <div className="relative">
                                    <img
                                        src="assets/pbf_e6f6d199-accf-4f46-bb94-449c4997686e.png"
                                        alt="Laravel"
                                        className="w-full h-[180px] object-cover"
                                    />
                                    <span className="absolute top-3 left-3 bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                                        Foundation
                                    </span>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <img
                                            src="assets/Screenshot from 2025-08-26 15-48-02.png"
                                            alt="Instructor"
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <h3 className="text-gray-700 font-semibold">Safarov Oybek</h3>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3">FOUNDATION</h2>

                                    <div className="flex justify-between items-center mb-3">
                                        <p className="text-gray-600">Chegirma:</p>
                                        <span className="text-xl font-bold">60%</span>
                                    </div>

                                    <p className="text-gray-600 mb-1">Kurs narxi:</p>
                                    <div className="flex items-center gap-3 justify-between">
                                        <span className="line-through text-gray-400 text-lg">
                                            747500 UZS
                                        </span>
                                        <span className="text-2xl font-bold text-black">299000 UZS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-12">
                        <Button variant="contained" className="!px-[30px] !py-2 !rounded-2xl">Ko`proq korish</Button>


                    </div>


                    <div className='mt-[50px]'>
                        <span className='text-[60px]'>
                            <strong>Bizga qo'shiling</strong>
                        </span>
                        <p className='text-[20px] text-gray-600 mb-6'>Bizning safimizga nafaqat o’rganuvchi balki yetarlicha tajribangiz bo’lsa mentor sifatida ham qo’shilishingiz mumkin.</p>
                    </div>
                    <div className='flex justify-between ml-[50px]'>
                        <div>
                            <span><strong className='text-[30px]'>O'quvchimisiz?</strong> <br /><br /> Agarda o’quvchi bo’lsangiz bizning xalqaro darajadagi tajribali <br /> mentorlarimizga shogird bo’ling</span><br /><br />
                            <Link
                                to="/login"
                                className="inline-flex items-center px-4 py-2 rounded-xl bg-blue-500 text-white font-medium shadow-sm hover:bg-blue-600 transition">Boshlash </Link>
                        </div>
                        <div>
                            <span><strong className='text-[30px]'>Mentormisiz?</strong> <br /><br /> Bizning mualliflar jamoamizga qo’shilib, o’z tajribangizni boshqalar <br /> bilan oson va qulay platforma orqali ulashing</span><br /><br />
                            <Link
                                to="/login"
                                className="inline-flex items-center px-4 py-2 rounded-xl bg-blue-500 text-white font-medium shadow-sm hover:bg-blue-600 transition">Boshlash </Link>
                        </div>
                    </div>
                </div>


            </section >

            <section className="w-full bg-blue-500 py-12">
                <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10">

                    <div className="max-w-[600px] text-center md:text-left">
                        <h2 className="text-white text-4xl md:text-5xl font-bold leading-snug">
                            Istalgan nuqtadan onlayn <br /> o’qish imkoniyati
                        </h2>
                        <p className="text-white text-lg mt-4">
                            Biz sizga bu imkoniyatni taqdim qilamiz
                        </p>
                        <Link
                            to="/login"
                            className="bg-white text-black mt-10 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block"
                        >
                            Ro'yxatdan o'tish
                        </Link>



                    </div>

                    <div className="max-w-[500px] w-full">
                        <img src="assets/3d-img.webp" alt="Online Study" className="w-full object-contain" />
                    </div>

                </div>


            </section>

            <section>
                <div className="max-w-[1300px] m-auto mt-[50px]">
                    <p className='text-center'><strong className='text-[40px]'>Tajribali Mentorlar</strong> <br /> <span className='text-[20px] text-gray-600'> Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan</span>

                    </p>
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
            </section>

            <section>
                <div className='max-w-[1300px] m-auto mt-[50px]'>
                    <strong className='text-[40px] justify-center flex'>Izohlar</strong>
                    <span className='text-[20px] text-gray-600 mb-6 flex justify-center'>
                        O’quvchilarimiz tomonidan qoldirilgan izohlar</span>

                    <div className='flex justify-between'>
                        <div className="border w-[400px] h-[180px] rounded-2xl p-4 shadow-md bg-white">
                            <div>
                                <img src="assets/quote.png" alt="quote" className="w-[40px] h-[40px]" />
                            </div>
                            <div className="flex items-center gap-3 mt-4">
                                <img
                                    src="assets/user.png"
                                    alt="Eldorbek"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <h1 className="font-bold text-[16px] mt-[30px]">Eldorbek Baxronov</h1>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <img
                                                key={i}
                                                src="assets/star.png"
                                                alt="star"
                                                className="w-4 h-4"
                                            />
                                        ))}
                                        <span className="text-gray-500 text-[12px] ml-2">7 oy oldin</span>
                                    </div>
                                    <h1 className="text-gray-500 text-sm">
                                        HTML CSS kursi o'quvchisi
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className="border w-[400px] h-[200px] rounded-2xl p-4 shadow-md bg-whitem">
                            <div>
                                <img src="assets/quote.png" alt="quote" className="w-[40px] h-[40px]" />
                            </div>

                            <h1 className="text-lg font-medium mt-2">Judaxam Zo'r</h1>

                            <div className="flex items-center gap-3 mt-4">
                                <img
                                    src="assets/user.png"
                                    alt="Eldorbek"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <h1 className="font-bold text-[16px]">Eldorbek Baxronov</h1>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <img
                                                key={i}
                                                src="assets/star.png"
                                                alt="star"
                                                className="w-4 h-4"
                                            />
                                        ))}
                                        <span className="text-gray-500 text-[12px] ml-2">7 oy oldin</span>
                                    </div>
                                    <h1 className="text-gray-500 text-sm">
                                        HTML CSS kursi o'quvchisi
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className="border w-[400px] h-[200px] rounded-2xl p-4 shadow-md bg-white">
                            <div>
                                <img src="assets/quote.png" alt="quote" className="w-[40px] h-[40px]" />
                            </div>

                            <h1 className="text-lg font-medium mt-2">Judaxam Zo'r</h1>

                            <div className="flex items-center gap-3 mt-4">
                                <img
                                    src="assets/user.png"
                                    alt="Eldorbek"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <h1 className="font-bold text-[16px]">Eldorbek Baxronov</h1>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <img
                                                key={i}
                                                src="assets/star.png"
                                                alt="star"
                                                className="w-4 h-4"
                                            />
                                        ))}
                                        <span className="text-gray-500 text-[12px] ml-2">7 oy oldin</span>
                                    </div>
                                    <h1 className="text-gray-500 text-sm">
                                        HTML CSS kursi o'quvchisi
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <Footer />
        </>
    )
}

export default Home;
