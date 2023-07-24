import {Link} from "react-router-dom";

const HomePage = () => {



  
  return (
    <div className="text-center">
        <h1 > Music app </h1>
        <Link to="/upload"> <button  type="button">Upload</button > </Link>
        <Link to="/search"><button type="button">Search Song</button></Link><br/>
        <Link to="/login"><button type="button">Log Out</button></Link>

    </div>
  );
};
export default HomePage;
