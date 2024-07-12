document.addEventListener('DOMContentLoaded', () => {
    // Challenge 1: Fetch and display random dog images
    fetchDogImages();
  
    // Challenge 2: Fetch and display dog breeds
    fetchDogBreeds();
  
    // Challenge 4: Set up breed filter
    setupBreedFilter();
  });
  
  // Challenge 1: Fetch and display random dog images
  function fetchDogImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          img.alt = 'Random Dog';
          imageContainer.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching dog images:', error));
  }
  
  // Challenge 2: Fetch and display dog breeds
  function fetchDogBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedList = document.getElementById('dog-breeds');
        Object.keys(data.message).forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          li.addEventListener('click', changeColor); // Challenge 3
          breedList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching dog breeds:', error));
  }
  
  // Challenge 3: Change color on click
  function changeColor(event) {
    event.target.style.color = 'blue'; // You can change 'blue' to any color you prefer
  }
  
  // Challenge 4: Set up breed filter
  function setupBreedFilter() {
    const breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', filterBreeds);
  }
  
  function filterBreeds() {
    const selectedLetter = document.getElementById('breed-dropdown').value;
    const breedItems = document.querySelectorAll('#dog-breeds li');
    
    breedItems.forEach(item => {
      if (selectedLetter === 'all' || item.textContent.toLowerCase().startsWith(selectedLetter)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }
  