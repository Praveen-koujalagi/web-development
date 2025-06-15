const url = "http://universities.hipolabs.com/search?country=";
const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  const country = document.querySelector("#country").value.trim();
  const city = document.querySelector("#city").value.trim().toLowerCase();

  const colArr = await getColleges(country);
  
  // If city is provided, filter the results
  const filtered = city
    ? colArr.filter(col => col["state-province"] && col["state-province"].toLowerCase().includes(city))
    : colArr;

  show(filtered);
});

async function getColleges(country) {
  const response = await fetch(url + encodeURIComponent(country));
  const data = await response.json();
  return data;
}

function show(colArr) {
  const list = document.querySelector("#list");
  list.innerText = "";
  for (const col of colArr) {
    const li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}
