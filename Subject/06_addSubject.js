var db = getFromLocalStorage("Database") || { subject: [] };
var a = db.subject;
var sortVal = a.sort((a, b) => b.id - a.id)[0];
var oj = sortVal != null ? sortVal.id : 0;
let htmls = '';
var sortedSubjects = db.subject.sort((a, b) => a.id - b.id);
// console.log(sortedSubjects);
sortedSubjects.forEach((v, i) => {
    let v_subject = v.subject.charAt(0).toUpperCase() + v.subject.slice(1);
    htmls += `
        <tr>
        <td>${v.id}</td>
        <td >${v_subject}</td>    
        <td>
        <button class="delete_button" subjectId="${v.id}">Delete</button>
        <button type="button" class="btn btn-primary edit_btn" subjectId="${v.id}" data-toggle="modal" data-target="#exampleModalCenter">Edit</button>
        </td>
        </tr>
        `;
});
$("tbody").html(htmls);

$(".addSubjectBtn").click(() => {
    let subjectName = $(".subjectName").val().toLowerCase();
    if (subjectName) {
        var alreadyHas = db.subject.find((v) => v.subject.toLowerCase() == subjectName)
        if (!alreadyHas) {
            var obj = {
                id: oj + 1,
                subject: subjectName
            }
            db.subject.push(obj);
            saveToLocalStorage("Database", db);
            window.location.reload();
        } else {
            alert("Wrong Entry")
        }
    } else {
        alert("Please Enter Subject Name.")
    }
});

$(".edit_btn").click(function () {
    let subjectId = $(this).attr("subjectId"); 
    var edit_data = db.subject.find((v) => v.id == subjectId); 

    if (!edit_data) {
        alert("Subject not found!");
        return;
    }

    let newSubjectName = prompt("Enter new subject name:", edit_data.subject); 

    if (newSubjectName && newSubjectName.trim() !== "") {
        var id_del = db.subject.findIndex((v) => v.id == subjectId); 

        if (id_del !== -1) {
            db.subject[id_del].subject = newSubjectName.trim(); 
            saveToLocalStorage("Database", db); 
            alert("Subject Updated Successfully!");
            window.location.reload();
        }
    } else {
        alert("Invalid subject name!");
    }
});



$(".delete_button").click(function () {
    let subjectId = $(this).attr("subjectId");
    var id_sub = db.subject.findIndex((v) => v.id == subjectId);

    if (id_sub !== -1) {
        db.subject.splice(id_sub, 1);
        saveToLocalStorage("Database", db);
        window.location.reload();
    }
});
