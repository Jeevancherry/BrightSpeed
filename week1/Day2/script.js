function search() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let vehicles = document.getElementsByClassName("vehicle");
    for (let i = 0; i < vehicles.length; i++) {
      let vehicle = vehicles[i];
      let title = vehicle.getElementsByTagName("h2")[0].innerText.toLowerCase();
      let description = vehicle.getElementsByTagName("p")[0].innerText.toLowerCase();
      if (title.includes(input) || description.includes(input)) {
        vehicle.style.display = "block";
      } else {
        vehicle.style.display = "none";
      }
    }
  }
  
  function filter() {
    let select = document.getElementById("filterSelect");
    let filter = select.options[select.selectedIndex].value;
    let vehicles = document.getElementsByClassName("vehicle");
    for (let i = 0; i < vehicles.length; i++) {
      let vehicle = vehicles[i];
      if (filter == "all" || vehicle.classList.contains(filter)) {
        vehicle.style.display = "block";
      } else {
        vehicle.style.display = "none";
      }
    }
  }