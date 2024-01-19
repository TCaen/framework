import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i} role="img" aria-label="star">⭐</span>);
  }
  return <div>{stars}</div>;
};

const Index = ({films}) => {
  const [filmsState, setFilmsState] = useState(films);
  const [sortOption, setSortOption] = useState(); // Option de tri par défaut
  const navigate = useNavigate();

  useEffect(() => {
    handleSortChange(); 
  }, [sortOption]);

  const handleView = (film) => {
    navigate('/view', { state: { film, films } });
  };
    
  const handleDeleteFilm = (index) => {
    const updatedFilms = [...filmsState];
    updatedFilms.splice(index, 1);
    setFilmsState(updatedFilms);
    console.log("Film supprimé :", filmsState[index]);
  };

  const handleEditFilm = (film) => {
    navigate(`/edit/${film.titre}`);
  };

  const handleAjouterFilmClick = () => {
    navigate('/AddFilmForm');
  };

  const handleSortChange = () => {
    switch (sortOption) {
      case 'alphabetique':
        setFilmsState([...filmsState].sort((a, b) => a.titre.localeCompare(b.titre)));
        break;
      case 'note':
        setFilmsState([...filmsState].sort((a, b) => b.note - a.note));
        break;
      case 'favoris':
        setFilmsState([...filmsState].sort((a, b) => b.favori - a.favori));
        break;
      default:
        break;
    }
  };
  
  const handleRandomFilm = () => {
    const randomFilm = filmsState[Math.floor(Math.random() * filmsState.length)];
    handleView(randomFilm);
  }
  return (
   

    <div className="mx-auto w-80% p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des Films</h1>
      <div className="mb-4">
      <label htmlFor="sortSelect" className="mr-2">
        Trier par:
      </label>
      <select
        id="sortSelect"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="mb-4"
      >
        <option value=""> Sélectionnez</option>
        <option value="alphabetique">Alphabétique</option>
        <option value="note">Note</option>
        <option value="favoris">Favoris</option>
      </select>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filmsState.map((film, index) => (
          <div key={index} className={`p-4 rounded-md ${film.favori ? 'bg-green-200' : 'bg-gray-200'}`}>
            <h2 className="text-lg font-semibold mb-2">{film.titre}</h2>
            <p>
              <strong>Note:</strong> <StarRating rating={film.note} />
            </p>
            <p>Réalisateur: {film.realisateur}</p>
            <button onClick={() => handleView(film)} className="bg-blue-500 text-white px-3 mx-1 py-1 rounded-md mt-2">
              Détail
            </button>
            <button
              onClick={() => handleEditFilm(film)}
              className="bg-yellow-500 text-white px-3 mx-1 py-1 rounded-md mt-2"
            >
              Modifier
            </button>
            <button onClick={() => handleDeleteFilm(index)} className="bg-red-500 text-white px-2  mx-1 py-1 rounded-md mt-2">
              Supprimer
            </button>

          </div>
        ))}
      </div>

    <button onClick={handleRandomFilm} className="bg-blue-500 text-white px-3 mx-1 py-1 rounded-md mt-2">
            me suggerer un film au hasard
    </button>
      <button onClick={handleAjouterFilmClick} className="block text-blue-500 underline mt-4">
        Ajouter un film
      </button>
    </div>
  );
};

export default Index;