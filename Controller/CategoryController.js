const { request, response } = require('express');
const CategoriesSchema = require('../models/CategoriesSchema');
//post
const createCategory = (request, response) =>{
	console.log(request.body);
}
//put
const updateCategory =(request, response) =>{
	console.log(request.body);
}
//delete
const deleteCategory = (request, response) =>{
	console.log(request.body);
}
//get
const findCategoryById =(request, response) =>{
	console.log(request.body);
}
//get
const findAllCategory =(request, response) =>{
	console.log(request.body);
}

module.exports = {
	createCategory, updateCategory, deleteCategory, findAllCategory, findCategoryById
}