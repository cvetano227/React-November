import React from "react";
import { MoviesList } from "./components/Movies";

export function App() {
  let movies = [
    {
      name: "The Hobbit: An Unexpected Journey",
      date: "12/14/2012",
      genre: {
        plot: "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home and the gold within it from the dragon Smaug.",
        cast: "Martin Freeman, Ian McKellen, Richard Armitage",
      },
      imdbLink:
        "https://www.imdb.com/title/tt0903624/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_The%20Hobbit%3A%20An%20Unexpected%20Journey",
      imgUrl:
        "https://www.imdb.com/title/tt0903624/mediaviewer/rm3577719808/?ref_=tt_ov_i",
    },
    {
      name: "The Mechanic",
      date: "1/28/2011",
      genre: {
        plot: "An elite hitman teaches his trade to an apprentice who has a connection to one of his previous victims.",
        cast: "Jason Statham, Ben Foster, Tony Goldwyn",
      },
      imdbLink:
        "https://www.imdb.com/title/tt0472399/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_The%20mechanic",
      imgUrl:
        "https://www.imdb.com/title/tt0472399/mediaviewer/rm2050656000/?ref_=tt_ov_i",
    },
    {
      name: "The Lord of the Rings: The Two Towers",
      date: "12/18/2002",
      genre: {
        plot: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        cast: "Elijah Wood, Ian McKellen, Orlando Bloom",
      },
      imdbLink:
        "https://www.imdb.com/title/tt0167261/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%20two%20towers",
      imgUrl:
        "https://www.imdb.com/title/tt0167261/mediaviewer/rm306845440/?ref_=tt_ov_i",
    },
    {
      name: "The Lord of the Rings: The Return of the King",
      date: "12/17/2003",
      genre: {
        plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        cast: "Elijah Wood, Ian McKellen, Orlando Bloom",
      },
      imdbLink:
        "https://www.imdb.com/title/tt0167260/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%20ret",
      imgUrl:
        "https://www.imdb.com/title/tt0167260/mediaviewer/rm584928512/?ref_=tt_ov_i",
    },
    {
      name: "The Infiltrator",
      date: "7/13/2016",
      genre: {
        plot: "A U.S. Customs official uncovers a money laundering scheme involving Colombian drug lord Pablo Escobar.",
        cast: "Bryan Cranston, John Leguizamo, Diane Kruger",
      },
      imdbLink:
        "https://www.imdb.com/title/tt1355631/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_The%20infiltrator",
      imgUrl:
        "https://www.imdb.com/title/tt1355631/mediaviewer/rm3798736128/?ref_=tt_ov_i",
    },
  ];
  console.log(movies);
  return (
    <div style={{ backgroundColor: "#070707", color: "white" }} id="app">
      <h2>Welcome to React!</h2>
      <MoviesList movies={movies} />
    </div>
  );
}
