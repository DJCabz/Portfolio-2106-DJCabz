const activities = [
  { title: "Module 1 Activity 1", category: "HTML/CSS", link: "./M1A1/m1a1-2106-DJCabz/index.html" },
  { title: "Module 1 Activity 2", category: "HTML/CSS", link: "./M1A2/m1a2-2106-DJCabz/index.html" },
  { title: "Module 2 Activity 3", category: "HTML/CSS", link: "./M2A3/m2a3-2106-DJCabz/index.html" },
  { title: "Module 2 Activity 1", category: "HTML/CSS", link: "./M2A4/m2a4-2106-DJCabz/index.html" },
];
function filterActivities(searchTerm) {
  if (typeof searchTerm !== "string") return [];
  const query = searchTerm.trim().toLowerCase();
  if (!query) return activities;

return activities.filter(item =>
  item.title.toLowerCase().includes(query) ||
  item.category.toLowerCase().includes(query)
  );
}

function renderActivities(items) {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

if (items.length === 0){
  container.innerHTML = "<p>No matching activities found.</p>;
    return;
}

items.forEach(item => {
  const card = document.createElement("div");
  card.innerHTML = '
    <h3>${item.title}</h3>
    <p>Category: ${item.category}</p>
  <a href="${item.link}">View Activity</a>
  ';
  container.appendChild(card);
});

renderActivities(activities);

document.getElementById("search-input").addEventListener("input", (e) => {
  renderActivities(filterActvities(e.target.value));
});
