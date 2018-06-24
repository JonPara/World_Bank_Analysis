function getCountryNames() {

//   var queryUrl = "http://127.0.0.1:5000/country";
  var queryUrl = "/country";
  Plotly.d3.json(queryUrl, function(error, response) {

	var nameList = document.querySelector("#selDataset");
	//alert(nameList);
	
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
	initCountryData();
	initEducation();
}

getCountryNames();

function optionChanged(country) {
	
	//alert(country);
	// var queryUrl = "/country/"+sample_data;
	redrawDebt(country); 
	redrawPoverty(country);
	redrawCountryData(country);
	redrawEducation(country);
	
}

// function optionChanged(country){
	
// 	//alert(sample_data);
// 	var queryUrl = "/country1/"+country;
	
// 	//alert(queryUrl);
//   	Plotly.d3.json(queryUrl, function(error, response) {
	
// 	console.log(response);
// 	var d = document.querySelector("#d_country");
// 	d.innerHTML=' ';

// 	d.innerHTML =  "Country Code:" + response.country_long_name + ", " 
// 	+"</br>" +  "Currency:" + response.currency_unit + ", " 
// 	+"</br>" +  "Income Group:" + response.income_group + ", " 
// 	+"</br>" +  "Region:" +  response.region ;
	
// 	redrawDebt(country); 
// 	redrawPoverty(country);

// 	});
// }

function initDebt() {
	// var queryUrl = "http://127.0.0.1:5000/debt/AFG";
	var queryUrl = "/debt/AFG";
	
	//var queryUrl = "/samples/"+sample_data;
	var BAR = document.getElementById("debt-bar-chart");
	
	Plotly.d3.json(queryUrl, function(error, response) {
	console.log(response);
	if (error) return console.warn(error);

		var layout = {
			title: "Annual Debt from 2006 thru 2017",
			height: 400,
			width: 400,
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
			type: 'scatter'
		};

		var data = [trace1];

		Plotly.newPlot("debt-bar-chart", data, layout);
		
	});
}

// function initPoverty() {
// 	var queryUrl = "/poverty/EAP";
	
// 	//var queryUrl = "/samples/"+sample_data;
// 	var BAR = document.getElementById("poverty-bar-chart");
	
// 	Plotly.d3.json(queryUrl, function(error, response) {
// 	console.log(response);
// 	if (error) return console.warn(error);

// 		var layout = {
// 			title: "Below Poverty Line from 2006 thru 2016",
// 			width: 600,
// 			color: 'red',
// 			xaxis : {
// 				title :"Year",
// 				tickangle : -45,
// 				tickfont : {
// 				  size : 10,
// 				  color : 'purple'
// 				}
// 			},
// 			yaxis : {
// 				title :"Poverty Line(thousands)"
// 			}
// 		};
// 		console.log(response.year)
// 		//response.debt_per_year=[910884000.0, 1893471000.0, 1985367000.0, 2096969000.0, 1966409000.0, 2023326000.0, 2070650000.0, 2097091000.0, 1999058000.0, 1958130000.0, 1921469000.0]
// 		console.log(response.poverty_per_year)		
// 		var trace1={
// 			// x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
// 			//y: [910884000, 1893471000, 1985367000, 2096969000, 1966409000, 2023326000, 2070650000, 2097091000, 1999058000, 1958130000, 1921469000],
// 			x: response.year,
// 			y: response.poverty_per_year[0],
// 			type: 'bar'
// 		};

// 		var data = [trace1];

// 		Plotly.newPlot("poverty-bar-chart", data, layout);
		
// 	});
// }

function initPoverty() {
	// var queryUrl = "http://127.0.0.1:5000/poverty/AFG";
	var queryUrl = "/poverty/AFG";
	
	//var queryUrl = "/samples/"+sample_data;
	var BAR = document.getElementById("poverty-bar-chart");
	
	Plotly.d3.json(queryUrl, function(error, response) {
	console.log(response);
	if (error) return console.warn(error);

		// var layout = {
		// 	title: "Below Poverty Line from 2006 thru 2016",
		// 	width: 600,
		// 	color: 'red',
		// 	xaxis : {
		// 		title :"Year",
		// 		tickangle : -45,
		// 		tickfont : {
		// 		  size : 10,
		// 		  color : 'purple'
		// 		}
		// 	},
		// 	yaxis : {
		// 		title :"Poverty Line(thousands)"
		// 	}
		// };
		//console.log(response.year)
		//response.debt_per_year=[910884000.0, 1893471000.0, 1985367000.0, 2096969000.0, 1966409000.0, 2023326000.0, 2070650000.0, 2097091000.0, 1999058000.0, 1958130000.0, 1921469000.0]
		//console.log(response.poverty_per_year)		
		var trace1={
			type: "scatter",
		  	mode: "markers",
			// x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
			//y: [910884000, 1893471000, 1985367000, 2096969000, 1966409000, 2023326000, 2070650000, 2097091000, 1999058000, 1958130000, 1921469000],
			x: response.year,
			y: response.poverty_per_year[0],
			marker: {
				color: response.year,
				size: response.poverty_per_year[0],
				sizemode: 'area' 
			}
		};

		var data = [trace1];

		var layout = {
			title: "Poverty Data from 2006 thru 2017",
			hovermode: 'closest',
			showlegend: false,
			height: 400,
			width: 400,
			margin:
			{
			  top: 10,
			  bottom: 10,
			  right: 10,
			  left: 10
			},
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

		Plotly.newPlot("poverty-bar-chart", data, layout);
		
	});
}

function initCountryData(){
	
	//alert("Inside initCountryData");
	// var queryUrl = "http://127.0.0.1:5000/country1/AFG";
	var queryUrl = "/country1/AFG";
	

	//alert(queryUrl);
	Plotly.d3.json(queryUrl, function(error, response) {
	
	console.log(response);
	var d = document.querySelector("#d_country");
	d.innerHTML=' ';
	
	//var obj = JSON.parse(response);
	d.innerHTML =  "<b>Country Name: </b>" + response[0][1]
	+"</br>" +     "<b>Currency    : </b>" + response[0][2] 
	+"</br>" +     "<b>Income Group: </b>" + response[0][3]
	+"</br>" +     "<b>Region      : </b>" +  response[0][4] ;

	
	});
}

function initEducation() {
	// var queryUrl = "http://127.0.0.1:5000/educationm/AFG";
	var queryUrl = "/educationm/AFG";
	
	//var queryUrl = "/samples/"+sample_data;

	var BAR = document.getElementById("education-bar-chart");
	
	Plotly.d3.json(queryUrl, function(error, response) {
	console.log(response);
	if (error) return console.warn(error);

		var layout = {
			title: "Education Data from 2010 thru 2016",
			width: 400,
			height:400,
			color: 'red',
			barmode: 'group',
			xaxis : {
				title :"Year",
				tickangle : -45,
				tickfont : {
				  size : 10,
				  color : 'green'
				}
			},
			yaxis : {
				title :"Percentage(Higher Education)"
			}
		};
		console.log(response.year)
		//response.debt_per_year=[910884000.0, 1893471000.0, 1985367000.0, 2096969000.0, 1966409000.0, 2023326000.0, 2070650000.0, 2097091000.0, 1999058000.0, 1958130000.0, 1921469000.0]
		console.log(response.educationm_per_year)		
		var trace1={
			// x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
			//y: [910884000, 1893471000, 1985367000, 2096969000, 1966409000, 2023326000, 2070650000, 2097091000, 1999058000, 1958130000, 1921469000],
			x: response.year,
			y: response.educationm_per_year[0],
			name: 'Male',
			type: 'bar'
		};

		var trace2={
			x: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
			y: [50, 55, 60, 67, 30, 45, 84],
			// x: response.year,
			// y: response.educationm_per_year[0],
			name: 'Female',
			type: 'bar'
		};

		if (country = 'ALB') {
			var trace2={
				x: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
				y: [87, 88, 92, 96, 96, 97, 98],
				// x: response.year,
				// y: response.educationm_per_year[0],
				name: 'Female',
				type: 'bar'
			};

		}

		if (country = 'DZA') {
			var trace2={
				x: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
				y: [97, 98, 97, 96, 94.3, 93, 98],
				// x: response.year,
				// y: response.educationm_per_year[0],
				name: 'Female',
				type: 'bar'
			};

		}

		if (country = 'ARG') {
			var trace2={
				x: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
				y: [99.6, 97.5, 95.4, 98, 98, 99, 98],
				// x: response.year,
				// y: response.educationm_per_year[0],
				name: 'Female',
				type: 'bar'
			};

		}

		if (country = 'DJI') {
			var trace2={
				x: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
				y: [51, 0, 48, 48, 49, 51.4, 48],
				// x: response.year,
				// y: response.educationm_per_year[0],
				name: 'Female',
				type: 'bar'
			};

		}

		if (country = 'YEM') {
			var trace2={
				x: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
				y: [75, 72, 73, 77, 71, 76.4, 71],
				// x: response.year,
				// y: response.educationm_per_year[0],
				name: 'Female',
				type: 'bar'
			};

		}

		if (country = 'USA') {
			var trace2={
				x: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
				y: [96.7, 97.5, 94.56, 96.77, 92, 93, 96],
				// x: response.year,
				// y: response.educationm_per_year[0],
				name: 'Female',
				type: 'bar'
			};

		}




		var data = [trace1, trace2];

		Plotly.newPlot("education-bar-chart", data, layout);
		
	});
}

//Part IIOption Changing Code*********************************

function redrawDebt(country) {
	// var queryUrl = "/debt/AFG";
	
	// var queryUrl = "http://127.0.0.1:5000/debt/"+country;
	var queryUrl = "/debt/"+country;
	var BAR = document.getElementById("debt-bar-chart");
	
	Plotly.d3.json(queryUrl, function(error, response) {
	console.log(response);
	if (error) return console.warn(error);

		var layout = {
			title: "Annual Debt from 2006 thru 2017",
			height: 400,
			width: 400,
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
			type: 'scatter'
		};

		var data = [trace1];

		Plotly.newPlot("debt-bar-chart", data, layout);
		
	});
}

function redrawPoverty(country) {
	//alert(country);
	//var queryUrl = "/poverty/EAP";
	
	// var queryUrl = "http://127.0.0.1:5000/poverty/"+country;
	var queryUrl = "/poverty/"+country;
	var BAR = document.getElementById("poverty-bar-chart");
	
	Plotly.d3.json(queryUrl, function(error, response) {
	console.log(response);
	if (error) return console.warn(error);

		// var layout = {
		// 	title: "Below Poverty Line from 2006 thru 2016",
		// 	width: 600,
		// 	color: 'red',
		// 	xaxis : {
		// 		title :"Year",
		// 		tickangle : -45,
		// 		tickfont : {
		// 		  size : 10,
		// 		  color : 'purple'
		// 		}
		// 	},
		// 	yaxis : {
		// 		title :"Poverty Line(thousands)"
		// 	}
		// };
		//console.log(response.year)
		//response.debt_per_year=[910884000.0, 1893471000.0, 1985367000.0, 2096969000.0, 1966409000.0, 2023326000.0, 2070650000.0, 2097091000.0, 1999058000.0, 1958130000.0, 1921469000.0]
		//console.log(response.poverty_per_year)		
		var trace1={
			type: "scatter",
		  	mode: "markers",
			// x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
			//y: [910884000, 1893471000, 1985367000, 2096969000, 1966409000, 2023326000, 2070650000, 2097091000, 1999058000, 1958130000, 1921469000],
			x: response.year,
			y: response.poverty_per_year[0],
			marker: {
				color: response.year,
				size: response.poverty_per_year[0],
				sizemode: 'area' 
			}
		};

		var data = [trace1];

		var layout = {
			title: "Poverty Data from 2006 thru 2017",
			hovermode: 'closest',
			showlegend: false,
			height: 400,
			width: 400,
			margin:
			{
			  top: 10,
			  bottom: 10,
			  right: 10,
			  left: 10
			},
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

		Plotly.newPlot("poverty-bar-chart", data, layout);
		
	});
}

// function redrawPoverty(country) {
// 	//var queryUrl = "/poverty/EAP";
	
// 	var queryUrl = "/poverty/"+country;
// 	var BAR = document.getElementById("poverty-bar-chart");
	
// 	Plotly.d3.json(queryUrl, function(error, response) {
// 	console.log(response);
// 	if (error) return console.warn(error);

// 		var layout = {
// 			title: "Below Poverty Line from 2006 thru 2016",
// 			width: 600,
// 			color: 'red',
// 			xaxis : {
// 				title :"Year",
// 				tickangle : -45,
// 				tickfont : {
// 				  size : 10,
// 				  color : 'purple'
// 				}
// 			},
// 			yaxis : {
// 				title :"Poverty Line(thousands)"
// 			}
// 		};
// 		console.log(response.year)
// 		//response.debt_per_year=[910884000.0, 1893471000.0, 1985367000.0, 2096969000.0, 1966409000.0, 2023326000.0, 2070650000.0, 2097091000.0, 1999058000.0, 1958130000.0, 1921469000.0]
// 		console.log(response.poverty_per_year)		
// 		var trace1={
// 			// x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
// 			//y: [910884000, 1893471000, 1985367000, 2096969000, 1966409000, 2023326000, 2070650000, 2097091000, 1999058000, 1958130000, 1921469000],
// 			x: response.year,
// 			y: response.poverty_per_year[0],
// 			type: 'bar'
// 		};

// 		var data = [trace1];

// 		Plotly.newPlot("poverty-bar-chart", data, layout);
		
// 	});
// }

function redrawCountryData(country){
	
	// alert("Inside redrawCountryData");
	// alert(country);
	// var queryUrl = "http://127.0.0.1:5000/country1/"+country;
	var queryUrl = "/country1/"+country;

	//alert(queryUrl);
	Plotly.d3.json(queryUrl, function(error, response) {
	
	console.log(response);
	var d = document.querySelector("#d_country");
	d.innerHTML=' ';
	
	//var obj = JSON.parse(response);
	d.innerHTML =  "<b>Country Name: </b>" + response[0][1]
	+"</br>" +     "<b>Currency    : </b>" + response[0][2] 
	+"</br>" +     "<b>Income Group: </b>" + response[0][3]
	+"</br>" +     "<b>Region      : </b>" +  response[0][4] ;

	});
}

function redrawEducation(country) {
	//var queryUrl = "/educationm/MLI";
	
	// var queryUrl = "http://127.0.0.1:5000/educationm/"+country;
	var queryUrl = "/educationm/"+country;

	var BAR = document.getElementById("education-bar-chart");
	
	Plotly.d3.json(queryUrl, function(error, response) {
	console.log(response);
	if (error) return console.warn(error);

		var layout = {
			title: "Education Data from 2010 thru 2016",
			width: 400,
			color: 'red',
			barmode: 'group',
			xaxis : {
				title :"Year",
				tickangle : -45,
				tickfont : {
				  size : 10,
				  color : 'green'
				}
			},
			yaxis : {
				title :"Percentage(Higher Education)"
			}
		};
		console.log(response.year)
		//response.debt_per_year=[910884000.0, 1893471000.0, 1985367000.0, 2096969000.0, 1966409000.0, 2023326000.0, 2070650000.0, 2097091000.0, 1999058000.0, 1958130000.0, 1921469000.0]
		console.log(response.educationm_per_year)		
		var trace1={
			// x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
			//y: [910884000, 1893471000, 1985367000, 2096969000, 1966409000, 2023326000, 2070650000, 2097091000, 1999058000, 1958130000, 1921469000],
			x: response.year,
			y: response.educationm_per_year[0],
			name: 'Male',
			type: 'bar'
		};

		var trace2={
			x: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
			y: [50, 55, 60, 67, 30, 45, 84],
			// x: response.year,
			// y: response.educationm_per_year[0],
			name: 'Female',
			type: 'bar'
		};

		if (country = 'ALB') {
			var trace2={
				x: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
				y: [87, 88, 92, 96, 96, 97, 98],
				// x: response.year,
				// y: response.educationm_per_year[0],
				name: 'Female',
				type: 'bar'
			};

		}

		if (country = 'DZA') {
			var trace2={
				x: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
				y: [97, 98, 97, 96, 94.3, 93, 98],
				// x: response.year,
				// y: response.educationm_per_year[0],
				name: 'Female',
				type: 'bar'
			};

		}

		if (country = 'ARG') {
			var trace2={
				x: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
				y: [99.6, 97.5, 95.4, 98, 98, 99, 98],
				// x: response.year,
				// y: response.educationm_per_year[0],
				name: 'Female',
				type: 'bar'
			};

		}

		if (country = 'DJI') {
			var trace2={
				x: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
				y: [51, 0, 48, 48, 49, 51.4, 48],
				// x: response.year,
				// y: response.educationm_per_year[0],
				name: 'Female',
				type: 'bar'
			};

		}

		if (country = 'YEM') {
			var trace2={
				x: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
				y: [75, 72, 73, 77, 71, 76.4, 71],
				// x: response.year,
				// y: response.educationm_per_year[0],
				name: 'Female',
				type: 'bar'
			};

		}

			if (country = 'USA') {
			var trace2={
				x: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
				y: [96.7, 97.5, 94.56, 96.77, 92, 93, 96],
				// x: response.year,
				// y: response.educationm_per_year[0],
				name: 'Female',
				type: 'bar'
			};

		}

		var data = [trace1, trace2];

		Plotly.newPlot("education-bar-chart", data, layout);
		
	});
}
