import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';

function Main() {
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState(null);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const res = await axios.get("https://edora-backend.onrender.com/course-category/getAll");
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
        axios.get('https://edora-backend.onrender.com/courses')
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
                                    src={`https://edora-backend.onrender.com/uploads/banner/${course.banner}`}
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
                                        src={`https://edora-backend.onrender.com/uploads/mentors/${course.mentor.image}`}
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
            </div>
        </section>
    );
}

export default Main;
