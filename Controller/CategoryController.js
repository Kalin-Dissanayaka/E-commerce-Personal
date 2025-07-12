const { request, response } = require('express');
const CategoriesSchema = require('../models/CategoriesSchema');


//post
const createCategory = async (request, response) => {

	try {
		const {categoryName, file, countryIds} = request.body;
		if(!categoryName || !countryIds || !file){
			return response.status(400).json({code: 400, message: 'some fields are missing...', data:null});
		}

		const category = new CategoriesSchema({
		// client side must send the file resource
		// you must upload the icon into the S3 bucket and then you can get the response body.
		// the client send the ids of all the available countries, and the system must find all the countries for the request and save.

			categoryName: categoryName,

			icon: {
				hash:'Temp Hash',
				resourceUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1TiZMtNq_El78BMq7-uS7g01qtuiAAVNj6tLspl1bAMw_t9AgZsxNlkrEzXrrYMGcz_S_pKEDq4FU-A_vW875CtAp1DHRfKZAt7xoww',
				filename:'Temp File Name',
				directory:'Temp Directory'
			},

			availableCountries: [
				{
					countryId: 'Temp-Id-1',
					countryName: 'Sri Lanka'
				},
				{
					countryId: 'Temp-Id-2',
					countryName: 'India'
				}
			],
			
		});

		const saveData = await category.save();
			return response.status(201).json({code: 201, message: 'category has been saved...', data: saveData});
	
	} catch (e) {
		response.status(500).json({code: 500, message: 'something went wrong...', error: e})
	}
	
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