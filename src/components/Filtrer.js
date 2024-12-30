import { useState } from "react";
import NavBar from "../components/NavBar";

const salaires = [
  {
    _id: "s1",
    nomsal: "Alami",
    prenomsal: "Sara",
    fonction: "Technicien",
    service: { codeser: "1", nomser: "Informatique" },
  },
  {
    _id: "s2",
    nomsal: "Hilali",
    prenomsal: "Hamza",
    fonction: "Gestionnaire",
    service: { codeser: "2", nomser: "Logistique" },
  },
  {
    _id: "s3",
    nomsal: "Chams",
    prenomsal: "Nabil",
    fonction: "Gestionnaire",
    service: { codeser: "3", nomser: "Logistique" },
  },
  {
    _id: "s4",
    nomsal: "Ahamdi",
    prenomsal: "Younes",
    fonction: "Ingénieur",
    service: { codeser: "4", nomser: "Développement" },
  },
  {
    _id: "s5",
    nomsal: "Merras",
    prenomsal: "Mohamed",
    fonction: "Technicient",
    service: { codeser: "5", nomser: "Informatique" },
  },
  {
    _id: "s6",
    nomsal: "Ben jelloul",
    prenomsal: "Karim",
    fonction: "Ingénieur",
    service: { codeser: "6", nomser: "Marketing" },
  },
  {
    _id: "s7",
    nomsal: "Kartit",
    prenomsal: "Mohamed",
    fonction: "Directeur",
    service: { codeser: "7", nomser: "Management" },
  },
  {
    _id: "s8",
    nomsal: "El mallouki",
    prenomsal: "Yassir",
    fonction: "Ingénieur",
    service: { codeser: "8", nomser: "Logistique" },
  },
  {
    _id: "s9",
    nomsal: "Ben hssain",
    prenomsal: "Khalid",
    fonction: "Technicien",
    service: { codeser: "9", nomser: "Informatique" },
  },
  {
    _id: "s10",
    nomsal: "Rami",
    prenomsal: "Ali",
    fonction: "Chef Projet",
    service: { codeser: "10", nomser: "Développement" },
  },
  {
    _id: "s11",
    nomsal: "Ouafik",
    prenomsal: "Salah",
    fonction: "Salarie",
    service: { codeser: "11", nomser: "Comptabilité" },
  },
  {
    _id: "s12",
    nomsal: "El ouarrai",
    prenomsal: "Walid",
    fonction: "Directeur",
    service: { codeser: "11", nomser: "Déveleppement" },
  },
];

export default function Composant3() {
  const [service, setService] = useState("");
  const [results, setResults] = useState([]);

  function handleSearch() {
    const filteredResults = salaires.filter(
      (salaire) =>
        salaire.service.nomser.toLowerCase() === service.toLowerCase()
    );
    setResults(filteredResults);
  }

  return (
    <>    
        <NavBar />
        <div style={containerStyle}>
        
      <h1 style={titleStyle}>Recherche par service:</h1>
      <label>Entrer le nom du service :</label>
      <input
        type="text"
        placeholder="Entrer le nom du service"
        value={service}
        onChange={(e) => setService(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleSearch} style={buttonStyle}>
        Chercher
      </button>
      <div style={resultsStyle}>
        <h2>Résultat</h2>
        {results.length > 0 ? (
          <ul>
            {results.map((salaire) => (
            //   <li key={salaire._id}>
            //     <strong>Nom:</strong> {salaire.nomsal}  <strong>Prénom:</strong>{"  "}
            //     {salaire.prenomsal} /
            //   </li>
            <table>
                <tr key={salaire._id}>
                    <td><strong> Nom : </strong></td><td>{salaire.nomsal}</td><td><strong>    Prénom : </strong></td><td>{salaire.prenomsal}</td>
                </tr>
            </table>
            ))}
          </ul>
        ) : (
          <p>Il n’y a aucun Salarie travaillant dans ce service</p>
        )}
      </div>
    </div>
    </>

  );
}

// Styling
const containerStyle = {
  fontFamily: "Arial, sans-serif",
  maxWidth: "900px",
  margin: "150px auto",
  padding: "30px",
  boxShadow: "2px 10px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "15px",
  backgroundColor: "#F3F3F3",
};

const titleStyle = {
  textAlign: "center",
  color: "rgb(66, 175, 229)",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  backgroundColor: "rgb(66, 175, 229)",
  color: "white",
  padding: "10px 15px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

const resultsStyle = {
  marginTop: "20px",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};
