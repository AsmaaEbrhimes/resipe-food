

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Searchresipe = ({ state }) => {
    const mealsArray = Object.values(state);
    return (
        <>
            <Row className='m-0'>
                {mealsArray.length >= 1 ? (
                    mealsArray.map((ele) => (
                        <Col xs="12" sm="6" lg="4" xl="3" key={ele.idMeal}>
                            <Link key={ele.idMeal} to={`/details/${ele.idMeal}`}>
                                <img className='search-img' src={ele.strMealThumb} alt="" />
                                <p>{ele.strIngredient2}</p>
                            </Link>
                        </Col>
                    ))
                ) : null}
            </Row>
        </>
    );
};
export default Searchresipe;



