const express = require('express');

const routes = (app) => {
	app.get('/', function(req,res){
	    burger.select(function(burger_data){
	        console.log(burger_data);
	        res.render('index',{burger_data});
	    })
	});

	app.put('/burgers/update', function(req,res){
	    var id = req.body.burger_id;
	    console.log(req.body.burger_id);
	    burger.update(id, function(result){
	        console.log(result);
	        res.redirect('/')
	    });
	})

	app.post("/burgers/create", function(req,res){
	    burger.create(req.body.burger_name, function(result){
	        console.log(result);
	        res.redirect("/")
	    });
	});
	}

module.exports = routes; 