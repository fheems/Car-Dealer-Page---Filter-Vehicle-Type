const cars = [
    /* list cars below with picture: */
    {
        id: 1,
        title: "2017 MERCEDES BENZ C CLASS C220d AMG LINE PREMIUM +",
        image: "images/C CLASS.jpeg",
        features: ["PANROOF", "SAT NAV", "20 INCH AMG ALLOYS"],
        carType: "Saloon",
        price:"£14,995",
        description:  `
       Prestige Cars London Are Excited To Present This Stunning Mercedes C Class C220 2.1L Diesel 
       in Metallic Black Paintwork With Full Black Artico Leather Interior, 
       Only 72,000 Miles Complete With Full Service History, 
       Last Service Completed May 24, MOT Until October 24 With No Advisories. 
        `
    },
       
    {
        id: 2,
        title: "2020 MERCEDES BENZ E CLASS E220d AMG LINE PREMIUM +",
        image: "images/E CLASS.jpg",
        features: ["PANROOF", "SAT NAV", "20 INCH AMG ALLOYS", "PCO READY"],
        carType: "Saloon",
        price:"£27,995",
        description:  `
       Prestige Cars London Are Excited To Present This Stunning Mercedes E Class E220 2.1L Diesel 
       in Metallic Black Paintwork With Full Black Leather Interior, 
       Only 52,000 Miles Complete With Full Dealer Service History, 
       Last Service Completed March 24, 12 Months MOT On Sale. 
        `
    },
    {
        id: 3,
        title: "2019 MERCEDES BENZ S CLASS S350d AMG LINE PREMIUM +",
        image: "images/2020s.jpg",
        features: ["PANROOF", "SAT NAV", "20 INCH AMG ALLOYS", "PCO READY"],
        carType: "Saloon",
        price:"£29,995",
        description:  `
       Prestige Cars London Are Excited To Present This Stunning Mercedes S Class S350d 3L Diesel 
       in Metallic Black Paintwork With Full Black Leather Interior, 
       Only 72,000 Miles Complete With Full Dealer Service History, 
       Last Service Completed May 24, 12 Months MOT On Sale. 
        `
    },

    {
        id: 4,
        title: "2023 MERCEDES BENZ S CLASS S580e AMG LINE ",
        image: "images/s580.jpg",
        features: ["PANROOF", "SAT NAV", "REAR TV"],
        carType: "Saloon",
        price:"£129,995",
        description:  `
       Prestige Cars London Are Excited To Present This Stunning Mercedes S Class S580e 
       in Metallic Black Paintwork With Full Black Leather Interior, 
       Only 200 Miles On Clock,  
        `
    },
    {
        id: 5,
        title: "2019 MERCEDES BENZ C CLASS C220d AMG LINE ",
        image: "images/conv.jpeg",
        features: ["SAT NAV", "20 INCH AMG ALLOYS", "HEATED SEATS"],
        carType: "Convertible",
        price:"£19,995",
        description:  `
       Prestige Cars London Are Excited To Present This Stunning Mercedes C Class C220d 2L Diesel 
       Convertible in Metallic White Paintwork With Full Black Leather Interior, 
       Only 72,000 Miles Complete With Full Dealer Service History, 
       Last Service Completed May 24, 12 Months MOT On Sale. 
        `
    },
    {
        id: 6,
        title: "2013 MERCEDES BENZ SLK ",
        image: "images/slk.jpeg",
        features: ["SAT NAV", "RED LEATHER", "HEATED SEATS"],
        carType: "Convertible",
        price:"£9,995",
        description:  `
       Prestige Cars London Are Excited To Present This Stunning Mercedes SLK 1.8L Petrol 
       Convertible in Metallic Black Paintwork With Full Black Leather Interior, 
       Only 89,000 Miles Complete With Full Dealer Service History, 
       Last Service Completed May 24, 12 Months MOT On Sale. 
        `
    },
    {
        id: 7,
        title: "2018 MERCEDES BENZ E CLASS E220d AMG LINE PREMIUM",
        image: "images/e conv.jpg",
        features: ["SAT NAV", "BLACK LEATHER", "HEATED SEATS"],
        carType: "Convertible",
        price:"£23,995",
        description:  `
       Prestige Cars London Are Excited To Present This Stunning Mercedes E Class Petrol 
       in Diamond White Paintwork With Full Black Leather Interior, 
       Only 39,000 Miles Complete With Full Dealer Service History, 
       Last Service Completed May 24, 12 Months MOT On Sale. 
        `
    },
    {
        id: 8,
        title: "2023 MERCEDES BENZ GLE CLASS GLE350d AMG LINE COUPE",
        image: "images/gle coupe.jpg",
        features: ["SAT NAV", "BLACK LEATHER", "HEATED SEATS"],
        carType: "Suv",
        price:"£58,995",
        description:  `
       Prestige Cars London Are Excited To Present This Stunning Mercedes GLE Class Diesel 
       in Diamond Black Paintwork With Full Black Leather Interior, 
       Only 39,000 Miles Complete With Full Dealer Service History, 
       Last Service Completed May 24, 12 Months MOT On Sale. 
        `
    },
    {
        id: 9,
        title: "2015 MERCEDES BENZ M CLASS ML350d AMG LINE",
        image: "images/ml.jpeg",
        features: ["SAT NAV", "BLACK LEATHER", "HEATED SEATS"],
        carType: "Suv",
        price:"£58,995",
        description:  `
       Prestige Cars London Are Excited To Present This Stunning Mercedes M Class Diesel 
       in Black Paintwork With Full Black Leather Interior, 
       Only 79,000 Miles Complete With Full Dealer Service History, 
       Last Service Completed May 24, 12 Months MOT On Sale. 
        `
    },

];


const carContainer = document.getElementById("car-container");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");
/* display cars function below */
function displaycars(carsToDisplay) {
    carContainer.innerHTML = "";
    carsToDisplay.forEach(car => {
        const carElement = document.createElement("div");
        carElement.classList.add("car-item");
        carElement.innerHTML = `
            <img src="${car.image}" alt="${car.title}">
            <h3>${car.title}</h3>
            <p><strong>Features:</strong> ${car.features.join(", ")}</p>
            <p><strong>Price:</strong> ${car.price}</p>
            <p><strong>Description:</strong> ${car.description}</p>
        `;
        carContainer.appendChild(carElement);
    });
}

function filtercars() {
    const searchTerm = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;

    const filteredcars = cars.filter(car => {
        const matchesSearch = car.title.toLowerCase().includes(searchTerm) || 
                              car.features.some(feature => feature.toLowerCase().includes(searchTerm));
        const matchesFilter = filterValue === "all" || car.carType === filterValue;

        return matchesSearch && matchesFilter;
    });

    displaycars(filteredcars);
}

searchInput.addEventListener("input", filtercars);
filterSelect.addEventListener("change", filtercars);

// Display all cars initially
displaycars(cars);
