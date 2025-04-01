// // if (db.student != null) {
// //     var html = '';
// //     var login_user = JSON.parse(localStorage.getItem('login'))
// //     if (login_user.user_role == 2) {
// //         var teacher_date = get_data_by_id("teacher", login_user.relation_id);
// //         var student_data = db.student.reduce((a, c, i) => {
// //             if (teacher_date.class.includes(c.class)) {
// //                 a.push(c);
// //             }
// //             return a
// //         }, [])
// //         student_list(student_data);
// //     }
// //     else {
// //         student_list(db.student);
// //     }
// //     function student_list(ary) {
// //         ary.forEach((v, i) => {
// //             v.class = v.class * 1;
// //             var class_text = db.class.find((vv, ii) => vv.id == v.class)
// //             var userdata = get_user_data("users", v.id, "student");
// //             html += '<div class="row head_sec_data">'
// //             html += ' <div class="col-1 data_sec sr">'
// //             html += '  <span>' + v.id + '</span>'
// //             html += '</div>'
// //             html += ' <div class="col-2 data_sec">'
// //             html += '<div class="user_name user_data">'
// //             html += '<span>Name: ' + userdata.sname + '</span>'
// //             html += '</div>'
// //             html += '<div class="user_name user_data">'
// //             html += '<span>User Name: ' + userdata.username + '</span>'
// //             html += '</div>'
// //             html += '<div class="user_pass user_data">'
// //             html += '<span>Pass:  ' + userdata.password + '</span>'
// //             html += ' </div>'
// //             html += '</div>'
// //             html += '<div class="col-3 data_sec">'
// //             html += '<div class="user_mobile user_data">'
// //             html += '<span>Phone No.:  ' + v.phone + '</span>'
// //             html += '</div>'
// //             html += '<div class="user_email user_data">'
// //             html += '<span>Email:  ' + v.father_name + '</span>'
// //             html += '</div>'
// //             html += '<div class="user_qual user_data">'
// //             html += '<span>Address: ' + v.address + '</span>'
// //             html += '</div>'
// //             html += '</div>'
// //             html += '<div class="col-2 data_sec ">'
// //             html += '<div class="user_class user_data">'
// //             html += '<span>Class: ' + class_text.class + '</span>'
// //             html += '</div>'
// //             html += '</div>'
// //             html += '<div class="col-4 data_sec ">'
// //             html += '<div class="user_class user_data">'
// //             html += '</div>'
// //             html += '<div class="user_class user_data">'
// //             html += '<a href="add_student.html?edit_id=' + v.id + '" class="edit_student_btn" data="' + v.id + '">Edit</a>'
// //             html += '<a href="" class="delete_student_btn" data="' + v.id + '">Delete</a>'
// //             // html += '<a href="" class="manage_sub_btn" data="' + v.id + '">Manage Subject</a>'
// //             html += '<a href="" class="student_detail_btn" data="' + v.id + '">Manage Details</a>'
// //             html += '</div>'
// //             html += '</div>'
// //             html += '</div>'
// //         });
// //         document.querySelector('.student_list').innerHTML = html;

// //     }

// // }

// // $('.delete_student_btn').on('click', function (e) {
// //     e.preventDefault();
// //     var delete_id = $(this).attr('data');
// //     // console.log(delete_id);
// //     // var data =  db.student.find((v,i) => v.id == delete_id);
// //     delete_data("student", delete_id)

// // })

// // // student details page
// // $('.back_sdetail_page').click(function (e) {
// //     e.preventDefault();
// //     $('.upper_sec').css("display", "block");
// //     $('.student_detail_page').css("display", "none");
// // });
// // $('.student_detail_btn').click(function (e) {
// //     e.preventDefault();
// //     $('.upper_sec').css("display", "none")
// //     $('.student_detail_page').css("display", "block")
// //     var student_id = $(this).attr("data")
// //     student_id = $('.hidden_student_id').val(student_id);
// //     var stu_id = $('.hidden_student_id').val()
// //     var student_data = get_data_by_id("student", stu_id);
// //     var user_data = get_user_data("users", stu_id, "student");
// //     $('.student_name').text("Name: " + user_data.sname);
// //     $('.student_class').text("Class: " + student_data.class);
// //     $('.student_father').text("Father Name: " + student_data.father_name);
// //     $('.student_phoneno').text("Phone No.: " + student_data.phone);
// //     $('.student_address').text("Address: " + student_data.address);
// // });

