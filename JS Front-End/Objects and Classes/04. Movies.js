function storeMovies(input){

    let movies = [];

    let token = input.slice();

    for(let movieInfo of token){
        if(movieInfo.startsWith('addMovie')){
            let movie = {};
            movie.name = movieInfo.substring(9)
            
            
            movies.push(movie);

        }
        else if(movieInfo.includes('directedBy')){
            let movieName = movieInfo.substring(0, movieInfo.indexOf('directedBy')-1);

             if(movies.some( m => m.name==movieName)){
                 let film = movies.find(f=>f.name==movieName);
                 film.director = movieInfo.substring(movieInfo.indexOf('directedBy')+11);
            }
        }
        else if(movieInfo.includes('onDate')){
            let movieName = movieInfo.substring(0, movieInfo.indexOf('onDate')-1);
            let movieDate = movieInfo.substring(movieInfo.indexOf('onDate')+7);
            
            if(movies.some( m => m.name==movieName)){
                let film = movies.find(f=>f.name==movieName);
                film.date = movieDate;
            }
        }
    }  
    
    for(let movie of movies){
        if(movie.date !='' && movie.director != ''){
            let film = JSON.stringify(movie);
            console.log(film);
        }
        //console.log(movie);
    }
   
}

storeMovies([
    'addMovie Godfather',
    'addMovie Fast and Furious',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );

storeMovies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    );