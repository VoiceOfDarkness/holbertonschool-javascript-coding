#!/usr/bin/node
const { count } = require('console');
const request = require('request');

const url = 'https://swapi-api.hbtn.io/api/films/';

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  }

  const films = JSON.parse(body).results;
  let count = 0;
  films.forEach((film) => {
    const filteredCharacters = film.characters.filter((character) =>
      character.includes('0')
    );
    if (filteredCharacters.length > 0) {
      count++;
    }
  });
  console.log(count);
});
