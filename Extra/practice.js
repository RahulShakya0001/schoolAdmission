
// // const addSubjectBtn = document.querySelector(".addSubjectBtn");
// // const addSubjectList = document.querySelector(".add-subject-list");
// // var oj = db.subject != null ? db.subject.length : 0
// // var html = ""; 
// // db.subject.forEach((v) => {
// //     html += "<tr>"
// //     html += '<td>'+ v.subject +'</td>';
// //     html += '<td>'+ v.id +'</td>';
// //     html += '<td>';
// //     html += '<button class="delete_button" subjectId="'+ v.id +'">Delete Subject</button>'
// //     html += '</td>';
// //     html += "</tr>";
// // })       
// // document.querySelector(".add_subject_list tbody").innerHTML = html

// // addSubjectBtn.addEventListener("click", function(){
// //     const subjectName = document.querySelector(".subjectName").value;
// //     const obj = {
// //         id: oj + 1,
// //         subject : subjectName
// //     }
// //     db.subject.push(obj)
// //     var db_str = JSON.stringify(db);
// //     localStorage.setItem('Database', db_str);
// //     window.location.reload()
// // });
// // const deleteSubjectBtn = document.querySelector(".delete_button")
// // deleteSubjectBtn.addEventListener("click", function(){
// //     // console.log($(this).attr("subjectId"))
// //     let del_sub = this.getAttribute("subjectId")
// //     db.subject.splice(del_sub, 1);
// //     var db_str = JSON.stringify(db);
// //     localStorage.setItem("Database", )
// // })
// // addSubjectBtn.addEventListener('click', function () {
// //     const subNam = subjectName.value.trim();
// //     if (subNam && usId) {
// //         addSubjectList.innerHTML = "<tr> </tr>";
        
// //         cell1.innerHTML = subNam;
// //         subjectName.value = '';
// //         userId.value = '';
// //     } else {
// //         alert("Subject or User ID is not valid");
// //     }
// // });


// // deleteSubjectBtn.addEventListener('click', function () {
// //     const subNam = subjectName.value.trim();
// //     const rows = addSubjectList.rows;
// //     let rowFound = false;

// //     if (subNam && usId) {
// //         for (let i = 0; i < rows.length; i++) {
// //             const cell1 = rows[i].cells[0].innerHTML.trim();
// //             if (cell1 === subNam) {
// //                 addSubjectList.deleteRow(i);
// //                 rowFound = true;
// //                 subjectName.value = '';
// //                 break;
// //             }
// //         }
// //         if (!rowFound) {
// //             alert("No matching subject and user ID found to delete.");
// //         }
// //     } else {
// //         alert("Please provide both subject name and user ID to delete a row.");
// //     }
// // });





// // $(".delete_button").click(() => {
// //     let subjectId = $(this).attr("subjectId")
// //     var id_sub = db.subject.findIndex((v) => v.id == subjectId)
// //     db.subject.splice(id_sub, 1);
// //     saveToLocalStorage("Database", db);
// //     window.location.reload();
// // })


// // const addSubjectBtn = document.querySelector(".addSubjectBtn");
// // const addSubjectList = document.querySelector(".add-subject-list");
// // var oj = db.subject != null ? db.subject.length : 0
// // var html = ""; 
// // db.subject.forEach((v) => {
// //     html += "<tr>"
// //     html += '<td>'+ v.subject +'</td>';
// //     html += '<td>'+ v.id +'</td>';
// //     html += '<td>';
// //     html += '<button class="delete_button" subjectId="'+ v.id +'">Delete Subject</button>'
// //     html += '</td>';
// //     html += "</tr>";
// // })       
// // document.querySelector(".add_subject_list tbody").innerHTML = html

// // addSubjectBtn.addEventListener("click", function(){
// //     const subjectName = document.querySelector(".subjectName").value;
// //     const obj = {
// //         id: oj + 1,
// //         subject : subjectName
// //     }
// //     db.subject.push(obj)
// //     var db_str = JSON.stringify(db);
// //     localStorage.setItem('Database', db_str);
// //     window.location.reload()
// // });


// // const deleteSubjectBtn = document.querySelector(".delete_button")
// // deleteSubjectBtn.addEventListener("click", function(){
// //     // console.log($(this).attr("subjectId"))
// //     let del_sub = this.getAttribute("subjectId")
// //     db.subject.splice(del_sub, 1);
// //     var db_str = JSON.stringify(db);
// //     localStorage.setItem("Database", )

// // })


