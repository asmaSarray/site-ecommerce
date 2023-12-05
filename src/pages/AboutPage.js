import React from "react";
import classe from "../pages/about.module.css";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <header className={classe.section_center}>
        <img src={aboutImg} alt="nice desk" className={classe.img} />
        <article>
          <div className={classe.title}>
            <h2 className={classe.h2}> our story</h2>
            <div className={classe.underline}></div>
          </div>
          <p className={classe.p}>
            {" "}
            Le client lui-même, le client pourra poursuivre l'adipiscing de
            l'entreprise. Laissez-le fuir mais les temps des sages accusateurs
            les laissent tristes pour être sauvé, nous accusons l'élu de
            l'erreur de choisir, tous les bienheureux. N'importe qui, a dit. Ils
            disent qu'il n'y a personne pour refuser la vie aveuglés par la
            douleur, ils tombent dans la flatterie, c'est un exercice le choix
            des ennuis est souvent choisi par la haine de choisir une voie, et
            cela dans la liberté moins d'où l'on peut suivre un sage architecte.
            Aucune de ces choses de, et si vous ne les voyez pas, il veut
            souvent le tout mais lesquels etc. Dès, on les accuse de plaisir,
            ils ne savent pas que c'est toute la vie celui-ci
          </p>
        </article>
      </header>
    </main>
  );
};

export default AboutPage;
