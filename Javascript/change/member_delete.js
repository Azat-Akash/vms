async function deleteFunction(record) {
    let text = "Do you confirm the deletion of this record?";

    if (confirm(text) == true) {
        member_user_id =
            record.parentNode.parentNode.firstChild.nextElementSibling.getElementsByTagName(
                "p"
            )[0].innerHTML;
        console.log(member_user_id);
        const response = await fetch(`http://localhost:8080/members/delete`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ member_user_id }),
        });
        const message = await response.json();
        console.log(message);
    }
}
