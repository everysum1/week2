var youDontNeedToWorryAboutAnythingInHere = function() {
	var NameArray = ['Noel Plain', 'Steffanie Plain', 'Hester Sanderfur', 'Retta Plain', 'Idella Saur','Shila Plain', "Marybeth Peavler", "Chadwick Jin", "Jerold Chauez", "Roselle Plain", "Doria Figgins", "Seth Arvizu", 'Gloria Wyche', "Melodi Plain", "Robin Shackleford", "Jack Plain", "Marina Prost", "Melvina Plain", "Ryan Plemons", "Janis Ohare", "Assata Shakur", "Kanye West", "Jay-Z", "Mariah Carey", "Bianca Gandolfo", "Cedric the Entertainer", "Chloe Plain"];
	var JobArray = ['Mortician', 'Broadcaster', 'Craftsperson', 'Engineer', 'Interior designer', 'Nun'];
	var CityArray = ["Scottsdale, Arizona", "Oakland, California", "Stockton, California", "New York, NY"];
	var emptyNetwork = [];
	
	function createNetwork(collection){

		for (var i = 0; i < NameArray.length; i++) {
			var randomJob = JobArray[Math.floor(Math.random() * JobArray.length)];
			var randomCity = CityArray[Math.floor(Math.random() * CityArray.length)];

			collection.push(createNewUser(NameArray[i], randomJob, randomCity));
		}

		return collection
	}

	return createNetwork(emptyNetwork);

}

function createNewUser(username, job, city){
	var newUser = {
		username: username,
		job: job,
		city: city,
		friends: [],
		family: [],
		coworkers: [],
	};

	return newUser;

};
// creating the user you're going to be adding to
var joeyProfile = createNewUser('Joey Plain', 'Engineer', 'Oakland, California');
// creating the network collection you're going to be pulling
var allUsers = youDontNeedToWorryAboutAnythingInHere();
// check the console to see what these look like


//console.dir(joeyProfile);
//console.dir(allUsers);



// YOUR CODE HERE

for (var i = 0; i < allUsers.length; i++) {
		if (allUsers[i].city === joeyProfile['city']) {
			joeyProfile.friends.push(allUsers[i]);
			//console.log(joeyProfile.friends);
		}
}

for (var i = 0; i < allUsers.length; i++) {
		if (allUsers[i].job === joeyProfile['job']) {
			joeyProfile.coworkers.push(allUsers[i]);
			//console.log(joeyProfile.coworkers);
		}
}

for (var i = 0; i < allUsers.length; i++) {
	var names = allUsers[i].username.split(" ");
		if (names[names.length - 1] === 'Plain') {
			joeyProfile.family.push(allUsers[i]);
			//console.log(joeyProfile.family);
		}
	
// console.log(allUsers[i].city);
}
// console.log(joeyProfile.family)
// console.log(joeyProfile.friends)

for (var i = 0; i < joeyProfile.family.length; i++) {
	for (var j = 0; j < joeyProfile.friends.length; j++) {
	 if (joeyProfile.family[i] === joeyProfile.friends[j]) {
			joeyProfile['friends'].splice(j, 1);
			
		}
	}
}
// console.log(joeyProfile.family);
// console.log(joeyProfile.friends);

for (var i = 0; i < joeyProfile.friends.length; i++) {
	for (var j = 0; j < joeyProfile.coworkers.length; j++) {
	 if (joeyProfile.friends[i] === joeyProfile.coworkers[j]) {
			joeyProfile['coworkers'].splice(j, 1);
			
		}
	}
}

var nameSort = function(arr) {
	arr.sort();
	console.log(arr);
}

nameSort(joeyProfile.friends);
nameSort(joeyProfile.coworkers);
nameSort(joeyProfile.family);


//create neworkSort function that takes an array and string as 
//arguments
var networkSort = function(arr, name) {
	console.log(arr);
	//check to see if name is in array
	for (var i = 0; i < arr.length; i++) {
		//console.log('for loop');
		//if name appears in array, alert user with full profile
		if (arr[i].username === name) {
  				Object.prototype.toString = function() {
  					var output = "";
  					for (var i in this) {
    				output += i + ": " + this[i] + "\n";
					}
					return(output);
				}
				alert (arr[i]);
				break;
			}	
		else {
			newJob = prompt('What is your friend\'s job?');
			newCity = prompt('What is your friend\'s city?');
			var newProfile = createNewUser(name, newJob, newCity);
			alert(newProfile);
			break;
		}
		//if name doesn't exist, prompt user for info (name, job,
		//city) 
		//user should have friends, family, and coworkers properties
		//as well
			//put info into an object and insert into array
	}
}

	//test in namecheck function to make sure it exists
// networkSort(joeyProfile['family'], 'Noel Plain');

networkSort(joeyProfile.family, "Noel Plain");