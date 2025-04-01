// const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];
// const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

function get_data_by_id(key, id) {
    return db[key].find((v, i) => v.id == id);
}

var a = db.teacher;
var sortVal = a.sort((a, b) => b.id - a.id)[0];
var oj = sortVal != null ? sortVal.id : 0;

var htmls = '';
db.teacher.forEach((v) => {

    htmls += '<tr>';
    htmls += '<td>' + v.id + '</td>';
    htmls += '<td>';
    htmls += 'Name: ' + v.name + '<br/>';
    htmls += 'User Name: ' + v.userName + '<br/>';
    htmls += 'Password: ' + v.password;
    htmls += '</td>';
    htmls += '<td>';
    htmls += 'Phone No: ' + v.phoneNumber + '<br/>';
    htmls += 'Email: ' + v.email + '<br/>';
    htmls += 'Qualification: ' + v.qualification + '<br/>';
    htmls += 'Gender: ' + v.gender_select;
    htmls += '</td>';
    htmls += '<td>';
    htmls += 'Class: ' + v.select_mul_class;
    htmls += '</td>';
    htmls += '<td>';
    htmls += '<a style="color: black;" href="../03_addTeacher.html?id=' + v.id + '" class="teacher-list-edit-button" teacherEditId="' + v.id + '">Edit</a>';
    htmls += '<button class="teacher-list-delete-button" classIdDel="' + v.id + '">Delete</button>';
    htmls += '<button class="teacher-list-manage-details-button" classIdDetail="' + v.id + '">Manage Details</button>';
    htmls += '</td>';
    htmls += '</tr>';

});
$('.add-teacher-list').html(htmls);


// Delete teacher Row 

$(".teacher-list-delete-button").click(function (e) {
    let classIdDel = $(this).attr("classIdDel");
    var delete_id = db.class.find((v) => v.id == classIdDel);
    if (delete_id !== -1) {
        db.teacher.splice(delete_id, 1);
        saveToLocalStorage("Database", db);
        window.location.reload();
    }
})

// Back button 
$(".back-button").click((v) => {
    $(".hide-main-class").css("display", "flex");
    $(".manage-teacher-detail").css("display", "none");
})

// Teacher List mange details button
// function edit_data(key, ary) {
// db[key] = ary
//     let db_str = JSON.stringify(db);
//     localStorage.setItem('Database', db_str)
// }

// edit_data("salary", [])


$(".teacher-list-manage-details-button").click(function (v) {
    v.preventDefault()
    $(".hide-main-class").css("display", "none");
    $(".manage-teacher-detail").css("display", "block");

    $('.nav-pills #pills-home-tab').tab('show');

    var classIdDetail = $(this).attr("classIdDetail");
    $(".hidden-teacher-id").val(classIdDetail)
    let teacher_data = db.teacher.find((v, i) => v.id == classIdDetail * 1);
    $(".teacher-name").text("Name : " + teacher_data.name);
    $(".teacher-class").text("Teaching Class : " + teacher_data.select_mul_class);
    $(".taacher-qualification").text("Qualificatioin : " + teacher_data.qualification);
    $(".teacher-phone-no").text("Phone No : " + teacher_data.phoneNumber);
    $(".teacher-gender").text("Gender : " + teacher_data.gender_select);
    let get_joining_time = teacher_data.joiningDate;
    var get_time = "2024-08-04";
    function monthDiff(d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }
    var total_month = monthDiff(new Date(get_time), new Date());
    $('.total-salary-heading').text("Total Salary: " + total_month * teacher_data.salary + " Rs");

    // Pending Salary 
    var old_salary = db.salary.filter((v, i) => v.teacher_relation_id == classIdDetail)
    var old_total_salary = old_salary.reduce((a, c, i) => {
        var a = a + (c.payment * 1);
        return a
    }, 0);
    $('.pending-salary-heading').text("Pending Salary: " + (teacher_data.salary * total_month - old_total_salary) + " Rs");

    // Student Fee List
    var html = ""
    old_salary.forEach((v, i) => {
        // console.log(v);
        html += '<tr>'
        html += '<td>' + v.id + '</td>'
        html += '<td>' + v.payment + '</td>'
        html += '<td>' + v.fees_date + '</td>'
        html += '<td>' + v.current_date + '</td>'
        html += '</tr>'
    });

    $(".teacher-salary-details-body-section").html(html);

    // 
    var tclass = teacher_data.select_mul_class.map((v1) => v1 * 1);
    console.log(tclass);
    var html = '';
    var subject_name = db.class;

    subject_name.forEach((v, i) => {
        v.subject.forEach((vv, ii) => {
            if (classIdDetail == vv.teacher) {
                html += '<tr>';
                html += '<td>' + (i + 1) + '</td>';
                html += '<td>' + v.class + '</td>';
                html += '<td>' + vv.start + '</td>';
                html += '<td>' + vv.end + '</td>';
                html += '<td>' + vv.subject_class + '</td>';
                html += '</tr>';
            }
        })
    });
    $('.teacher-class-details-body-section-next').html(html)

    // Submit Teacher Fees

    $(".submit-button button").click(() => {
        let current_pay_salary = $(".pay-salary-input input").val();
        let salary_date_input = $(".salary-date-input input").val();
        let choose_one_payment_method = $(".choose-one-payment-method select").val();
        var current_new_date = new Date();

        let teacher_data = db.teacher.find((v, i) => v.id == classIdDetail);
        var get_time = "2024-08-04";
        function monthDiff(d1, d2) {
            var months;
            months = (d2.getFullYear() - d1.getFullYear()) * 12;
            months -= d1.getMonth();
            months += d2.getMonth();
            return months <= 0 ? 0 : months;
        }
        var total_month = monthDiff(new Date(get_time), new Date());
        if (current_pay_salary != '' && salary_date_input != '' && choose_one_payment_method != '') {
            var old_salary = db.salary.filter((v, i) => v.teacher_relation_id == classIdDetail);

            // console.log(old_salary + "old-salary");

            let old_total_salary = old_salary.reduce((a, c) => {
                var a = a + (c.payment * 1);
                return a;
            }, 0);
            var current_fee_type = total_month * teacher_data.salary;
            current_pay_salary = current_pay_salary * 1;
            var a = db.salary;
            var sortVal = a.sort((a, b) => b.id - a.id)[0];
            var oj = sortVal != null ? sortVal.id : 0;
            if (current_pay_salary + old_total_salary <= current_fee_type) {

                var salary = {
                    id: oj + 1,
                    teacher_relation_id: teacher_data.id,
                    payment: current_pay_salary,
                    fees_date: get_time,
                    current_date: current_new_date,
                }
                db.salary.push(salary);
                saveToLocalStorage("Database", db);
                window.location.reload()
            } else {
                alert('Invalid Entry')
            }
        } else {
            alert("Fill All Input!")
        }

    });


    // Teaher Class Details

    // $('.Teacher-class-details').click(function (e) {
    //     e.preventDefault();
    //     let classIdDetail = $(".hidden-teacher-id").val();


    // });
});