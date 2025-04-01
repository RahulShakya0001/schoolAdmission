function timepicker() {
    $('input.timepicker').timepicker({});
};


// const getFromLocalStorage = function (key) {
//     try {
//         return JSON.parse(localStorage.getItem(key)) || [];
//     } catch (error) {
//         return [];
//     }
// };

var htmls = "";
db.class.forEach((v, i) => {
    htmls += `
<tr>
    <td>${v.id}</td>
    <td>${v.class}</td>    
    <td>
    <p>Registration : ${v.registration_fees}</p>
    <p>Admission : ${v.admission_fees}</p>
    <p>Exam fees: ${v.exam_fees}</p>
    <p>Total Fees: ${v.registration_fees + v.admission_fees + v.exam_fees}</p>
    </td>
    <td>
    <button class="delete_button" classId="${v.id}">Delete</button>
    <button type="button" class="btn btn-primary btn-sets" classIdEdit="${v.id}" data-toggle="modal" data-target="#exampleModalCenter">Edit</button>
    <button type="button" class="btn btn-primary sub-details" subjectdetailid="${v.id}">Subject details</button>
    </td>
</tr>
`;
});
$("tbody").html(htmls);

var a = db.class;
var sortVal = a.sort((a, b) => b.id - a.id)[0];
var oj = sortVal != null ? sortVal.id : 0
$(".addClassBtn").click((e) => {
    const className = $(".className").val();
    const registration_fees = $(".registration_fees").val();
    const admission_fees = $(".admission_fees").val();
    const exam_fees = $(".exam_fees").val();
    if (className && registration_fees && admission_fees && exam_fees) {
        var alreadyHas = db.class.find((v) => v.class.toLowerCase() == className.toLowerCase()); // Fixed line
        if (!alreadyHas) {
            let obj = {
                id: oj + 1,
                class: className,
                registration_fees: Number(registration_fees),
                admission_fees: Number(admission_fees),
                exam_fees: Number(exam_fees),
                subject: []
            }
            db.class.push(obj);
            saveToLocalStorage("Database", db);
            location.reload();
        } else {
            alert("Wrong Entry.")
        }
    } else {
        alert("Please fill in all the entries.");
    }
});

$(".delete_button").click(function () {
    let classId = $(this).attr("classId");
    var id_cls = db.class.findIndex((v) => v.id == classId);
    if (id_cls !== -1) {
        db.class.splice(id_cls, 1);
        saveToLocalStorage("Database", db);
        window.location.reload();
    }
});

// Edit button 

$(".btn-sets").click(function () {
    let classId = $(this).attr("classIdEdit");
    var id_de = db.class.find((v) => v.id == classId);
    $(".edit-class-btn").val(id_de.class);
    $(".edit-registration-fees").val(id_de.registration_fees);
    $(".edit-admission-fees").val(id_de.admission_fees);
    $(".edit-exam-fees").val(id_de.exam_fees);
    $("#editSubjectBtn").click(() => {
        var id_del = db.class.findIndex((v) => v.id == classId);
        if (id_del !== -1) {
            let classes = $(".form-control1").val();
            var registration_fees = $(".form-control2").val();
            var admission_fees = $(".form-control3").val();
            var exam_fees = $(".form-control4").val();
            db.class[id_del].class = classes;
            db.class[id_del].registration_fees = Number(registration_fees)
            db.class[id_del].admission_fees = Number(admission_fees);
            db.class[id_del].exam_fees = Number(exam_fees);
            saveToLocalStorage("Database", db);
            window.location.reload();
        }
    })
});

// Add Details subject

let data = db.subject;
let option = "";
data.forEach((v, i) => {
    option += `
    <option value="${v.id}">${v.subject}</option>
    `;
});

$(".add-subject-list-1 select").html(option);

// Add Details teacher name

let teacher = db.teacher;
let teacher_options = "";
teacher.forEach((v, i) => {
    teacher_options += `
    <option value="${v.id}" selected>${v.name}</option>
    `;
});

$(".add-subject-list-2 select").html(teacher_options);
$(".sub-details").click(function (e) {
    e.preventDefault();
    $(".box3").css("display", "none");
    $(".second-add-subject-form").css("display", "block");
    let classId = $(this).attr("subjectdetailid");
    $(".id-subject-form").val(classId);
    var class_id = $('.id-subject-form').val();
    let html = "";
    var class_data = db.class.find((a, i) => a.id == class_id * 1);
    class_data.subject.forEach((v) => {
        html += data_show(v);
    });
    html += data_show();
    $(".add-subject-main").html(html);
    timepicker();
});

