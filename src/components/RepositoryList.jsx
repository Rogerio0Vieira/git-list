import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useState, useEffect } from "react";

//https://api.github.com/orgs/rocketseat/repos
//https://api.github.com/users/Rogerio0Vieira/repos


export function RepositoryList(){

  const [repositories, setRepositories] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/Rogerio0Vieira/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []); //Nunca deixar sem o segundo parametro

  return(
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>

      <ul>
        {repositories.map(repository =>{
         return <RepositoryItem key={repository.name} repository={repository}/>
        })}
        
      </ul>
    </section>
  );
}