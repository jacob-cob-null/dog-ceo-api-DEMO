const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const dogContainer = document.getElementById("dog-container");
const dog = document.getElementById("dog");

function getDog() {
    const fetchPromise = fetch(DOG_URL);
    fetchPromise
        .then(function(response){
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse){
            dogContainer.style.backgroundImage = `url(${processedResponse.message})`;
            dogContainer.style.backgroundSize = "cover";
            })
        }

dog.addEventListener("click", getDog);