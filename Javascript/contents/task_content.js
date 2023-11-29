const responseBody = [
    {
        driverID: "1",
        startLocation: "Origin A",
        endLocation: "Destination B",
        description: "Route from A to B",
        timeForRoute: 30,
        distance: 50.5,
        status: "Pending",
    },
    {
        driverID: "2",
        startLocation: "Origin X",
        endLocation: "Destination Y",
        description: "Route from X to Y",
        timeForRoute: 45,
        distance: 75.2,
        status: "In Progress",
    },
    {
        driverID: "3",
        startLocation: "Home",
        endLocation: "Work",
        description: "Daily commute",
        timeForRoute: 20,
        distance: 15.5,
        status: "Completed",
    },
    {
        driverID: "4",
        startLocation: "Client A",
        endLocation: "Client B",
        description: "Business meeting",
        timeForRoute: 60,
        distance: 100.8,
        status: "Scheduled",
    },
    {
        driverID: "5",
        startLocation: "Warehouse",
        endLocation: "Retail Store",
        description: "Product delivery",
        timeForRoute: 40,
        distance: 65.5,
        status: "In Transit",
    },
    {
        driverID: "6",
        startLocation: "Airport",
        endLocation: "Hotel",
        description: "Pickup and drop-off",
        timeForRoute: 25,
        distance: 30.2,
        status: "Pending",
    },
    // Add more routes as needed
];

function getAllMemberss() {
    // const response = await fetch("http://localhost:8080/members/all", {
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
            <div style="width: 50px;" class="text"  id="member_user_id">
                <p>${oneinstance.driverID}</p>
            </div>
            <div style="flex: 1;" class="text">
                <p>${oneinstance.startLocation}</p>
            </div>
            <div style="flex: 1;" class="text">
                <p>${oneinstance.endLocation}</p>
            </div>
            <div style="flex: 1;" class="text">
                <p>${oneinstance.timeForRoute} min</p>
            </div>
            <div style="flex: 1.2;" class="text">
                <p>${oneinstance.distance} km.</p>
            </div>
            <div style="flex: 1;" class="text">
                <p>${oneinstance.status}</p>
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
getAllMemberss();

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
