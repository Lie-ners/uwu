function getthevalue() {

    var name_input = document.getElementById("name");
    var name = name_input.value;

    var num_input = document.getElementById("number");
    var num = num_input.value;

    var add_input = document.getElementById("add");
    var add = add_input.value;

    sessionStorage.setItem("namedata", name);

    sessionStorage.setItem("numdata", num);

    sessionStorage.setItem("adddata", add);


}

function showthevalue(){

    var new_Name = sessionStorage.getItem("namedata");

    var new_Num = sessionStorage.getItem("numdata");

    var new_Add = sessionStorage.getItem("adddata");

    document.getElementById("name-response").innerText = new_Name;

    document.getElementById("num-response").innerText = new_Num;

    document.getElementById("add-response").innerText = new_Add;
}