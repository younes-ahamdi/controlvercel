import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <style>
        {`
          nav {
            background-color:rgb(35, 35, 35);
            padding: 30px;
          }

          ul {
            list-style-type: none;
            display: flex;
            justify-content: left;
            gap: 20px;
            margin: 0;
            padding: 0;
          }

          li {
            font-size: 20px;
          }

          .nav-link {
            text-decoration: none;
            color: white;
            font-weight: bold;
          }

          .nav-link.active {
            color:rgb(66, 175, 229); /* Active link color */
          }

          .nav-link:hover {
            color:rgb(81, 240, 219); /* Hover effect color */
          }
          .Titre{
            color:#94E4FD;
            font-size:20px;
            font-weight:bold;
            margin-right:30px
          }
        `}
      </style>

      <nav>
        <ul>
        <li className="Titre">Control Continue</li>
          <li>
            <NavLink className="nav-link" to="/">
              Acceuil
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/GestionVoitures">
              Gestion Voitures
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/ListeSalariés">
              Liste Salariés
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Cherchersalariés">
              Chercher salariés
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
