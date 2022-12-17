/* 
We have a client requirement to build a RESTful API in Express
to manage a database of Harry Potter Characters.

This API should include:
- an endpoint that returns a list of all characters

- - this endpoint should have the ability to filter by house 
    and by name. 

- an endpoint that returns the details of a single character

/characters
/characters/<id>
/characters/1
/characters/2
/characters/3

/characters?name=Harry Potter&house=Gryffindor
/characters?house=Gryffindor
/characters?house=Slytherin


*/

// import express

const express = require("express");
const fs = require("fs");

