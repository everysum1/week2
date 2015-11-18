// In Javascript, the leading __ in a variable name signifies that this is a variable you probably shouldn't be messing with. 
// NOTE: the leading underscore IN the variable name is different than the underscorejs.org library, 
// which uses underscore as an object and INVOKES METHODS on that object, "_.each()" for example. 
function __dontWorryAboutThis(){
	var __books = "Lucky Jim by Kingsley Amis, Money by Martin Amis, The Information by Martin Amis, The Bottle Factory Outing by Beryl Bainbridge, According to Queeney by Beryl Bainbridge, Flaubert's Parrot by Julian Barnes, A History of the World in 10 1/2 Chapters by Julian Barnes, Augustus Carp Esq. by Himself: Being the Autobiography of a Really Good Man by Henry Howarth Bashford, Molloy by Samuel Beckett, Zuleika Dobson by Max Beerbohm, The Adventures of Augie March by Saul Bellow, The Uncommon Reader by Alan Bennett, Queen Lucia by EF Benson, The Ascent of Rum Doodle by WE Bowman, A Good Man in Africa by William Boyd, The History Man by Malcolm Bradbury, No Bed for Bacon by Caryl Brahms and SJ Simon, Illywhacker by Peter Carey, A Season in Sinji by JL Carr, The Harpole Report by JL Carr, The Hearing Trumpet by Leonora Carrington, Mister Johnson by Joyce Cary, The Horse's Mouth by Joyce Cary, Don Quixote by Miguel de Cervantes, The Case of the Gilded Fly by Edmund Crispin, Just William by Richmal Crompton, The Provincial Lady by EM Delafield, Slouching Towards Kalamazoo by Peter De Vries, The Pickwick Papers by Charles Dickens, Martin Chuzzlewit by Charles Dickens, Jacques the Fatalist and his Master by Denis Diderot, A Fairy Tale of New York by JP Donleavy, The Commitments by Roddy Doyle, Ennui by Maria Edgeworth, Cheese by Willem Elsschot, Bridget Jones's Diary by Helen Fielding, Joseph Andrews by Henry Fielding, Tom Jones by Henry Fielding, Caprice by Ronald Firbank, Bouvard et Pécuchet by Gustave Flaubert, Towards the End of the Morning by Michael Frayn, The Polygots by William Gerhardie, Cold Comfort Farm by Stella Gibbons, Dead Souls by Nikolai Gogol, Oblomov by Ivan Goncharov, The Wind in the Willows by Kenneth Grahame, Brewster's Millions by Richard Greaves (George Barr McCutcheon), Squire Haggard's Journal by Michael Green, Our Man in Havana by Graham Greene, Travels with My Aunt by Graham Greene, Diary of a Nobody by George Grossmith, The Little World of Don Camillo by Giovanni Guareschi, The Curious Incident of the Dog in the Night-time by Mark Haddon, Catch-22 by Joseph Heller, Mr Blandings Builds His Dream House by Eric Hodgkins, High Fidelity by Nick Hornby, I Served the King of England by Bohumil Hrabal, The Lecturer's Tale by James Hynes, Mr Norris Changes Trains by Christopher Isherwood, The Mighty Walzer Howard by Jacobson, Pictures from an Institution by Randall Jarrell, Three Men in a Boat by Jerome K Jerome, Finnegans Wake by James Joyce, The Castle by Franz Kafka, Lake Wobegon Days by Garrison Keillor, Death and the Penguin by Andrey Kurkov, The Debt to Pleasure by John Lanchester, L'Histoire de Gil Blas de Santillane (Gil Blas) by Alain-René Lesage, Changing Places by David Lodge, Nice Work by David Lodge, The Towers of Trebizond by Rose Macaulay, England Their England by AG Macdonell, Whisky Galore by Compton Mackenzie, Memoirs of a Gnostic Dwarf by David Madsen, Cakes and Ale - Or the Skeleton in the Cupboard by W Somerset Maugham, Tales of the City by Armistead Maupin, Bright Lights Big City by Jay McInerney, Puckoon by Spike Milligan, The Restraint of Beasts by Magnus Mills, Charade by John Mortimer, Titmuss Regained by John Mortimer, Under the Net by Iris Murdoch, Pnin by Vladimir Nabokov, Pale Fire by Vladimir Nabokov, Fireflies by Shiva Naipaul, The Sacred Book of the Werewolf by Victor Pelevin, La Disparition by Georges Perec, Les Revenentes by Georges Perec, La Vie Mode d'Emploi by Georges Perec, My Search for Warren Harding by Robert Plunkett, A Dance to the Music of Time by Anthony Powell, A Time to be Born by Dawn Powell, Excellent Women by Barbara Pym, Less Than Angels by Barbara Pym, Zazie in the Metro by Raymond Queneau, Solomon Gursky Was Here by Mordecai Richler, Alms for Oblivion by Simon Raven, Portnoy's Complaint by Philip Roth, The Westminster Alice by Saki, The Unbearable Bassington by Saki , Hurrah for St Trinian's by Ronald Searle, Great Apes by Will Self, Porterhouse Blue by Tom Sharpe, Blott on the Landscape by Tom Sharpe, Office Politics by Wilfrid Sheed, Belles Lettres Papers: A Novel by Charles Simmons, Moo by Jane Smiley, Topper Takes a Trip by Thorne Smith, The Adventures of Ferdinand Count Fathom by Tobias Smollett, The Adventures of Roderick Random by Tobias Smollett, The Adventures of Peregrine Pickle by Tobias Smollett, The Expedition of Humphry Clinker by Tobias Smollett, The Prime of Miss Jean Brodie by Muriel Spark, The Girls of Slender Means by Muriel Spark, The Driver's Seat by Muriel Spark, Loitering with Intent by Muriel Spark, A Far Cry from Kensington by Muriel Spark, The Life and Opinions by Tristram Shandy, Gentleman by Laurence Sterne, White Man Falling by Mike Stocks, Handley Cross by RS Surtees, A Tale of a Tub by Jonathan Swift, Penrod by Booth Tarkington, The Luck of Barry Lyndon by William Makepeace Thackeray, Before Lunch by Angela Thirkell, Tropic of Ruislip by Leslie Thomas, A Confederacy of Dunces by John Kennedy Toole, Barchester Towers by Anthony Trollope, Venus on the Half-Shell by Kilgore Trout, The Mysterious Stranger by Mark Twain, The Witches of Eastwick by John Updike, Breakfast of Champions by Kurt Vonnegut, Infinite Jest by David Foster Wallace, Decline and Fall by Evelyn Waugh, Vile Bodies by Evelyn Waugh, Black Mischief by Evelyn Waugh, Scoop by Evelyn Waugh, The Loved One by Evelyn Waugh, A Handful of Dust by Evelyn Waugh , The Life and Loves of a She-Devil by Fay Weldon, Tono Bungay by HG Wells, Molesworth by Geoffrey Willans and Ronald Searle, The Wimbledon Poisoner by Nigel Williams, Anglo-Saxon Attitudes by Angus Wilson, Something Fresh by PG Wodehouse, Piccadilly Jim by PG Wodehouse, Thank You Jeeves by PG Wodehouse, Heavy Weather by PG Wodehouse, The Code of the Woosters by PG Wodehouse, Joy in the Morning by PG Wodehouse";
	var __bookStore = [];
	var __booksArray = __books.split(',');
	var __categories = ['classic', 'horror', 'romantic comedy', 'self help', 'historical']

	function __createBook(bookName){
		var price = Math.random() * 20;
		price = parseFloat(price.toString().slice(0, 4), 10);
		var category = (__categories[Math.floor(Math.random() * 5)])
	
		return {
			title: bookName.split('by')[0].trim(),
			author: bookName.split('by')[1].trim(),
			price: price,
			category: category
		}
	}

	function __createBookStore(arr) {
		for (var i = 0; i < arr.length; i++) {
			__bookStore.push(__createBook(arr[i]));
		}

		return __bookStore
	}

	return __createBookStore(__booksArray);

} //Don't pay any attention to the man behind the curtain in lines 1-30. Remember, the leading underscores in the variable names mean you shouldn't be messing with these variables. 

