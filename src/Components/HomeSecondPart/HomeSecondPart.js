import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeCourse from '../HomeCourse/HomeCourse';
import './HomeSecondPart.css'

// could not create common hook function, faced to many error thats why used state and effect many time 

const HomeSecondPart = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])


    return (
        <div className="mt-4 mx-5">

            <div className="text-center my-5">

                <h1>Some Of Our Courses</h1>

                <h3>Here are some featured dance courses</h3>
            </div>

            <Row xs={2} md={4} >

                {
                    courses.slice(0, 4).map(course => <HomeCourse course={course} ></HomeCourse>)
                }

            </Row>
        </div>
    );
};

export default HomeSecondPart;