// // const getFromLocalStorage = (key) => {
// //     try {
// //         return JSON.parse(localStorage.getItem(key)) || [];
// //     } catch (error) {
// //         return [];
// //     }
// // };
// // const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

// // var db = getFromLocalStorage("Database") || { subject: [] };
// // var a = db.subject;
// // var sortVal = a.length > 0 ? a.sort((a, b) => b.id - a.id)[0].id : 0;

// // const renderTable = () => {
// //     let htmls = '';
// //     db.subject.forEach((v, i) => {
// //         htmls += `
// //         <tr>
// //         <td>${v.subject}</td>    
// //         <td>${i}</td>
// //         <td><button class="delete_button" subjectId="${v.id}">Delete</button>
// //         <button type="button" class="btn btn-primary btn-sets" subjectIdDel="${v.id}" data-toggle="modal" data-target="#exampleModalCenter">Edit</button></td>
// //         </tr>
// //         `;
// //     });
// //     $("tbody").html(htmls);
// // };

// // renderTable();
// // $(".save_change_class").click((v) => {
// //     let subjectId = $(this).attr("subjectIdDel")
// //     var id_del = db.subject.findIndex((v) => v.id == subjectId);
// //     var save_change = document.querySelector(".save_change_class").value
// //     db.id.id_del = save_change
// //     saveToLocalStorage("Database", db);
// //     renderTable();

// // })
// // $(".btn-primary").click(function () {
// //     let subjectId = $(this).attr("subjectIdDel");
// //     console.log(subjectId);
// //     $(".editSubjectBtn").click(()=>{
// //         var id_del = db.subject.findIndex((v) => v.id == subjectId);
// //         if (id_del !== -1) {
// //         var save_change = $(".save_change_class").val();  // Use jQuery to get value
// //         db.subject[id_del].subject = save_change;
// //         saveToLocalStorage("Database", db);
// //         renderTable();
// //     }
// //     })
// // });


// // $(".addSubjectBtn").click((e) => {
// //     let subjectName = $(".subjectName").val();
// //     var alreadyHas = db.subject.find((v) => v.subject == subjectName);
// //     if (!alreadyHas) {
// //         var obj = {
// //             id: sortVal + 1,
// //             subject: subjectName
// //         };
// //         db.subject.push(obj);
// //         saveToLocalStorage("Database", db);
// //         $(".subjectName").val(""); 
// //         renderTable();
// //     } else {
// //         alert("Wrong Entry");
// //     }
// // });

// // $("tbody").on("click", ".delete_button", function () {
// //     let subjectId = $(this).attr("subjectId");
// //     var id_sub = db.subject.findIndex((v) => v.id == subjectId);

// //     if (id_sub !== -1) {
// //         db.subject.splice(id_sub, 1);
// //         saveToLocalStorage("Database", db);
// //         renderTable();
// //     }
// // });



// /////////////////

// // {<button type="button" class="btn btn-primary btn-sets" data-toggle="modal" data-target="#exampleModalCenter">
// //     Edit
// //   </button> }


// // const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];
// // const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
// // var oj = db.subject != null ? db.subject.length : 0;
// // var a = db.subject;
// // var sortVal = a.sort((a, b) => b.id - a.id)[0].id;

// // console.log();
// // var htmls = '';
// // db.subject.forEach((v, i) => {
// //     htmls += `
// //     <tr>
// //     <td>${v.id}<button class="delete_button" subjectId="${v.id}">Delete</buttton></td>
// //     <td>${v.subject}</td>    
// //     </tr>
// //     `;
// // });
// // $("tbody").html(htmls);
// // $(".addSubjectBtn").click(() => {
// //     let subjectName = $(".subjectName").val();
// //     var alreadyHas = db.subject.find((v) => v.subject == subjectName)
// //     if (!alreadyHas) {
// //         var obj = {
// //             id: sortVal + 1,
// //             subject: subjectName
// //         }
// //         db.subject.push(obj);
// //         saveToLocalStorage("Database", db);
// //         window.location.reload();
// //     } else {
// //         alert("Wrong Entry")
// //     }
// // });

// // // $(".delete_button").click(function () {
// // //     let subjectId = $(this).attr("subjectId");
// // //     var id_sub = db.subject.findIndex((v) => v.id == subjectId);

// // //     if (id_sub !== -1) {
// // //         db.subject.splice(id_sub, 1);
// // //         saveToLocalStorage("Database", db);
// // //         window.location.reload();
// // //     }
// // // });



