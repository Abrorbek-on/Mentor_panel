import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';
import Button from '@mui/material/Button';

function Home() {
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState(null);
    const [courses, setCourses] = useState([]);
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        axios.get('https://fn3.fixoo.uz/users/mentors')
            .then(res => {
                setMentors(res.data.data);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const res = await axios.get("https://fn3.fixoo.uz/course-category/getAll");
                console.log("API categories response:", res.data);
                const cats = res.data;
                setCategories([{ id: null, name: "Barcha kurslar" }, ...cats]);
            } catch (err) {
                console.error("Categories fetch error:", err);
            }
        };
        loadCategories();
    }, []);

    useEffect(() => {
        axios.get('https://fn3.fixoo.uz/courses')
            .then(res => {
                console.log(res.data.data);
                setCourses(res.data.data);
            })
            .catch(err => console.error(err));
    }, []);

    const filteredCourses = active === null
        ? courses
        : courses.filter(course => course.category?.id === active);



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
                                key={cat.id ?? "all"}
                                onClick={() => setActive(cat.id)}
                                className={`px-4 py-2 rounded-md border text-sm font-medium transition 
                                ${active === cat.id
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "text-blue-600 border-blue-600 hover:bg-blue-100"
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-6 mt-8">
                        {filteredCourses.map((course) => (
                            <div
                                key={course.id}
                                className="w-[380px] h-[480px] bg-white rounded-sm shadow-lg overflow-hidden"
                            >
                                <div className="relative">
                                    <img
                                        src={`https://fn3.fixoo.uz/uploads/banner/${course.banner}`}
                                        alt={course.name}
                                        className="w-full h-[280px] object-cover rounded-lg"
                                    />
                                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                                        {course.category?.name}
                                    </span>
                                </div>  

                                <div className="p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <img
                                            src={`https://fn3.fixoo.uz/uploads/mentors/${course.mentor.image}`}
                                            alt={course.mentor?.fullName}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <h3 className="text-gray-700 font-semibold">
                                            {course.mentor?.fullName}
                                        </h3>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3">{course.name}</h2>
                                    <p className="text-gray-600 mb-1">Daraja: {course.level}</p>

                                    <div className="flex justify-between items-center mb-3">
                                        <p className="text-gray-600">Narxi:</p>
                                        <span className="text-2xl font-bold text-black">
                                            ${course.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='flex justify-center mt-[50px]'>
                        <Button variant="contained" className="!px-[30px] !py-2 !rounded-2xl">Ko`proq ko'rish</Button>
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

            <section className='mt-[120px] max-w-[1120px] mx-auto flex flex-col gap-5 items-center text-center'>
                <h1 className='text-5xl font-bold'>Tajribali Mentorlar</h1>
                <p className='mt-2 text-[20px]'>Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan</p>
                <div className='flex gap-5 flex-wrap justify-center'>
                    {mentors.length > 0 ? (
                        mentors.map((el, i) => (
                            <div key={i} className="relative h-[400px] w-[250px] rounded-3xl overflow-hidden group">
                                <img src={el.image} alt={el.fullName} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all"></div>
                                <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[90%] py-4 bg-gray-800/90 rounded-xl text-white text-center transition-all duration-500 group-hover:bottom-6">
                                    <h2 className="font-bold text-lg">{el.fullName}</h2>
                                    <p className="text-sm">{el.role}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">Mentorlar hozircha mavjud emas</p>
                    )}
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
