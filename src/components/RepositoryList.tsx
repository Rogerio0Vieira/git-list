import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import '../styles/repositories.scss';

//https://api.github.com/orgs/rocketseat/repos
//https://api.github.com/users/Rogerio0Vieira/repos

interface Repository{
  name: string;
  description: string;
  html_url: string;
}


export function RepositoryList(){

  const [repositories, setRepositories] = useState<Repository[]>([]); //Tipo generico

  useEffect(()=>{
    fetch('https://api.github.com/users/Rogerio0Vieira/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []); 

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