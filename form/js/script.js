$(document).ready(function () {
        $("form").submit(function () {
            let name;
            let phone;
            let gender;

            name = $("#name").val();
            phone = $("#phone").val();
            gender = $("#gender").val();

            console.log("Name: "+name);
            console.log("Phone: "+phone);
            console.log("Gender: "+gender);

            return false;
        });
    });