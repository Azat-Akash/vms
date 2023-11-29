const $appView = document.querySelector("#app");
const url = "http://localhost:8080/members/one";
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
    console.log(entity[0]);
    const cancel = document.querySelector("#cancel");

    cancel.onclick = function () {
        modalAdd = document.querySelector(".new-bg").remove();
    };

    const save = document.querySelector("#save");

    save.onclick = async function () {
        const response = await fetch("http://localhost:8080/members/edit/h", {
            method: "PUT",
            body: JSON.stringify({
                member_user_id: entity[0].member_user_id,
                house_rules: entity[0].house_rules,
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

    save.onclick = async function () {
        const response = await fetch("http://localhost:8080/members/edit/ad", {
            method: "PUT",
            body: JSON.stringify({
                member_user_id: entity[0].member_user_id,
                town: entity[0].town,
                house_number: entity[0].house_number,
                street: entity[0].street,
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
                    <div class = "inp-col">
                        <div class="input-field">
                            <p>Member user ID</p>
                            <input id="member_user_id" value = "${result.member_user_id}" onchange="updatedVals(this)" type="text" readonly/>
                        </div>
                        <div class="input-field">
                            <p>Given Name</p>
                            <input id="given_name" value = "${result.given_name}" onchange="updatedVals(this)" type="text" readonly/>
                        </div>
                        <div class="input-field">
                            <p>Surname</p>
                            <input id="surname" value = "${result.surname}" onchange="updatedVals(this)" type="text" readonly/>
                        </div>
                    </div>

                    <div class = "inp-col">
                        <div class="input-field">
                            <p>Town</p>
                            <input id="town" value = "${result.town}" onchange="updatedVals(this)"  type="text" required />
                        </div>
                        <div class="input-field">
                            <p>Street</p>
                            <input id="street"value = "${result.street}" onchange="updatedVals(this)" type="text" required />
                        </div>
                        <div class="input-field">
                            <p>House number</p>
                            <input id="house_number" value = "${result.house_number}" onchange="updatedVals(this)" type="text" required />
                        </div>
                    </div>

                    
                </div>
                <div class="textarea-field">
                        <p>House Rules</p>
                        <textarea  id="house_rules" type="text" onchange="updatedVals(this)">${result.house_rules}</textarea>
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
            </form>
        </div>
    </div>`;
    $appView.insertAdjacentHTML("afterbegin", viewUser);
}
function updatedVals(val) {
    if (val.id.toString() === "house_rules") {
        entity[0].house_rules = val.value;
    } else if (val.id.toString() === "town") {
        entity[0].town = val.value;
    } else if (val.id.toString() === "street") {
        entity[0].street = val.value;
    } else if (val.id.toString() === "house_number") {
        entity[0].house_number = val.value;
    }
    console.log(val);
    console.log(entity[0].house_number);
}
