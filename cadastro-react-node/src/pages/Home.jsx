import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="title">
        Cadastro de usuários com <br />
        <span className="yellow title-tec"> React - Node JS - MySQL</span>
      </h1>
      

      <ul className="dependencies">
        <div className="dep-item">
          <h4>Frontend</h4>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>CSS</li>
          </ul>
        </div>

        <div className="dep-item">
          <h4>Backend</h4>
            <ul>
              <li>Node JS</li>
              <li>Express</li>
              <li>Dotenvx</li>
              <li>Cors</li>
            </ul>
        </div>

        <div className="dep-item">
          <h4>Database</h4>
          <ul>
            <li>
              <li>MySQL 2</li>
              <li>Sequelize</li>
            </li>
          </ul>
        </div>

        <div className="dep-item">
          <h4>Deploy Frontend</h4>
          <ul>
            <li>
              Vercel 
            </li>
          </ul>
          <a href="https://vercel.com" target="_blank">
            https://vercel.com
          </a>
        </div>

        <div className="dep-item">
          <h4>Deploy Backend</h4>
          <ul>
            <li>
              Vercel 
            </li>
          </ul>
          <a href="https://vercel.com" target="_blank">
            https://vercel.com
          </a>
        </div>

        <div className="dep-item">
          <h4>Deploy Database</h4>
          <ul>
            <li>
              Vercel 
            </li>
          </ul>
          <a href="https://aiven.io" target="_blank">
            https://aiven.io
          </a>
        </div>

      
      </ul>
    </div>
  );
};

export default Home;