// // $('.info_page').click(function (e) {
// //     e.preventDefault();
// //     $('.class_details_page').css("display", "none");
// //     $('.info').css("display", "flex");
// //     $('.identity_card').css("display", "none")
// //     $('.student_subject_details').css("display", "none")
// //     $('.fees_list_details').css("display", "none");
// //     var stu_id = $('.hidden_student_id').val()
// //     console.log(stu_id);
// //     var student_data = get_data_by_id("student", stu_id);
// //     var user_data = get_user_data("users", stu_id, "student");
// //     var class_text = db.class.find((v) => v.id == student_data.class);
// //     $('.student_name').text("Name: " + user_data.sname);
// //     $('.student_class').text("Class: " + class_text.class);
// //     $('.student_father').text("Father Name: " + student_data.father_name);
// //     $('.student_phoneno').text("Phone No.: " + student_data.phone);
// //     $('.student_address').text("Address: " + student_data.address);
// // });

// // // ................................................

// // $('.class_details').click(function (e) {
// //     e.preventDefault();
// //     $('.info').css("display", "none");
// //     $('.identity_card').css("display", "none")
// //     $('.class_details_page').css("display", "flex");
// //     $('.student_subject_details').css("display", "none")
// //     $('.fees_list_details').css("display", "block");
// //     var stu_id = $('.hidden_student_id').val()
// //     var student_data = get_data_by_id("student", stu_id);
// //     var class_data = get_data_by_id("class", student_data.class);
// //     var total_fees = student_data.fees_details.register + student_data.fees_details.admission + student_data.fees_details.exam;
// //     $('.reg_fees').text("Registration Fees: " + student_data.fees_details.register);
// //     $('.addmission_fees').text("Admission Fees: " + student_data.fees_details.admission);
// //     $('.exam_fees').text("Exam Fees: " + student_data.fees_details.exam);
// //     $('.total_fees').text("Total Fees: " + total_fees);

// //     // pending fees
// //     var fees_data = db.fees.filter((v, i) => v.student_relation_id == stu_id)
// //     if (c.fees_type == "register") {
// //         var a = a + (c.payment * 1);
// //         var old_reg_fees = fees_data.reduce((a, c, i) => {
// //         }
// //         return a
// //     }, 0);

// //     var old_admission_fees = fees_data.reduce((a, c, i) => {
// //         if (c.fees_type == "admission") {
// //             var a = a + (c.payment * 1);
// //         }
// //         return a
// //     }, 0);

// //     var old_exam_fees = fees_data.reduce((a, c, i) => {
// //         if (c.fees_type == "exam") {
// //             var a = a + (c.payment * 1);
// //         }
// //         return a
// //     }, 0);
// //     var reg = student_data.fees_details.register - old_reg_fees
// //     var add = student_data.fees_details.admission - old_admission_fees
// //     var ex = student_data.fees_details.exam - old_exam_fees
// //     var total = reg + add + ex
// //     $('.pend_reg').text("Registration Fees: " + reg);
// //     $('.pend_add').text("Admission Fees: " + add);
// //     $('.pend_exam').text("Exam Fees: " + ex);
// //     $('.pend_total').text("Total Fees: " + total);

// //     // student fees list 
// //     var html = ''

// //     fees_data.forEach((v, i) => {

// //         html += '<div class="row list_details">'
// //         html += '<div class="col-md-2 list_data">'
// //         html += '<span>' + v.id + '</span>'
// //         html += '</div>'
// //         html += '<div class="col-md-2 list_data">'
// //         html += '<span>' + v.fees_type + '</span>'
// //         html += '</div>'
// //         html += '<div class="col-md-2 list_data">'
// //         html += '<span>' + v.payment + '</span>'
// //         html += '</div>'
// //         html += '<div class="col-md-2 list_data">'
// //         html += '<span>' + v.fees_date + '</span>'
// //         html += '</div>'
// //         html += '<div class="col-md-2 list_data">'
// //         html += '<span>' + v.current_date + '</span>'
// //         html += '</div>'
// //         html += '<div class="col-md-2 list_data">'
// //         html += '<span>' + v.remark + '</span>'
// //         html += '</div>'
// //         html += '</div>'
// //     });

