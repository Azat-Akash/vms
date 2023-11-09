const server =
    "https://4f26172a-cec4-4fd9-adc2-28a21e50172f.mock.pstmn.io/login";

const getUrl = window.location;
const baseUrl =
    getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split("/")[1];

const signInBtn = document.querySelector("#sign-in");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const forgotBtn = document.querySelector("#forgot");

const model = {};

signInBtn.onclick = async function () {
    const admin = {
        email: email.value,
        password: password.value,
    };
    const body = JSON.stringify(admin);

    const response = await fetch(server, {
        body: body,
        method: "POST",
    });
    const responseBody = await response.text();
    console.log(responseBody);

    location.replace(baseUrl + "/dashboard.html");
};
