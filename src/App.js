import React, { useState, useEffect } from "react";


export function App() {

  const [repositories, setRepositories] = useState([]);

  //hook: listagem de repositorios do GitHub.
  useEffect(async () => {
    const response = await fetch('https://github.com/clayton033?tab=repositories');
    const data = await response.json();

    setRepositories(data);
  }, []);

  //hook: mostrar na taq title o numero de repos marcado como favoritos.
  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite)
    document.title = `Você tem ${filtered.length} Favoritos`
    
  }, [repositories])

  // function para favoritar um repositorio.
  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo } : { ...repo, favorite: true };
    })
    setRepositories(newRepositories);
  }

  return (
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span>(Favorito)</span>}
            <button onClick={() => handleFavorite(repo.id)}>
              Favoritar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