function testUser(){
	var balance = Math.random() * 100 + 130;
		balance = parseFloat(balance.toString().slice(0, 4), 10);
	return {
		balance: balance,
		cart: [],
	}
}

var BookStore = __dontWorryAboutThis();
var Susan = testUser();

//console.log(Susan);
var authorList = [];
var listString = [];
var categoryList = [];
var catListString = [];

Susan.checkStore = function(str) {
	//Go through every book in the store
	for (i = 0; i < BookStore.length; i++) {
		//if the string the user gave us matches a title
		if (BookStore[i].title === str) {
			//console.log('Bookstore[i]:', BookStore[i]);
			//let the user know you found it
			//and if they want to add it to cart
			var answer = confirm('We found your book: ' + BookStore[i].title + ' by ' + BookStore[i].author +  ' and it costs: $' + BookStore[i].price + '. Would you like to add it to your cart?')
			//if they say yes
			if (answer) {
				//put it in their cart
					Susan['cart'].push(BookStore[i]);
			}
				return (Susan.cart);
		}
		//else if the string matches a category
		else if (BookStore[i].category === str) {
			//put the book in a list of books in this category
			categoryList.push(BookStore[i]);
		}
		//else if the string matches an author
		else if (BookStore[i].author === str) {
			//put the book in a list of books by this author
			authorList.push(BookStore[i]);
			//console.log(authorList.length);
		}
	}
	if (categoryList.length > 0) {
		for (i=0; i<categoryList.length; i++) {
			catListString.push(categoryList[i].title + " by " + categoryList[i].author);
		}
		var categoryString = catListString.join("\n");
		var categoryChoice = prompt("There are multiple books in this category.  Which would you like to add?\n\n" + categoryString + "\n");
		for (var i = 0; i < categoryList.length; i++) {
			if (categoryList[i].title = categoryChoice) {
				//put it in the cart
				Susan.cart.push(categoryList[i]);
				//alert the user you put it in the cart
				alert(categoryList[i].title + " by " + categoryList[i].author + " has been placed in your cart.");
				break;
			}				

		}
	}
	//if the list of the books is GREATER than 1
	else if (authorList.length > 1) {
	//console.log('an if loop');
		//go through every book in the list
		for (i=0; i<authorList.length; i++) {
			//take the title and author	
			//put them in a list
			listString.push(authorList[i].title + " by " + authorList[i].author);
			//console.log(listStrings);
		}
			//join this list together
		var authorString = listString.join("\n");
		//prompt user of books you found
		//ask which one they want
		var authorChoice = prompt('There are multiple books by this author.  Which would you like?\n\n' + authorString + "\n");
				//match this string title with the object
		for (var i = 0; i < authorList.length; i++) {
			if (authorList[i].title = authorChoice) {
				//put it in the cart
				Susan.cart.push(authorList[i]);
				//alert the user you put it in the cart
				alert(authorList[i].title + " by " + authorList[i].author + " has been placed in your cart.");
				break;
			}				

		}
	}
				//else if the list of the books is 1, 
	else if (authorList.length === 1) {
		var oneAuthor = confirm('We found your book:  "' + authorList[0].title + '."  Would you like to add it to your cart?')
		//if yes, put it in the cart
		if (true) {
			Susan.cart.push(authorList[0]);

		}
	}		
};

