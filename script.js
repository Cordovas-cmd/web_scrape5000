const apiKey = "";

const searchBtn = document.getElementById('searchBtn');

const resultsContainer = document.getElementById("results")

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
                // grabbing the video id but would need to format it into a link
                if (item.id.videoId != undefined) {
                    const link = `https://www.youtube.com/watch?v=${item.id.videoId}`
                    console.log(item.snippet.thumbnails.high.url);

                    // print each link from our query into the results container
                    resultsContainer.innerHTML += `<h2>${item.snippet.title}</h2>`;
                    resultsContainer.innerHTML += `<img src="${item.snippet.thumbnails.high.url}" />`
                    resultsContainer.innerHTML += `<br />`
                    resultsContainer.innerHTML += `<a href="${link}">${link}</a>`;
                    resultsContainer.innerHTML += `<p>${item.snippet.description}</p>`;

                }
            })
        })


}
)


// testing