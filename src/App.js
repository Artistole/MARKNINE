import React from "react";
import "./styles.css";
import { useState } from "react";

const songs = {
  POP: [
    { name: "That's Life", rating: "5/5", singer: "Frank Sinatra" },
    {
      name: "Can't Help Feeling in Love",
      rating: "4/5",
      singer: "Elvis Presley"
    },
    { name: "Fly me to the Moon", rating: "4/5", singer: "Frank Sinatra" }
  ],

  ROCK: [
    { name: "The night we met", rating: "5/5", singer: "Lord Huron" },
    {
      name: "This is a man's world",
      rating: "4/5",
      singer: "Dedrick Weathersby"
    },
    {
      name: "You shock me all night long",
      rating: "3/5",
      singer: "AC/DC"
    }
  ],

  RAP: [
    { name: "Lose Yourself", rating: "5/5", singer: "Eminme" },
    { name: "Nate", rating: "5/5", singer: "NF" },
    { name: "Ms Jackson", rating: "3/5", singer: "OutKast" }
  ],

  RandBSOUL: [
    { name: "Earth Angel", rating: "4/5", singer: "The Penguins" },
    { name: "Hit Different", rating: "3/5", singer: "SZA" },
    { name: "When a man loves a woman", rating: "4/5", singer: "Percy Sledge" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("RandBSOUL");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Great songs </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        These are my favourite songs, click a genre to check out songs from them{" "}
      </p>

      <div>
        {Object.keys(songs).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              background: "#F87171"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {songs[selectedGenre].map((songs) => (
            <li
              key={songs.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                background: "#5BC3EB"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {songs.name} </div>
              <div style={{ fontSize: "smaller" }}> {songs.rating} </div>
              <div style={{ fontSize: "smaller" }}> {songs.singer} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
