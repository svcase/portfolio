import React from 'react';
import '../../styles/home.css';

const Home = () => {
  return (
    <div className="mainContainer">
      <h1>Coming Soon...</h1>
      <div className="openSection">
        <p>Hi, I'm Sam Case, a React front-end web developer.</p>
        <p>This site will be up and running soon.</p>
      </div>
      <div className="contactSection">
        <p>In the meantime, I am available to freelance or collaborate, so feel free to reach out!</p>
        <div className="emailBtn">
          <a href="mailto:samcasedev@gmail.com" className="emailLink">Email Sam</a>
        </div>
      </div>
      <div className="exampleSection">
        <h4>A few past examples:</h4>
        <ul className="exampleList">
          <li>Website: <a href="http://lizadarlington.com/" target="_blank" className="exampleLink">Liza Darlington Art</a></li>
          <li>Game: <a href="https://svcase.github.io/widji-game/" target="_blank" className="exampleLink">Widji Game</a></li>
          <li>Progressive Web App (collaboration): <a href="https://www.easyproforma.com/" target="_blank" className="exampleLink">Easy Pro Forma</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
