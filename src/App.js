import React from "react";
import "./styles.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
const DataDict = {
  Movies: [
    {
      name: "The Shawshank Redemption",
      rating: "9.5/10",
      imgUrl: require("../images/ShawShank.jpg")
    },
    {
      name: "Avegers:Endgame",
      rating: "8.4/10",
      imgUrl: require("../images/Avengers.jpg")
    },
    {
      name: "Inception",
      rating: "8.7/10",
      imgUrl: require("../images/Inception.jpg")
    }
  ],
  Videos: [
    {
      name: "The future we're building | Elon Musk",
      rating: "9.5/10",
      imgUrl: require("../images/Elon.jpg")
    },
    {
      name: "My Next Guest Needs No Introduction with Barack Obama",
      rating: "9.2/10",
      imgUrl: require("../images/Obama.jpg")
    },
    {
      name: "My Next Guest Needs No Introduction with Robert Downey Jr.",
      rating: "9.1/10",
      imgUrl: require("../images/Robert.jpg")
    }
  ],
  Songs: [
    {
      name: "Just Hold On| Steve Aoki",
      rating: "9.8/10",
      imgUrl: require("../images/Just.jpg")
    },
    {
      name: "Viva La Vida|ColdPlay",
      rating: "9.5/10",
      imgUrl: require("../images/viva.jpg")
    },
    {
      name: "Something Just Like This| ChainSmokers",
      rating: "9.2/10",
      imgUrl: require("../images/Something.jpg")
    }
  ],
  Books: [
    {
      name: "IKIGAI| The Japanese Secret",
      rating: "9.8/10",
      imgUrl: require("../images/IKIGAI.jpg")
    },
    {
      name: "BILL GATES| THE SOLUTIONS WE HAVE AND THE BREAKTHROUGH WE NEED",
      rating: "9.5/10",
      imgUrl: require("../images/BILL.jpg")
    },
    {
      name: "Barking Up The Wrong Tree",
      rating: "9.3/10",
      imgUrl: require("../images/Barking.jpg")
    }
  ]
};

export default function App() {
  const [selectedCategory, setCategory] = useState("Books");
  function categoryClickHandler(category) {
    setCategory(category);
  }
  return (
    <div className="App">
      <section className="header">
        <h1>RECCOMENDATIONS|MOVIES|VIDEOS|MUSIC|BOOKS</h1>
      </section>

      <div className="about">
        <p>
          Welcome to my personal reccomendations. Click on a category to start.
        </p>
      </div>

      <div>
        {Object.keys(DataDict).map((category) => (
          <button onClick={() => categoryClickHandler(category)}>
            {category}
          </button>
        ))}
      </div>

      <section className="categ-grid">
        {DataDict[selectedCategory].map((categ) => (
          <div className="card">
            <div className="categ-name">{categ.name}</div>
            <div className="imgg">
              <img alt={categ.name} src={categ.imgUrl} />
            </div>
            <div className="details">
              <div className="dish-rating">
                <strong>Rating:</strong> {categ.rating}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="footer">
        <p>
          These are my personal reccomendations.This site content will keep on
          changing with time.Keep an eye on this space.
        </p>
        <a
          href="https://www.twitter.com/sattusupari30"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://github.com/PratyushSrivastav"
          className="github social"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/pratyush-srivastava-5a1813173/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </section>
    </div>
  );
}
