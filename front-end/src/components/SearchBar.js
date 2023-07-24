import React, { useState } from 'react';
import axios from 'axios';

function SearchBar() {
  
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = () => {
    axios.get("/search/"+query)
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div >
      <input style={{ marginLeft:550, marginBottom:80, marginTop:40}}
      type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button style={{  marginBottom:80}}
      onClick={search}>Search</button>
      {/* <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul> */}
      <br/>

      <h1 className="text-center"> Music List</h1>
      <table className="table table-striped"style={{width: '50%', marginLeft:"auto",marginRight:"auto"}}>
        <thead>
          <tr >
            <th> Music Name</th>
            <th> Singer </th>
            <th> Play</th>
          </tr>
        </thead>
        
             

        <tbody>
          {results.map(result => (
            <tr key={result.id}>
              <td>{result.songname}</td>
              <td>{result.singer}</td>
              <td><audio  className="uploaded-file" src={result.path} controls  /></td>
            </tr>
          ))}
          
        </tbody>
      </table>


    </div>
  );
}

export default SearchBar;



