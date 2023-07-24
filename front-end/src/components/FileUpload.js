import React, { useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  
  const handleChange = (e) => {
    setFile(e.target.files[0]);    
  }


  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    formData.append("music", file);
    const songname = e.target.songname.value;
    const singer = e.target.singer.value;
   console.log(localStorage.getItem("login"))
    axios
      .post("/api/document/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'songname':songname,
          'singer': singer,
          Authorization : "Bearer " + localStorage.getItem("token"),
        },
       
      })
      

      .then((res) => {
        console.log(res.data);
        setUploadedFile(URL.createObjectURL(file));
      })
      .catch((err) => {
        console.log(err);
      });

       console.log(songname);
       console.log(singer);
      console.log('File:', formData.get('file'));
  };

  return (<>
    <div className="text-center">
      <h1>Upload Audio</h1>
    </div>
    <form className="text-center mt=20 pt=30" onSubmit={handleUpload}>
      
    <div >
        <input className=" mt=20 "
          type="text"
          placeholder="Song NAME"
          name="songname"
          autoComplete="off"
        />
        <br />

        <input style={{ margin :10 }}
          type="text"
          placeholder="Singer NAME"
          name="singer"
          autoComplete="off"
        />
        <br />

        <input type="file" onChange={handleChange} />
        <br />

        <button style={{  marginBottom:40}} type = "submit">Upload</button>
        {/* <button className="upload-button" type = "submit" onClick={handleUpload}>Upload</button> */}

        <br/>

      {uploadedFile && <audio style={{width: '50%', marginLeft:"auto",marginRight:"auto"}} className="uploaded-file" src={uploadedFile} controls />}

      </div>
    </form>
    </>
  );
  
  }
export default FileUpload;
