getCompanies = () => {

  let companies = [
    { id: 1, name: 'Amazon', location: 'Seattle' },
    { id: 2, name: 'Apple', location: 'Cupertino' },
    { id: 3, name: 'Facebook', location: 'Menlo Park' },
    { id: 4, name: 'Google', location: 'Mountain View' },
    { id: 5, name: 'Leeroy', location: 'Sundsvall' },
    { id: 6, name: 'Tesla', location: 'Palo Alto' }
  ];
  return companies.map(comp => {
    return filter.includes(comp.location) ? comp : null;
  });


}

clickedMethod = (e) => {
  let some = e.target.getAttribute("name");
  console.log("Clicked on companie: " + some)

}


clickedAdd = () => {
  filter.push(document.getElementById('filtering').value);
  renderThings();
}

renderThings = () => {
  let ul = document.getElementById("list");

  ul.innerHTML = "";

  getCompanies().forEach(companie => {
    if (companie != null) {
      let listElement = document.createElement("li");
      listElement.appendChild(document.createTextNode("Name: " + companie.name + " Location: " + companie.location));
      listElement.onclick = clickedMethod;
      listElement.setAttribute("name", companie.name);
      ul.appendChild(listElement);
    } 
  }
  );
  console.log("filtering on: " )
  console.log(filter)
}