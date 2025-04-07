let html = '';
db.student.forEach((student, i) => {
    html += '<tr>';
    html += '<td>' + student.id + '</td>';
    html += '<td>';
    html += 'Name: ' + student.name + '<br/>';
    html += 'User Name: ' + student.username + '<br/>';
    html += 'Password: ' + student.password;
    html += '</td>';
    html += '<td>';
    html += 'Phone No: ' + student.phoneNumber + '<br/>';
    html += 'Email: ' + student.fatherName + '<br/>';
    html += 'Address: ' + student.address + '<br/>';
    html += 'Gender: ' + student.gender;
    html += '</td>';
    html += '<td>';

    let studentClass = db.class.find((cls) => cls.id == student.class);
    if (studentClass) {
        html += 'Class: ' + studentClass.class;
    } else {
        html += 'Class: Not Found';
    }
    html += '</td>';
    html += '<td>';
    html += '<a style="color: black;" href="../04_addStudent.html?id=' + student.id + '"  class="addStudent-edit-button btn btn-primary" addStudentEditId="' + student.id + '">Edit</a>';
    html += '<button class="addStudent-delete-button btn btn-danger" addStudentDelId="' + student.id + '">Delete</button>';
    html += '<button class="manage-details btn btn-success" style="margin-left: 1rem;" addStudentIds="' + student.id + '">Manage Details</button>';
    html += '</td>';
    html += '</tr>';
});

$(".add-student-list").html(html);

var previous_id = window.location.href.split("=")[1];
if (previous_id != "") {
    let hide_sumbit_button = $(".addStudent-submit-button");
    hide_sumbit_button.css("display", "none");
    $(".edit-previous-data").css("display", "block");
}


// Delete Row Function
$(".addStudent-delete-button").click(function () {
    let addStudentDelId = $(this).attr("addStudentDelId");
    let studentIndex = db.student.findIndex((v) => v.id == addStudentDelId);
    if (studentIndex !== -1) {
        db.student.splice(studentIndex, 1);
        saveToLocalStorage("Database", db);
        $(this).closest('tr').remove();
    } else {
        alert("Student not found.");
    }
});

// Back to addStudentList 
$(".back-button").click((v) => {
    $(".addStudentList").css("display", "flex");
    $(".manage-student-detail").css("display", "none");
    window.location.reload();
})

// Fee Details