// //     $('.data_list').html(html);
// // });

// // $('#datepicker').datepicker({
// //     uiLibrary: 'bootstrap5'
// // });

// // // manage student for student
// // $('.manage_sub_btn').click(function (e) {
// //     e.preventDefault();
// //     $('.student_subject_details').css("display", "block")
// //     $('.info').css("display", "none");
// //     $('.class_details_page').css("display", "none");
// //     $('.fees_list_details').css("display", "none");
// //     $('.identity_card').css("display", "none")

// //     var student_id = $('.hidden_student_id').val();
// //     var student_data = get_data_by_id("student", student_id);
// //     var class_id = student_data.class;
// //     var class_data = get_data_by_id("class", class_id);

// //     var html = '';
// //     class_data.details.forEach((v, i) => {
// //         var subject_name = get_data_by_id("subject", v.subject);
// //         var teacher_name = db.users.find((vv) => vv.relation_id == v.teacher && vv.user_role == 2)
// //         html += '<div class="row ">';
// //         html += '<div class="col-md-2 sub_details">' + (i + 1) + '</div>';
// //         html += '<div class="col-md-2 sub_details">' + subject_name.subject + '</div>';
// //         html += '<div class="col-md-2 sub_details">' + v.start + '</div>';
// //         html += '<div class="col-md-2 sub_details">' + v.end + '</div>';
// //         html += '<div class="col-md-4 sub_details">' + teacher_name.sname + '</div>';
// //         html += '</div>';
// //     });
// //     $('.sub_details_sec').html(html);
// // });
// // $('.remove_form').on('click', function () {
// //     $('.add_subb').css('display', 'none');
// //     $('.teacher_sec').css('display', 'block');
// // });


// // // .......................................................................


// // $('.fees_submit_btn').click(function (e) {
// //     e.preventDefault();
// //     var fees_type = $('[name="ftype"]').val()
// //     var current_pay = $('[name="fees"]').val()
// //     var fees_pay_date = $('#datepicker').val()
// //     var currentdate = new Date();
// //     var datetime = + currentdate.getDate() + "/" + ((currentdate.getMonth()) + 1)
// //         + "/" + currentdate.getFullYear() + " @ "
// //         + currentdate.getHours() + ":"
// //         + currentdate.getMinutes() + ":" + currentdate.getSeconds();
// //     var pay_method = $('[name="pay_method"]').val()
// //     var remark = $('[name="remark"]').val()

// //     var stu_id = $('.hidden_student_id').val()

// //     var student = get_data_by_id("student", stu_id);
// //     console.log(student);
// //     console.log(fees_type);

// //     if (fees_type != '' && current_pay != '' && fees_pay_date != '' && remark != '' && pay_method != '') {
// //         var old_fees = db.fees.filter((v, i) => v.student_relation_id == stu_id && v.fees_type == fees_type)
// //         var old_total_fees = old_fees.reduce((a, c, i) => {
// //             var a = a + (c.payment * 1);
// //             return a
// //         }, 0);
// //         var currentFeesType = student.fees_details[fees_type];
// //         current_pay = current_pay * 1;
// //         if (current_pay + old_total_fees <= currentFeesType) {
// //             var len = get_last_id("fees")
// //             fees = {
// //                 id: len,
// //                 student_relation_id: student.id,
// //                 fees_type: fees_type,
// //                 payment: current_pay,
// //                 fees_date: fees_pay_date,
// //                 current_date: datetime,
// //                 pay_method: pay_method,
// //                 remark: remark
// //             }
// //             db_insert('fees', fees)
// //         }
// //         else {
// //             alert('Invalid enter fees')
// //         }
// //     }
// // });
// // // .......................................login_user.........login_user....
// // // identity_card

