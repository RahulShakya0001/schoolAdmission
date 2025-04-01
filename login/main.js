const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? []
const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
var login = localStorage.getItem("Login");
var login = JSON.parse(login);
var a = window.location.pathname;

if (a == '/' || a == '/index.html' || a == '') {
    if (login) {
        window.location.href = '../dashboard/02_dashboard.html';
    }
}
else {
    if (login === null) {
        window.location.href = '/';
    }
}

function empty_db_table(tableName) {
    if (db.hasOwnProperty(tableName)) {
        db[tableName] = [];
        alert(`Table ${tableName} has been emptied.`)
    } else {
        console.log(`Table ${tableName} does not exist in the database.`);
    }
    saveToLocalStorage("Database", db)
}
    
function get_data_by_id(key, id) {
    return db[key].find((v, i) => v.id == id);
}
function get_user_data(key, id, relation_table_name) {
    return db[key].find((v, i) => v.relation_id == id && v.relation_table == relation_table_name)
}
// logout button
// Admin
let htmless = "";
if (login.user_role == 1) {
    htmless += `<div class="dashboard text-box">
                    <a href="/dashboard/02_dashboard.html">Dashboard</a>
                </div>
                <div class="teacher text-box">
                    <a href="/Teacher/03_addTeacher.html">Teacher</a>
                </div>
                <div class="student text-box">
                    <a href="/Student/04_addStudent.html">Student</a>
                </div>
                <div class="add-class text-box">
                    <a href="/Class/05_addClass.html">Add Class</a>
                </div>
                <div class="add-subject text-box">
                    <a href="/Subject/06_addSubject.html">Add Subject</a>
                </div>
                <div class="attendance-checker text-box">
                    <a href="/Teacher/attendance.html">Attendance</a>
                </div>
                <div class="exam-main text-box">
                    <a href="/Teacher/exam.html">Exam</a>
                </div>
                <div class="exam-main-assign text-box">
                    <a href="/Teacher/exam_assign.html">Assign Exam</a>
                </div>
                
                <div class="text-box">
                    <a class="log-out" href="/index.html">Log-out</a>
                </div>`;

    $(".left-box-inner").html(htmless);
}
// Teacher
if (login.user_role == 2) {
    htmless += `<div class="dashboard text-box">
                    <a href="/dashboard/02_dashboard.html">Dashboard</a>
                </div>
                <div class="student text-box">
                    <a href="/Student/04_addStudent.html">Student</a>
                </div>                
                <div class="attendance text-box">
                    <a href="/Teacher/attendance.html">Attendance</a>
                </div>                
                <div class="homework text-box">
                    <a href="/Teacher/homework.html">Homework</a>
                </div>                
                <div class="text-box">
                    <a class="log-out" href="/index.html">Log-out</a>
                </div>`;
    $(".left-box-inner").html(htmless);
}
function student_dashboard() {
    let student_data = db.student.find((v) => v.id == login.relation_id);
    if (!student_data) {
        console.error("Student data not found!");
        return;
    }

    let user_data = db.users.find((v) => v.relation_id == login.relation_id && v.realation_table == "student");
    if (!user_data) {
        console.error("User data not found!");
        return;
    }

    let class_text = db.class.find((v) => v.id == student_data.class);
    if (!class_text) {
        console.error("Class data not found!");
        return;
    }

    $(".student_name").text("Name : " + user_data.name);
    $(".student_class").text("Class : " + class_text.class);
    $(".student_father").text("Father Name : " + student_data.fatherName);
    $(".student_phone_number").text("Phone No : " + student_data.phoneNumber);
    $(".student_address").text("Address : " + student_data.address);
}

// Student
if (login.user_role == 3) {
    student_dashboard();

    let htmless = `
        <div class="dashboard text-box">
            <a href="#">Dashboard</a>
        </div>
        <div class="schedule text-box">
            <a href="/Student/class_schedule.html">Schedule</a>
        </div> 
        <div class="fees-details text-box">
            <a href="/Student/fee.html">Fees Details</a>
        </div>
          <div class="student_homework text-box">
            <a href="/Student/homework.html">Homework</a>
        </div>
        <div class="exam text-box">
            <a href="/Student/exam.html">Exam</a>
        </div>
      
        <div class="text-box">
            <a class="log-out" href="/index.html">Log-out</a>
        </div>`;

    $(".front-preview").css("display", "flex");
    $(".center-line").css("display", "none");
    $(".left-box-inner").html(htmless);
}

if (document.querySelector(".log-out") != null) {

    document.querySelector('.log-out').onclick = function () {
        localStorage.removeItem('Login');
    }
}
