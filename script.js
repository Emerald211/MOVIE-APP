async function getMovie() {
    const image1 = document.querySelector("#image1");
    const image2 = document.querySelector("#image2");
    const image3 = document.querySelector("#image3");
    const image4 = document.querySelector("#image4");
    const image5 = document.querySelector("#image5");
    const image6 = document.querySelector("#image6");
    const image7 = document.querySelector("#image7");
    const image8 = document.querySelector("#image8");
    const image9 = document.querySelector("#image9");
    const image10 = document.querySelector("#image10");

    
    const apiUrl = "http://www.omdbapi.com/?s=mon&apikey=143ff951&type=movie"

    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(data);

    image1.setAttribute("src", `${data.Search[Math.floor(Math.random() * 10)].Poster}`);
    
    image2.setAttribute("src", `${data.Search[Math.floor(Math.random() * 10)].Poster}`);
    image3.setAttribute("src", `${data.Search[Math.floor(Math.random() * 10)].Poster}`);
    image4.setAttribute("src", `${data.Search[Math.floor(Math.random() * 10)].Poster}`);
    image5.setAttribute("src", `${data.Search[Math.floor(Math.random() * 10)].Poster}`);
    image6.setAttribute("src", `${data.Search[Math.floor(Math.random() * 10)].Poster}`);
    image7.setAttribute("src", `${data.Search[Math.floor(Math.random() * 10)].Poster}`);
    image8.setAttribute("src", `${data.Search[Math.floor(Math.random() * 10)].Poster}`);
    image9.setAttribute("src", `${data.Search[Math.floor(Math.random() * 10)].Poster}`);
    image10.setAttribute("src", `${data.Search[Math.floor(Math.random() * 10)].Poster}`);


    // jo.textContent = data.jokes[gg].setup;
}

getMovie();