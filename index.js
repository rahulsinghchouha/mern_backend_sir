const express = require("express");
const server =  express();
const cors  = require('cors');
const connectDatabase = require("./utils/dbConn");
const mongoose = require("mongoose");
const { personRouter } = require("./routes/personRouter");

/**
 * MiddleWares
 */

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static("public"));
server.use(cors());


/**
 * Connect to database
 */

connectDatabase();


/**
 * Routes
 */

server.use("/person", personRouter);


mongoose.connection.once("connected", ()=>{
	console.log("Connected to database");
	server.listen(4000, ()=>{
		console.log("Server is running ")
	})
})
