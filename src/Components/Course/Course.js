import './Course.css';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {

    const { courseName, courseImg, description, price } = props.course;
    return (
        <div className="course-card">
            <Col xs={2} md={4} className="ms-3 mt-4">
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

export default Course;