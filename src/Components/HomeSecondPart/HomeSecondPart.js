import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeCourse from '../HomeCourse/HomeCourse';

const HomeSecondPart = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])


    return (
        <div className="mt-4">

            <h1 className="text-center my-5">Some Of Our Courses</h1>

            <Row xs={2} md={4}>

                {
                    courses.slice(0, 4).map(course => <HomeCourse course={course} ></HomeCourse>)
                }

            </Row>
        </div>
    );
};

export default HomeSecondPart;