

import React,{useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import "./card.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({ Listcategory }) => {
useEffect(() => {
    AOS.init({ duration: 1000});
}, [])
    return (
        <>
            <Row className="justify-content-center pt-4">
                {
                    Listcategory.length >= 1 ? (Listcategory.map((ele) => (
                        <Col xs="6" sm="6" md="6" lg="3" xl="3">
                            <div className='content-overlay'data-aos="zoom-in-up">
                                <img src={ele.strCategoryThumb} alt="" />
                                <div className='overlay'>
                                    <p>{ele.strCategory}</p>
                                    <p>{ele.strCategory}</p>
                                    <p>{ele.strCategory}</p>
                                </div>
                            </div>
                        </Col>
                    ))) : null
                }
            </Row>
        </>
    );
};

export default Card;