import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

const View = ({ films, setFilms }) => {
    const navigate = useNavigate();
    console.log("films", films);
  const location = useLocation();
  const { film } = location.state;
  const [isFavorite, setIsFavorite] = useState(film.favori);


  if (!film) {
    console.error("Film non défini dans l'emplacement.");
    navigate('/');
    return null;
  }
  const handleIndex = () => {
    navigate('/');
  };

  const handleToggleFavorite = () => {
    console.log(films)
    const updatedFilms = films.map((f) =>
      f.titre === film.titre ? { ...f, favori: !f.favori } : f
    );

    setIsFavorite(!isFavorite);

    setFilms(updatedFilms);
  };

    console.log(film);
  return (
    <div className="max-w-sm rounded w=80% mx=auto block overflow-hidden shadow-lg ">
      <img className="w-full" src={`https://via.placeholder.com/300`} alt={film.titre} />
      <div
      className={`max-w-sm rounded overflow-hidden shadow-lg ${
        isFavorite ? 'bg-green-200' : 'bg-gray-200'
      }`}
    >        <div className="font-bold text-xl mb-2">{film.titre}</div>
        <p className="text-gray-700 text-base">
          Réalisateur: {film.realisateur}<br />
          Note: {film.note}<br />
          Thème: {film.theme}<br />
          Description: {film.description}<br />
          Date de sortie: {film.dateSortie}<br />
          Durée (en minutes): {film.duree}
        </p>
      </div>
      <button
          onClick={handleToggleFavorite}
          className="bg-blue-500 m-2 text-white px-4 py-2 rounded-md"
        >
          {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        </button>
      <button onClick={handleIndex} className="bg-blue-500 m-2 text-white px-4 py-2 rounded-md">
        Retour
    </button>
    </div>
  );
};

export default View;