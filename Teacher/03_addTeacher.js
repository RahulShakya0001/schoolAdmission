$(document).ready(function () {
    $('.js-example-basic-multiple').select2();
});


// Switch button
$(".watch-your-teacher-list").click(() => {
    window.location.href = "../Teacher/teacherList/03_teacherList.html";
});


var htmles = '';
if (db.class && db.class.length > 0) {
    db.class.forEach((v) => {
        htmles += `<option value="${v.id}">${v.class}</option>`;
    });
    $(".select-teaching-border select").append(htmles);
}

// Submit new teacher
$(".teacher-submit-button").click(function (e) {
    e.preventDefault();
    let user_len = db.teacher;
    let sortVal = user_len.sort((a, b) => b.id - a.id)[0];
    var oj = sortVal != null ? sortVal.id : 0;

    let name = $(".input-1 input").val();
    let userName = $(".input-2 input").val();
    let password = $(".input-3 input").val();
    let phoneNumber = $(".input-4 input").val();
    let email = $(".input-5 input").val();
    let qualification = $(".input-6 input").val();
    let select_value = $('.js-example-basic-multiple').val();
    let gender_select = $(".input-8 select").val();
    let salary = $(".input-9 input").val();
    let joining_date = new Date();

    if (select_value && select_value.length > 0) {
        select_value.forEach((v, i) => {
            console.log(`Selected value ${i}: ${v}`);
        });
    }

    if (name && userName && password && phoneNumber && email && qualification && select_value && gender_select && salary) {
        let obj = {
            id: oj + 1,
            name: name,
            userName: userName,
            password: password,
            phoneNumber: phoneNumber,
            email: email,
            joiningDate: joining_date,
            qualification: qualification,
            select_mul_class: select_value,
            gender_select: gender_select,
            salary: salary
        };

        let user_len = db.users.length;

        let teacher = {
            id: user_len + 1,
            sname: obj.name,
            username: obj.userName,
            password: obj.password,
            user_role: 2,
            relation_id: oj + 1,
            relation_table: "teacher"
        }
        db.users.push(teacher);
        db.teacher.push(obj);
        localStorage.setItem("Database", JSON.stringify(db));
        window.location.href = "../Teacher/teacherList/03_teacherList.html";


    } else {
        alert("Please fill in all the required fields");
    }
});



// Edit process

let pre_id = window.location.href.split("=")[1];
let previous_teacher = db.teacher.find((teacher) => teacher.id == pre_id);
// let teacher_data = db.teacher.find(t => t.id == 5);

if (previous_teacher) {
    $(".teacher-submit-button").css("display", "none")
    $(".edit-privious-data").css("display", "block")
    // Pre-fill the form with the teacher's existing data
    $(".input-1 input").val(previous_teacher.name);
    $(".input-2 input").val(previous_teacher.userName);
    $(".input-3 input").val(previous_teacher.password);
    $(".input-4 input").val(previous_teacher.phoneNumber);
    $(".input-5 input").val(previous_teacher.email);
    $(".input-6 input").val(previous_teacher.qualification);
    $('.js-example-basic-multiple').val(previous_teacher.select_mul_class).trigger('change');
    $(".input-8 select").val(previous_teacher.gender_select);
    $(".input-9 input").val(previous_teacher.salary);
    console.log(previous_teacher.joiningDate);
}
// emptyDbTable("users")
$(".edit-privious-data").click(function (e) {
    e.preventDefault();

    let user_len = db.teacher;
    let sortVal = user_len.sort((a, b) => b.id - a.id)[0];
    var oj = sortVal != null ? sortVal.id : 0;

    let name = $(".input-1 input").val();
    let userName = $(".input-2 input").val();
    let password = $(".input-3 input").val();
    let phoneNumber = $(".input-4 input").val();
    let email = $(".input-5 input").val();
    let qualification = $(".input-6 input").val();
    let select_value = $('.js-example-basic-multiple').val();
    let gender_select = $(".input-8 select").val();
    let salary = $(".input-9 input").val();

    if (name && userName && password && phoneNumber && email && qualification && select_value && gender_select && salary) {

        let updated_teacher = {
            id: pre_id * 1, // Keep the same ID
            name: name,
            userName: userName,
            password: password,
            phoneNumber: phoneNumber,
            joiningDate: previous_teacher.joiningDate,
            email: email,
            qualification: qualification,
            select_mul_class: select_value,
            gender_select: gender_select,
            salary: salary,
        };

        // ✅ Corrected User Update Object
        let teacher_update = {
            id: db.users.find(u => u.relation_id == pre_id && u.relation_table == "teacher")?.id || (db.users.length + 1),
            sname: updated_teacher.name,
            username: updated_teacher.userName,
            password: updated_teacher.password,
            user_role: 2,
            relation_id: pre_id * 1,
            relation_table: "teacher"
        };

        let teacherIndex = db.teacher.findIndex((teacher) => teacher.id == pre_id);
        let user_in = db.users.findIndex((user) => user.relation_id == pre_id && user.relation_table == "teacher");

        if (teacherIndex !== -1) {
            if (user_in !== -1) {
                db.users[user_in] = teacher_update; // Update existing user
            } else {
                db.users.push(teacher_update); // Add new user if missing
            }

            db.teacher[teacherIndex] = updated_teacher;
            localStorage.setItem("Database", JSON.stringify(db));
            window.location.href = "../Teacher/teacherList/03_teacherList.html";
        } else {
            alert("Error: Teacher not found");
        }
    } else {
        alert("Fill all input fields.");
    }
});
