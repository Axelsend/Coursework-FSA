const API_URL = "https://catfact.ninja/"

const state = 
{
    fact: {},
    breeds: []
};

const $catFactContainer = document.getElementById("cat-fact-container");
const $catBreedsContainer  = document.getElementById("cat-breeds-container");

//Fetches a random fact from the /fact endpoint
// and updates the fact object in state
//then re-renders the UI
async function getFact(){
    try {
        const promise = await fetch(`${API_URL}fact`);
        const response = await promise.json();
        console.log(response.data)
        state.fact = response.data
        if(!response.success){
            throw new Error ("Failed to fetch fact!")
            return response.error
        }
    } catch (error) {
        alert("Unable to load fact.", error);
    }
    render()
}

//Fetches a random fact from the /fact endpoint
// and updates the fact object in state
//then re-renders the UI
async function getBreeds(){
    try {
        const promise = await fetch(`${API_URL}/breeds`);
        const response = await promise.json();
        console.log(response.data)
        state.breeds = response.data
        if(!response.success){
            throw new Error ("Failed to fetch breeds!")
            return response.error
        }
    } catch (error) {
        alert("Unable to load breeds.", err);
    }
    render()
}

//Adds the HTML elements needed to the DOM
// with data from the javascript state
function render() {
    //TODO:  A button and a <p> element to the catFactContainer
    const button = document.createElement("button");
    button.textContent = "Click to retreive fact!"
    $catFactContainer.appendChild(button)
    button.addEventListener("click", (event) => {
      event.preventDefault;
      const p = document.createElement("p");
      p.textContent = state.fact;
      $catFactContainer.appendChild(p);
    });
    //TODO:  Divs for each cat breed type, display the Breed, country, coat and pattern
  }
  render()