// // $('.identity_card_btn').click(function (e) {
// //     e.preventDefault();
// //     $('.info').css("display", "none");
// //     $('.class_details_page').css("display", "none");
// //     $('.fees_list_details').css("display", "none");
// //     $('.student_subject_details').css("display", "none")
// //     $('.identity_card').css("display", "block")
// //     student_id = $('.hidden_student_id').val();
// //     var student_data = get_data_by_id("student", student_id);
// //     var user_data = get_user_data("users", student_id, "student"); console.log(student_data);
// //     var class_text = db.class.find((v) => v.id == student_data.class);
// //     $('.i_name').text("Name: " + user_data.sname)
// //     $('.i_class').text("Class: " + class_text.class)
// //     $('.i_roll').text("Roll No: " + student_data.id)
// //     $('.i_father').text("Father Name: " + student_data.father_name)
// //     $('.i_phone').text("Phone No: " + student_data.phone)
// // });
// // function printDiv() {

// //     var divToPrint = document.getElementById('printarea');

// //     var newWin = window.open('', 'Print-Window');

// //     newWin.document.open();
// //     var html = ''
// //     html += '<html>'
// //     html += "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>"
// //     html += '<link rel="stylesheet"href="css/identity_card.css"> <body onload="window.print()">' + divToPrint.innerHTML + '</body>';
// //     html += "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>";
// //     html += '</html>';
// //     newWin.document.write(html);
// //     newWin.document.close();
// // }

// // $("#printButton").click(function () {
// //     // window.print();
// //     printDiv()
// // });


// // let a = 4;
// // let s = 1;
// // for(let i = 1; i <= a; i++){
// //     s = s * i;
// // }
// // console.log(s);
// // set database
// var db = localStorage.getItem('db');
// var db = JSON.parse(db);
// var login_user = JSON.parse(localStorage.getItem("login"));
// if (db == null) {
//     var db = {
//         class: [], teacher: [], subject: [], student: [], user_role: [{ id: 1, value: 'Admin' }, { id: 2, value: 'Teacher' }, { id: 3, value: 'Student' }], users: [
//             {
//                 id: 1,
//                 sname: 'Admin',
//                 username: 'admin',
//                 password: '123',
//                 user_role: 1,
//                 relation_id: "",
//                 relation_table: ""
//             }
//         ], fees: [], salary: [], attendence: [], homework: [], exam: [], exam_result: []
//     };
//     var db_str = JSON.stringify(db);
//     localStorage.setItem('db', db_str);
// }
// function db_insert(key, value) {
//     db[key].push(value)
//     var db_str = JSON.stringify(db);
//     localStorage.setItem('db', db_str);
// }

// // function get_key_by_id() {

// // }

// // check user logged-in or not
// var login = localStorage.getItem("login")
// var login = JSON.parse(login);
// var a = window.location.pathname;
// if (a == '/' || a == '/index.html' || a == '') {
//     if (login) {
//         window.location.href = '/dashboard.html';
//     }
// }
// else {
//     if (login === null) {
//         window.location.href = '/';
//     }
// }
// // logout button
// if (document.querySelector(".log_out_btn") != null) {

//     document.querySelector('.log_out_btn').onclick = function () {
//         localStorage.removeItem('login');
//         window.location.href = 'index.html'
//     }
// };

// // dasboard teacher and student count

// function main_dashboard() {
//     var total_teacher = db.teacher.length;
//     $('.t_count').append(total_teacher)
//     var total_student = db.student.length;
//     $('.s_count').append(total_student)

//     var student_pay_fees = db.fees.reduce((a, c, i) => {
//         var a = a + c.payment
//         return a
//     }, 0);
//     var student_total_fees = db.student.reduce((a, c, i) => {
//         var val = c.fees_details.register + c.fees_details.admission + c.fees_details.exam
//         return a + val
//     }, 0);
//     $('.student_total_fees').append("0" + " Rs")
//     $('.student_pending_fees').append('0' + " Rs")
//     // console.log(student_pay_fees);
//     var total_teacher_salary = db.teacher.reduce((a, c, i) => {
//         var a = a + c.salary
//         return a
//     }, 0);
//     $('.teacher_salary').append("0")

// }

