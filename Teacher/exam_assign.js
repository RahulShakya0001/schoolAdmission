let class_data = db.class;

let classOptions = class_data.map(element =>
    `<option value="${element.id}">${element.class}</option>`
).join('');

$(".first-input select").append(classOptions);

$(".first-input select").on("change", function () {
    let selectedClass = $(this).val();
    $(".second-input select").empty().append('<option selected disabled>Select</option>');
    let selectedClassData = class_data.find(element => element.id == selectedClass);
    if (selectedClassData) {
        let subjectOptions = selectedClassData.subject.map(e => {
            let subject = db.subject.find(x => x.id === Number(e.subject_class));
            return subject ? `<option value="${subject.id}">${subject.subject}</option>` : '';
        }).join('');
        $(".second-input select").append(subjectOptions);
    }
});

let classOption = class_data.map(element =>
    `<option value="${element.id}">${element.class}</option>`
).join('');

$(".select-class-for-list select").append(classOption);

$(".select-class-for-list select").on("change", function () {
    let selectedClass = $(this).val();
    console.log(selectedClass);
    $(".select-subject-for-list select").empty().append('<option selected disabled>Select</option>');
    let selectedClassData = class_data.find(element => element.id === Number(selectedClass));
    if (selectedClassData) {
        let subjectOptions = selectedClassData.subject.map(e => {
            let subject = db.subject.find(x => x.id === Number(e.subject_class));
            return subject ? `<option value="${subject.id}">${subject.subject}</option>` : '';
        }).join('');
        $(".select-subject-for-list select").append(subjectOptions);
    }
});

$(".submit-button-of-assign-exam button").click(function (v) {
    v.preventDefault();
    let title = $(".title-of-assign input").val()
    let classes = $(".first-input select").val()
    let subject = $(".second-input select").val()
    let time_duration = $(".third-input-duration input").val()
    let negative = $(".third-input-negative input").val()
    let pass_marks = $(".third-input-pass-marks input").val()
    let total = $(".forth-input-total input").val()
    let each_question_marks = $(".per-question-marks input").val()

    if (!title || !classes || !subject || !time_duration || !negative || !pass_marks || !total || !each_question_marks) {
        console.log("Please fill out all fields");
        return;
    }

    let existingExam = db.exam.find((v) => v.class == classes && v.subject == subject);
    console.log(existingExam);
    let assignId = existingExam && existingExam.assign.length > 0 ? Math.max(...existingExam.assign.map(q => q.id)) + 1 : 1
    console.log(assignId);
    let examAssignObj = {
        id: assignId,
        title: title,
        class: classes,
        subject: subject,
        time_duration: time_duration,
        negative: negative,
        pass_marks: pass_marks,
        total: total,
        each_question_marks: each_question_marks,
        status: 1,
        total_marks: Number(total) * Number(each_question_marks),
        question_data: []
    }

    if (existingExam) {
        existingExam.assign.push(examAssignObj);
        saveToLocalStorage("Database", db);
        $(".title-of-assign input").val("")
        $(".first-input select").empty().append("<option selected disabled>Select</option>")
        $(".second-input select").empty().append("<option selected disabled>Select</option>")
        $(".third-input-duration input").val("")
        $(".third-input-negative input").val("")
        $(".third-input-pass-marks input").val("")
        $(".forth-input-total input").val("")
        $(".per-question-marks input").val("")
        alert("Data is successfully added")
    } else {
        db.exam.push(examAssignObj);
        saveToLocalStorage("Database", db);

        let sub_name = db.subject.find(e => e.id == examAssignObj.subject);
        if (sub_name) {
            alert(`${sub_name.subject.toUpperCase()} Exam Is Created Successfully.`);
            window.location.reload()
        } else {
            alert("Subject not found");
        }

    }
})




