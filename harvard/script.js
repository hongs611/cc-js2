function search(){
	var searchbx = document.getElementById("searchbox"); // get the searchbox
	var searchterm = searchbx.value; // get the search term

// API Call
	$.ajax({
        url: 'api.lib.harvard.edu/v2/items.dc.json',
        type: 'GET',
        data: {q : searchterm},
        success: function(res){
        displayResults(res);
        },
        error: function(err){
            alert("Please check the error. Error type: " + err);
        }
	});
}


function displayResults(results){
	var title;
	var titleInfo;
	var author;
	var authorInfo;
	var showdiv = document.getElementById("resultsdiv");
	showdiv.innerHTML = "";

	// check every elements in the results
	for (i=0; i<results.item.length; i++){

		// get author
		authorInfo = results.item[i].contributor;
		if (authorInfo == undefined){
			authorInfo = "Sorry, but no author key in this library";
		}
		else {
			author = authorInfo;
		}

		// get title
		titleInfo = results.item[i].title;
		if (titleInfo == undefined){
			titleInfo = "Sorry, but no title key in this library";
		}
		else {
			title = titleInfo;
		}
	}
}