// // create dynamic navigation
// // console.log(login.user_role);
// var html = '';
// if (login.user_role == 1) {
//     html += '<div class="menu">'
//     html += '<a class="link" href="#">';
//     html += '<img src="img/timg.png" alt="">';
//     html += '<span>Teacher</span>';
//     html += '</a>';
//     html += '<div class="sub_link">'
//     html += '<a href="add_teacher.html">'
//     html += '<span>Add</span>'
//     html += '</a>';
//     html += '<a href="teacher_list.html">'
//     html += '<span>List</span>'
//     html += '</a>';
//     html += '</div>'
//     html += '</div>'

//     html += '<div class="menu">'
//     html += '<a class="link" href="#">';
//     html += '<img src="img/simg.png" alt="">';
//     html += '<span>Student</span>';
//     html += '</a>';
//     html += '<div class="sub_link" >'
//     html += '<a href="add_student.html">'
//     html += '<span>Add</span>'
//     html += '</a>';
//     html += '<a href="student_list.html">'
//     html += '<span>List</span>'
//     html += '</a>';
//     html += '</div>'
//     html += '</div>'

//     html += '<div class="menu">'
//     html += '<a class="link" href="add_class.html">';
//     html += '<img src="img/classlist.png" alt="">';
//     html += '<span>Add Class</span>';
//     html += '</a>';
//     html += '</div>'

//     html += '<div class="menu">'
//     html += '<a class="link" href="add_subject.html">';
//     html += '<img src="img/subjectlist.png" alt="">';
//     html += '<span>Add Subject</span>';
//     html += '</a>';
//     html += '</div>'

//     html += '<div class="menu">'
//     html += '<a class="link" href="report.html">';
//     html += '<img src="img/subjectlist.png" alt="">';
//     html += '<span>Report</span>';
//     html += '</a>';
//     html += '</div>'

//     html += '<div class="menu">'
//     html += '<a class="link" href="attendance.html">';
//     html += '<img src="img/book.png" alt="">';
//     html += '<span>Attendance</span>';
//     html += '</a>';
//     html += '</div>'

//     html += '<div class="menu">'
//     html += '<a class="link" href="#">';
//     html += '<img src="img/exam.png" alt="">';
//     html += '<span>Exam</span>';
//     html += '</a>';
//     html += '<div class="sub_link" >'
//     html += '<a href="exam.html">'
//     html += '<span>Add</span>'
//     html += '</a>';
//     html += '<a href="exam_list.html">'
//     html += '<span>List</span>'
//     html += '</a>';
//     html += '<a href="assign.html">'
//     html += '<span>Assign</span>'
//     html += '</a>';
//     html += '</div>'
//     html += '</div>'


//     main_dashboard()
//     $('.admin_dashboard').css("display", "block");

// }

// if (login.user_role == 2) {
//     html += '<div class="menu">'
//     html += '<a class="link" href="#">';
//     html += '<img src="img/simg.png" alt="">';
//     html += '<span>Student</span>';
//     html += '</a>';
//     html += '<div class="sub_link" >'
//     html += '<a href="add_student.html">'
//     html += '<span>Add</span>'
//     html += '</a>';
//     html += '<a href="student_list.html">'
//     html += '<span>List</span>'
//     html += '</a>';
//     html += '</div>'
//     html += '</div>'

//     html += '<div class="menu">'
//     html += '<a class="link" href="attendance.html">';
//     html += '<img src="img/book.png" alt="">';
//     html += '<span>Attendance</span>';
//     html += '</a>';
//     html += '</div>'

//     html += '<div class="menu">'
//     html += '<a class="link" href="homework.html">';
//     html += '<img src="img/bookimg.png" alt="">';
//     html += '<span>Homework</span>';
//     html += '</a>';
//     html += '</div>'

//     html += '<div class="menu">'
//     html += '<a class="link" href="#">';
//     html += '<img src="img/exam.png" alt="">';
//     html += '<span>Exam</span>';
//     html += '</a>';
//     html += '<div class="sub_link" >'
//     html += '<a href="exam.html">'
//     html += '<span>Add</span>'
//     html += '</a>';
//     html += '<a href="exam_list.html">'
//     html += '<span>List</span>'
//     html += '</a>';
//     html += '<a href="assign.html">'
//     html += '<span>Assign</span>'
//     html += '</a>';
//     html += '</div>'
//     html += '</div>'
// }

