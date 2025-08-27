import React, { useState } from 'react'
import Navbar from '../components/Header'
import Footer from '../components/Footer';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Course() {
    const categories = [
        "Barcha kurslar",
        "Backend",
        "Frontend",
        "Foundation",
        "Mobil",
        "IT Matematika",
        "Buxgalteriya"
    ];

    const [active, setActive] = useState("Barcha kurslar");

    const courses = [
        {
            id: 1,
            title: "PHP LARAVEL",
            category: "Backend",
            instructor: "Ergashev Abdulla",
            discount: "60%",
            oldPrice: "997500 UZS",
            newPrice: "399000 UZS",
            img: "assets/pbf_fd37e99b-5b08-4e7f-b4af-595bb64707bf.png",
            instructorImg: "assets/Screenshot from 2025-08-26 15-48-02.png",
            tagColor: "bg-red-300"
        },
        {
            id: 2,
            title: "FOUNDATION",
            category: "Foundation",
            instructor: "Safarov Oybek",
            discount: "60%",
            oldPrice: "747500 UZS",
            newPrice: "299000 UZS",
            img: "assets/pbf_e6f6d199-accf-4f46-bb94-449c4997686e.png",
            instructorImg: "assets/Screenshot from 2025-08-26 15-48-02.png",
            tagColor: "bg-yellow-500"
        }
    ];

    const filteredCourses = active === "Barcha kurslar"
        ? courses
        : courses.filter(course => course.category === active);

    return (
        <>
            <Navbar />

            <section className='w-full bg-white py-8'>
                <div className='max-w-[1300px] m-auto'>
                    <div className='mt-[120px]'>
                        <span className='text-[60px]'>
                            <strong>Kurslar</strong>
                        </span>
                    </div>

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

                    <div className="flex flex-wrap gap-6 mt-8">
                        {filteredCourses.map((course) => (
                            <div key={course.id} className="w-[380px] h-[410px] bg-white rounded-sm shadow-lg overflow-hidden">
                                <div className="relative">
                                    <img
                                        src={course.img}
                                        alt={course.title}
                                        className="w-full h-[180px] object-cover"
                                    />
                                    <span className={`absolute top-3 left-3 ${course.tagColor} text-white text-sm font-semibold px-3 py-1 rounded-full`}>
                                        {course.title}
                                    </span>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <img
                                            src={course.instructorImg}
                                            alt={course.instructor}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <h3 className="text-gray-700 font-semibold">{course.instructor}</h3>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3">{course.title}</h2>

                                    <div className="flex justify-between items-center mb-3">
                                        <p className="text-gray-600">Chegirma:</p>
                                        <span className="text-xl font-bold">{course.discount}</span>
                                    </div>

                                    <p className="text-gray-600 mb-1">Kurs narxi:</p>
                                    <div className="flex items-center gap-3 justify-between">
                                        <span className="line-through text-gray-400 text-lg">
                                            {course.oldPrice}
                                        </span>
                                        <span className="text-2xl font-bold text-black">{course.newPrice}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center mt-[50px]'>
                    <Button variant="contained" className="!px-[30px] !py-2 !rounded-2xl">Ko`proq korish</Button>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Course;
