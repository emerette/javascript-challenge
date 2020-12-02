// Get a reference to the table body
// Console.log the weather data from data.js
var tableData = d3.select("tbody");
console.log(data);

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the class property set to 'form-control'
var form = d3.select(".form-group");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select(".form-control");

  // Get the value property of the input element
      var inputdate = inputElement.property("value");
      console.log(inputdate);  

      var filteredDate = data.filter(UFODate => UFODate.datetime === inputdate );
      console.log(filteredDate);

      filteredDate.forEach(function(UFOdate) {
        console.log(UFOdate);
        var row = tableData.append("tr");
        Object.entries(UFOdate).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        });  
      });

      var inputcity = inputElement.property("value");
      console.log(inputcity);
      var filteredcity = data.filter(UFOcity => UFOcity.city === inputcity);
      console.log(filteredcity);

      filteredcity.forEach(function(UFOCity) {
        console.log(UFOCity);
        var row = tableData.append("tr");
        Object.entries(UFOCity).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
      });  
    });

    var inputstate = inputElement.property("value");
    console.log(inputstate);
    var filteredstate = data.filter(UFOstate => UFOstate.state === inputstate);
    console.log(filteredstate);

    filteredstate.forEach(function(UFOState) {
      console.log(UFOState);
      var row = tableData.append("tr");
      Object.entries(UFOState).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });  
  });

  var inputcountry = inputElement.property("value");
  console.log(inputcountry);
  var filteredcountry = data.filter(UFOcountry => UFOcountry.country === inputcountry);
  console.log(filteredcountry);

  filteredcity.forEach(function(UFOCountry) {
    console.log(UFOCountry);
    var row = tableData.append("tr");
    Object.entries(UFOCountry).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });  
});

  var inputshape = inputElement.property("value");
  console.log(inputshape);
  var filteredshape = data.filter(UFOshape => UFOshape.shape === inputshape);
  console.log(filteredshape);

  filteredcity.forEach(function(UFOShape) {
    console.log(UFOShape);
    var row = tableData.append("tr");
    Object.entries(UFOShape).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });  
});
};


//  // Make sure you have all columns
// // Step 1: Loop Through `data` and console.log each UFO data object
// data.forEach(function(UFOdata) {
//    console.log(UFOdata);
// // Step 2:  Use d3 to append one table row `tr` for each UFO data object    
//    var row = tableData.append("tr");
// // Step 3:  Use `Object.entries` to console.log each UFO data value
//    Object.entries(UFOdata).forEach(function([key, value]) {
//        console.log(key, value);
// // Step 4: Use d3 to append 1 cell per data value
// // Step 5: Use d3 to update each cell's text with UFO vlaues
//        var cell = row.append("td");
//        cell.text(value);
//    });
//});