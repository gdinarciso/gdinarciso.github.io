function addFavoriteBook(bookName) {
  if (!bookName.includes("Great")) {

//1. Define an `addFavoriteBoo(..)` function that receives a single parameter, called `bookName`
    console.log(bookName);

//2. If the provide `bookName` string does *NOT* have the word `Great` in it, add it to the `favoriteBooks` array.
    favoriteBooks.push(bookName);
  }
}
console.log(favoriteBooks);

//3. Define a `printFavoriteBooks()` function that receives no parameters
function printFavoriteBooks () {

//4. `printFavoriteBooks()` should first print a message like "Favorite Books:..", and include the number of books in the `favoriteBooks` array.

//  Hint:
//  - Use the \` back-tick operators for strings that need to include values in them.
//  - Use `console.log(..)` to print a message to the screen.
//  Make sure to then call the `printFavoriteBooks()` function at the end of the program.
console.log('Favorite Books: ' + favoriteBooks.length); //my's
console.log(`Favorite Books: ${favoriteBooks.length}`); //Kyle's

//5. Finally, `printFavoriteBooks()` should loop through the `favoriteBooks` array and print out each value.
// Hint: use the `for ( let .. of .. ) { }` style loop.
  for ( let favoriteBook of favoriteBooks) {
    console.log(favoriteBook);
  }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

//4.
printFavoriteBooks();