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
	initPie();
	// initBubble();
}
getCountryNames();

function initPie() {
	var queryUrl = "/debt/AFG";
	
	//var queryUrl = "/samples/"+sample_data;
	var BAR = document.getElementById("bar-chart");
	
	Plotly.d3.json(queryUrl, function(error, response) {
	console.log(response);
	if (error) return console.warn(error);

		var layout = {
			height: 400,
			width: 400,
		};
				
		var trace1={
			//x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
			//y: [910884000, 1893471000, 1985367000, 2096969000, 1966409000, 2023326000, 2070650000, 2097091000, 1999058000, 1958130000, 1921469000],
			x:response.year,
			y:response.debt_per_year,
			type :'bar'
		};

		var data = [trace1];

		Plotly.newPlot("bar-chart", data, layout);
		
	});
}