// // // $(".save_change_class").click((v) => {
// // //     let subjectId = $(this).attr("subjectIdDel")
// // //     var id_del = db.subject.findIndex((v) => v.id == subjectId);
// // //     var save_change = document.querySelector(".save_change_class").value
// // //     db.id.id_del = save_change
// // //     saveToLocalStorage("Database", db);
// // //     renderTable();

// // // })






// // const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];
// // const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
// // var db = getFromLocalStorage("Database") || { class: [] };
// // var a = db.class;
// // var sortVal = a.sort((a, b) => b.id - a.id)[0];
// // var oj = sortVal != null ? sortVal.id : 0
// // let htmls = '';
// // db.class.forEach((v, i) => {
// //     let v_class = v.class.charAt(0).toUpperCase() + v.class.slice(1);
// //     htmls += `
// //         <tr>
// //         <td>${v.id}</td>
// //         <td>${v_class}</td>    
// //         <td><button class="delete_button" classId="${v.id}">Delete</button>
// //         <button type="button" class="btn btn-primary btn-sets" classIdDel="${v.id}" data-toggle="modal" data-target="#exampleModalCenter">Edit</button></td>
// //         </tr>
// //         `;
// // });
// // $("tbody").html(htmls);

// // $(".addClassBtn").click(() => {
// //     let className = $(".className").val().toLowerCase();
// //     var alreadyHas = db.class.find((v) => v.class == className)
// //     if (!alreadyHas) {
// //         var obj = {
// //             id: oj + 1,
// //             subject: subjectName
// //         }
// //         db.subject.push(obj);
// //         saveToLocalStorage("Database", db);
// //         window.location.reload();
// //     } else {
// //         alert("Wrong Entry")
// //     }
// // });


// // $(".btn-sets").click(function () {
// //     let subjectId = $(this).attr("subjectIdDel");
// //     console.log(subjectId);
// //     $("#editSubjectBtn").click(() => {
// //         var id_del = db.subject.findIndex((v) => v.id == subjectId);
// //         if (id_del !== -1) {
// //             var save_change = $(".form-control").val();
// //             db.subject[id_del].subject = save_change;
// //             saveToLocalStorage("Database", db);
// //             window.location.reload();
// //         }
// //     })
// // });


// // $(".delete_button").click(function () {
// //     let subjectId = $(this).attr("subjectId");
// //     var id_sub = db.subject.findIndex((v) => v.id == subjectId);

// //     if (id_sub !== -1) {
// //         db.subject.splice(id_sub, 1);
// //         saveToLocalStorage("Database", db);
// //         window.location.reload();
// //     }
// // });


// // var htmles = '';
// // db["class"].forEach((v) => {
// //     htmles += `
// //         <option value="${v.class}">${v.class}</option>
// //     `;
// // });

// // $(".select-teaching-border select").append(htmles);

// // $(".teacher-submit-button").click(function (e) {
// //     e.preventDefault();

// //     let name = $(".input-1 input").val();
// //     let userName = $(".input-2 input").val();
// //     let password = $(".input-3 input").val();
// //     let phoneNumber = $(".input-4 input").val();
// //     let email = $(".input-5 input").val();
// //     let qualification = $(".input-6 input").val();
// //     let select_value = $('.js-example-basic-multiple').val();
// //     let gender_select = $(".input-8 select").val()
// //     let salary = $(".input-9 input").val()
// //     if (select_value && select_value.length > 0) {
// //         select_value.forEach((v, i) => {
// //             console.log(`Selected value ${i}: ${v}`);
// //         });
// //     }
// //     let obj = {
// //         name: name,
// //         userName: userName,
// //         password: phoneNumber,
// //         email: email,
// //         qualification: qualification,
// //         selectValueMul: select_value,
// //         gender_select: gender_select,
// //         salary: salary
// //     }
// //     db.teacher.push(obj);
// //     localStorage.setItem("Database", JSON.stringify(db))
// // });




// // var x = db.class.teacher_time;
// // var sortVals = x.sort((a, b) => b.id - a.id)[0];
// // var ojs = sortVals != null ? sortVals.id : 0

// // $('[name="subject_form"]').submit(function (e) {
// //     e.preventDefault();

// //     var class_id = $('.id-subject-form').val();
// //     var a = $(this).serializeArray();
// //     // console.log(a);
// //     var ary = [];
// //     for (let i = 0; i < a.length; i += 4) {
// //         ary.push({
// //             id: ojs + 1,
// //             subject: a[i].value,
// //             teacher: a[i + 1].value,
// //             start: a[i + 2].value,
// //             end: a[i + 3].value,
// //         });
// //     }

