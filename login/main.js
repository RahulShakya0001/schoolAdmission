// Reusable localStorage functions

const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];
const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const removeFromLocalStorage = (key) => localStorage.removeItem(key);

// Get logged-in user data
let login = localStorage.getItem("Login");
login = JSON.parse(login);

// Redirect based on login status
const path = window.location.pathname;
if (["/", "/index.html", ""].includes(path) && login) {
    window.location.href = '../dashboard/02_dashboard.html';
} else if (path !== "/" && !login) {
    window.location.href = '/';
}

const emptyDbTable = (tableName) => {
    if (db.hasOwnProperty(tableName)) {
        db[tableName] = [];
        alert(`Table ${tableName} has been emptied.`);
        saveToLocalStorage("Database", db);
    } else {
        console.error(`Table ${tableName} does not exist in the database.`);
    }
};

const getDataById = (key, id) => db[key]?.find((v) => v.id == id);

const getUserData = (key, id, relationTableName) => 
    db[key]?.find((v) => v.relation_id == id && v.relation_table == relationTableName);

const setSidebar = (userRole) => {
    let htmless = `<div class="dashboard text-box">
                      <a href="/dashboard/02_dashboard.html">Dashboard</a>
                  </div>`;

    if (userRole === 1) { // Admin
        htmless += `
            <div class="teacher text-box"><a href="/Teacher/03_addTeacher.html">Teacher</a></div>
            <div class="student text-box"><a href="/Student/04_addStudent.html">Student</a></div>
            <div class="add-class text-box"><a href="/Class/05_addClass.html">Add Class</a></div>
            <div class="add-subject text-box"><a href="/Subject/06_addSubject.html">Add Subject</a></div>
            <div class="attendance-checker text-box"><a href="/Teacher/attendance.html">Attendance</a></div>
        `;
    } else if (userRole === 2) { // Teacher
        htmless += `
            <div class="student text-box"><a href="/Student/04_addStudent.html">Student</a></div>
            <div class="attendance text-box"><a href="/Teacher/attendance.html">Attendance</a></div>
            <div class="homework text-box"><a href="/Teacher/homework.html">Homework</a></div>
        `;
    } else if (userRole === 3) { // Student
        htmless += `
            <div class="schedule text-box"><a href="/Student/class_schedule.html">Schedule</a></div>
            <div class="fees-details text-box"><a href="/Student/fee.html">Fees Details</a></div>
            <div class="student_homework text-box"><a href="/Student/homework.html">Homework</a></div>
            
        `;
    }

    htmless += `<div class="text-box"><a class="log-out" href="/index.html">Log-out</a></div>`;
    $(".left-box-inner").html(htmless);
};
const login_dash = () => {
    let login_per = localStorage.getItem("Login");
    if (login_per) {
        login_per = JSON.parse(login_per);
        if(login.user_role == 1){
            $('.name_login').text(login_per.sname);
        }else if(login.user_role == 2){
            $('.name_login').text(login_per.sname);   
        }else if(login.user_role == 3){
            $('.name_login').text(login_per.name);
        }else{
            alert("Wrong Permissions")
        }
        
        $('.username_login').text(login_per.username);
    } else {
        console.warn("No login data found in localStorage.");
    }
};
// Student dashboard setup
const setupStudentDashboard = () => {

    let studentData = getDataById("student", login?.relation_id);
    if (!studentData) return console.error("Student data not found!");

    let userData = getUserData("users", login?.relation_id, "student");
    if (!userData) return console.error("User data not found!");

    $(".student_name").text("Name : " + userData.name);
    $(".student_father").text("Father Name : " + studentData.fatherName);
    $(".student_phone_number").text("Phone No : " + studentData.phoneNumber);
    $(".student_address").text("Address : " + studentData.address);
};

if (login) {
    setSidebar(login.user_role);
    login_dash();
    if (login.user_role === 3) {
        setupStudentDashboard();
        $(".front-preview").css("display", "flex");
        $(".center-line").css("display", "none");
    }
}

$(".log-out").click(() => removeFromLocalStorage("Login"));
