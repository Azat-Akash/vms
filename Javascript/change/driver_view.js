const $changeButton = document.querySelector(".c");
const $appView = document.querySelector("#app");
const url = "http://localhost:8080/drivers/one";
let entity = {};

async function viewFunction(record) {
    elementsView = record.parentNode.parentNode;
    elementView = elementsView.querySelectorAll(".text");

    const user_id = elementView[0].getElementsByTagName("p")[0].innerHTML;

    const response = await fetch(`${url}/${user_id}`, {
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Accept: "application/json",
        },
    });
    entity = await response.json();
    updateModal(entity[0]);

    const cancel = document.querySelector("#cancel");

    cancel.onclick = function () {
        modalAdd = document.querySelector(".new-bg").remove();
    };

    const save = document.querySelector("#save");

    save.onclick = async function () {
        const response = await fetch("http://localhost:8080/users/edit", {
            method: "PUT",
            body: JSON.stringify({
                user_id: entity[0].user_id,
                given_name: entity[0].given_name,
                email: entity[0].email,
                surname: entity[0].surname,
                password: entity[0].password,
                profile_description: entity[0].profile_description,
                phone_number: entity[0].phone_number,
                city: entity[0].city,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Accept: "application/json",
            },
        });
        const message = await response.json();
        console.log(message);
        modalAdd = document.querySelector(".new-bg").remove();
    };
}

function updateModal(result) {
    const viewUser = `<div class="new-bg">
        <div class="new-modal">
            <form>
                <div class="input-group">
                    <div class = "inp-row">
                        <div class="input-field">
                            <p>Given Name</p>
                            <input id="given_name" value = "${result.given_name}" onchange="updatedVals(this)" type="text" required />
                        </div>
                        <div class="input-field">
                            <p>Surname</p>
                            <input id="surname" value = "${result.surname}" onchange="updatedVals(this)" type="text" required  />
                        </div>
                    </div>

                    <div class = "inp-row">
                        <div class="input-field">
                            <p>Email</p>
                            <input id="email" value = "${result.email}" onchange="updatedVals(this)"  type="email" required />
                        </div>
                        <div class="input-field">
                            <p>Phone Number</p>
                            <input id="phone_number"value = "${result.phone_number}" onchange="updatedVals(this)" type="tel" required />
                        </div>
                    </div>

                    <div class = "inp-row under">
                        <div class="input-field">
                            <p>City</p>
                            <input id="city" value = "${result.city}" onchange="updatedVals(this)" type="text" required />
                        </div>

                        <div class="input-field">
                            <p>Password</p>
                            <input id="password" value = "${result.password}" onchange="updatedVals(this)" type="text" required/>
                        </div>
                    </div>
                    <div class="input-field">
                        <p>Profile Description</p>
                        <textarea  id="profile_description" type="text" onchange="updatedVals(this)">${result.profile_description}</textarea>
                    </div>
                    <div class="users-cancelsub">
                        <button type="submit" id="cancel" class="addnewbut">
                            <p>Cancel</p>
                        </button>
                        <button type="submit"  id="save" class="addnewbut">
                            <p>Edit</p>
                        </button>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>`;
    $appView.insertAdjacentHTML("afterbegin", viewUser);
}
function updatedVals(val) {
    if (val.id.toString() === "given_name") {
        entity[0].given_name = val.value;
    } else if (val.id.toString() === "surname") {
        entity[0].surname = val.value;
    } else if (val.id.toString() === "email") {
        entity[0].email = val.value;
    } else if (val.id.toString() === "phone_number") {
        entity[0].phone_number = val.value;
    } else if (val.id.toString() === "city") {
        entity[0].city = val.value;
    } else if (val.id.toString() === "password") {
        entity[0].password = val.value;
    } else if (val.id.toString() === "profile_description") {
        entity[0].profile_description = val.value;
    }
}