// //     console.log(ary);
// //     // var schedule = {
// //     //     id: class_id * 1,
// //     //     class: class_id.class,
// //     //     registration: class_id.registration,
// //     //     admission: class_id.admission,
// //     //     exam: class_id.exam,
// //     //     details: ary,
// //     // };
// //     // console.log(schedule);
// //     let id_dex = db.class.find((a) => a.id == class_id)
// //     console.log(id_dex);
// //     id_dex.teacher_time.push(ary);
// //     saveToLocalStorage("Database", db);
// // });

// // // $(".submit-row-in-data-base").click(function () {


// // // })

// // Set time using time picker

// function timepicker() {
//     $('input.timepicker').timepicker({});
// };

// const getFromLocalStorage = function (key) {
//     try {
//         return JSON.parse(localStorage.getItem(key)) || [];
//     } catch (error) {
//         return [];
//     }
// };
// const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

// var htmls = "";
// db.class.forEach((v, i) => {
//     htmls += `
// <tr>
//     <td>${v.id}</td>
//     <td>${v.class}</td>    
//     <td>
//     <p>Registration : ${v.registration_fees}</p>
//     <p>Admission : ${v.admission_fees}</p>
//     <p>Exam fees: ${v.exam_fees}</p>
//     <p>Total Fees: ${v.registration_fees + v.admission_fees + v.exam_fees}</p>
//     </td>
//     <td>
//     <button class="delete_button" classId="${v.id}">Delete</button>
//     <button type="button" class="btn btn-primary btn-sets" classIdEdit="${v.id}" data-toggle="modal" data-target="#exampleModalCenter">Edit</button>
//     <button type="button" class="btn btn-primary sub-details" subjectdetailid="${v.id}">Subject details</button>
//     </td>
// </tr>
// `;
// });
// $("tbody").html(htmls);

// var a = db.class;
// var sortVal = a.sort((a, b) => b.id - a.id)[0];
// var oj = sortVal != null ? sortVal.id : 0
// $(".addClassBtn").click((e) => {
//     const className = $(".className").val();
//     const registration_fees = $(".registration_fees").val();
//     const admission_fees = $(".admission_fees").val();
//     const exam_fees = $(".exam_fees").val();
//     if (className && registration_fees && admission_fees && exam_fees) {
//         var alreadyHas = db.class.find((v) => v.class.toLowerCase() == className.toLowerCase()); // Fixed line
//         if (!alreadyHas) {
//             let obj = {
//                 id: oj + 1,
//                 class: className,
//                 registration_fees: Number(registration_fees),
//                 admission_fees: Number(admission_fees),
//                 exam_fees: Number(exam_fees),
//                 subject: []
//             }
//             db.class.push(obj);
//             saveToLocalStorage("Database", db);
//             location.reload();
//         } else {
//             alert("Wrong Entry.")
//         }
//     } else {
//         alert("Please fill in all the entries.");
//     }
// });

// $(".delete_button").click(function () {
//     let classId = $(this).attr("classId");
//     var id_cls = db.class.findIndex((v) => v.id == classId);
//     if (id_cls !== -1) {
//         db.class.splice(id_cls, 1);
//         saveToLocalStorage("Database", db);
//         window.location.reload();
//     }
// });

// // Edit button 

// $(".btn-sets").click(function () {
//     let classId = $(this).attr("classIdEdit");
//     var id_de = db.class.find((v) => v.id == classId);
//     $(".edit-class-btn").val(id_de.class);
//     $(".edit-registration-fees").val(id_de.registration_fees);
//     $(".edit-admission-fees").val(id_de.admission_fees);
//     $(".edit-exam-fees").val(id_de.exam_fees);
//     $("#editSubjectBtn").click(() => {
//         var id_del = db.class.findIndex((v) => v.id == classId);
//         if (id_del !== -1) {
//             let classes = $(".form-control1").val();
//             var registration_fees = $(".form-control2").val();
//             var admission_fees = $(".form-control3").val();
//             var exam_fees = $(".form-control4").val();
//             db.class[id_del].class = classes;
//             db.class[id_del].registration_fees = Number(registration_fees)
//             db.class[id_del].admission_fees = Number(admission_fees);
//             db.class[id_del].exam_fees = Number(exam_fees);
//             saveToLocalStorage("Database", db);
//             window.location.reload();
//         }
//     })
// });

// // Add Details subject

// let data = db.subject;
// let option = "";
// data.forEach((v, i) => {
//     option += `
//     <option value="${v.id}">${v.subject}</option>
//     `;
// });

// $(".add-subject-list-1 select").html(option);

// // Add Details teacher name

