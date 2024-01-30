

import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/cards/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import Searchresipe from './components/cards/Searchresipe'
import ResibeDetails from './components/cards/ResibeDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [state, setstate] = useState([]);
  const [Listcategory, setListcategory] = useState([]);

  const displayRipedata = async () => {
    await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((res) => {
      setListcategory(res.data.categories);
    });
  };

  useEffect(() => {
    displayRipedata();
  }, []);

  const search = async (word) => {
    if(!word){
      setstate([]);
    }
    await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`).then((response) => {
      setstate(response.data.meals);
    });
  };



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar search={search} />
                <Searchresipe state={state} />
                <Container>
                  <Card Listcategory={Listcategory} />
                </Container>
              </>
            }
          />
          <Route path="/details/:id" element={<ResibeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

