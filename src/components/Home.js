import React from "react";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <>
      <div
        style={{
          fontFamily: "Arial, serif",
          minHeight: "100vh",
        }}
      >
        <NavBar />
        <main >
          <h1 style={{ padding: "20px", color:"white", textAlign: "center", fontSize:"40px  " }}>Bienvenue sur la page d’accueil</h1>
          <p style={{ padding: "20px", color:"silver", fontFamily:"serif", fontSize:"20px", width:"500px", marginLeft:"5%", fontWeight:"700"}}>Bienvenue au premier examen sur React, une étape clé dans votre apprentissage du développement web moderne. Ce test est conçu pour évaluer vos connaissances, renforcer vos compétences et vous aider à mieux comprendre les concepts fondamentaux de React.</p>
          <a href="https://drive.google.com/file/d/1SNmGf7VfHEP2d0-jHwCFl1NQiWNM_-_s/view?usp=sharing" target="_blank" style={{textDecoration:"none"}}><button style={{ padding: "1%", backgroundColor:"rgb(66, 175, 229)", color:"white",  textAlign: "center", fontSize:"20px", marginLeft:"12%", marginTop:"3%", border:"none", borderRadius:"20px", cursor:"pointer" }}>Voir la Questions</button></a> 
        </main>
      </div>
    </>
  );
}
