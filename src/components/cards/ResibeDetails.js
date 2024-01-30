
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ResibeDetails = () => {
    const [datails, setDatails] = useState({});
    let params = useParams();
    let id = params.id;

    const getresippedetails = async () => {
        let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        let details = response.data.meals[0];
        setDatails(details);
    };

    useEffect(() => {
        AOS.init({ duration: 1000});
        getresippedetails();
    }, []);

    return (
        <>

            <div className='parent-details'>
                <div className='img-details'data-aos="fade-right">
                    <img src={datails.strMealThumb} alt="png" />
                </div>
                <div data-aos="fade-left">
                    <p>{datails.strCategory}</p>
                    <p className='mt-4'>{datails.strInstructions}</p>
                </div>
            </div>
            <Link to="/">
                <button className='btn'>العوده الي الصفحه الرئيسه</button>
            </Link>

        </>
    );
};

export default ResibeDetails;
