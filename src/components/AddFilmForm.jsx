import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddFilmForm = ({ onAddFilm,films }) => {
  console.log(films);
  const [titre, setTitre] = useState('');
  const [realisateur, setRealisateur] = useState('');
  const [note, setNote] = useState(0);
  const [theme, setTheme] = useState('');
  const [description, setDescription] = useState('');
  const [duree, setDuree] = useState(0);
  
  const navigate = useNavigate();

  const handleIndex = () => {
    navigate('/');
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const newFilm = {
      titre,
      realisateur,
      note,
      theme,
      description,
      duree,
    };

    if (!titre || !realisateur || !theme || !description || !duree) {
      alert("Veuillez remplir tous les champs du formulaire.");
      return;
    }

    setTitre('');
    setRealisateur('');
    setNote(0);
    setTheme('');
    setDescription('');
    setDuree('');

    if (onAddFilm) {
      console.log(newFilm);
      onAddFilm(newFilm);
    }


    navigate('/');

  };

  return (
    <div className='mx-auto w-80% p-4'>
     <div className="mx-auto w-80% p-4">
      <h2 className="text-xl font-bold mb-4 ">Ajouter un Film</h2>
    <div className="bg-gray-800 rounded-md p-8 mx-auto mt-10 w-60%">
      <form onSubmit={handleSubmit} className="text-white">
        <div className="mb-4">
          <label htmlFor="titre" className="block text-sm font-medium">Titre :</label>
          <input type="text" id="titre" value={titre} onChange={(e) => setTitre(e.target.value)} className="mt-1 p-2 w-full border border-gray-300 text-gray-800 rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">Description :</label>
          <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="mt-1 p-2 w-full border border-gray-300 text-gray-800 rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="duree" className="block text-sm font-medium">Durée (en minutes) :</label>
          <input type="text" id="duree" value={duree} onChange={(e) => setDuree(e.target.value)} className="mt-1 p-2 w-full border border-gray-300 text-gray-800 rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="realisateur" className="block text-sm font-medium">Réalisateur :</label>
          <input type="text" id="realisateur" value={realisateur} onChange={(e) => setRealisateur(e.target.value)} className="mt-1 p-2 w-full border border-gray-300 text-gray-800 rounded-md" required />
        </div>
        <div className="mb-4">
        <label htmlFor="note" className="block text-sm font-medium">Note :</label>
          <select id="note" value={note} onChange={(e) => setNote(parseInt(e.target.value, 10))} className="mt-1 p-2 w-full border border-gray-300 text-gray-800 rounded-md" required>
            {[0, 1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select> 
        </div>
        <div className="mb-4">
          <label htmlFor="theme" className="block text-sm font-medium">Thème :</label>
          <input type="text" id="theme" value={theme} onChange={(e) => setTheme(e.target.value)} className="mt-1 p-2 w-full border border-gray-300 text-gray-800 rounded-md" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mx-auto block">Ajouter</button>
      </form>
    </div>
    </div>
    <button onClick={handleIndex} className="bg-blue-500 text-white px-4 py-2 rounded-md">
      Ajouter un film
    </button>
  </div>
  );
};

export default AddFilmForm;