// Filter Button Handler
$(".button-fiter").click(function (e) {
    e.preventDefault();

    let class_fiter = $(".select-class-for-list select").val();
    let subject_fiter = $(".select-subject-for-list select").val();

    if (!class_fiter || !subject_fiter) {
        alert("Please select both class and subject");
        return;
    }

    // Filter exams matching the class and subject
    let find_exam_list = db.exam.filter(v =>
        Number(v.class) === Number(class_fiter) && Number(v.subject) === Number(subject_fiter)
    );

    if (find_exam_list.length === 0) {
        alert("No assignments found");
        return;
    }
    console.log(find_exam_list);

    let html = find_exam_list.map(s => `
        <tr>
            <td>${s.id}</td>
            <td>${s.title || '-'}</td>
            <td>
                <button type="button" 
                        class="edit-exam-list btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-exam-id="${s.id}">
                    Edit
                </button>
            </td>
            <td>
                <div class="form-check form-switch">
                    <input style="width: 60px; height: 30px;" 
                    class="form-check-input toggle-exam-status" 
                    type="checkbox" 
                    role="switch" 
                    id="flexSwitchCheckDefault_${s.id}" 
                    ${s.status == 1 ? 'checked' : ''} 
                    data-exam-id="${s.id}">
                    <label class="form-check-label" for="flexSwitchCheckDefault_${s.id}"></label>
                </div>
            </td>
        </tr>
    `).join('');


    $(".show-table-of-exam-list").html(html);
    // Edit Button
    $(".edit-exam-list").click(function (v) {
        v.preventDefault();

        let examIds = $(this).attr("examIds");
        console.log(typeof (examIds));
        console.log(class_fiter);

        let assignData = db.exam.find(vi =>
            vi.id == Number(examIds) &&
            Number(vi.class) == Number(class_fiter) &&
            Number(vi.subject) == Number(subject_fiter)
        );

        if (!assignData) {
            alert("Exam data not found");
            return;
        }

        $(".div-one-modal input").val(assignData.title);
        $(".duration-modal input").val(assignData.time_duration);
        $(".negative-marks-modal input").val(assignData.negative);
        $(".pass-marks-modal input").val(assignData.pass_marks);
        $(".total-question-modal input").val(assignData.total);
        $(".per-question-modal input").val(assignData.each_question_marks);

        $(".save-the-changes").off("click").on("click", function (s) {
            s.preventDefault();

            if (
                !$(".div-one-modal input").val() ||
                !$(".duration-modal input").val() ||
                !$(".negative-marks-modal input").val() ||
                !$(".pass-marks-modal input").val() ||
                !$(".total-question-modal input").val() ||
                !$(".per-question-modal input").val()
            ) {
                alert("Please fill out all fields");
                return;
            }

            // Save updated values
            assignData.title = $(".div-one-modal input").val();
            assignData.time_duration = $(".duration-modal input").val();
            assignData.negative = $(".negative-marks-modal input").val();
            assignData.pass_marks = $(".pass-marks-modal input").val();
            assignData.total = $(".total-question-modal input").val();
            assignData.each_question_marks = $(".per-question-modal input").val();
            assignData.total_marks = assignData.total * assignData.each_question_marks;

            // Get the index and update it in the db.exam array
            let examIndex = db.exam.findIndex(
                e => e.id == Number(examIds) &&
                    e.class == Number(class_fiter) &&
                    e.subject == Number(subject_fiter)
            );
            if (examIndex !== -1) {
                db.exam[examIndex] = assignData;
            }

            saveToLocalStorage("Database", db);
            $("#exampleModal").modal("hide");
            window.location.reload();
        });
    });

});

// Status Togglers
$(document).on("change", ".toggle-exam-status", function () {
    const examId = $(this).data("exam-id"); 
    const isChecked = $(this).is(":checked"); 
    const status = isChecked ? 1 : 0;

    console.log("Exam ID:", examId);
    console.log("Status:", status);

    let examIndex = db.exam.findIndex(e => e.id == examId);
    if (examIndex !== -1) {
        db.exam[examIndex].status = status;
        saveToLocalStorage("Database", db);
    }
});
