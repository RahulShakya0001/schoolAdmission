
let class_data = db.class;

let classOptions = class_data.map(element =>
    `<option value="${element.id}">${element.class}</option>`
).join('');
$(".first-input select").append(classOptions);
console.log(classOptions);
$(".first-input select").on("change", function () {
    let selectedClass = $(this).val();
    let $subjectDropdown = $("#subject-select-input");
    console.log(typeof(selectedClass));
    $subjectDropdown.empty().append('<option selected disabled>Select</option>');

    let selectedClassData = class_data.find(element => element.id === Number(selectedClass));
    if (selectedClassData && Array.isArray(selectedClassData.subject)) {
        let subjectOptions = selectedClassData.subject.map(e => {
            let subject = db.subject.find(x => x.id === Number(e.subject_class));
            return subject ? `<option value="${subject.id}">${subject.subject}</option>` : '';
        }).join('');
        $subjectDropdown.append(subjectOptions);
    }
});


// empty_db_table("exam")
let classOption = class_data.map(element =>
    `<option value="${element.id}">${element.class}</option>`
).join('');
$(".first-input-2 select").append(classOption);
$(".first-input-2 select").on("change", function () {
    let selectedClass = $(this).val();
    // console.log("Selected Class:", selectedClass);
    $(".second-input-2 select").empty().append('<option selected disabled>Select</option>');
    let selectedClassData = class_data.find(element => element.id === Number(selectedClass));
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

    const selectedClass = $(".first-input select").val();
    const selectedSubject = $(".second-input select").val();
    const questionText = $(".question textarea").val().trim();
    const options = [
        $(".option-no-one input").val().trim(),
        $(".option-no-two input").val().trim(),
        $(".option-no-three input").val().trim(),
        $(".option-no-four input").val().trim()
    ];
    const answer = $(".answer-or-submit-button select").val();

    // Validate fields
    if (!selectedClass || !selectedSubject || !questionText || options.includes("") || !answer) {
        alert("Please fill out all fields.");
        return;
    }

    // Prepare new question and exam entry
    const nextExamId = db.exam.length > 0 ? Math.max(...db.exam.map(e => e.id)) + 1 : 1;
    let existingExam = db.exam.find(v => v.class === selectedClass && v.subject === selectedSubject);

    const questionId = (existingExam && Array.isArray(existingExam.question_data) && existingExam.question_data.length > 0)
        ? Math.max(...existingExam.question_data.map(q => q.id)) + 1
        : 1;
    console.log("NextExam Id ", nextExamId);
    console.log("question Id : ", questionId);

    const questionObj = {
        id: questionId,
        question: questionText,
        A: options[0],
        B: options[1],
        C: options[2],
        D: options[3],
        answer: answer
    };

    if (existingExam) {
        existingExam.question_data.push(questionObj);
    } else {
        const newExam = {
            id: nextExamId,
            class: selectedClass,
            subject: selectedSubject,
            question_data: [questionObj],
            assign: []
        };
        db.exam.push(newExam);
    }

    saveToLocalStorage("Database", db);
    alert("Exam question added successfully!");
    window.location.reload(); 

    $(".first-input select").val('');
    $(".second-input select").empty().append('<option selected disabled>Select</option>');
    $(".question textarea").val('');
    $(".option-no-one input, .option-no-two input, .option-no-three input, .option-no-four input").val('');
    $(".answer-or-submit-button select").val('');
});


$(".fiter-button").click((v) => {
    v.preventDefault();

    let selectedClass = $(".first-input-2 .fiter-class").val();
    let selectedSubject = $(".second-input-2 .fiter-subject").val();

    let existingExam = db.exam.find((vv) =>
        Number(vv.class) === Number(selectedClass) && Number(vv.subject) === Number(selectedSubject)
    );
    console.log(existingExam);
    let s_class = db.class.find((e) => e.id == Number(existingExam.class));
    let s_subject = db.subject.find((e) => e.id == Number(existingExam.subject));

    if (!existingExam) {
        alert("No exam found for the selected class and subject.");
        return;
    }

    let htmls = existingExam.question_data.map((e) => {
        return `
            <tr>
                <td>${existingExam.id}</td>
                <td>${s_class.class}</td>
                <td>${s_subject.subject}</td>
                <td>${e.id}</td>
                <td>${e.question}</td>
                <td>${e.A}</td>
                <td>${e.B}</td>
                <td>${e.C}</td>
                <td>${e.D}</td>
                <td>${e.answer}</td>
                <td>
                    <button class="btn btn-danger btn-sets edit-exam-button"
                            style="margin-right: 1rem;"
                            subjectEditId="${e.id}"
                            existingId="${existingExam.id}"
                            data-toggle="modal"
                            data-target="#exampleModalCenter">
                        Edit
                    </button>
                    <button class="btn btn-primary delete-exam-button"
                            subjectDeleteId="${e.id}">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    }).join('');

    $(".exam-table-data").html(htmls);
    
    // Delete Exam
    $(".delete-exam-button").click(function (element) {
        element.preventDefault();
        let subjectDeleteId = $(this).attr("subjectDeleteId");
        let data_of_exam = db.exam.find((v) => v.class == selectedClass && v.subject === selectedSubject);
        let delete_qus_index = data_of_exam.question_data.findIndex((v) => v.id == subjectDeleteId);
        if(subjectDeleteId != -1){
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