// function student_dashboard() {
//     var student_data = get_data_by_id("student", login_user.relation_id);
//     var user_data = get_user_data("users", login_user.relation_id, "student");
//     var class_text = get_data_by_id("class", student_data.class);
//     $('.student_name').text("Name: " + user_data.sname);
//     $('.student_class').text("Class: " + class_text.class);
//     $('.student_father').text("Father Name: " + student_data.father_name);
//     $('.student_phoneno').text("Phone No.: " + student_data.phone);
//     $('.student_address').text("Address: " + student_data.address);
// }
// if (login.user_role == 3) {
//     student_dashboard()
//     html += '<div class="menu">'
//     html += '<a class="link" href="schedule.html">';
//     html += '<img src="img/timetable.png" alt="">';
//     html += '<span>Schedule</span>';
//     html += '</a>';
//     html += '</div>';

//     html += '<div class="menu">'
//     html += '<a class="link" href="student_homework.html">';
//     html += '<img src="img/bookimg.png" alt="">';
//     html += '<span>Homework</span>';
//     html += '</a>';
//     html += '</div>';

//     html += '<div class="menu">'
//     html += '<a class="link" href="fees_details.html">';
//     html += '<img src="img/fees.png" alt="">';
//     html += '<span>Fee Details</span>';
//     html += '</a>';
//     html += '</div>';

//     html += '<div class="menu">'
//     html += '<a class="link" href="student_exam.html">';
//     html += '<img src="img/exam.png" alt="">';
//     html += '<span>Exam</span>';
//     html += '</a>';
//     html += '</div>'
//     $('.student_dashboard').css("display", "block")

// }


// $('.menu_sec').append(html);
// $('.menu_sec').on('click', '.link', function (e) {
//     var $that = $(this);
//     $that.parent('.menu').find('.sub_link').toggle();
// })


// // edit data from array
// function edit_data(key, ary) {
//     db[key] = ary
//     db_str = JSON.stringify(db);
//     localStorage.setItem('db', db_str)
// }
// function data(key, edit_id, array) {
//     var edit_value = db[key].map((v, i) => {
//         if (v.id == edit_id) {
//             return array
//         }
//         else {
//             return v
//         }
//     })
//     edit_data(key, edit_value)
// }

// edit_data("salary", [])
// // delete_data_by_key('exam_result');

// function get_last_id(key) {
//     var obj = db[key];
//     if (obj.length > 0) {
//         var dec = obj.sort(function (a, b) {
//             return b.id - a.id;
//         });
//         return (dec[0].id) + 1;
//     }
//     return 1;
// }

// // delete data
// function delete_data(key, id) {
//     var data = db[key].filter((v, i) => v.id != id);
//     edit_data(key, data)
// }


// function delete_data_by_key(key) {
//     edit_data(key, [])
// }


// // class
// function get_data_by_id(key, id) {
//     return db[key].find((v, i) => v.id == id);
// }
// function get_user_data(key, id, relation_table_name) {
//     return db[key].find((v, i) => v.relation_id == id && v.relation_table == relation_table_name)
// }
// // die function
// function die() {
//     throw new Error('Testing');
// }
// set database


var db = localStorage.getItem('db');
var db = JSON.parse(db);
var login_user = JSON.parse(localStorage.getItem("login"));
if (db == null) {
    var db = {
        class: [], 
        teacher: [], 
        subject: [], 
        student: [], 
        user_role: [{ id: 1, value: 'Admin' }, { id: 2, value: 'Teacher' }, { id: 3, value: 'Student' }], 
        users: [
            {
                id: 1,
                sname: 'Admin',
                username: 'admin',
                password: '123',
                user_role: 1,
                relation_id: "",
                relation_table: ""
            }
        ], 
        fees: [], 
        salary: [], 
        attendence: [], 
        homework: [], 
        exam: [], 
        exam_result: []
    };
    var db_str = JSON.stringify(db);
    localStorage.setItem('db', db_str);
}
function db_insert(key, value) {
    db[key].push(value)
    var db_str = JSON.stringify(db);
    localStorage.setItem('db', db_str);
}

// function get_key_by_id() {

