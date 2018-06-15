function getCountryNames() {

  var queryUrl = "/country";
  Plotly.d3.json(queryUrl, function(error, response) {

	var nameList = document.querySelector("#selDataset");
	alert(nameList);
	
	for (i=0; i < response.length; i++) {
		 	console.log(response[i])
		 	var listItem = document.createElement("option");
		 	listItem.text = response[i];
		 	nameList.add(listItem);
	}
	
	});
	// initSampledata();
	// initPie();
	// initBubble();
}
getCountryNames();

