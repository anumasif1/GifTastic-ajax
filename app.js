//document.ready
$(document).ready(function () {
    //Create buttons of array elements using forEach
    topics.forEach(function () {


        //create variable to hold button tag
        var buttonShow = $("<button>");

        buttonShow.text(topics[topicCount]);
        console.log(topics[topicCount])
        buttonShow.attr("data-show", topics[topicCount]);
        buttonShow.on("click", getGifFromAPI);
        $("#buttons-view").append(buttonShow);
        topicCount++;
    })
})

//array of topics
var topics = ["Game of Thrones", "Friends", "Seinfeld", "Blacklist", "Breaking Bad", "One Day at a time", "Gotham", "How I met your mother", "Vikings", "The Good place"]

// // Delete the content inside the buttons-view div prior to adding new movies
// // (this is necessary otherwise you will have repeat buttons)
// $("#buttons-view").empty();
var topicCount = 0;

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

                    // Storing the result item's rating
                    var rating = results[i].rating;

                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + rating);

                    // Creating an image tag
                    var personImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    personImage.attr("src", results[i].images.fixed_height.url);

                    // Appending the paragraph and personImage we created to the "gifDiv" div we created
                    gifDiv.append(p);
                    gifDiv.append(personImage);

                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#gifs-appear-here").prepend(gifDiv);
                }
            }
        });
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