function data_show(edit = {}) {
    let add_new_row = '';
    // console.log(edit);
    add_new_row += '<div class="add-subject-main-copy">';
    add_new_row += '    <div class="add-subject-list-2-copy add-subject-list-1">';
    add_new_row += '        <h5>Select Subject</h5>';
    add_new_row += '        <select name="subject-select">';
    add_new_row += '           <option selected disabled>select</option>';
    db.subject.forEach(subject => {
        add_new_row += '<option value="' + subject.id + '" ' + (edit.subject_class == subject.id ? 'selected' : '') + '>' + subject.subject + '</option>';
    });
    add_new_row += '        </select>';
    add_new_row += '    </div>';
    add_new_row += '    <div class="add-subject-list-2-copy add-subject-list-2">';
    add_new_row += '        <h5>Select Teacher</h5>';
    add_new_row += '        <select name="teacher-select">';
    add_new_row += '        <option selected disabled>select</option>';
    db.teacher.forEach(teacher => {
        add_new_row += '<option value="' + teacher.id + '" ' + (edit.teacher == teacher.id ? 'selected' : '') + '>' + teacher.name + '</option>';
    });
    add_new_row += '        </select>';
    add_new_row += '    </div>';
    add_new_row += '    <div class="add-subject-list-2-copy add-subject-list-3">';
    add_new_row += '        <h5>Class Start Time</h5>';
    add_new_row += '       <input name="start-time" autocomplete="off" type="text" class="timepicker" value="' + (edit.start || "") + '">';  // Corrected class start time
    add_new_row += '    </div>';
    add_new_row += '    <div class="add-subject-list-2-copy add-subject-list-4">';
    add_new_row += '        <h5>Class End Time</h5>';
    add_new_row += '       <input name="end-time" autocomplete="off" type="text" class="timepicker" value="' + (edit.end || "") + '">'; // Class end time
    add_new_row += '    </div>';
    add_new_row += '    <div class="add-subject-list-2-copy add-subject-list-4">';
    add_new_row += '        <h5>Action Button</h5>';
    add_new_row += '        <button class="delete-button-of-add-subject">Delete</button>';
    add_new_row += '    </div>';
    add_new_row += '</div>';
    return add_new_row;
}


timepicker()
$(".add-new-row-in-subject-detail").click(function (e) {
    e.preventDefault();
    $(".add-subject-main").append(data_show());
    timepicker()
})

// Delete button from the row

document.addEventListener("click", function (e) {
    // let deleteRowId = $(this).attr("deleteRowId");
    // var id_sub = db.class.findIndex((v) => v.id == subjectId);
    if (e.target.classList.contains("delete-button-of-add-subject")) {
        e.preventDefault()
        let parentRow = e.target.closest(".add-subject-main-copy");
        if (parentRow) {
            parentRow.remove()
        }
    }
})


function edit_data(key, ary) {
    db[key] = ary
    db_str = JSON.stringify(db);
    localStorage.setItem('Database', db_str)
}

function data_update(key, edit_id, array) {
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

// edit_data("class", [])

$('[name="subject_form"]').submit(function (e) {
    e.preventDefault();
    var class_id = $('.id-subject-form').val();
    var id_dex = db.class.find((a) => a.id == class_id);
    console.log(id_dex);

    var ojs = 1;
    var a = $(this).serializeArray();
    var ary = [];
    for (let i = 0; i < a.length; i += 4) {
        if (a[i].value != '' && a[i + 1].value != '' && a[i + 2].value != '' && a[i + 3].value != '') {
            ary.push({
                id: ojs,
                subject_class: a[i].value,
                teacher: a[i + 1].value,
                start: a[i + 2].value,
                end: a[i + 3].value,
            });
            ojs++;
        }
    }
    let new_obj = {
        id: id_dex.id,
        class: id_dex.class,
        registration_fees: id_dex.registration_fees,
        admission_fees: id_dex.admission_fees,
        exam_fees: id_dex.exam_fees,
        subject: ary
    };
    data_update('class', class_id * 1, new_obj);
    window.location.reload();
});

// Incharge Section of Add Class


$(".incharge-section").css("display", "none")

$(".class-incharge-of-add-subject").click((e) => {
    e.preventDefault()
    $(".hide-data-for-incharge").css("display", "none")
    $(".incharge-section").css("display", "block");
    var class_id = $('.id-subject-form').val();
    let html = ""
    let teacher_data = db.class.find((v) => v.id == class_id);
    teacher_data.subject.forEach((v) => {
        html += '<div class="incharge-value">'
        let id_to_name = db.teacher.find((vv) => vv.id == v.teacher * 1);
        html += '<label for="">' + id_to_name.name + '</label>'
        if (v.teacher == teacher_data.incharge) {
            html += '<input type="radio" name="incharge" value = ' + v.teacher + ' checked>'
        } else {
            html += '<input type="radio" name="incharge" value = ' + v.teacher + '>'
        }
        html += '</div>'
    })

    console.log(html);
    $(".incharge-row-section").html(html)
    // console.log(teacher_data.id);
    // console.log(teacher_data.class);
    // console.log(teacher_data.registration_fees);
    // console.log(teacher_data.admission_fees);
    // console.log(teacher_data.exam_fees);
    // console.log(teacher_data.subject);

    $(".incharge-submit").click((v) => {
        v.preventDefault()
        let incharge = $("[name='incharge']:checked").val()
        teacher_data.incharge = incharge * 1;
        data_update("class", teacher_data.id, teacher_data);
        window.location.reload()
    });
});
