"use client";

import { GlassCard } from "@/components/glass-card";

export default function Portfolio() {
  return (
    <GlassCard
      className="snake-box"
    >
      <div className="mt-5 text-left">
        <h3>IT</h3>
        <p>
          Ciao, sono Enrico, fin da piccolo mi sono trovato a smanettare davanti al computer, insomma, il classico nerd :)
          <br />
          Trovo affascinante cercare di capire come funzionano le cose, provare a ricostruirle e sperimentarci sopra.
          <br />
          Ho scoperto la programmazione alle superiori e sono rimasto affascinato da come fosse possibile immaginare qualsiasi cosa in quel piccolo ma immenso universo in cui si comincia a contare da 0. Ed eccoci qua :)
          <br />
          Credo di dover ancora trovare la mia vera strada, ma per il momento lavoro come web developer.
          <br />
          La mia seconda grande passione è la musica; suono il pianoforte fin da quando ero bambino.
          <br />
          Mi piacciono i giochi da tavolo, la pizza e bla bla bla.
          <br />
          Se ci conosceremo, avremo modo di parlarne.
          <br />
          Grazie per essere passato e a presto! :)
        </p>

        <h3 className="mt-5">EN</h3>
        <p>
          Hi, I'm Enrico, since I was a child, I've spent a lot of time tinkering with computers, you know, the classic nerd :)
          <br />
          I find it fascinating to try to understand how things work, rebuild them, and experiment with them.
          <br />
          I discovered programming in high school and was fascinated by how it was possible to imagine anything in that small universe where we start counting from 0. And here we are :)
          <br />
          I believe I still have to find my path, but for the moment, I work as a web developer.
          <br />
          My second great passion is music; I've been playing the piano since I was a child.
          <br />
          I like board games, pizza, and bla bla bla.
          <br />
          If we get to know each other, we'll have the opportunity to talk about it.
          <br />
          Grateful for your visit; see ya! :)
        </p>
      </div>
    </GlassCard>
  );
}
