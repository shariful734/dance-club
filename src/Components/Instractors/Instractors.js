import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import InstractorOne from '../InstractorOne/InstractorOne';
import './instractors.css'

// could not create common hook function, faced to many error thats why used state and effect many time 

const Instractors = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {

        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])

    return (
        <div className="instractors-container">
            <h1 className="text-center">Here are our Instractors</h1>


            <div>
                <div>

                    <div>
                        <Row xs={2} md={4}>

                            {
                                courses.map(course => <InstractorOne course={course}> </InstractorOne>)

                            }

                        </Row>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Instractors;