// let teacher = db.teacher;
// let teacher_options = "";
// teacher.forEach((v, i) => {
//     teacher_options += `
//     <option value="${v.id}" selected>${v.name}</option>
//     `;
// });

// $(".add-subject-list-2 select").html(teacher_options);
// $(".sub-details").click(function (e) {
//     e.preventDefault();
//     $(".box3").css("display", "none");
//     $(".second-add-subject-form").css("display", "block");
//     let classId = $(this).attr("subjectdetailid");
//     $(".id-subject-form").val(classId);
//     var class_id = $('.id-subject-form').val();
//     let html = "";
//     var class_data = db.class.find((a, i) => a.id == class_id * 1);
//     class_data.subject.forEach((v) => {
//         html += data_show(v);
//     });
//     html += data_show();
//     $(".add-subject-main").html(html);
//     timepicker();
// });

// function data_show(edit = {}) {
//     let add_new_row = '';
//     console.log(edit);
//     add_new_row += '<div class="add-subject-main-copy">';
//     add_new_row += '    <div class="add-subject-list-2-copy add-subject-list-1">';
//     add_new_row += '        <h5>Select Subject</h5>';
//     add_new_row += '        <select name="subject-select">';
//     add_new_row += '           <option selected disabled>select</option>';
//     db.subject.forEach(subject => {
//         add_new_row += '<option value="' + subject.id + '" ' + (edit.subject_class == subject.id ? 'selected' : '') + '>' + subject.subject + '</option>';
//     });
//     add_new_row += '        </select>';
//     add_new_row += '    </div>';
//     add_new_row += '    <div class="add-subject-list-2-copy add-subject-list-2">';
//     add_new_row += '        <h5>Select Teacher</h5>';
//     add_new_row += '        <select name="teacher-select">';
//     add_new_row += '        <option selected disabled>select</option>';
//     db.teacher.forEach(teacher => {
//         add_new_row += '<option value="' + teacher.id + '" ' + (edit.teacher == teacher.id ? 'selected' : '') + '>' + teacher.name + '</option>';
//     });
//     add_new_row += '        </select>';
//     add_new_row += '    </div>';
//     add_new_row += '    <div class="add-subject-list-2-copy add-subject-list-3">';
//     add_new_row += '        <h5>Class Start Time</h5>';
//     add_new_row += '       <input name="start-time" autocomplete="off" type="text" class="timepicker" value="' + (edit.start || "") + '">';  // Corrected class start time
//     add_new_row += '    </div>';
//     add_new_row += '    <div class="add-subject-list-2-copy add-subject-list-4">';
//     add_new_row += '        <h5>Class End Time</h5>';
//     add_new_row += '       <input name="end-time" autocomplete="off" type="text" class="timepicker" value="' + (edit.end || "") + '">'; // Class end time
//     add_new_row += '    </div>';
//     add_new_row += '    <div class="add-subject-list-2-copy add-subject-list-4">';
//     add_new_row += '        <h5>Action Button</h5>';
//     add_new_row += '        <button class="delete-button-of-add-subject">Delete</button>';
//     add_new_row += '    </div>';
//     add_new_row += '</div>';
//     return add_new_row;
// }


// timepicker()
// $(".add-new-row-in-subject-detail").click(function (e) {
//     e.preventDefault();
//     $(".add-subject-main").append(data_show());
//     timepicker()
// })

// // Delete button from the row

// document.addEventListener("click", function (e) {
//     // let deleteRowId = $(this).attr("deleteRowId");
//     // var id_sub = db.class.findIndex((v) => v.id == subjectId);
//     if (e.target.classList.contains("delete-button-of-add-subject")) {
//         e.preventDefault()
//         let parentRow = e.target.closest(".add-subject-main-copy");
//         if (parentRow) {
//             parentRow.remove()
//         }
//     }
// })


// function edit_data(key, ary) {
//     db[key] = ary
//     db_str = JSON.stringify(db);
//     localStorage.setItem('Database', db_str)
// }

// function data_update(key, edit_id, array) {
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

// // edit_data("class", [])

// $('[name="subject_form"]').submit(function (e) {
//     e.preventDefault();
//     var class_id = $('.id-subject-form').val();
//     var id_dex = db.class.find((a) => a.id == class_id);
//     console.log(id_dex);

