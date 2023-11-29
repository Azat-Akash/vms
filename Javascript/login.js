const getUrl = window.location;
const server = "loginUser";
const baseUrl =
    getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split("/")[1];

const signInBtn = document.querySelector("#sign-in");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const forgotBtn = document.querySelector("#forgot");
const showBtn = document.querySelector("#show");

showBtn.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        document.getElementById("img-show").src = "/assets/login/hidden.png";
    } else {
        password.type = "password";
        document.getElementById("img-show").src = "/assets/login/view (1).png";
    }
    console.log(showBtn);
};
let visible = true;

signInBtn.onclick = function () {
    const form = document.getElementById("log-form");
    const formData = new FormData(form);

    fetch("/loginUser", {
        method: "POST",
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            // Handle success response if needed
        })
        .catch((error) => {
            console.error("Error:", error);
            // Handle error if needed
        });
    let invalid = `<p id="invalid" style="color:red; margin-top:5px;">**invalid password**</p>`;

    if (
        email.value.toString().trim() != "admin@gmail.com" ||
        password.value.toString().trim() != "777"
    ) {
        const $inputgroup = document.querySelector(".input-group");
        console.log(visible);
        if (visible) {
            visible = false;
            $inputgroup.insertAdjacentHTML("beforeend", invalid);
        }
    } else {
        location.replace(baseUrl + "/driver.html");
    }

    //
};
