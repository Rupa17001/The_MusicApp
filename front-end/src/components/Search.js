import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const jwt_token = localStorage.getItem("token");

  useEffect(() => {
    let data = fetch("/api/document/files", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + jwt_token,
      },
    })
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        setUsers(response);
        console.log("data" + data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const handleSearch = (event) => {
    if (event !== null) setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredUsers = users.filter((user) => {
    console.log("data", user.singer)
    console.log("data == ",user.songname )
    if(user.singer !== null && user.singer !== null)
    return (
      
      
      // user
      user.songname.toLowerCase().includes(searchTerm) ||
      user.singer.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div>
      <h1 className="text-center">Audio</h1>
      <input
        style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
        type="text"
        className="form-control"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <table className="table table-striped text-center" width="100">
        <thead>
          <tr style={{ fontWeight: "bold" }}>
            <th>Name </th>
            <th> About </th>
            <th> Play</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.songname}</td>
              <td>{user.singer}</td>
              <td>
                <video
                  width="340"
                  height="180"
                  className="uploaded-file"
                  src={user.path}
                  controls
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
