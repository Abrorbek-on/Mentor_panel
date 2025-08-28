import React, { useEffect, useState } from 'react'
import Navbar from '../components/Header'
import Footer from '../components/Footer';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import Main from '../components/Main';

function Course() {

    const [active, setActive] = useState("Barcha kurslar");
    const [courses, setCourses] = useState([])
    const [category, setCategory] = useState("all")


    useEffect(() => {
        axios.get('https://edora-backend.onrender.com/courses').then(data => setCourses(data.data.data))

    }, [category])

    const filteredCourses = active === "Barcha kurslar"
        ? courses
        : courses.filter(course => course.category === active);

    return (
        <>
            <Navbar />

           <Main/>

            <Footer />
        </>
    )
}

export default Course;
