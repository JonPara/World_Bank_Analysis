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
	initDebt();
	initPoverty();
}
getCountryNames();

function optionChanged(country) {
	
	alert(country);
	redrawDebt(country); 
	redrawPoverty(country);
}

function initDebt() {
	var queryUrl = "/debt/AFG";
	
	//var queryUrl = "/samples/"+sample_data;
	var BAR = document.getElementById("debt-bar-chart");
	
	Plotly.d3.json(queryUrl, function(error, response) {
	console.log(response);
	if (error) return console.warn(error);

		var layout = {
			title: "Annual Debt from 2006 thru 2017",
			height: 400,
			width: 600,
			color: 'red',
			xaxis : {
				title :"Year",
				tickangle : -45,
				tickfont : {
				  size : 10,
				  color : 'purple'
				}
			},
			yaxis : {
				title :"Debt"
			}
		};
		console.log(response.year)
		//response.debt_per_year=[910884000.0, 1893471000.0, 1985367000.0, 2096969000.0, 1966409000.0, 2023326000.0, 2070650000.0, 2097091000.0, 1999058000.0, 1958130000.0, 1921469000.0]
		console.log(response.debt_per_year)		
		var trace1={
			// x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
			//y: [910884000, 1893471000, 1985367000, 2096969000, 1966409000, 2023326000, 2070650000, 2097091000, 1999058000, 1958130000, 1921469000],
			x: response.year,
			y: response.debt_per_year[0],
			type: 'bar'
		};

		var data = [trace1];

		Plotly.newPlot("debt-bar-chart", data, layout);
		
	});
}

function initPoverty() {
	var queryUrl = "/poverty/EAP";
	
	//var queryUrl = "/samples/"+sample_data;
	var BAR = document.getElementById("poverty-bar-chart");
	
	Plotly.d3.json(queryUrl, function(error, response) {
	console.log(response);
	if (error) return console.warn(error);

		var layout = {
			title: "Below Poverty Line from 2006 thru 2016",
			width: 600,
			color: 'red',
			xaxis : {
				title :"Year",
				tickangle : -45,
				tickfont : {
				  size : 10,
				  color : 'purple'
				}
			},
			yaxis : {
				title :"Poverty Line(thousands)"
			}
		};
		console.log(response.year)
		//response.debt_per_year=[910884000.0, 1893471000.0, 1985367000.0, 2096969000.0, 1966409000.0, 2023326000.0, 2070650000.0, 2097091000.0, 1999058000.0, 1958130000.0, 1921469000.0]
		console.log(response.poverty_per_year)		
		var trace1={
			// x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
			//y: [910884000, 1893471000, 1985367000, 2096969000, 1966409000, 2023326000, 2070650000, 2097091000, 1999058000, 1958130000, 1921469000],
			x: response.year,
			y: response.poverty_per_year[0],
			type: 'bar'
		};

		var data = [trace1];

		Plotly.newPlot("poverty-bar-chart", data, layout);
		
	});
}

//PArt IIOption Changing Code*********************************



function redrawDebt(country) {
	// var queryUrl = "/debt/AFG";
	
	var queryUrl = "/debt/"+country;
	var BAR = document.getElementById("debt-bar-chart");
	
	Plotly.d3.json(queryUrl, function(error, response) {
	console.log(response);
	if (error) return console.warn(error);

		var layout = {
			title: "Annual Debt from 2006 thru 2017",
			height: 400,
			width: 600,
			color: 'red',
			xaxis : {
				title :"Year",
				tickangle : -45,
				tickfont : {
				  size : 10,
				  color : 'purple'
				}
			},
			yaxis : {
				title :"Debt"
			}
		};
		console.log(response.year)
		//response.debt_per_year=[910884000.0, 1893471000.0, 1985367000.0, 2096969000.0, 1966409000.0, 2023326000.0, 2070650000.0, 2097091000.0, 1999058000.0, 1958130000.0, 1921469000.0]
		console.log(response.debt_per_year)		
		var trace1={
			// x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
			//y: [910884000, 1893471000, 1985367000, 2096969000, 1966409000, 2023326000, 2070650000, 2097091000, 1999058000, 1958130000, 1921469000],
			x: response.year,
			y: response.debt_per_year[0],
			type: 'bar'
		};

		var data = [trace1];

		Plotly.newPlot("debt-bar-chart", data, layout);
		
	});
}


function redrawPoverty(country) {
	//var queryUrl = "/poverty/EAP";
	
	var queryUrl = "/poverty/"+country;
	var BAR = document.getElementById("poverty-bar-chart");
	
	Plotly.d3.json(queryUrl, function(error, response) {
	console.log(response);
	if (error) return console.warn(error);

		var layout = {
			title: "Below Poverty Line from 2006 thru 2016",
			width: 600,
			color: 'red',
			xaxis : {
				title :"Year",
				tickangle : -45,
				tickfont : {
				  size : 10,
				  color : 'purple'
				}
			},
			yaxis : {
				title :"Poverty Line(thousands)"
			}
		};
		console.log(response.year)
		//response.debt_per_year=[910884000.0, 1893471000.0, 1985367000.0, 2096969000.0, 1966409000.0, 2023326000.0, 2070650000.0, 2097091000.0, 1999058000.0, 1958130000.0, 1921469000.0]
		console.log(response.poverty_per_year)		
		var trace1={
			// x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
			//y: [910884000, 1893471000, 1985367000, 2096969000, 1966409000, 2023326000, 2070650000, 2097091000, 1999058000, 1958130000, 1921469000],
			x: response.year,
			y: response.poverty_per_year[0],
			type: 'bar'
		};

		var data = [trace1];

		Plotly.newPlot("poverty-bar-chart", data, layout);
		
	});
}
