const cars = [
    {
        name: "BMW",
        price: "1,200,000 جنيه",
        warranty: "ضمان 5 سنين أو 150,000 كم",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e"
    },

    {
        name: "Mercedes",
        price: "1,500,000 جنيه",
        warranty: "ضمان 4 سنين",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },

    {
        name: "Toyota",
        price: "850,000 جنيه",
        warranty: "ضمان 3 سنين",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
    }
];


const carsList = document.getElementById("carsList");

const detailsPage = document.getElementById("detailsPage");

const carName = document.getElementById("carName");

const carPrice = document.getElementById("carPrice");

const carWarranty = document.getElementById("carWarranty");


for(let i = 0; i < cars.length; i++) {

    carsList.innerHTML += `
    
    <div class="card">

        <img src="${cars[i].image}">

        <div class="card-content">

            <h2>${cars[i].name}</h2>

            <p>${cars[i].price}</p>

            <button onclick="showDetails(${i})">
                عرض الضمان
            </button>

        </div>

    </div>

    `;
}



function showDetails(index) {

    carName.innerHTML = cars[index].name;

    carPrice.innerHTML = cars[index].price;

    carWarranty.innerHTML = cars[index].warranty;

  
    carsList.style.display = "none";

  
    detailsPage.style.display = "block";
}



function goBack() {

    detailsPage.style.display = "none";

    carsList.style.display = "flex";
}



function toggleTheme() {

    const root = document.documentElement;

   
    if(root.style.getPropertyValue("--bg") != "black") {

        root.style.setProperty("--bg", "black");

        root.style.setProperty("--text", "white");

        root.style.setProperty("--card", "#222");

    }

    else {

        root.style.setProperty("--bg", "#f4f6f9");

        root.style.setProperty("--text", "black");

        root.style.setProperty("--card", "white");
    }
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
