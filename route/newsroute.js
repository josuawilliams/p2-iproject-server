"use strict";
const express = require('express')
const news = express.Router()
const Controller = require('../controller/controller')
const Authentication = require('../middleware/Authentication')
const AuthorizationDelete = require('../middleware/Authorized')

news.post("/login", Controller.login)
news.post("/register", Controller.register)

news.get("/", Controller.HomeNews)
news.get("/:categories", Controller.CategoriesNews)
news.get("/weather", Controller.WeatherMap)
news.get("/:categories/detailNews", Controller.getDetailNews)

news.use(Authentication)
news.get("/favoritesNews", Controller.Favorite)
news.post("/favoritesNews", Controller.AddFavorites)
news.post("/comments", Controller.comment)

news.delete("/delete", AuthorizationDelete ,Controller.Delete)
module.exports = news