import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Formulaire() {
  const [matricule, setMatricule] = useState("");
  const [marque, setMarque] = useState("");
  const [date, setDate] = useState("");
  const [color, setColor] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function HandleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
    setDisabled(true);
  }

  return (
    <>
        <NavBar />

    <div style={containerStyle}>
      
      <form onSubmit={HandleSubmit} style={formStyle}>
        <h2 style={headingStyle}>Gestion Voitures</h2>
        <label style={labelStyle}>Matricule :</label>
        <input
          type="text"
          value={matricule}
          onChange={(e) => setMatricule(e.target.value)}
          disabled={disabled}
          style={inputStyle}
          required
        />
        <label style={labelStyle}>Marque :</label>
        <input
          type="text"
          value={marque}
          onChange={(e) => setMarque(e.target.value)}
          disabled={disabled}
          style={inputStyle}
          required
        />
        <label style={labelStyle}>Date de mise en circulation :</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          disabled={disabled}
          style={inputStyle}
          required
        />
        <label style={labelStyle}>Couleur :</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          disabled={disabled}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          Confirmer
        </button>
      </form>
      {isSubmit && (
        <Afficher
          matricule={matricule}
          marque={marque}
          date={date}
          color={color}
        />
      )}
    </div>
    </>
  );
}

function Afficher({ matricule, marque, date, color }) {
  if (!matricule || !marque || !date || !color) return null;
  return (
    <div style={summaryStyle}>
      <h2 style={headingStyle}>Récapitulatif des Informations</h2>
      <p style={summaryTextStyle}>
      <strong>Matricule : </strong>{matricule}
      </p>
      <p style={summaryTextStyle}>
      <strong> Marque : </strong>{marque}
      </p>
      <p style={summaryTextStyle}>
      <strong>Date de mise en circulation : </strong>{date}
      </p>
      <p style={summaryTextStyle}>
      <strong>Couleur: </strong>{color}
      </p>
    </div>
  );
}

// Styling
const containerStyle = {
  fontFamily: "Arial, sans-serif",
  maxWidth: "900px",
  margin: "30px auto",
  padding: "30px",
  boxShadow: "2px 10px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "15px",
  backgroundColor:"#F3F3F3",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const headingStyle = {
  textAlign: "left",
  fontSize:"40px",
  color: "rgb(66, 175, 229)",
};

const labelStyle = {
  fontWeight: "bold",
  marginBottom: "5px",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const buttonStyle = {
  backgroundColor: "rgb(66, 175, 229)",
  width:"15%",
  color: "white",
  border: "none",
  padding: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

const summaryStyle = {
  marginTop: "20px",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const summaryTextStyle = {
  fontSize: "16px",
  margin: "5px 0",
};
