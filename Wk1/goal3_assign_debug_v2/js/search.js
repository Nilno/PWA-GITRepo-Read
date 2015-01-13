/*
 Name: Amaren Read
 Date: 1-11-2015
 Class & Section:  PWA1-Sec 1
 Comments: "Goal 3: Buggy Search Engine"
 */



// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),			// Declare DOM element for search "Results"
		searchInput = document.forms[0].search,						// Declare DOM element for search "Input"
		currentSearch = ''											// Declare current search as empty string
	;
	
	// Validates search query
	var validqte == function(query){								// Assign anonymous function to variable "validate"
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){								// Start while loop to see if query is empty
			query = query.substring(1, query.length);				// Extracts first character from query input string
		};
		while(query.charAt(query.length-1) === ""){					// Start while loop to see the length of what user inputs
			query = query.substring(0, query.length-1);				// Extracts second character from query input string
		;
		
		// Check search length, must have 3 characters
		if(query.length < 3){										// If user input in query is less then three
			alert("Your search query is too small, try again.);		// Alert window to notify user to input at least three characters
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();									// After a search the location input is cleared for next search input
			return;													// Breaks input function execution
		};
		
		search(query);												// Return query function execution/specifies a value to function caller
	};
	
	// Finds search matches
	var search = function(query)									// Assign anonymous function to variable "Search"
		
		// split the user's search query string into an array
		var queryArray = query.join(" ");							// Assign joining of elements for query array
		
		// array to store matched results from database.js
		var results = [];											// Matching results from database for variable results

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){						// For loop listing length of database array
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');					// Will save end of database title
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);	// Video item will be in lowercase to be saved to database
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){		// For loop for users search in query
				var qitem = queryArray[ii].tolowercase();			// Search keyword will be saved in lowercase
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);				// Declare compare variable to see if search keyword is in video title
				if(compare !== -1){									// If search keyword matches video item
					results.push(db[i]);							// Add video item into db array
				};
			;
		;
		
		results.sort();												// Sort out the array alphabetically
		
		// Check that matches were found, and run output functions
		if(results.length = 0){										// If length of results is equal to zero
			noMatch();												// Display no match
		}else{														// If there are results
			showMatches(results);									// Show matching results
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){										// Declare no match variable to function
		var html = ''+												// Declare variable html alert window
			'<p>No Results found.</p>'+								// Display paragraph "No Results found." in html alert window
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>' // Display "Try searching for "JavaScript".  Just an idea." in html alert window
		;
		resultsDIV.innerHTML = html;								// Declare DOM element for "Html"
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){							// Declare variable to show matches on page
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 								// Declare html variable to show "Results" in paragraph with anchor on page
			title, 													// Show title of result(s) in paragraph with anchor on page
			url														// Show url link of result(s) in paragraph with anchor on page
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){					// For loop listing length for results of search() function
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');						// Will save end of results title
			title = results[i].subString(0, titleEnd);				// Result(s) title string will be in index numbers
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);	// Result(s) title will display first then url after
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';		// Display video url as link
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.			// Declare DOM element for "html"
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){							// Execute JavaScript when document form is submitted
		var query = searchInput.value;									// Declare DOM element for the value of the search when document form is submitted
		validqte(query);												// Return query function

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;													// Return document form after it is submitted
	;

})();