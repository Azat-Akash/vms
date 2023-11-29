function addModal() {
    const newUser = `<div class="new-bg">
        <div class="new-modal">
            <form>
                <div class="input-group">
                    <div class = "inp-col">
                        <div class="input-field">
                            <p>Caregiver user ID</p>
                            <input id="caregiver_user_id" type="number" required/>
                        </div>
                        <div class="input-field">
                            <p>Given Name</p>
                            <input id="given_name" type="text" readonly/>
                        </div>
                        <div class="input-field">
                            <p>Surname</p>
                            <input id="surname" type="text" readonly/>
                        </div>
                        
                    </div>
                   
                    <div class = "inp-col">
                        <div class="input-field">
                            <p>Gender</p>
                            <input list="gender" name="g-inp" id="g-inp" required>
                                <datalist id="gender">
                                <option value="Male">
                                <option value="Female">
                                <option value="Other">
                                </datalist>
                        </div>
                        
                        <div class="input-field">
                        <p>Caregiving type</p>
                        <input list="ctype" name="c-inp" id="c-inp" required>
                            <datalist id="ctype">
                            <option value="Babysitter">
                            <option value="Elderly Care">
                            <option value="Playmate for Children">
                            <option value="Other">
                            </datalist>
                    </div>
                    
                    <div class="input-field">
                    <p>Hourly rate</p>
                    <input id="hourly_rate" type="number" required/>
                </div>                        
                        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                    </div>

                    
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

$addButton.onclick = async function () {
    addModal();
    userEntity = {};
    newEntity = {};
    const caregiver_user_id = document.querySelector("#caregiver_user_id");
    const cancel = document.querySelector("#cancel");

    caregiver_user_id.onchange = async function () {
        const member_url = "http://localhost:8080/caregivers/one";
        let response = await fetch(`${member_url}/${caregiver_user_id.value}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Accept: "application/json",
            },
        });
        newEntity = await response.json();

        const url = "http://localhost:8080/users/one";
        response = await fetch(`${url}/${caregiver_user_id.value}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Accept: "application/json",
            },
        });
        userEntity = await response.json();

        const surname = document.querySelector("#surname");
        const given_name = document.querySelector("#given_name");

        if (newEntity[0] != undefined) {
            if (newEntity[0].caregiver_user_id == userEntity[0].user_id) {
                given_name.value = "Caregiver already exists";
                surname.value = "Caregiver already exists";
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
    console.log(caregiver_user_id.value);
    const hourly_rate = document.querySelector("#hourly_rate");
    const avatar = document.querySelector("#avatar");
    const gender = document.querySelector("#g-inp");
    const caregiving_type = document.querySelector("#c-inp");

    console.log(hourly_rate);
    let ctype = 1;
    let gd = true;

    if (gender.value == "female") {
        gd = false;
    } else {
        gd = true;
    }
    if (caregiving_type.value == "Babysitter") {
        ctype = 1;
    } else if (caregiving_type.value == "Elderly Care") {
        ctype = 2;
    } else if (caregiving_type.value == "Playmate for Children") {
        ctype = 3;
    } else if (caregiving_type.value == "other") {
        ctype = 4;
    }

    save.onclick = async function () {
        const response1 = await fetch("http://localhost:8080/caregivers/add", {
            method: "POST",
            body: JSON.stringify({
                photo: avatar.value,
                hourly_rate: hourly_rate.value,
                caregiving_type: ctype,
                gender: gd,
                caregiver_user_id: caregiver_user_id.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Accept: "application/json",
            },
        });
        const message1 = await response1.json();

        // modalAdd = document.querySelector(".new-bg").remove();
    };
};
