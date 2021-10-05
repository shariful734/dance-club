import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

// could not create common hook function, faced to many error thats why used state and effect many time 

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {

        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])

    return (
        <div>
            <h1 className="text-center my-5">Select The Dance Course You Want To Take</h1>

            <div>
                <Row xs={2} md={4}>

                    {
                        courses.map(course => <Course course={course}></Course>)

                    }

                </Row>
            </div>
        </div>
    );
};

export default Courses;