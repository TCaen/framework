import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import AddFilmForm from './components/AddFilmForm';
import EditForm from './components/EditForm';
import View from './components/View';
import './styles/output.css';  

const App = () => {

  const [films, setFilms] = useState([
      {
        titre: "Inception",
        realisateur: "Christopher Nolan",
        note: 4,
        theme: "Science-fiction",
        description: "Un film captivant sur les rêves et la réalité.",
        dateSortie: "2010-07-16",
        duree: "148",
        favori: true
      },
      {
        titre: "The Shawshank Redemption",
        realisateur: "Frank Darabont",
        note: 5,
        theme: "Drame",
        description: "Un drame poignant basé sur une histoire de Stephen King.",
        dateSortie: "1994-09-23",
        duree: "142",
        favori: true
      },
      {
        titre: "The Dark Knight",
        realisateur: "Christopher Nolan",
        note: 5,
        theme: "Action",
        description: "Le chevalier noir affronte le Joker dans ce chef-d'œuvre.",
        dateSortie: "2008-07-18",
        duree: "152",
        favori: false
      },
      {
        titre: "AAAA",
        realisateur: "Christopher Nolan",
        note: 1,
        theme: "Science-fiction",
        description: "Un film captivant sur les rêves et la réalité.",
        dateSortie: "2010-07-16",
        duree: "148",
        favori: false
      },
    ]
  );
    

  const handleAddFilm = (newFilm) => {
    setFilms((prevFilms) => [...prevFilms, newFilm]);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index
         films={films}/>} />
        <Route path="/AddFilmForm" element={<AddFilmForm onAddFilm={handleAddFilm} films={films} />} />
        <Route path="/view"  element={<View films={films} setFilms={setFilms} />} />
        <Route path="/edit/:titre" element={<EditForm films={films} setFilms={setFilms} />} />


      </Routes>
    </Router>
  );
};

export default App;