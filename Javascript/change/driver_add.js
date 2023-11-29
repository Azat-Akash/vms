const newUser = `<div class="new-bg">
    <div class="new-modal">
        <form>
            <div class="input-group">
                <div class = "inp-row">
                    <div class="input-field">
                        <p>First Name</p>
                        <input id="first_name" type="text" required />
                    </div>
                    <div class="input-field">
                        <p>Last Name</p>
                        <input id="last_name" type="text" required />
                    </div>
                </div>
                
                <div class = "inp-row">
                    <div class="input-field">
                        <p>Email</p>
                        <input id="email" type="email" required />
                    </div>
                    <div class="input-field">
                        <p>Middle Name</p>
                        <input id="middle_name" type="text" required />
                    </div>
                </div>

                <div class = "inp-row under">
                <div class="input-field">
                        <p>Phone Number</p>
                        <input id="phone_number" type="tel" required />
                    </div>
                    
                
                    <div class="input-field">
                        <p>Government Id</p>
                        <input id="government_id" type="number" required />
                    </div>
                </div>

                <div class = "inp-row under">
                    <div class="input-field">
                        <p>Street</p>
                        <input id="street" type="text" required />
                    </div>
                    <div class="input-field">
                        <p>City</p>
                        <input id="city" type="text" required />
                    </div>
                
                    
                </div>
                <div class = "inp-row under">
                    <div class="input-field">
                        <p>House Number</p>
                        <input id="house_number" type="number" required />
                    </div>
                
                    <div class="input-field">
                        <p>Password</p>
                        <input id="password" type="text" required />
                    </div>
                </div>
                <div class="users-cancelsub">
                    <button type="submit" id="cancel" class="addnewbut">
                        <p>Cancel</p> 
                    </button>
                    <button type="submit"  id="save" class="addnewbut">
                        <p>Save</p>
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>`;

const $addButton = document.querySelector(".add-button");
const $app = document.querySelector("#app");

$addButton.onclick = async function () {
    $app.insertAdjacentHTML("afterbegin", newUser);

    const given_name = document.querySelector("#given_name");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const surname = document.querySelector("#surname");
    const profile_description = document.querySelector("#profile_description");
    const phone_number = document.querySelector("#phone_number");
    const city = document.querySelector("#city");

    const cancel = document.querySelector("#cancel");

    console.log(given_name);

    cancel.onclick = function () {
        modalAdd = document.querySelector(".new-bg").remove();
    };

    const save = document.querySelector("#save");
    function isEmpty(value) {
        return value.trim() === "";
    }

    save.onclick = async function () {
        if (
            isEmpty(given_name.value) ||
            isEmpty(email.value) ||
            isEmpty(password.value) ||
            isEmpty(surname.value) ||
            isEmpty(phone_number.value) ||
            isEmpty(city.value)
        ) {
            text = "ivalid input";
            alert(text);
        } else {
            const response = await fetch("http://localhost:8080/users/add", {
                method: "POST",
                body: JSON.stringify({
                    given_name: given_name.value,
                    email: email.value,
                    surname: surname.value,
                    password: password.value,
                    profile_description: profile_description.value,
                    phone_number: phone_number.value,
                    city: city.value,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Accept: "application/json",
                },
            });
            const message = await response.json();
            console.log(message);

            modalAdd = document.querySelector(".new-bg").remove();
        }
    };
};
