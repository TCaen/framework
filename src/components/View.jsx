import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

const View = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const { film, films } = location.state;


  if (!film) {
    // Gestion du cas où film n'est pas défini
    console.error("Film non défini dans l'emplacement.");
    navigate('/'); // Redirection vers la page d'index
    return null;
  }
  const handleIndex = () => {
    navigate('/');
  };

    console.log(film);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={`https://via.placeholder.com/300`} alt={film.titre} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{film.titre}</div>
        <p className="text-gray-700 text-base">
          Réalisateur: {film.realisateur}<br />
          Note: {film.note}<br />
          Thème: {film.theme}<br />
          Description: {film.description}<br />
          Date de sortie: {film.dateSortie}<br />
          Durée (en minutes): {film.duree}
        </p>
      </div>
      <button onClick={handleIndex} className="bg-blue-500 m-2 text-white px-4 py-2 rounded-md">
        Retour
    </button>
    </div>
  );
};

export default View;