//     var ojs = 1;
//     var a = $(this).serializeArray();
//     var ary = [];
//     for (let i = 0; i < a.length; i += 4) {
//         if (a[i].value != '' && a[i + 1].value != '' && a[i + 2].value != '' && a[i + 3].value != '') {
//             ary.push({
//                 id: ojs,
//                 subject_class: a[i].value,
//                 teacher: a[i + 1].value,
//                 start: a[i + 2].value,
//                 end: a[i + 3].value,
//             });
//             ojs++;
//         }
//     }
//     let new_obj = {
//         id: id_dex.id,
//         class: id_dex.class,
//         registration_fees: id_dex.registration_fees,
//         admission_fees: id_dex.admission_fees,
//         exam_fees: id_dex.exam_fees,
//         subject: ary
//     };
//     data_update('class', class_id * 1, new_obj);
//     window.location.reload();
// });


//  // $(".info-page-design").css("display", "block");
//         // $(".class_details_page").css("display", "none");
//         // $(".class-schedule").css("display", "none");
//         // $(".identity-card-design-here").css("display", "none");


// if (db != null) {
//     var html = '';
//     db.teacher.forEach((v, i) => {
//         var class_text = db.class.reduce((a, c, i) => {
//             if (v.class.includes(c.id)) {
//                 a.push(c.class);
//             }
//             return a;
//         }, []).join(', ');
//         // console.log(v);
//         var user_data = get_user_data("users", v.id, "teacher");
//         //    console.log(user_data);
//         html += '<div class="row head_sec_data">'
//         html += ' <div class="col-1 data_sec sr">'
//         html += '  <span>' + v.id + '</span>'
//         html += '</div>'
//         html += ' <div class="col-3 data_sec">'
//         html += '<div class="user_name user_data">'
//         html += '<span>Name: ' + user_data.sname + '</span>'
//         html += '</div>'
//         html += '<div class="user_name user_data">'
//         html += '<span>User Name: ' + user_data.username + '</span>'
//         html += '</div>'
//         html += '<div class="user_pass user_data">'
//         html += '<span>Pass:  ' + user_data.password + '</span>'
//         html += ' </div>'
//         html += '</div>'
//         html += '<div class="col-2 data_sec">'
//         html += '<div class="user_mobile user_data">'
//         html += '<span>Phone No.:  ' + v.phone + '</span>'
//         html += '</div>'
//         html += '<div class="user_email user_data">'
//         html += '<span>Email: ' + v.email + '</span>'
//         html += '</div>'
//         html += '<div class="user_qual user_data">'
//         html += '<span>Qualification: ' + v.qualification + '</span>'
//         html += '</div>'
//         html += '<div class="user_qual user_data">'
//         html += '<span>Gender: ' + v.gender + '</span>'
//         html += '</div>'
//         html += '</div>'
//         html += '<div class="col-2 data_sec ">'
//         html += '<div class="user_class user_data">'

//         html += '<span>Class: ' + class_text + '</span>'
//         html += '</div>'
//         html += ' <div class="user_subject user_data">'
//         html += '<span></span>'
//         html += '</div>'
//         html += '</div>'
//         html += '<div class="col-4 data_sec ">'
//         html += ' <div class="user_subject user_data">'
//         html += '</div>'
//         html += '<div class="user_class user_data btn_edit">'
//         html += '<a href="add_teacher.html?edit_id=' + v.id + '" class="edit_teacher_btn" data="' + v.id + '">Edit</a>'
//         html += '<a href="" class="delete_teacher_btn" data="' + v.id + '">Delete</a>'
//         // html += '<a class="manage_teacher_class" data="' + v.id + '">Manage Class</a>'
//         html += '<a class="teacher_details" data="' + v.id + '">Manage Details</a>'
//         html += '</div>'
//         html += '</div>'
//         html += '</div>'

//     });
//     document.querySelector('.teacher_list').innerHTML = html;
// }
// // delete teacher data
// $('.delete_teacher_btn').on('click', function (e) {
//     e.preventDefault();
//     var delete_id = $(this).attr('data');
//     var data = get_user_data("users", delete_id, "teacher");
//     delete_data("teacher", delete_id);
//     delete_data("users", data.id);

// });

// // manage tecaher class
// $('.manage_teacher_class').click(function (e) {
//     e.preventDefault();
//     $('.teacher_sec').css('display', 'none');
//     $('.add_subb').css('display', 'block')
//     var teacher_id = $(this).attr("data")
//     $('.cls_idd').val(teacher_id);
//     var teacher_data = db.teacher.find((v, i) => v.id == teacher_id)
//     var selected_subject = teacher_data.subject;
//     html = '';
//     console.log(teacher_data);
//     console.log(typeof teacher_data.class);

