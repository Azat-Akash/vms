const driver = [
    { type: "driver", value: "Drivers" },
    { type: "button", value: "+ Add Driver" },
];

const cols = {
    type: "columns",
    medium: "NO",
    long: "Driver Name",
    medium: "Mobile",
    medium: "Email",
    medium: "Government ID",
    medium: "Adress",
    short: "Bdate",
    Action: "Action",
};

const $top = document.querySelector(".top");
const $columns = document.querySelector(".columns");

driver.forEach((block) => {
    let toph = "",
        colh = "";

    if (block.type === "driver") {
        toph = title(block);
    } else if (block.type === "button") {
        toph = button(block);
    }

    $top.insertAdjacentHTML("beforeend", toph);
});

function title(block) {
    return `
    <div class="title">
        <h1>${block.value}</h1>
    </div>
`;
}
function button(block) {
    return `
    <button type = "button" class="add-button">
        <p>${block.value}</p>
    </div>
`;
}

function columns(block) {
    block.value.forEach((el) => {
        let html = "";
    });
    return html.join("");
}