$(".manage-details").click(function (e) {
    $(".manage-student-detail").css("display", "block");
    $(".addStudentList").css("display", "none");

    var addStudentId = $(this).attr("addStudentIds");
    let student_data = db.student.find((v, i) => v.id == addStudentId);
    var class_text = db.class.find((v) => v.id == student_data.class);
    $(".info-page-name").text("Name : " + student_data.name)
    $(".info-page-class").text("Class : " + class_text.class)
    $(".info-page-fatherName").text("Father Name : " + student_data.fatherName)
    $(".info-page-phoneNumber").text("Phone No : " + student_data.phoneNumber)
    $(".info-page-address").text("Address : " + student_data.address)


    $(".info_page").click((v) => {
        e.preventDefault();
        //  $(".info-page-design").css("display", "block");
        // $(".class_details_page").css("display", "none");
        // $(".class-schedule").css("display", "none");
        // $(".identity-card-design-here").css("display", "none");  

        var addStudentId = $(this).attr("addStudentIds");
        let student_data = db.student.find((v, i) => v.id == addStudentId);
        var class_text = db.class.find((v) => v.id == student_data.class);
        console.log(class_text);
        console.log(student_data);
        $(".info-page-name").text("Name : " + student_data.name)
        $(".info-page-class").text("Class : " + class_text.class)
        $(".info-page-fatherName").text("Father Name : " + student_data.fatherName)
        $(".info-page-phoneNumber").text("Phone No : " + student_data.phoneNumber)
        $(".info-page-address").text("Address : " + student_data.address)

    });

    // Class Details Code
    $(".class_details").click((v) => {
        e.preventDefault();
        var addStudentId = $(this).attr("addStudentIds");
        $(".hidden_student_id").val(addStudentId);
        let student_info = db.student.find((v) => v.id == addStudentId);
        let class_info = db.class.find((v, i) => v.id == student_info.class);
        let registration_fees = class_info.registration_fees;
        let addmission_fees = class_info.admission_fees;
        let exam_fees = class_info.exam_fees;
        let total_fees = registration_fees + addmission_fees + exam_fees;
        $(".reg_fees").text("Registration Fees : " + registration_fees);
        $(".addmission_fees").text("Admission Fees : " + addmission_fees);
        $(".exam_fees").text("Exam Fees : " + exam_fees);
        $(".total_fees").text("Total Fees : " + total_fees);

        // insert pending fee
        let addStuId = $(".hidden_student_id").val();
        let fee_data = db.fees.filter((v, i) => v.student_id == addStuId);
        var old_reg_fees = fee_data.reduce((a, c) => {
            if (c.fee_type == "registration_fees") {
                var a = a + (c.pay_fee * 1);
            }
            return a;
        }, 0);

        var old_admission_fees = fee_data.reduce((a, c) => {
            if (c.fee_type == "admission_fees") {
                var a = a + (c.pay_fee * 1);
            }
            return a;
        }, 0);

        var old_exam_fees = fee_data.reduce((a, c) => {
            if (c.fee_type == "exam_fees") {
                var a = a + (c.pay_fee * 1);
            }
            return a;
        }, 0);

        let student_data = db.student.find((v, i) => v.id == addStuId);
        var register = student_data.fee_details.registration_fees - old_reg_fees;
        var addmission = student_data.fee_details.admission_fees - old_admission_fees;
        var exam = student_data.fee_details.exam_fees - old_exam_fees;
        var total = register + addmission + exam;
        console.log(student_data.fee_details.registration_fees);
        console.log(old_reg_fees);
        console.log(exam);
        console.log(total);
        $(".pend_reg").text("Registration fees : " + register);
        $('.pend_add').text("Admission Fees: " + addmission);
        $('.pend_exam').text("Exam Fees: " + exam);
        $(".pend_total").text("Total Fees: " + total)

        let special_filter = db.fees.filter((v) => v.student_id == addStuId);
        let htmls = "";
        special_filter.forEach((v, i) => {
            htmls += '<tr>'
            htmls += '<td>' + (i + 1) + '</td>'
            htmls += '<td>' + v.fee_type + '</td>'
            htmls += '<td>' + v.pay_fee + '</td>'
            htmls += '<td>' + v.fee_date + '</td>'
            htmls += '<td>' + v.current_date + '</td>'
            htmls += '<td>' + v.remark + '</td>'
            htmls += ' </tr>'
        });
        $(".data-table-tbody").html(htmls);

        var a = db.fees;
        var sortVal = a.sort((a, b) => b.id - a.id)[0];
        var oj = sortVal != null ? sortVal.id : 0
        $(".submit-button-of-pay-your-fee").click((v, i) => {
            let fee_type = $("[name='fee-type-select']").val()
            let pay_fee = $(".pay-fee").val()
            let fee_date = $(".fee-date").val()
            let pay_method = $("[name='pay_method']").val()
            let remark = $(".remark").val()
            let current_date = new Date()
            let addStudentId = $(".hidden_student_id").val();

            // Logic Part
            var old_fees_array = db.fees.filter((v, i) => v.student_id == addStudentId && v.fee_type == fee_type);
            let old_fees = old_fees_array.reduce((o, c) => {
                o = o + (c.pay_fee * 1)
                return o;
            }, 0);
            let total_new_fees = old_fees + (pay_fee * 1);
            if (fee_date != "" && pay_fee != "" && pay_method != "" && remark != "") {
                if (total_new_fees <= student_info.fee_details[fee_type]) {
                    let obj = {
                        id: oj + 1,
                        student_id: $(".hidden_student_id").val(),
                        fee_type: fee_type,
                        pay_fee: pay_fee,
                        fee_date: fee_date,
                        current_date: current_date,
                        pay_method: pay_method,
                        remark: remark
                    };
                    db.fees.push(obj);
                    saveToLocalStorage("Database", db);
                    window.location.reload();
                }
                else {
                    alert('Invalid fees rahul');
                }
            } else {
                alert("Please Fill All input.");
            }

        });
    })

    // Class Schedule

    $(".manage_sub_btn").click((v, i) => {
        v.preventDefault();
        var addStudentId = $(this).attr("addStudentIds");
        console.log(addStudentId);
        let student_info = db.class.find((v) => v.id == addStudentId);
        console.log(student_info);
        let htmls = "";
        student_info.subject.forEach((vs, i) => {
            let teacher_name = db.teacher.find((v1, i) => v1.id == vs.teacher * 1);

            // Subject find
            // console.log(teacher_name);
            console.log(vs);
            
            let teacher_n = student_info.subject.find(t => t.id)
            let subject_name = db.subject.find((v2, i) => v2.id == vs.id);
            htmls += "<tr>"
            htmls += "<td>" + vs.id + "</td>"
            htmls += "<td>" + subject_name.subject + "</td>"
            htmls += "<td>" + vs.start + "</td>"
            htmls += "<td>" + vs.end + "</td>"
            htmls += "<td>" + teacher_name.name + "</td>"
            htmls += "</tr>"
        });
        $(".class-teacher-list-of-class-schedule").html(htmls)



    });


    // identity-card-design-here

    $(".identity_card_btn").click((v, i) => {
        e.preventDefault()
        let student_data = db.student.find((v, i) => v.id == addStudentId);
        var class_text = db.class.find((v) => v.id == student_data.class);
        console.log(class_text);
        console.log(student_data);
        $(".edetails-name").text("Name : " + student_data.name)
        $(".edetails-class").text("Class : " + class_text.class)
        $(".edetails-roll-no").text("Roll No : " + student_data.id)
        $(".edetails-father-name").text("Father Name : " + student_data.fatherName)
        $(".edetails-phone-no").text("Phone No : " + student_data.phoneNumber)


        function printDiv() {

            var divToPrint = document.querySelector(".print_maer");
            var newWin = window.open('', 'Print-Window');

            newWin.document.open();
            var html = ''
            html += '<html>'
            html += "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>"
            html += '<link rel="stylesheet"href="./04_addStudentList.css"> <body onload="window.print()">' + divToPrint.innerHTML + '</body>';
            html += "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>";
            html += '</html>';
            newWin.document.write(html);
            newWin.document.close();
        }
        $(".submit-button button").click(function () {
            // window.print();
            printDiv()
        })
    })
});
