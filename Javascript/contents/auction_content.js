const responseBody = [
    {
        VIN: "12345678901234567",
        Make: "Toyota",
        Model: "Camry",
        ProductionYear: 2022,
        Mileage: 0,
        LicensePlateNumber: "ABC123",
        Driver: null,
        ActivityStatus: "Parked",
        Location: "37.7749° N, 122.4194° W", // Random coordinates for San Francisco, CA
    },
    {
        VIN: "98765432109876543",
        Make: "Honda",
        Model: "Civic",
        ProductionYear: 2021,
        Mileage: 15000,
        LicensePlateNumber: "XYZ789",
        Driver: null,
        ActivityStatus: "In Transit",
        Location: "40.7128° N, 74.0060° W", // Random coordinates for New York, NY
    },
    {
        VIN: "56789012345678901",
        Make: "Ford",
        Model: "F-150",
        ProductionYear: 2020,
        Mileage: 30000,
        LicensePlateNumber: "DEF456",
        Driver: null,
        ActivityStatus: "Parked",
        Location: "34.0522° N, 118.2437° W", // Random coordinates for Los Angeles, CA
    },
    {
        VIN: "34567890123456789",
        Make: "Chevrolet",
        Model: "Malibu",
        ProductionYear: 2019,
        Mileage: 20000,
        LicensePlateNumber: "GHI789",
        Driver: null,
        ActivityStatus: "In Service",
        Location: "41.8781° N, 87.6298° W", // Random coordinates for Chicago, IL
    },
];

async function getAllUsers() {
    // const response = await fetch("http://localhost:8080/caregivers/all", {
    //     headers: {
    //         "content-type": "application/json",
    //         accept: "application/json",
    //     },
    // });

    // responseBody = await response.json();

    // console.log(responseBody);

    const $list = document.querySelector(".list");
    let elements = "";

    responseBody.forEach((oneinstance) => {
        elements += `
        <div class="element">
            <div style="flex: 1.3;" class="text"  id="user_id">
                <p>${oneinstance.VIN}</p>
            </div>
            <div style="flex: 0.7;" class="text">
                <p>${oneinstance.LicensePlateNumber}</p>
            </div>
            <div style="flex: 0.9;" class="text">
                <p>${oneinstance.Make}</p>
            </div>
            <div style="flex: 1;" class="text">
                <p>${oneinstance.Model}</p>
            </div>
            <div style="flex: 0.5;" class="text">
                <p>${oneinstance.ProductionYear}</p>
            </div>
            <div style="flex: 0.65;" class="text">
                <p>${oneinstance.Mileage / 1000}</p>
            </div>
            <div style="flex: 0.7;" class="text">
                <p>${oneinstance.ActivityStatus}</p>
            </div>
            <div class = "change-bt">
            
            <button onclick="deleteFunction(this)" type="button" class="change" id="d">
                <img
                    src="/assets/bin.png"
                    alt=""
                />
                </button>
            <button onclick="viewFunction(this)" type="button" class="change" id="c">
                <img
                    src="/assets/refresh.png"
                    alt=""
                />
                    </button>
            </div>
            
        </div>`;
        $list.innerHTML = elements;
    });
}
getAllUsers();

function element(id) {
    return `<div class="element" id="${id}">
    </div>
    `;
}

function id(content) {
    return `
        <div class="text">
            <p>${content}</p>
        </div>
    `;
}
function email(content) {
    return `
        <div class="text">
            <p>${content}</p>
        </div>
    `;
}
function given_name(content) {
    return `
        <div class="text">
            <p>${content}</p>
        </div>
    `;
}
function surname(content) {
    return `
        <div class="text">
            <p>${content}</p>
        </div>
    `;
}

function city(content) {
    return `
        <div class="text">
            <p>${content}</p>
        </div>
    `;
}

function phone_number(content) {
    return `
        <div class="text">
            <p>${content}</p>
        </div>
    `;
}

function change() {
    return `
        <button type="button" id="change">
        <img
            src="/assets/refresh.png"
            alt=""
        />
            </button>
    `;
}
