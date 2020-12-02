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
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = data.filter(UFODate => UFODate.datetime === inputValue );

  console.log(filteredData);
  filteredData.forEach(function(UFOft) {
    console.log(UFOft);
    var row = tableData.append("tr");
    Object.entries(UFOft).forEach(function([key, value]) {
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