import React from "react";
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

export default function Table() {
  return (
    <>
    
        <NavBar />
      
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2 style={{ textAlign: "left", color: "rgb(66, 175, 229)", marginLeft:"5%", fontSize:"50px", }}>
        Liste des Salariés
      </h2>
      <table
        style={{
          borderCollapse: "collapse",
          backgroundColor:"white",
          borderRadius:"30px",
          width: "90%",
          margin: "20px auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "rgb(66, 175, 229)", color: "white", }}>
            <th style={headerStyle}>Nom</th>
            <th style={headerStyle}>Prénom</th>
            <th style={headerStyle}>Fonction</th>
            <th style={headerStyle}>Service</th>
          </tr>
        </thead>
        <tbody>
          {salaires.map((salaire, index) => (
            <tr
              key={salaire._id}
              
            >
              <td style={cellStyle}>{salaire.nomsal}</td>
              <td style={cellStyle}>{salaire.prenomsal}</td>
              <td style={cellStyle}>{salaire.fonction}</td>
              <td style={cellStyle}>{salaire.service.nomser}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

const headerStyle = {
  padding: "20px",
  textAlign: "left",
  fontSize: "16px",
  border: "1px solid rgb(66, 175, 229)",
};

const cellStyle = {
  padding: "20px",
  textAlign: "left",
  borderTop: "1px solid black",
};
