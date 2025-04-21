// // var login = localStorage.getItem("Login");
// // login = JSON.parse(login);
// if (login.user_role == 1) {
//     window.onload = function () {
//         alert("📌 Attendance Info:\n\nOnly teachers or the admin can mark student attendance.\n\n👉 First, make sure a teacher is added by the admin.\n👉 Then assign students to the teacher's class/subject.\n\n✅ Once done, teachers can log in and mark attendance for their assigned students.");
//     };
// }
// if (login.user_role == 2) {
//     $(".attendance_sec").css("display", "flex");
//     $(".attendance_list").css("display", "none");
//     let teacher_data = db.teacher;
//     let teacher_obj = teacher_data.find((v) => Number(v.id) == Number(login.relation_id));
//     let users = db.users.find((v) => Number(v.user_role) == Number(login.user_role) && Number(v.relation_id) == Number(login.relation_id));
//     console.log(users);
//     let selectedClassIds = teacher_obj.select_mul_class; 
//     let teacherId = teacher_obj.id;
//     let inchargeClasses = db.class.find((cls) => {
//         return cls.incharge == Number(teacherId);
//     });
    
//     console.log(inchargeClasses);
//     if(inchargeClasses){
//     $(".incharge-class").html('<span>' + inchargeClasses.class + '</span><span style="margin-left: 1rem;">Name: ' + teacher_obj.name + '</span>');
//     }else{
//         $(".incharge-class").html('<span style="margin-left: 1rem;">Name: Not incharge of any selected class </span>');
//     }
//     // let classes = db.class.find((v) => v.id == teacher_obj.);
//     $(".filter-btn button").click((e) => {
//         e.preventDefault();
//         let attendance_date = $(".attendance-date input").val();
//         let old_entry = db.attendence.filter((v) => v.date == attendance_date);

//         let old_student_id_array = old_entry.reduce((accum, curr) => {
//             if (curr.status == '1') {
//                 accum.push(curr.student * 1);
//             }
//             return accum;
//         }, []);
//         if (attendance_date) {
//             let attendance_list = db.student.filter((v) => 
//                 selectedClassIds.includes(Number(v.class))
//               );            
//               let html = "";

//             attendance_list.forEach((v) => {
//                 let status = old_student_id_array.includes(v.id) ? 1 : 0;
//                 html += "<tr>";
//                 html += "    <td>" + v.id + "</td>";
//                 html += "    <td>" + v.name + "</td>";
//                 html += "    <td>";
//                 html += "        <span style='margin-right: 1rem;'>";
//                 html += "            <input style='margin-right: .4rem;' type='radio' name='" + v.id + "' value='0' " + (status == 0 ? 'checked="true"' : '') + "> Absent";
//                 html += "        </span>";
//                 html += "        <span>";
//                 html += "            <input style='margin-right: .4rem;' type='radio' name='" + v.id + "' value='1' " + (status == 1 ? 'checked="true"' : '') + "> Present";
//                 html += "        </span>";
//                 html += "    </td>";
//                 html += "</tr>";
//             });

//             $('.class-student-list-table').html(html);
//         } else {
//             alert("Enter Date first.");
//         }
//     });

//     $('[name="subject_forms"]').submit(function (e) {
//         e.preventDefault();
//         let current_date = $(".attendance-date input").val();
//         let formData = $(this).serializeArray();
//         let old_entry = db.attendence.filter((v) => v.date == current_date);

//         formData.forEach((item) => {
//             let studentId = item.name;
//             let status = item.value;
//             let obj = {
//                 student: studentId,
//                 teacher: teacher_obj.name,
//                 status: status,
//                 date: current_date
//             };

//             if (old_entry.length > 0) {
//                 let alreadyExists = false;
//                 db.attendence = db.attendence.map((v) => {
//                     if (v.date == current_date && v.student == studentId) {
//                         alreadyExists = true;
//                         return obj;
//                     } else {
//                         return v;
//                     }
//                 });

//                 if (alreadyExists) {
//                     alert("Data Entered Already.");
//                 } else {
//                     db.attendence.push(obj);
//                 }
//             } else {
//                 db.attendence.push(obj);
//             }

