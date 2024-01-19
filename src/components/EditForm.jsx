
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditForm = ({ films, setFilms }) => {
  const { titre } = useParams();
  const navigate = useNavigate();

  const [editedFilm, setEditedFilm] = useState({
    titre: '',
    realisateur: '',
    note: 0,
    theme: '',
    description: '',
    dateSortie: '',
    duree: '',
    favori: false,
  });

  useEffect(() => {
    console.log("Titre dans useEffect :", titre);
  
    const selectedFilm = films.find((f) => f.titre === titre);
  
    if (selectedFilm) {
      setEditedFilm(selectedFilm);
    }
  }, [titre, films]);
  const handleIndex = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFilms = films.map((f) => (f.titre === titre ? editedFilm : f));
    setFilms(updatedFilms);

    navigate('/');
  };


  return (
    <div className='mx-auto w-80% p-4'>
     <div className="mx-auto w-80% p-4">
      <h2 className="text-xl font-bold mb-4 ">Modifier un Film</h2>
    <div className="bg-gray-800 rounded-md p-8 mx-auto mt-10 w-60%">
    <form onSubmit={handleSubmit} className="text-white">
      <div className="mb-4">
        <label htmlFor="titre" className="block text-sm font-medium">Titre :</label>
        <input 
          type="text" 
          id="titre" 
          value={editedFilm.titre} 
          onChange={(e) => setEditedFilm({ ...editedFilm, titre: e.target.value })} 
          className="mt-1 p-2 w-full border border-gray-300 text-gray-800 rounded-md" 
          required 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium">Description :</label>
        <input 
          type="text" 
          id="description" 
          value={editedFilm.description} 
          onChange={(e) => setEditedFilm({ ...editedFilm, description: e.target.value })} 
          className="mt-1 p-2 w-full border border-gray-300 text-gray-800 rounded-md" 
          required 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="duree" className="block text-sm font-medium">Durée (en minutes) :</label>
        <input 
          type="text" 
          id="duree" 
          value={editedFilm.duree} 
          onChange={(e) => setEditedFilm({ ...editedFilm, duree: e.target.value })} 
          className="mt-1 p-2 w-full border border-gray-300 text-gray-800 rounded-md" 
          required 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="realisateur" className="block text-sm font-medium">Réalisateur :</label>
        <input 
          type="text" 
          id="realisateur" 
          value={editedFilm.realisateur} 
          onChange={(e) => setEditedFilm({ ...editedFilm, realisateur: e.target.value })} 
          className="mt-1 p-2 w-full border border-gray-300 text-gray-800 rounded-md" 
          required 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="note" className="block text-sm font-medium">Note :</label>
        <select 
          id="note" 
          value={editedFilm.note} 
          onChange={(e) => setEditedFilm({ ...editedFilm, note: parseInt(e.target.value, 10) })} 
          className="mt-1 p-2 w-full border border-gray-300 text-gray-800 rounded-md" 
          required
        >
          {[0, 1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="theme" className="block text-sm font-medium">Thème :</label>
        <input 
          type="text" 
          id="theme" 
          value={editedFilm.theme} 
          onChange={(e) => setEditedFilm({ ...editedFilm, theme: e.target.value })} 
          className="mt-1 p-2 w-full border border-gray-300 text-gray-800 rounded-md" 
          required 
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mx-auto block">
        Sauvegarder
      </button>
    </form>
    <button onClick={handleIndex} className="bg-blue-500 text-white px-4 py-2 rounded-md">
      Annuler
    </button>
  </div>
    </div>
    </div>
);
}

export default EditForm;
