const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.post("/api/books", (req, res, next) => {
  console.log("route post");
  res.status(201).json({
    message: "Objet créé !",
  });
});

app.get("/api/books", (req, res, next) => {
  const stuff = [
    {
      userId: "1",
      title: "titre du livre",
      author: "auteur du livre",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      year: 2001, //N
      genre: "genre du livre",
      ratings: [
        {
          userId: "1",
          grade: 3, //N
        },
        {
          userId: "12",
          grade: 4, //N
        },
      ],
      averageRating : 1.8 //N
    },
    {
      title: "Mon deuxième livre",
      description: "Les infos de mon deuxième objet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      userId: "qsomihvqiosreg",
      year: 1980,
      author: "Dostoievski",
      ratings: [
        {
          userId: "qsomihvqiosreg",
          grade: 5,
        },
      ],
      genre: `test`,
      // averageRating: (ratings[0].grade + ratings[1].grade) / 2
      // averageRating: 4
    },
  ];
  res.status(200).json(stuff);
});

module.exports = app;

// Models

// User {
// email : String - adresse e-mail de l’utilisateur [unique]
// password : String - mot de passe haché de l’utilisateur
// }

// Book {
// userId : String - identifiant MongoDB unique de l'utilisateur qui a créé le livre
// title : String - titre du livre
// author : String - auteur du livre
// imageUrl : String - illustration/couverture du livre
// year: Number - année de publication du livre
// genre: String - genre du livre
// ratings : [
// {
// userId : String - identifiant MongoDB unique de l'utilisateur qui a noté le livre
// grade : Number - note donnée à un livre
// }
// ] - notes données à un livre
// averageRating : Number - note moyenne du livre
