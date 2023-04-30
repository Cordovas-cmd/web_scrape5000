
const searchBtn = document.getElementById('searchBtn');

const googleAPIUrl = "https://www.googleapis.com/youtube/v3/search";

searchBtn.addEventListener("click", (e) => {

    const searchTerm = document.getElementById("searchQuery").value;

    const apiPrefix = "&key=";
    console.log(searchTerm)

    const searchQuery = "?part=snippet&q=" + searchTerm + apiPrefix + apiKey;

    const url = googleAPIUrl + searchQuery

    fetch(url)
        .then(response => response.json())
        .then((results) => {

            // for each runs for each item in the results.
            results.items.forEach(item => {

                console.log(item.snippet.channelTitle);
            })
        })


}
)