// }

// check user logged-in or not
var login = localStorage.getItem("login")
var login = JSON.parse(login);
var a = window.location.pathname;
if (a == '/' || a == '/index.html' || a == '') {
    if (login) {
        window.location.href = '/dashboard.html';
    }
}
else {
    if (login === null) {
        window.location.href = '/';
    }
}
// logout button
if (document.querySelector(".log_out_btn") != null) {

    document.querySelector('.log_out_btn').onclick = function () {
        localStorage.removeItem('login');
        window.location.href = 'index.html'
    }
};

// dasboard teacher and student count

function main_dashboard() {
    var total_teacher = db.teacher.length;
    $('.t_count').append(total_teacher);
    var total_student = db.student.length;
    $('.s_count').append(total_student);

    var student_pay_fees = db.fees.reduce((a, c, i) => {
        var a = a + c.payment
        return a
    }, 0);
    var student_total_fees = db.student.reduce((a, c, i) => {
        var val = c.fees_details.register + c.fees_details.admission + c.fees_details.exam
        return a + val
    }, 0);
    $('.student_total_fees').append("0" + " Rs")
    $('.student_pending_fees').append('0' + " Rs")
    // console.log(student_pay_fees);
    var total_teacher_salary = db.teacher.reduce((a, c, i) => {
        var a = a + c.salary
        return a
    }, 0);
    $('.teacher_salary').append("0")

}

// create dynamic navigation
// console.log(login.user_role);
var html = '';
if (login.user_role == 1) {
    html += '<div class="menu">'
    html += '<a class="link" href="#">';
    html += '<img src="img/timg.png" alt="">';
    html += '<span>Teacher</span>';
    html += '</a>';
    html += '<div class="sub_link">'
    html += '<a href="add_teacher.html">'
    html += '<span>Add</span>'
    html += '</a>';
    html += '<a href="teacher_list.html">'
    html += '<span>List</span>'
    html += '</a>';
    html += '</div>'
    html += '</div>'

    html += '<div class="menu">'
    html += '<a class="link" href="#">';
    html += '<img src="img/simg.png" alt="">';
    html += '<span>Student</span>';
    html += '</a>';
    html += '<div class="sub_link" >'
    html += '<a href="add_student.html">'
    html += '<span>Add</span>'
    html += '</a>';
    html += '<a href="student_list.html">'
    html += '<span>List</span>'
    html += '</a>';
    html += '</div>'
    html += '</div>'

    html += '<div class="menu">'
    html += '<a class="link" href="add_class.html">';
    html += '<img src="img/classlist.png" alt="">';
    html += '<span>Add Class</span>';
    html += '</a>';
    html += '</div>'

    html += '<div class="menu">'
    html += '<a class="link" href="add_subject.html">';
    html += '<img src="img/subjectlist.png" alt="">';
    html += '<span>Add Subject</span>';
    html += '</a>';
    html += '</div>'

    html += '<div class="menu">'
    html += '<a class="link" href="report.html">';
    html += '<img src="img/subjectlist.png" alt="">';
    html += '<span>Report</span>';
    html += '</a>';
    html += '</div>'

    html += '<div class="menu">'
    html += '<a class="link" href="attendance.html">';
    html += '<img src="img/book.png" alt="">';
    html += '<span>Attendance</span>';
    html += '</a>';
    html += '</div>'

    html += '<div class="menu">'
    html += '<a class="link" href="#">';
    html += '<img src="img/exam.png" alt="">';
    html += '<span>Exam</span>';
    html += '</a>';
    html += '<div class="sub_link" >'
    html += '<a href="exam.html">'
    html += '<span>Add</span>'
    html += '</a>';
    html += '<a href="exam_list.html">'
    html += '<span>List</span>'
    html += '</a>';
    html += '<a href="assign.html">'
    html += '<span>Assign</span>'
    html += '</a>';
    html += '</div>'
    html += '</div>'


    main_dashboard()
    $('.admin_dashboard').css("display", "block");

}

