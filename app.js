//document.ready
$(document).ready(function () {
    createSearchBar();
    //calling createButtons function to show buttons of array
    createButtons();
    // This function handles events where one button is clicked
    $("#add-topic").on("click", function (event) {
        // Preventing the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();
        // This line grabs the input from the textbox
        var userInput = $("#topic-input").val().trim();
        if (userInput == "") {
            alert("Enter Topic")
        } else {
            // Adding the show from the textbox to our array
            topics.push(userInput);
            console.log(topics);
            // Calling forEach function which handles the processing of our topic array
            createButtons();
        }
    });
    //animateGif();
})

//array of topics
var topics = ["Game of Thrones", "Friends", "Seinfeld", "Blacklist", "Breaking Bad", "One Day at a time", "Gotham", "How I met your mother", "Vikings", "The Good place"]

// // Delete the content inside the buttons-view div prior to adding new show
// // (this is necessary otherwise you will have repeat buttons)
// 
//var topicCount = 0;

//function for api get and set
function getGifFromAPI() {

    // In this case, the "this" keyword refers to the button that was clicked
    var show = $(this).attr("data-show");

    // Constructing a URL to search Giphy for the name of the show quote
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        show + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // After the data comes back from the API
        .then(function (response) {
            // Storing an array of results in the results variable
            var results = response.data;

            // Looping over every result item
            for (var i = 0; i < results.length; i++) {

                // Only taking action if the photo has an appropriate rating
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

                    // Creating a div for the gif
                    var gifDiv = $("<div>");
                    gifDiv.attr({ class: "image-position col-md-4" });

                    // Storing the result item's rating
                    var rating = results[i].rating;

                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + rating);

                    // Creating an image tag
                    var personImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    personImage.attr({
                        "src": results[i].images.fixed_height_still.url, "data-still": results[i].images.fixed_height_still.url,
                        "data-animate": results[i].images.fixed_height.url, "data-state": "still", class: "gif"
                    });
                    personImage.on("click", toggleImage);

                    // Appending the paragraph and personImage we created to the "gifDiv" div we created
                    gifDiv.append(p);
                    gifDiv.append(personImage);

                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#gifs-appear-here").prepend(gifDiv);
                }
            }
        });
}
function createButtons() {
    //empty buttons
    $("#buttons-view").empty();

    //Create buttons of array elements using forEach. Pass each element into foreach function and use that
    topics.forEach(function (topic) {
        //create variable to hold button tag
        var buttonShow = $("<button>");
        buttonShow.text(topic);
        //console.log(topics[topicCount])
        buttonShow.attr({ "data-show": topic, class: "btn btn-outline-success" });
        buttonShow.on("click", getGifFromAPI);
        $("#buttons-view").append(buttonShow);

    })
}

function createSearchBar() {
    var searchForm = $("<form>");
    searchForm.attr({ id: "topic-form", class: "input-group mb-3" });
    //create variable to hold 
    //create label
    var searchLabel = $("<label>");
    searchLabel.attr("for", "topic-input");
    searchLabel.text("Enter topic name: ");
    //create text field
    //create input
    var searchText = $("<input>");
    searchText.attr({ type: "text", id: "topic-input", class: "form-control", placeholder: "Enter Topic", "aria-label": "Enter Topic", "aria-describedby": "basic-addon2" })
    //create button
    var buttonDiv = $("<div>");
    buttonDiv.attr({ class: "input-group-append" });
    var searchButton = $("<button>");
    searchButton.attr({ id: "add-topic", class: "btn btn-outline-secondary" });
    searchButton.text("Submit");
    //append child to parent(searchForm)
    buttonDiv.append(searchButton);
    searchForm.append(searchText);
    searchForm.append(buttonDiv);
    //searchForm.append(searchButton);
    $("#search-form").append(searchForm);

}
// function animateGif(){
// $(".gif").on("click", function() {
//     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//     var state = $(this).attr("data-state");
//     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//     // Then, set the image's data-state to animate
//     // Else set src to the data-still value
//     if (state === "still") {
//       $(this).attr("src", $(this).attr("data-animate"));
//       $(this).attr("data-state", "animate");
//     } else {
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-state", "still");
//     }
//   });
// }

function toggleImage() {

    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

}


//create a variable to hold buttons

//create variable for button count(id)

//loop for buttons

//create buttons on topics in html. forEach(for loop)

//append buttons on html

//.click event on buttons 
    //link api
    //grab 10 static gifs on click, non-animated
    //append the gif on pages
    //display gif rating

//Add search bar on the page
    //Takes user input
    //Add input to the topics array
    //call function button

//function button
    //takes each input and create a button on page
