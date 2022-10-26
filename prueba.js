// const usuarios = [
//     ['Agustin', '23', 'Profesor'],
//     ['Oriana', '31', 'Enfermera'],
//     ['Martina', '19', 'Mecanica'],
//     ['Omar', '27', 'Soldado'],
// ]

// function callback(acumulador, usuario) {
//     const nombre = usuario[0];
//     const edad = usuario[1];
//     const profesion = usuario[2];

//     return {
//         nombres: [...acumulador.nombres, nombre],
//         edades: [...acumulador.edades, edad],
//         profesiones: [...acumulador.profesiones, profesion]
//     }
// }

// const usuariosReducidos = usuarios.reduce(callback, { nombres: [], edades: [], profesiones: [] });

// console.log(usuariosReducidos);

// // Array.prototype.reduccion = function (callback) {
// //     nuevoArray
// //    for(let i = 0; i  < this.length; i++) {
// //        return
// //    }
// // }

// function agregarSimboloExclamacion(str) {
//   // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
//   // Ejemplo: "hello world" pasaría a ser "hello world!"
//   // Tu código:
//   const nuevaString = `${str}!`;
//   return nuevaString;
// }
// const nuevaString = combinarNombres ("marcos", "vacaflor");
// console.log(nombresCombinados);

// function retornar(num, num2){
//   if (num + num2 === 4) {
//     return 4
// } return "error"
// }
// console.log(retornar(2,3));

// function esVocal(letra) {
//   if (letra.length > 1){
//     return "Dato incorrecto";
//   }
//   if (letra.length = 1 && letra === "a" || letra === "e" || letra === "i" || letra === "o" ||letra === "u"){
//    return "Es vocal";
//   }

// }

// console.log(esVocal("ams"));

// function password(password1){

// if (password1.length >= 12 && password1.includes('@')) {
//     console.log('La contraseña es extremandamente fuerte');
// } else if (password1.length >= 8 || password1.includes('#')) {
//     console.log('La contraseña es lo suficientemente fuerte');
// } else {
//     console.log('La contraseña no es lo suficientmente larga');
// }
// }
// password("12d#");

// const array = [1,2,3,4]
// function incrementarPorUno(array) {