if (login.user_role == 2) {

    html += '<div class="menu">';
    html += '<a class="link" href="#">';
    html += '<img src="img/simg.png" alt="">';
    html += '<span>Student</span>';
    html += '</a>';
    html += '<div class="sub_link" >'
    html += '<a href="add_student.html">'
    html += '<span>Add</span>'
    html += '</a>';
    html += '<a href="student_list.html">'
    html += '<span>List</span>'
    html += '</a>';
    html += '</div>'
    html += '</div>'

    html += '<div class="menu">'
    html += '<a class="link" href="attendance.html">';
    html += '<img src="img/book.png" alt="">';
    html += '<span>Attendance</span>';
    html += '</a>';
    html += '</div>'

    html += '<div class="menu">'
    html += '<a class="link" href="homework.html">';
    html += '<img src="img/bookimg.png" alt="">';
    html += '<span>Homework</span>';
    html += '</a>';
    html += '</div>'

    html += '<div class="menu">'
    html += '<a class="link" href="#">';
    html += '<img src="img/exam.png" alt="">';
    html += '<span>Exam</span>';
    html += '</a>';
    html += '<div class="sub_link" >'
    html += '<a href="exam.html">'
    html += '<span>Add</span>'
    html += '</a>';
    html += '<a href="exam_list.html">'
    html += '<span>List</span>'
    html += '</a>';
    html += '<a href="assign.html">'
    html += '<span>Assign</span>'
    html += '</a>';
    html += '</div>'
    html += '</div>'
}

function student_dashboard() {
    var student_data = get_data_by_id("student", login_user.relation_id);
    var user_data = get_user_data("users", login_user.relation_id, "student");
    var class_text = get_data_by_id("class", student_data.class);
    $('.student_name').text("Name: " + user_data.sname);
    $('.student_class').text("Class: " + class_text.class);
    $('.student_father').text("Father Name: " + student_data.father_name);
    $('.student_phoneno').text("Phone No.: " + student_data.phone);
    $('.student_address').text("Address: " + student_data.address);
}
if (login.user_role == 3) {
    student_dashboard()
    html += '<div class="menu">'
    html += '<a class="link" href="schedule.html">';
    html += '<img src="img/timetable.png" alt="">';
    html += '<span>Schedule</span>';
    html += '</a>';
    html += '</div>';

    html += '<div class="menu">'
    html += '<a class="link" href="student_homework.html">';
    html += '<img src="img/bookimg.png" alt="">';
    html += '<span>Homework</span>';
    html += '</a>';
    html += '</div>';

    html += '<div class="menu">'
    html += '<a class="link" href="fees_details.html">';
    html += '<img src="img/fees.png" alt="">';
    html += '<span>Fee Details</span>';
    html += '</a>';
    html += '</div>';

    html += '<div class="menu">'
    html += '<a class="link" href="student_exam.html">';
    html += '<img src="img/exam.png" alt="">';
    html += '<span>Exam</span>';
    html += '</a>';
    html += '</div>'
    $('.student_dashboard').css("display", "block")

}


$('.menu_sec').append(html);
$('.menu_sec').on('click', '.link', function (e) {
    var $that = $(this);
    $that.parent('.menu').find('.sub_link').toggle();
})


// edit data from array
function edit_data(key, ary) {
    db[key] = ary
    db_str = JSON.stringify(db);
    localStorage.setItem('db', db_str)
}
function data(key, edit_id, array) {
    var edit_value = db[key].map((v, i) => {
        if (v.id == edit_id) {
            return array
        }
        else {
            return v
        }
    })
    edit_data(key, edit_value)
}

function get_last_id(key) {
    var obj = db[key];
    if (obj.length > 0) {
        var dec = obj.sort(function (a, b) {
            return b.id - a.id;
        });
        return (dec[0].id) + 1;
    }
    return 1;
}

// delete data
function delete_data(key, id) {
    var data = db[key].filter((v, i) => v.id != id);
    edit_data(key, data)
}


function delete_data_by_key(key) {
    edit_data(key, [])
}

// delete_data_by_key('exam_result');

// class
function get_data_by_id(key, id) {
    return db[key].find((v, i) => v.id == id);
}
function get_user_data(key, id, relation_table_name) {
    return db[key].find((v, i) => v.relation_id == id && v.relation_table == relation_table_name)
}
// die function
function die() {
    throw new Error('Testing');
}