const holySmokesBatman = {
 // Copy and paste the JSON object you got back into the holySmokesBatman object in your JS file.
  "Search": [
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg"
    },
    {
      "Title": "Batman v Superman: Dawn of Justice",
      "Year": "2016",
      "imdbID": "tt2975590",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Batman",
      "Year": "1989",
      "imdbID": "tt0096895",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
    },
    {
      "Title": "Batman Returns",
      "Year": "1992",
      "imdbID": "tt0103776",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
    },
    {
      "Title": "Batman Forever",
      "Year": "1995",
      "imdbID": "tt0112462",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWY3M2I0YzItNzA1ZS00MzE3LThlYTEtMTg2YjNiOTYzODQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Batman & Robin",
      "Year": "1997",
      "imdbID": "tt0118688",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
    },
    {
      "Title": "Batman: The Animated Series",
      "Year": "1992–1995",
      "imdbID": "tt0103359",
      "Type": "series",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3MjcwNzY3NF5BMl5BanBnXkFtZTYwNzA2MTI5._V1_SX300.jpg"
    },
    {
      "Title": "Batman: Under the Red Hood",
      "Year": "2010",
      "imdbID": "tt1569923",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYTdlODI0YTYtNjk5ZS00YzZjLTllZjktYmYzNWM4NmI5MmMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    },
    {
      "Title": "Batman: The Dark Knight Returns, Part 1",
      "Year": "2012",
      "imdbID": "tt2313197",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
    },
    {
      "Title": "The LEGO Batman Movie",
      "Year": "2017",
      "imdbID": "tt4116284",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
    }
  ],
  "totalResults": "321",
  "Response": "True"

}

//Set a new variable to the totalResults property in holySmokesBatman.


let tr = holySmokesBatman.totalResults;

//Set a new variable to the Response property in holySmokesBatman.
let re = holySmokesBatman.Response;
// Practice grabbing all the Movie titles. Set that info to a new array using map.
holySmokesBatman.Search.map(function(e) {
  return e.Title;
});

//Practice grabbing all of the Poster image urls. Set that info to a new array using map.
holySmokesBatman.Search.map(function(e) {
  return e.Poster;
});

// Now grab the Movie and Poster data at the same time using map and render that data in the browser (AKA use the DOM).
holySmokesBatman.Search.map(function(e) {


  document.querySelector('#mov-wrapper').append(e.Title);
  let imgTag = document.createElement('img');
  imgTag.setAttribute('src',e.Poster); 
  document.querySelector('#mov-wrapper').append(imgTag);
});


const movieTitleList = holySmokesBatman.Search.map(function(e){
	return e.Title;
})

$('#search').on('click',function(){
let val = $('#filters').val()

let holyFilter = holySmokesBatman.Search.filter(function(e){
  

	if(val === e.Title){
		 return e.Title;
		
	}
	});
		if(holyFilter.length > 0){
			alert('heck yes it\'s in there')

	    }else{
			alert('no dice. sorry, try again')
		}
}

let rambleOfOmdbIDs = holySmokesBatman.Search.reduce(function(accumulator, value){	
	return value.imdbID + accumulator;
});

let holyReduce = holySmokesBatman.Search.map((e,i)=>{
	let ratings = Math.round(Math.random()*i);
  e.ratings = ratings;
  return e;
});


  let theRatingsList = holyReduce.reduce(function(a, b) {
    b = (b > 3) ? b : 0;  
    return a + b;
})

let total = theRatingsList;









