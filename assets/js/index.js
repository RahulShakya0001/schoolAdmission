var db = localStorage.getItem('Database');
var db = JSON.parse(db);
if (db == null) {
  var db = {
    attendence: [],
    class: [],
    exam: [],
    exam_result: [],
    homework: [],
    teacher: [],
    subject: [],
    student: [],
    fees: [],
    salary: [],

    user_role: [
      {
        id: 1,
        value: 'Admin'
      },
      {
        id: 2,
        value: 'Teacher'
      }, {
        id: 3,
        value: 'Student'
      }
    ],

    users: [
      {
        id: 1,
        sname: 'Admin',
        username: 'admin',
        password: '123',
        user_role: 1,
        relation_id: "",
        relation_table: ""
      },

    ],
  };
  var db_str = JSON.stringify(db);
  localStorage.setItem('Database', db_str);
}
$(".click-button").click(function (e) {
  // e.preventDefault()
  const username = $(".input-box-username input").val();
  const password = $(".input-box-password input").val();
  const data = db.users.find((v) => v.username == username && v.password == password);
  if (data) {
    console.log(data);
    delete data.password;
    var db_str = JSON.stringify(data);
    localStorage.setItem('Login', db_str);
    location.href = "../dashboard/02_dashboard.html";
  } else {
    alert("Wrong Data");
  }
});

