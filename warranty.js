
const cars = [
    {
      id: "corolla",
        name: "Toyota corolla",
     price: "900,000 جنيه",
  img: "https://via.placeholder.com/300x150",
  warranty: "5 سنوات أو 150,000 كم\nيشمل المحرك وناقل الحركة"
    },
    {
id: "elantra",
  name: "Hyundai elentra",
   price: "850,000 جنيه",
   img: "https://via.placeholder.com/300x150",
   warranty: "5 سنوات أو 100,000 كم\nيشمل الأنظمة الكهربائية"
    },
    {
   id: "sportage",
  name: "KIA sportage",
   price: "1,200,000 جنيه",
   img: "https://via.placeholder.com/300x150",
    warranty: "6 سنوات أو 150,000 كم\nمساعدة على الطريق"
    }
];
function loadCars() {
    let container = document.getElementById("carsList");
    container.innerHTML = "";

  cars.forEach(car => {
 container.innerHTML += `
  <div class="card">
 <img src="${car.img}">
 <div class="card-content">
 <h3>${car.name}</h3>
  <p>${car.price}</p>
      <button onclick="showDetails('${car.id}')">عرض الضمان</button>
   </div>
  </div>
  `;
    });
}
function showDetails(id) {
    let car = cars.find(c => c.id === id);

    document.getElementById("carName").innerText = car.name;
    document.getElementById("carPrice").innerText = car.price;
    document.getElementById("carWarranty").innerText = car.warranty;

    document.getElementById("carsList").style.display = "none";
    document.getElementById("detailsPage").style.display = "block";
}
function goBack() {
    document.getElementById("detailsPage").style.display = "none";
    document.getElementById("carsList").style.display = "flex";
}
function setTheme(theme) {
    if (theme === "dark") {
        document.documentElement.style.setProperty('--bg', '#1e1e1e');
        document.documentElement.style.setProperty('--text', '#fff');
        document.documentElement.style.setProperty('--card', '#2c2c2c');
        document.documentElement.style.setProperty('--main', '#000');
    } else {
        document.documentElement.style.setProperty('--bg', '#f4f6f9');
        document.documentElement.style.setProperty('--text', '#000');
        document.documentElement.style.setProperty('--card', '#fff');
        document.documentElement.style.setProperty('--main', '#2c3e50');
    }

    localStorage.setItem("theme", theme);
}

function toggleTheme() {
    let current = localStorage.getItem("theme") || "light";
    setTheme(current === "light" ? "dark" : "light");
}
window.onload = function () {
    loadCars();
    setTheme(localStorage.getItem("theme") || "light");
};