//     teacher_data.class.forEach((v, i) => {
//         console.log(v);
//         var class_data = get_data_by_id("class", v);
//         html += '<div class="row select_teacher_sub">';
//         html += '<span>' + "Class: " + class_data.class + ' </span>';
//         class_data.subject.forEach((subject_id, ii) => {
//             var subject_data = get_data_by_id("subject", subject_id);
//             var checked_text = '';
//             if (typeof selected_subject[class_data.id] != 'undefined') {
//                 if (selected_subject[class_data.id].includes(subject_id + '')) {
//                     checked_text = 'checked';
//                 }
//             }
//             html += '<div class="col-md-3">';
//             html += '<div class="sub_menu">';
//             html += '<input type="checkbox" class="check" ' + checked_text + ' tclass="' + class_data.id + '" value="' + subject_data.id + '">';
//             html += '<div class="sub_name" value="' + subject_data.id + '" data="' + subject_data.id + '">' + subject_data.subject + '</div>';
//             html += '</div>';
//             html += '</div>';
//         });
//         html += '</div>';
//     });
//     $('.manage_class_sec').prepend(html);
// });

// $('.remove_form').on('click', function () {
//     $('.add_subb').css('display', 'none');
//     $('.teacher_sec').css('display', 'block');
// });

// // add in techer subject array
// $('.select_sub_btn').click(function (e) {
//     e.preventDefault();
//     var teacher_id = $('.cls_idd').val();
//     var teacher_obj = db.teacher.find((vv, ii) => vv.id == teacher_id);
//     var val = {};
//     $(':checkbox:checked').each(function (i) {
//         var vall = $(this).val();
//         var cls = $(this).attr("tclass")
//         console.log(vall, cls);
//         if (typeof val[cls] == 'undefined') {
//             val[cls] = [vall];
//         }
//         else {
//             val[cls].push(vall);
//         }
//     });
//     teacher_obj.subject = val;
//     data('teacher', teacher_id, teacher_obj)
//     window.location.reload();
// });

// $('.teacher_details').click(function (e) {
//     e.preventDefault();
//     $('.upper_sec').css("display", "none")
//     $('.student_detail_page').css("display", "block")
//     $('.tclass_details').css("display", "none")
//     var teacher_id = $(this).attr("data");
//     teacher_id = $('.hidden_student_id').val(teacher_id);
//     var id = $('.hidden_student_id').val()
//     var teacher_data = get_data_by_id("teacher", id);
//     var user_data = get_user_data("users", id, "teacher");
//     console.log(user_data);
//     $('.student_name').text("Name: " + user_data.sname);
//     $('.student_class').text("Teaching Class: " + teacher_data.class);
//     $('.student_father').text("Qualification: " + teacher_data.qualification);
//     $('.student_phoneno').text("Phone No.: " + teacher_data.phone);
//     $('.student_address').text("Gender: " + teacher_data.gender);
// });

// $('.back_sdetail_page').click(function (e) {
//     e.preventDefault();
//     $('.upper_sec').css("display", "block");
//     $('.student_detail_page').css("display", "none");

// });


// $('.info_page').click(function (e) {
//     e.preventDefault();
//     $('.class_details_page').css("display", "none");
//     $('.info').css("display", "flex");
//     $('.student_subject_details').css("display", "none")
//     $('.fees_list_details').css("display", "none");
//     $('.tclass_details').css("display", "none")
//     var id = $('.hidden_student_id').val();
//     var teacher_data = get_data_by_id("teacher", id);
//     var user_data = get_user_data("users", id, "teacher");
//     $('.student_name').text("Name: " + user_data.sname);
//     $('.student_class').text("Teaching Class: " + teacher_data.class);
//     $('.student_father').text("Qualification: " + teacher_data.qualification);
//     $('.student_phoneno').text("Phone No.: " + teacher_data.phone);
//     $('.student_address').text("Gender: " + teacher_data.gender);
// });

// $('.class_details').click(function (e) {
//     e.preventDefault();
//     $('.info').css("display", "none");
//     $('.class_details_page').css("display", "flex");
//     $('.student_subject_details').css("display", "none")
//     $('.fees_list_details').css("display", "block");
//     $('.tclass_details').css("display", "none")
//     var id = $('.hidden_student_id').val();

//     var teacher_data = get_data_by_id("teacher", id);
//     var get_time = teacher_data.joining_date
//     function monthDiff(dateFrom, dateTo) {
//         return dateTo.getMonth() - dateFrom.getMonth() +
//             (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
//     }
//     var year = get_time.split("-")[0]
//     var month = get_time.split("-")[1]
//     var total_month = monthDiff(new Date(year, month), new Date());
//     total_month = total_month <= 0 ? 0 : total_month;
//     $('.t_fees h5').text("Total Salary: " + total_month * teacher_data.salary + " Rs");
//     // pending salary
//     var old_salary = db.salary.filter((v, i) => v.teacher_relation_id == id)
//     var old_total_salary = old_salary.reduce((a, c, i) => {
//         var a = a + (c.payment * 1);
//         return a
//     }, 0);

