const getDatabase = () => {
  let db = localStorage.getItem("Database");
  return db ? JSON.parse(db) : null;
}

const setDatabase = (db) => {
  localStorage.setItem("Database", JSON.stringify(db));
};

const getDefaultDatabase = () => ({
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
  ]
});

db = getDatabase();
if (!db) {
  db = getDefaultDatabase();
  setDatabase(db);
}


$(".click-button").click(function (e) {
  e.preventDefault()
  const username = $(".input-box-username input").val().trim();
  const password = $(".input-box-password input").val().trim();
  const user = db?.users?.find((v) => v.username == username && v.password == password);
  if (user) {
    console.log("Login Successful:", user);
    const { password, ...safeUser } = user;
    var db_str = JSON.stringify(user);
    localStorage.setItem("Login", JSON.stringify(safeUser));
    setTimeout(() => {
      location.href = "../dashboard/02_dashboard.html";
    }, 1000)
  } else {
    alert("Invalid username or password.");
  }
});


let isCollapsed = false;

document.querySelector(".box1-logo").addEventListener("click", function () {
    let sidebar = document.querySelector(".box1");
    let logoImg = document.querySelector(".box1-logo img");
    isCollapsed = !isCollapsed;

    if (isCollapsed) {
        sidebar.style.width = "80px";
        document.querySelector('.box2').style.width = "80px";
        document.querySelectorAll(".text-box a").forEach(el => el.style.display = "none");
        sidebar.style.padding = "1rem";
        logoImg.style.width = "50px";
      } else {
        document.querySelector('.box2').style.width = "313px";
        sidebar.style.width = "260px";
        document.querySelectorAll(".text-box a").forEach(el => el.style.display = "flex");
        logoImg.style.width = "80px";
        // logoImg.style.padding = "8px";
    }
});


