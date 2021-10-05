import './InstractorOne.css'

import React from 'react';
import { Card, Col } from 'react-bootstrap';

const InstractorOne = (props) => {

    console.log(props);

    const { instructor, instructorImg } = props.course;
    return (
        <div className="">

            <Col xs={2} md={4} className="ms-5 mt-4 ">

                <Card.Img variant="top" className="instractor-img" src={instructorImg} />
                <h2 className="instractor-name">{instructor}</h2>

            </Col>

        </div>
    );
};

export default InstractorOne;