//             saveToLocalStorage("Database", db);
//             window.location.reload();
//         });
//     });

// } else {
//     $(".attendance_sec").css("display", "none");
//     $(".attendance_list").css("display", "flex");
//     let html = ''
//     db.class.forEach((v) => {
//         html += '<option value="' + v.id + '">' + v.class + '</option>'
//     })
//     $(".js-example-basic-multiple").append(html);

//     $(".filter-btn-2nd").click((v) => {

//         var select_class = $('[name="class_name"]').val();
//         let attendance_date = $(".attendance-date-for-list").val()
//         if (select_class && attendance_date) {
//             console.log(select_class);
//             console.log(attendance_date);
//             let student_list = db.student.reduce((a, vv, i) => {
//                 if (select_class == vv.class) {
//                     a.push(vv.id)
//                 }
//                 return a;
//             }, [])
//             var old_entry = db.attendence.filter((v1) => v1.date == attendance_date);
//             console.log(old_entry);
//             if (old_entry == "") {
//                 alert("Data not found.");
//             }

//             let old_student_id_arrays = old_entry.reduce((o, c) => {
//                 if (c.status == 1) {
//                     o.push(c.student);
//                 }
//                 return o;
//             }, [])

//             let student_data = db.attendence.filter((v2) => student_list.includes(v2.student) && v2.date == attendance_date);

//             console.log(student_data);
//             html = "";
//             student_data.forEach((s) => {
//                 var status = 0;
//                 if (old_student_id_arrays.includes(vv.student)) {
//                     status = 1;
//                 }
//                 let studentName = db.student.find((name) => name.id == old_entry.id);
//                 html += "<tr>";
//                 html += "    <td>" + v.id + "</td>";
//                 html += "    <td>" + studentName.name + "</td>";
//                 html += "    <td>";
//                 html += "        <span style='margin-right: 1rem;'>";
//                 html += "            <input style='margin-right: .4rem;' type='radio' name='" + v.id + "' value='0' " + (status == 0 ? 'checked="true"' : '') + "> Absent";
//                 html += "        </span>";
//                 html += "        <span>";
//                 html += "            <input style='margin-right: .4rem;' type='radio' name='" + v.id + "' value='1' " + (status == 1 ? 'checked="true"' : '') + "> Present";
//                 html += "        </span>";
//                 html += "    </td>";
//                 html += "</tr>";
//             })
//             $('.class-student-list-tables').html(html);
//         } else {
//             !select_class && !attendance_date
//                 ? alert("Please select a class and enter the attendance date.")
//                 : !select_class
//                     ? alert("Please select a class.")
//                     : !attendance_date
//                         ? alert("Please enter the attendance date.")
//                         : null;
//         }

//     })



// }

var login = JSON.parse(localStorage.getItem("Login"));

if (login.user_role == 1) {
    window.onload = function () {
        alert("📌 Attendance Info:\n\nOnly teachers or the admin can mark student attendance.\n\n👉 First, make sure a teacher is added by the admin.\n👉 Then assign students to the teacher's class/subject.\n\n✅ Once done, teachers can log in and mark attendance for their assigned students.");
    };
}

