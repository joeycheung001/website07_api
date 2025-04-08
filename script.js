function randomCatImage() {
    const url = `https://api.thecatapi.com/v1/images/search?limit=1`;
    const api_key = "DEMO_API_KEY";
    
    let catImage = document.getElementById('randomCat');
    catImage.style.display = "block";

    fetch(url,{headers: {'x-api-key': api_key}})
        .then((response) => {return response.json();})
        .then((data) => {
            let imagesData = data;
            imagesData.map(function(imageData) {
                
            //let catImage = document.createElement('img');
            //catImage.setAttribute("id", "randomCat");
            catImage.src = `${imageData.url}`;

            //document.getElementById('images').appendChild(catImage);
        });
    })
    .catch(function(error) {
       console.log(error);
    });
}
