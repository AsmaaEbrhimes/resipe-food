
import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import "./navbar.css";

const Navbar = ({ search }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        search(value);
    };
    return (
        <>
            <div className='mt-2'>
                <Container>
                    <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Col sm="1">
                            {/* <img className='radius' src="home-movie-background-with-popcorn_1419-1852.avif" alt="" /> */}
                            <h4 className='logo'><span>Resipe</span><span>Meal</span></h4>
                        </Col>
                        <Col sm="11">
                            <form>
                                <div className='d-flex align-items-center'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        placeholder='ابحث'
                                        value={searchTerm}
                                    />
                                   
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};
export default Navbar;
