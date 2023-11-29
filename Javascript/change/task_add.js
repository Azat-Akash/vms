function addModal() {
    const newUser = `<div class="new-bg">
        <div class="new-modal">
            <form>
                <div class="input-group">
                    <div class = "inp-col">
                        <div class="input-field">
                            <p>Driver ID</p>
                            <input id="driver_id" type="number" required/>
                            <p id="result">Driver: John Doe<\p>
                        </div>
                        <div class="input-field">
                            <p>Status</p>
                            <select name="status" id="inp" required>
                            <option>Active</option>
                            <option>Inactive</option>
                            <option>Other</option>
                            </select>
                        </div>
                        <div class="input-field">
                            <p>Time in minutes</p>
                            <input id="time" type="number" required/>
                        </div>
                    </div>

                    <div class = "inp-col">
                        <div class="input-field">
                            <p>Start Location</p>
                            <input id="start_loc"  type="text" required />
                        </div>
                        <div class="input-field">
                            <p>End Location</p>
                            <input id="end_loc" type="text" required />
                        </div>
                        <div class="input-field">
                            <p>Distance in km.</p>
                            <input id="distance" type="number" required />
                        </div>
                    </div>

                    
                </div>
                <div class="textarea-field">
                        <p>Description</p>
                        <textarea  id="description" type="text"></textarea>
                    </div>
                    <div class="users-cancelsub">
                        <button type="submit" id="cancel" class="addnewbut">
                            <p>Cancel</p>
                        </button>
                        <button type="submit"  id="save" class="addnewbut">
                            <p>Save</p>
                        </button>
                        </button>
                    </div>
            </form>
        </div>
    </div>`;
    $app.insertAdjacentHTML("afterbegin", newUser);
}

const $addButton = document.querySelector(".add-button");
const $app = document.querySelector("#app");
userEntity = {};
newEntity = {};

$addButton.onclick = async function () {
    addModal();

    const member_user_id = document.querySelector("#member_user_id");
    const cancel = document.querySelector("#cancel");

    member_user_id.onchange = async function () {
        const member_url = "http://localhost:8080/members/one";
        let response = await fetch(`${member_url}/${member_user_id.value}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Accept: "application/json",
            },
        });
        newEntity = await response.json();

        const url = "http://localhost:8080/users/one";
        response = await fetch(`${url}/${member_user_id.value}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Accept: "application/json",
            },
        });
        userEntity = await response.json();

        const surname = document.querySelector("#surname");
        const given_name = document.querySelector("#given_name");

        if (newEntity[0] != undefined) {
            if (newEntity[0].member_user_id == userEntity[0].user_id) {
                given_name.value = "Member already exists";
                surname.value = "Member already exists";
                ready = false;
            }
        } else {
            if (userEntity[0] != undefined) {
                ready = true;
                given_name.value = userEntity[0].given_name;
                surname.value = userEntity[0].surname;
            } else {
                ready = false;
                given_name.value = "No such user exists";
                console.log(given_name);
                surname.value = "No such user exists";
            }
        }
    };

    cancel.onclick = function () {
        modalAdd = document.querySelector(".new-bg").remove();
    };

    const save = document.querySelector("#save");
    function isEmpty(value) {
        return value.trim() === "";
    }

    save.onclick = async function () {
        const house_rules = document.querySelector("#house_rules");
        const house_number = document.querySelector("#house_number");
        const town = document.querySelector("#town");
        const street = document.querySelector("#street");
        console.log(house_rules.value);

        const response1 = await fetch("http://localhost:8080/members/add/h", {
            method: "POST",
            body: JSON.stringify({
                member_user_id: userEntity[0].user_id,
                house_rules: house_rules.value,
                house_number: house_number.value,
                street: street.value,
                town: town.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Accept: "application/json",
            },
        });
        const message1 = await response1.json();

        modalAdd = document.querySelector(".new-bg").remove();
    };
};
