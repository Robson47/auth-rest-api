require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.gpcdo6p.mongodb.net/`)
    .then(
        app.listen(3000, () => {
            console.log(`*-------------------------------------*\n    API Inicializada com sucesso!\n           Database Online!    \n*-------------------------------------*`)
        }))
    .catch((error) => {
        console.log(error)
    });
