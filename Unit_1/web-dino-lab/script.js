const silhouettes = document.getElementsByClassName("silhouette");
for (let silhouette of silhouettes) {
  silhouette.addEventListener("click", silhouetteClicked);
}

function silhouetteClicked(event) {
  console.log("Click!");
}