if (login.user_role == 2) {
    $(".attendance_sec").css("display", "flex");
    $(".attendance_list").css("display", "none");

    let teacher_obj = db.teacher.find((v) => Number(v.id) == Number(login.relation_id));
    let selectedClassIds = teacher_obj.select_mul_class; 
    console.log(teacher_obj);
    console.log(selectedClassIds);
    let teacherId = teacher_obj.id;

    let inchargeClass = db.class.find((cls) => cls.incharge == Number(teacherId));
    console.log(inchargeClass);
    if (inchargeClass) {
        $(".incharge-class").html(`<span>${inchargeClass.class}</span><span style="margin-left: 1rem;">Name: ${teacher_obj.name}</span>`);
    } else {
        $(".incharge-class").html(`<span style="margin-left: 1rem;">Name: Not incharge of any selected class </span>`);
    }
    let classes = db.class.subject

    $(".filter-btn button").click((e) => {
        e.preventDefault();
        let attendance_date = $(".attendance-date input").val();
        let old_entry = db.attendence.filter((v) => v.date == attendance_date);
        let old_student_id_array = old_entry.reduce((accum, curr) => {
            if (curr.status == '1') accum.push(Number(curr.student));
            return accum;
        }, []);

        if (attendance_date) {
            let classIds = selectedClassIds.map(Number);
            let attendance_list = db.student.filter((v) => classIds.includes(Number(v.class)));  

            console.log(attendance_list);
            let html = "";

            attendance_list.forEach((v) => {
                let status = old_student_id_array.includes(v.id) ? 1 : 0;
                html += `<tr>
                    <td>${v.id}</td>
                    <td>${v.name}</td>
                    <td>
                        <span style='margin-right: 1rem;'>
                            <input style='margin-right: .4rem;' type='radio' name='${v.id}' value='0' ${status == 0 ? 'checked' : ''}> Absent
                        </span>
                        <span>
                            <input style='margin-right: .4rem;' type='radio' name='${v.id}' value='1' ${status == 1 ? 'checked' : ''}> Present
                        </span>
                    </td>
                </tr>`;
            });

            $('.class-student-list-table').html(html);
        } else {
            alert("Enter Date first.");
        }
    });

    $('[name="subject_forms"]').submit(function (e) {
        e.preventDefault();
        let current_date = $(".attendance-date input").val();
        let formData = $(this).serializeArray();
        let old_entry = db.attendence.filter((v) => v.date == current_date);

        formData.forEach((item) => {
            let studentId = item.name;
            let status = item.value;
            let obj = {
                student: studentId,
                teacher: teacher_obj.name,
                status: status,
                date: current_date
            };

            let alreadyExists = false;
            db.attendence = db.attendence.map((v) => {
                if (v.date == current_date && v.student == studentId) {
                    alreadyExists = true;
                    return obj;
                }
                return v;
            });

            if (!alreadyExists) {
                db.attendence.push(obj);
            } else {
                alert("Data Updated .");
            }
        });

        saveToLocalStorage("Database", db);
        window.location.reload();
    });

} else {
    $(".attendance_sec").css("display", "none");
    $(".attendance_list").css("display", "flex");

    let html = '';
    db.class.forEach((v) => {
        html += `<option value="${v.id}">${v.class}</option>`;
    });
    $(".js-example-basic-multiple").append(html);

    $(".filter-btn-2nd").click(() => {
        let select_class = $('[name="class_name"]').val();
        let attendance_date = $(".attendance-date-for-list").val();

        if (select_class && attendance_date) {
            let student_list = db.student.filter((v) => select_class == v.class).map(v => v.id);
            let old_entry = db.attendence.filter((v) => v.date == attendance_date);
            if (old_entry.length == 0) {
                alert("Data not found.");
                return;
            }

            let old_student_id_arrays = old_entry.filter((c) => c.status == 1).map(c => c.student);
            let student_data = db.attendence.filter((v2) => student_list.includes(v2.student) && v2.date == attendance_date);

            let html = "";
            student_data.forEach((s) => {
                let status = old_student_id_arrays.includes(s.student) ? 1 : 0;
                let studentName = db.student.find((std) => std.id == s.student);
                html += `<tr>
                    <td>${s.student}</td>
                    <td>${studentName.name}</td>
                    <td>
                        <span style='margin-right: 1rem;'>
                            <input style='margin-right: .4rem;' type='radio' name='${s.student}' value='0' ${status == 0 ? 'checked' : ''}> Absent
                        </span>
                        <span>
                            <input style='margin-right: .4rem;' type='radio' name='${s.student}' value='1' ${status == 1 ? 'checked' : ''}> Present
                        </span>
                    </td>
                </tr>`;
            });

            $('.class-student-list-tables').html(html);
        } else {
            if (!select_class && !attendance_date) {
                alert("Please select a class and enter the attendance date.");
            } else if (!select_class) {
                alert("Please select a class.");
            } else if (!attendance_date) {
                alert("Please enter the attendance date.");
            }
        }
    });
}
