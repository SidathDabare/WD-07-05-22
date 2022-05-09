let container = document.querySelector(".containerLeft");
let songsArr = [];
console.log(songsArr);
// Search by Artist
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "8680b311b0mshfa595d3b50bced8p16d6f0jsnfe6371eab6a7",
  },
};
function searchTitle() {
  let textInput = document.querySelector("#textInput").value;
  console.log(textInput);
  fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${textInput}`,
    options
  )
    .then((data) => data.json())
    .then((data) => {
      // console.log(data);
      return data;
    })
    .then((songs) => {
      // console.log(songs.data);
      for (let i = 0; i < songs.data.length; i++) {
        let image = songs.data[i].md5_image;
        let title = songs.data[i].title;
        songsArr.push(title);
        let duration = songs.data[i].duration;
        let artist = songs.data[i].artist.name;
        container.innerHTML += `<div class="card  mx-2 my-1 bg-transparent text-white pt-2">
                                  <img src="https://cdns-images.dzcdn.net/images/cover/${image}/500x500.jpg" class="card-img-top img-fluid" alt="...">
                                  <div class="card-body">
                                    <h5 class="card-title">${title}</h5>
                                    <p class="card-text">${duration}</p>
                                    <p class="card-text font-weight-bold">${artist}</p>

                                  </div>
                                </div>`;
      }
    })
    .catch((err) => console.error(err));
  document.querySelector("#textInput").value = "";
}

// display song titles----------------
let modelBody = document.querySelector(".modal-body");
function displayTitle() {
  for (let i = 0; i < songsArr.length; i++) {
    let song = songsArr[i];
    modelBody.innerHTML += `<p>${[i + 1]} .${song}</p>`;
  }
}
//displayTitle();