Susan.checkStore("The Code of The Woosters");
Susan.checkStore("James Joyce");
Susan.checkStore("PG Wodehouse");
Susan.checkStore("classic");

console.log('cart:', Susan.cart);

Susan.deleteBook = function(str) {
	for (i = 0; i < Susan.cart.length; i++) {
		if (Susan.cart[i].title = str) {
			var deletePrompt = confirm('Are you sure you want to delete this item?');
			if (deletePrompt) {
				//console.log('success');
				Susan.cart.splice(i, 1)
			}
			
		}
	}
};

//Susan.deleteBook("The Code of The Woosters");

//console.log('Updated cart: ', Susan.cart);

Susan.clearCart = function() {
	var clearVar = confirm('Are you SURE you want to clear your cart?') 
	if (clearVar) {
		//console.log('coming true');
		Susan.cart = [];
	}
	return Susan.cart;
};

Susan.clearCart();

console.log('Cleared cart:', Susan.cart);
Susan.checkStore("Heavy Weather");

var total = 0;

Susan.checkOut = function() {
//go into each object in cart
//console.log ('started function');
	for (var i=0; i<Susan.cart.length; i++) {
		//console.log(Susan.cart[i].price);
		//look up price in each object
		//console.log((Susan.cart[i]));
		total += Susan.cart[i].price;
		console.log(total);
		while (i = Susan.cart.length-1) {
			console.log('while loop');
			if (total <= Susan.balance) {
			//if total is greater or equal to balance, let them checkout
				alert("You've successfully checked out! Your total is " + "$" + total);
				break;
			}
			else {alert("There was a problem with your order"); break
			};
		}
	}
}
	//compare total to balance
	
Susan.checkOut();