//     $('.t_pending_fees h5').text("Pending Salary: " + (teacher_data.salary * total_month - old_total_salary) + " Rs");

//     // student fees list 
//     var html = ''

//     old_salary.forEach((v, i) => {
//         html += '<div class="row list_details">'
//         html += '<div class="col-md-3 list_data">'
//         html += '<span>' + v.id + '</span>'
//         html += '</div>'
//         html += '<div class="col-md-3 list_data">'
//         html += '<span>' + v.payment + '</span>'
//         html += '</div>'
//         html += '<div class="col-md-3 list_data">'
//         html += '<span>' + v.fees_date + '</span>'
//         html += '</div>'
//         html += '<div class="col-md-3 list_data">'
//         html += '<span>' + v.current_date + '</span>'
//         html += '</div>'
//         html += '</div>'
//     });
//     $('.data_list').html(html);
// });

// $('#datepicker').datepicker({
//     uiLibrary: 'bootstrap5'
// });

// $('.fees_submit_btn').click(function (e) {
//     e.preventDefault();
//     var current_pay = $('[name="fees"]').val()
//     var fees_pay_date = $('#datepicker').val()
//     var currentdate = new Date();
//     var pay_method = $('[name="pay_method"]').val()
//     var id = $('.hidden_student_id').val()
//     var teacher_data = get_data_by_id("teacher", id);

//     var get_time = teacher_data.joining_date
//     function monthDiff(dateFrom, dateTo) {
//         return dateTo.getMonth() - dateFrom.getMonth() +
//             (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
//     }

//     var year = get_time.split("-")[0]
//     var month = get_time.split("-")[1]
    
//     var total_month = monthDiff(new Date(year, month), new Date());
//     total_month = total_month <= 0 ? 0 : total_month * teacher_data.salary;
//     console.log(total_month);
//     if (current_pay != '' && fees_pay_date != '' && pay_method != '') {

//         var old_salary = db.salary.filter((v, i) => v.teacher_relation_id == id)
//         var old_total_salary = old_salary.reduce((a, c, i) => {
//             var a = a + (c.payment * 1);
//             return a
//         }, 0);
//         var currentFeesType = total_month;
//         current_pay = current_pay * 1;
//         console.log(currentFeesType);
//         if (current_pay + old_total_salary <= currentFeesType) {
//             var len = get_last_id("salary")
//             salary = {
//                 id: len,
//                 teacher_relation_id: teacher_data.id,
//                 payment: current_pay,
//                 fees_date: fees_pay_date,
//                 current_date: currentdate,
//             }
//             db_insert('salary', salary)
//         }

//         else {
//             alert('Invalid enter fees')
//         }
//     }
// });


// $('.teacher_class_details').click(function (e) {
//     e.preventDefault();
//     var id = $('.hidden_student_id').val()
//     var teacher_data = get_data_by_id("teacher", id);
//     var t_id = teacher_data.id;
//     var tclass = teacher_data.class.map((v1) => v1 * 1);
//     var html = '';
//     var teacher_class_data = db.class.reduce((a, c, i) => {
//         if (tclass.includes(c.id)) {
//             c.details.forEach((vv, ii) => {
//                 if (vv.teacher == t_id) {
//                     obj = {
//                         class: c.class,
//                         start: vv.start,
//                         end: vv.end,
//                         sub: vv.subject
//                     }
//                     a.push(obj);
//                 }
//             });

//         }
//         return a
//     }, [])
//     // var t_num =c.details.map((v2) => v2.teacher*1);
//     console.log(teacher_class_data);
//     teacher_class_data.forEach((v, i) => {
//         var subject_name = get_data_by_id("subject", v.sub);
//         html += '<div class="row manage_subject">';
//         html += '<div class="col-md-2 sub_details">' + (i + 1) + '</div>';
//         html += '<div class="col-md-2 sub_details">' + v.class + '</div>';
//         html += '<div class="col-md-2 sub_details">' + v.start + '</div>';
//         html += '<div class="col-md-2 sub_details">' + v.end + '</div>';
//         html += '<div class="col-md-4 sub_details">' + subject_name.subject + '</div>';
//         html += '</div>';
//     });
//     $('.teaching_class_details').html(html);


// });