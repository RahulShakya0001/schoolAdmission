// const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? []
// const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
// Add Value into select-teaching-border

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
            fee_details: {registration_fees, admission_fees, exam_fees}
        };

        let user_len = db.users;
        let sortVal = user_len.sort((a, b) => b.id - a.id)[0];
        var oj = sortVal != null ? sortVal.id : 0;
        let login_user ={
            id: oj + 1,
            name: obj.name,
            username: obj.username,
            password: obj.password, 
            user_role: 3, 
            relation_id: db.student.length + 1,
            realation_table: "student"
        }
        db.users.push(login_user)
        db.student.push(obj)
        saveToLocalStorage("Database", db);
        $("form")[0].reset()
        window.location.href = "./studentList/04_addStudentList.html"
    } else {
        alert("Please Fill all inputs.")
    }
});

$(".watch-your-student-list").click(() => {
    window.location.href = "../Student/studentList/04_addStudentList.html";
})
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
    e.preventDefault()
    let name = $(".input-1 input").val();
    let username =  $(".input-2 input").val();
    let password = $(".input-3 input").val();
    let phoneNumber = $(".input-4 input").val();
    let fatherName = $(".input-5 input").val();
    let address = $(".input-6 input").val();
    let gender = $(".input-7 select").val();
    let classes = $(".input-8 select").val();
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

    console.log(updated_student);
    let studentIndex = db.student.findIndex((student) => student.id == previous_id);
    console.log(studentIndex);

    if (studentIndex !== -1) {
        db.student[studentIndex] = updated_student;
        localStorage.setItem("Database", JSON.stringify(db));
        window.location.href = "../Student/studentList/04_addStudentList.html";
    } else {
        alert("Error: Teacher not found");
    }
})

// $(".fees-details").click((e) => {
//     e.preventDefault();
//     $(".front-preview").css("display", "none");
//     $(".class-schedule").css("display", "none");
//     $('.class_details_page').css("display", "block");
//     let student_info = db.student.find((v) => v.id == login.relation_id);
//     console.log(student_info);
//     let class_info = db.class.find((v, i) => v.id == student_info.class);
//     let registration_fees = class_info.registration_fees;
//     let addmission_fees = class_info.admission_fees;
//     let exam_fees = class_info.exam_fees;
//     let total_fees = registration_fees + addmission_fees + exam_fees;
//     $(".reg_fees").text("Registration Fees : " + registration_fees);
//     $(".addmission_fees").text("Admission Fees : " + addmission_fees);
//     $(".exam_fees").text("Exam Fees : " + exam_fees);
//     $(".total_fees").text("Total Fees : " + total_fees);

//     // insert pending fee
//     let fee_data = db.fees.filter((v, i) => v.student_id == login.relation_id);
//     var old_reg_fees = fee_data.reduce((a, c) => {
//         if (c.fee_type == "registration_fees") {
//             var a = a + (c.pay_fee * 1);
//         }
//         return a;
//     }, 0);
//     console.log(old_reg_fees);
//     var old_admission_fees = fee_data.reduce((a, c) => {
//         if (c.fee_type == "admission_fees") {
//             var a = a + (c.pay_fee * 1);
//         }
//         return a;
//     }, 0);

//     var old_exam_fees = fee_data.reduce((a, c) => {
//         if (c.fee_type == "exam_fees") {
//             var a = a + (c.pay_fee * 1);
//         }
//         return a;
//     }, 0);

//     let student_data = db.student.find((v, i) => v.id == login.relation_id);
//     var register = student_data.fee_details.registration_fees - old_reg_fees;
//     var addmission = student_data.fee_details.admission_fees - old_admission_fees;
//     var exam = student_data.fee_details.exam_fees - old_exam_fees;
//     var total = register + addmission + exam;
//     console.log(student_data.fee_details.registration_fees);
//     console.log(old_reg_fees);
//     console.log(exam);
//     console.log(total);
//     $(".pend_reg").text("Registration fees : " + register);
//     $('.pend_add').text("Admission Fees: " + addmission);
//     $('.pend_exam').text("Exam Fees: " + exam);
//     $(".pend_total").text("Total Fees: " + total)
//     console.log(db.fees);
//     let special_filter = db.fees.filter((v) => v.student_id == login.relation_id );
//     let htmls = "";
//     console.log(special_filter);
//     special_filter.forEach((v, i) => {
//         htmls += '<tr>'
//         htmls += '<td>' + (i + 1) + '</td>'
//         htmls += '<td>' + v.fee_type + '</td>'
//         htmls += '<td>' + v.pay_fee + '</td>'
//         htmls += '<td>' + v.fee_date + '</td>'
//         htmls += '<td>' + v.current_date + '</td>'
//         htmls += '<td>' + v.remark + '</td>'
//         htmls += ' </tr>'
//     });
//     $(".data-table-tbody").html(htmls);

// });

