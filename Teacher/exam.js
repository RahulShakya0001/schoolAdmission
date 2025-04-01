let class_data = db.class;
let classOptions = class_data.map(element =>
    `<option value="${element.class}">${element.class}</option>`
).join('');
$(".first-input select").append(classOptions);
$(".first-input select").on("change", function () {
    let selectedClass = $(this).val();
    // console.log("Selected Class:", selectedClass);
    $(".second-input select").empty().append('<option selected disabled>Select</option>');
    let selectedClassData = class_data.find(element => element.class === selectedClass);
    if (selectedClassData) {
        let subjectOptions = selectedClassData.subject.map(e => {
            let subject = db.subject.find(x => x.id === Number(e.subject_class));
            return subject ? `<option value="${subject.id}">${subject.subject}</option>` : '';
        }).join('');
        $(".second-input select").append(subjectOptions);
    }
});
// empty_db_table("exam")
let classOption = class_data.map(element =>
    `<option value="${element.class}">${element.class}</option>`
).join('');
$(".first-input-2 select").append(classOption);
$(".first-input-2 select").on("change", function () {
    let selectedClass = $(this).val();
    // console.log("Selected Class:", selectedClass);
    $(".second-input-2 select").empty().append('<option selected disabled>Select</option>');
    let selectedClassData = class_data.find(element => element.class === selectedClass);
    if (selectedClassData) {
        let subjectOptions = selectedClassData.subject.map(e => {
            let subject = db.subject.find(x => x.id === Number(e.subject_class));
            return subject ? `<option value="${subject.id}">${subject.subject}</option>` : '';
        }).join('');
        $(".second-input-2 select").append(subjectOptions);
    }
});

// Show List Of Exam Data 

$(".submit-answer").click((e) => {
    e.preventDefault();
    let selectedClass = $(".first-input select").val();
    let selectedSubject = $(".second-input select").val();
    let questionText = $(".question textarea").val();
    let options = [
        $(".option-no-one input").val(),
        $(".option-no-two input").val(),
        $(".option-no-three input").val(),
        $(".option-no-four input").val()
    ];
    let answer = $(".answer-or-submit-button select").val();
    // console.log(answer);
    if (!selectedClass || !selectedSubject || !questionText || options.includes("") || !answer) {
        alert("Please fill out all fields.");
        return;
    }

    let nextId = db.exam.length > 0 ? Math.max(...db.exam.map(e => e.id)) + 1 : 1;
    let existingExam = db.exam.find((v) => v.class == selectedClass && v.subject == selectedSubject);

    let questionId = existingExam && existingExam.question_data.length > 0 ? Math.max(...existingExam.question_data.map(q => q.id)) + 1 : 1;
    let questionObj = {
        id: questionId,
        question: questionText,
        A: options[0],
        B: options[1],
        C: options[2],
        D: options[3],
        answer: answer

    };
    // If the exam exists , add the new question to it
    if (existingExam) {
        existingExam.question_data.push(questionObj);
    } else {
        let newExam = {
            id: nextId,
            class: selectedClass,
            subject: selectedSubject,
            question_data: [questionObj],
            assign: []
        };
        db.exam.push(newExam);
    }
    saveToLocalStorage("Database", db);
    window.location.reload()
    alert("Exam question added successfully!");
    $(".first-input select").val('');
    $(".second-input select").empty().append('<option selected disabled>Select</option>');
    $(".question textarea").val('');
    $(".option-no-one input, .option-no-two input, .option-no-three input, .option-no-four input").val('');
    $(".answer-or-submit-button select").val('');
});


$(".fiter-button").click((v) => {
    v.preventDefault()
    let selectedClass = $(".first-input-2 .fiter-class").val();
    let selectedSubject = $(".second-input-2 .fiter-subject").val();
    // console.log(db.exam);
    let existingExam = db.exam.find((vv) => vv.class == selectedClass && vv.subject == selectedSubject);
    if (!existingExam) {
        alert("No exam found for the selected class and subject.");
        return;
    }
    let htmls = "";
    existingExam.question_data.forEach(function (e) {
        htmls += '<tr>';
        htmls += `<td >${existingExam.id}</td>`
        htmls += '<td>' + existingExam.class + '</td>'
        htmls += '<td>' + existingExam.subject + '</td>'
        htmls += '<td>' + e.id + '</td>'
        htmls += '<td>' + e.question + '</td>'
        htmls += '<td>' + e.A + '</td>'
        htmls += '<td>' + e.B + '</td>'
        htmls += '<td>' + e.C + '</td>'
        htmls += '<td>' + e.D + '</td>'
        htmls += '<td>' + e.answer + '</td>'
        htmls += `<td><button class="btn btn-danger btn-sets edit-exam-button" style="margin-right: 1rem;" subjectEditId="${e.id}" existingId="${existingExam.id}" data-toggle="modal" data-target="#exampleModalCenter">Edit</button>`;
        htmls += `<button class="btn btn-primary delete-exam-button" subjectDeleteId="${e.id}">Delete</button></td>`;
        htmls += '</tr>'
    })
    $(".exam-table-data").html(htmls);

    // Delete Exam
    $(".delete-exam-button").click(function (element) {
        element.preventDefault();
        let subjectDeleteId = $(this).attr("subjectDeleteId");
        let data_of_exam = db.exam.find((v) => v.class == selectedClass && v.subject === selectedSubject);
        let delete_qus_index = data_of_exam.question_data.findIndex((v) => v.id == subjectDeleteId);
        if(subjectDeleteId != -1){
            // data_of_exam.question_data.splice(subjectDeleteId, 1);
            data_of_exam.question_data.splice(delete_qus_index, 1);
            saveToLocalStorage("Database", db);
            alert("Data is successfully deleted.");
            window.location.reload();
        }else {
            alert("Question not found or could not be deleted.");
        }
    });

    // Edit Exam question
    $(".edit-exam-button").click(function (ee) {
        console.log("Hello Edit");
        let examId = $(this).attr("existingId");
        let quesiton_Id = $(this).attr("existingId");
        let exam_data = db.exam;
        let exam_data_id = exam_data.find((s) => s.id == examId);
        let question_datas = exam_data_id.question_data.find((s) => s.id == quesiton_Id);

        // Modal Value
        $(".modal-question textarea").val(question_datas.question);
        $(".modal-option-no-one input").val(question_datas.A);
        $(".modal-option-no-two input").val(question_datas.B);
        $(".modal-option-no-three input").val(question_datas.C);
        $(".modal-option-no-four input").val(question_datas.D);
        $(".modal-answer select").val(question_datas.answer);

        $(".save-changing-button").click(function (sub) {
            sub.preventDefault();
            question_datas.question = $(".modal-question textarea").val();
            question_datas.A = $(".modal-option-no-one input").val();
            question_datas.B = $(".modal-option-no-two input").val();
            question_datas.C = $(".modal-option-no-three input").val();
            question_datas.D = $(".modal-option-no-four input").val();
            question_datas.answer = $(".modal-answer select").val();

            let questionIndex = exam_data_id.question_data.findIndex(s => s.id == question_datas.id);
            console.log(exam_data_id);
            console.log(question_datas);
            console.log(questionIndex);
            if (questionIndex !== -1) {
                exam_data_id.question_data[questionIndex] = question_datas;
                saveToLocalStorage("Database", db);
                alert("Question updated successfully!");
                window.location.reload();
            } else {
                alert("Failed to update the question. Please try again.");
            }
        });


    });

});







