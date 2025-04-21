
let data = db.class;
let option = "";
data.forEach((v, i) => {
    option += "<option value='" + v.id + "'>" + v.class + "</option>";
});

$(".select-teaching-border select").append(option);

// Submit/ Add Data in the database

$(".addStudent-submit-button").click((e) => {
    e.preventDefault();
    $(".addStudent-submit-button").css("display", "block");
    let name = $(".input-1 input").val();   
    let username = $(".input-2 input").val();
    let password = $(".input-3 input").val();
    let phoneNumber = $(".input-4 input").val();
    let fatherName = $(".input-5 input").val();
    let address = $(".input-6 input").val();
    let gender = $(".gender-border select").val();
    let classes = $(".select-teaching-border select").val();
    let val = db.class.find((v) => v.id == classes);
    console.log(val);
    let registration_fees = val.registration_fees;
    let admission_fees = val.admission_fees;
    let exam_fees = val.exam_fees;
    let obj = {};

    if (name && username && password && phoneNumber && fatherName && address && gender && classes) {
        obj = {
            id: db.student.length + 1,
            name: name,
            username: username,
            password: password,
            phoneNumber: phoneNumber,
            fatherName: fatherName,
            address: address,
            gender: gender,
            class: classes,
            fee_details: { registration_fees, admission_fees, exam_fees }
        };

        let user_len = db.users;
        let sortVal = user_len.sort((a, b) => b.id - a.id)[0];
        let oj = sortVal != null ? sortVal.id : 0;

        let login_user = {
            id: oj + 1,
            name: obj.name,
            username: obj.username,
            password: obj.password,
            user_role: 3,
            relation_id: obj.id * 1,
            relation_table: "student"
        };

        db.users.push(login_user);
        db.student.push(obj);
        saveToLocalStorage("Database", db);
        $("form")[0].reset();
        window.location.href = "./studentList/04_addStudentList.html";
    } else {
        alert("Please Fill all inputs.");
    }
});

$(".watch-your-student-list").click(() => {
    window.location.href = "../Student/studentList/04_addStudentList.html";
});

// Edit Student Data 
var previous_id = window.location.href.split("=")[1];
let previous_student = db.student.find((student) => student.id == previous_id);

if (previous_id) {
    $(".addStudent-submit-button").css("display", "none");
    $(".edit-previous-data").css("display", "block");
    $(".input-1 input").val(previous_student.name);
    $(".input-2 input").val(previous_student.username);
    $(".input-3 input").val(previous_student.password);
    $(".input-4 input").val(previous_student.phoneNumber);
    $(".input-5 input").val(previous_student.fatherName);
    $(".input-6 input").val(previous_student.address);
    $(".gender-border select").val(previous_student.gender);
    $(".select-teaching-border select").val(previous_student.class);
}

$(".edit-previous-data").click(function (e, i) {
    e.preventDefault();
    let name = $(".input-1 input").val();
    let username = $(".input-2 input").val();
    let password = $(".input-3 input").val();
    let phoneNumber = $(".input-4 input").val();
    let fatherName = $(".input-5 input").val();
    let address = $(".input-6 input").val();
    let gender = $(".gender-border select").val();
    let classes = $(".select-teaching-border select").val();

    let updated_student = {
        id: previous_id * 1,
        name: name,
        username: username,
        password: password,
        phoneNumber: phoneNumber,
        fatherName: fatherName,
        address: address,
        gender: gender,
        class: classes
    };

    let login_user = {
        id: db.users.find(u => u.relation_id == previous_id && u.relation_table == "student")?.id || (db.users.length + 1),
        name: updated_student.name,
        username: updated_student.username,
        password: updated_student.password,
        user_role: 3,
        relation_id: previous_id * 1,
        relation_table: "student"
    };

    let studentIndex = db.student.findIndex((student) => student.id == previous_id);
    let user_in = db.users.findIndex((user) => user.relation_id == previous_id && user.relation_table == "student");

    if (studentIndex !== -1) {
        db.users[user_in] = login_user;
        db.student[studentIndex] = updated_student;
        localStorage.setItem("Database", JSON.stringify(db));
        window.location.href = "../Student/studentList/04_addStudentList.html";
    } else {
        alert("Error: Student not found");
    }
});