//   return console.log( array.forEach(element => {element + 1}) );
// }
// // const arrayIncrementado = incrementarPorUno;

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (name === contacts[i].firstName) {
//       if (contacts[i].hasOwnProperty(prop) === true) {
//         return console.log(contacts[i][prop]);
//       }
//       return console.log("No such property");
//     }

//   }
//   return console.log("No such contact");
// }

// lookUpProfile("Kristian", "lastName");

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum > endNum) {
//     return [];
//   } else  {
//     const range = rangeOfNumbers(startNum, endNum - 1);
//     range.push(endNum);
//     return range;
//   }

// }
// console.log(rangeOfNumbers(3 , 7));

// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// function updateRecords(records, id, prop, value) {

//   if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   }
//   else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
//     records[id][prop] = [value];
//   }

//   else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   }

//   else if (value === "") {
//     delete records[id][prop]
//   }
//   return records;
// }

// console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"))

// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Cambia solo el código debajo de esta línea

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < j.length; j++) {
//       if (arr[i][j] !== elem) {
//       newArr.push(arr[i].j)

//       }
//     }
//   }
//   // Cambia solo el código encima de esta línea
//   return newArr;
// }

// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 19));

// function reverseString(str) {

//   let nuevaStr = "" ;
//   for (let i = 0; i < str.length; i++) {

//     nuevaStr =  str[i] += nuevaStr;
//   }

//     return nuevaStr;
// }
// console.log(reverseString("hello"));

// function reverseString(str) {
//   const cadenaArray = [];
//   for (let i = 0; i < str.length; i++) {
//     cadenaArray.unshift(str[i]);
//   }
//   let nuevaStr = "";
//   for (let i = 0; i < cadenaArray.length; i++) {
//      nuevaStr = nuevaStr += cadenaArray[i]; }
//     return nuevaStr;
// }
// console.log(reverseString("hello"));

// const findLongestWordLength = (str) => Math.max(...str.split(" ").map(i => i.length))

// function findLongestWordLength(str) {
//   const arrayPalabras = str.split(" ");
//   const largoPalabraArray = [];
//   for(let i = 0; i < arrayPalabras.length; i++){
//     let largoPalabra = arrayPalabras[i].length;
//     largoPalabraArray.push(largoPalabra);
//   }
//   // let mayorOMenor = largoPalabraArray[0]

//   // for(let i = 0; i < largoPalabraArray.length; i++){
//   //  if (mayorOMenor > largoPalabraArray[i]){
//   // mayorOMenor = mayorOMenor;}
//   //  else {mayorOMenor = largoPalabraArray[i]}

//   // }

//   return largoPalabraArray;
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// function largestOfFour(arr) {
//   const numGrandeArray = [];
//   let largoNum = [];

//   for (let i = 0; i < arr.length; i++) {

//     largoNum = arr[i];
//     largoNum = Math.max(...largoNum);
//   numGrandeArray.push(largoNum);}

//   return numGrandeArray;
// }

// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );

// function repeatStringNumTimes(str, num) {

//   let strRepeat = "";
//   if (num.sing !== -1){

//     for (let i = 0; i < num ; i++){

//     strRepeat = strRepeat + str;
//   }

//   } else if(num.sing === -1){return "";}

//   return strRepeat;
// }

// console.log(repeatStringNumTimes("abc", 3));

// function truncateString(str, num) {
//   let nuevaStr = "...";
//   if (str.length > num){

//     nuevaStr = str.slice(0, num) + nuevaStr;
//   } else if (str.length <= num){
//     nuevaStr = str;
//   }
//   return nuevaStr;
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

// function findElement(arr, func) {
//   let num1 = 0;

// for (let i = 0; i < arr.length; i++ ){
//   let num = arr[i];
//   if (func(num) === true){
//      num1 = arr[i];
//      return num1;}
// }

// }

// console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));

// function booWho(bool) {
//   if (bool === true || bool === false){
//     return true;
//   } else {
//   return false;}
// }

// booWho(null);

// function titleCase(str) {
//   let strn = str.toLowerCase();
//   let arrayPalabras = strn.split(" ");

//  let mayusPalabra = "";

//  for (let i = 0; i < arrayPalabras.length; i++) {

//    let may = arrayPalabras[i][0].toUpperCase() + arrayPalabras[i].substring(1);
//    mayusPalabra = mayusPalabra + " " + may;

//  }

// return mayusPalabra;
// }

// console.log(titleCase("sHoRt AnD sToUt"));

// function titleCase(str) {
//    return str.toLowerCase().split(" ").map(i => i[0].toUpperCase() + i.substring(1)).join(" ");

// }

// console.log(titleCase("HOLA COMO ESTAS"));

// function frankenSplice(arr1, arr2, n) {
//   const arr = arr2.map(i => i = i);
//   arr.splice(n, 0, ...arr1);
//   return arr;

//   }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// function bouncer(arr) {
//   const array = arr;
//   for (let i = 0; i < arr.length; i++){
//   if ([i] === false){
//     array.splice(i , 1);
//   }
//   }

// }

// console.log(bouncer([7, "ate", "", false, 9]));

// function bouncer(arr) {
//   const nuevoArr = arr.filter(i => i = i);
//   return nuevoArr;
// }

// console.log(bouncer([false, 9, 0, NaN, undefined, ""]));

// function getIndexToIns(arr, num) {
//   const nuevArr = [...arr, num];
//   const arrayMayor = nuevArr.sort((pv, sv) => pv - sv);
//   return arrayMayor.findIndex((i) => i === num);
// }

// console.log(getIndexToIns([40, 100, 60], 50));

// function mutation(arr) {

//   return arr;
// }

// mutation(["hello", "hey"]);

// function chunkArrayInGroups(arr, size) {

//   const arr1 = arr.slice(0 , size);
//   const arr2 = arr.slice(size)

// }

// chunkArrayInGroups(["a", "b", "c", "d"], 2);

// La variable global
// const s = [23, 65, 98, 5];

// Array.prototype.myFilter = function(callback) {
//   // Cambia solo el código debajo de esta línea
//   const newArray = [];
//   for(let i = 0; i < this.length; i++){
//     if (callback(this[i], i, this) === true){
//     newArray.push(this[i])};
//   }
//   // Cambia solo el código encima de esta línea
//   return newArray;
// };

// const new_s = s.myFilter(function(item) {
//   return item % 2 === 1;
// });

// console.log(new_s)

// La variable global
// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// function getRating(watchList) {
//   // Cambia solo el código debajo de esta línea
//   let proRating = watchList
//     .filter((i) => i.Director === "Christopher Nolan").length;

//   let averageRating = watchList
//     .filter((i) => i.Director === "Christopher Nolan")
//     .map((elem) => ({ imdbRating: elem.imdbRating }))
//     .reduce((sum, clasif) => {
//       let suma = sum + parseFloat(clasif.imdbRating);
//      return suma;
//     }, 0);

//   // Cambia solo el código encima de esta línea
//   return averageRating/proRating;
// }

// console.log(getRating(watchList));

// const squareList = (arr) => {
//   const arrNew = arr
//     .filter((num) => Math.sign(num) === 1)
//     .filter((num) => Number.isInteger(num) === true)
//     .reduce((acum , num) => {return [...acum, Math.pow(num , 2)]} ,[]);

//   return arrNew;
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

// function alphabeticalOrder(arr) {

//   arr.sort((a,b)=> {if (a<b){return -1}})
//   return arr

// }

// console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

// Cambiar cadenas a slug(URL)

// function urlSlug(title) {
//   const strArr = title.toLowerCase().split(/\W+/gi);
//   const arrFilter = strArr.filter((word) => word);
//   return arrFilter.join("-");
// }
// // Cambia solo el código encima de esta línea
// console.log(urlSlug(" Winter Is  Coming"));

// repetir cadena

// function repeatStringNumTimes(str, num) {
//   if (Math.sign(num) === 1){
//     let strRepeat = str;
//     for (let i = 1; i < num;i++){
//        strRepeat = strRepeat + str;
//       }
//       return strRepeat;
//   }
//   return "";
// }

// console.log(repeatStringNumTimes("*", 8));

// funcion que verifica que todos las letras del elemento en posicion 1 esten en el primer elemento

// function mutation(arr) {
//   const arrElemPrimer = arr[0].toLowerCase().split("");
//   const arrElemSegun = arr[1].toLowerCase().split("");
//   let trueOrFalseArr = [];
//   let trueOrFalse;

//   for (let i = 0; i < arrElemSegun.length; i++) {
//     for (let j = 0; j < arrElemPrimer.length; j++) {
//       if (arrElemSegun[i] === arrElemPrimer[j]) {
//         trueOrFalseArr.push(arrElemSegun[i]);
//       }
//     }
//   }
//   const arr1 = trueOrFalseArr.filter((item, index) => {
//     return trueOrFalseArr.indexOf(item) === index;
//   });
//   const arr2 = arrElemSegun.filter((item, index) => {
//     return arrElemSegun.indexOf(item) === index;
//   });

//   if (arr1.length === arr2.length) {
//     return (trueOrFalse = true);
//   } else {
//     return (trueOrFalse = false);
//   }
// }

// console.log(mutation(["Hello", "hello"]));

function chunkArrayInGroups(arr, size) {
  
    const arr1 = [];
    for (let i = 0; i < arr; i++) {
      arr1,push
      if (index === size - 1){

      }
    }
  
  
  return arr1;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
