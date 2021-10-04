import './HomeCourse.css';

import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const HomeCourse = (props) => {

    const { courseName, courseImg, description, price } = props.course;

    return (
        <div>



            <Col xs={2} md={4} className="g-4 mx-5">
                <Card className="card" style={{ width: '19rem' }}>
                    <Card.Img variant="top" className="course-img" src={courseImg} />
                    <Card.Body>
                        <Card.Title>{courseName}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 150)}
                        </Card.Text>

                        <h2>Course Cost:{price}$</h2>

                    </Card.Body>
                </Card>
            </Col>


        </div>
    );
};

export default HomeCourse;