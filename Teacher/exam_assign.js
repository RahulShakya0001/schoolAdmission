let class_data = db.class;

let classOptions = class_data.map(element =>
    `<option value="${element.class}">${element.class}</option>`
).join('');
$(".first-input select").append(classOptions);

$(".first-input select").on("change", function () {
    let selectedClass = $(this).val();
    console.log(selectedClass);
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

let classOption = class_data.map(element =>
    `<option value="${element.class}">${element.class}</option>`
).join('');
$(".select-class-for-list select").append(classOption);

$(".select-class-for-list select").on("change", function () {
    let selectedClass = $(this).val();
    $(".select-subject-for-list select").empty().append('<option selected disabled>Select</option>');
    let selectedClassData = class_data.find(element => element.class === selectedClass);
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
        total_marks: total * each_question_marks
    }

    if (existingExam) {
        existingExam.assign.push(examAssignObj);
        saveToLocalStorage("Database", db);
        alert("Data is successfully added")
        $(".title-of-assign input").val("")
        $(".first-input select").empty().append("<option selected disabled>Select</option>")
        $(".second-input select").empty().append("<option selected disabled>Select</option>")
        $(".third-input-duration input").val("")
        $(".third-input-negative input").val("")
        $(".third-input-pass-marks input").val("")
        $(".forth-input-total input").val("")
        $(".per-question-marks input").val("")

    } else {
        alert("Data not found");
    }

})

//  button
$(document).on("change", ".form-check-input", function (e) {
    var assign_id = $(this).attr("examIdss");
    let exam_data = db.exam;
    let class_fiter = $(".select-class-for-list select").val();
    let subject_fiter = $(".select-subject-for-list select").val();
    let assignDatas = exam_data.find(vi => vi.class == class_fiter && vi.subject == subject_fiter);
    let assignData = assignDatas.assign.find(vi => vi.id == assign_id);
    if (this.checked) {
        var val = 1;
        assignData.status = val;
        saveToLocalStorage('Database', db);
    } else {
        var val = 0;
        assignData.status = val;
        saveToLocalStorage('Database', db);
    }
})

$(".button-fiter").click(function (e) {
    e.preventDefault();
    let class_fiter = $(".select-class-for-list select").val();
    let subject_fiter = $(".select-subject-for-list select").val();
    if (!class_fiter && !subject_fiter) {
        alert("Data not found")
        return;
    }
    let find_exam = db.exam.find((v) => v.class == class_fiter && v.subject == subject_fiter);
    let html = ""
    let assignData = find_exam.assign
    assignData.forEach(function (s) {

        html += '<tr>'
        html += '<td>' + s.id + '</td>'
        html += '<td>' + s.title + '</td>'
        html += '<td>'
        html += '<button type="button" class="edit-exam-list btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" examIds = ' + s.id + '>Edit</button>'
        html += '</td>'
        html += '<td>'
        html += '<div class="form-check form-switch">'
        html += '<input style="width: 60px; height: 30px;" class="form-check-input" type="checkbox" c role="switch" id="flexSwitchCheckDefault" ' + (s.status == 1 ? 'checked' : '') + ' examIdss="' + s.id + '">';
        html += ' <label class="form-check-label" for="flexSwitchCheckDefault"></label>'
        html += '</div>'
        html += '</td>'
        html += '</tr>'
    })
    $(".show-table-of-exam-list").html(html);

    $(".edit-exam-list").click(function (v) {
        v.preventDefault()
        let examIds = $(this).attr("examIds");
        console.log(typeof examIds);
        let exam_data = db.exam;
        let assignDatas = exam_data.find(vi => vi.class == class_fiter && vi.subject == subject_fiter);
        let assignData = assignDatas.assign.find(vi => vi.id == examIds);

        $(".div-one-modal input").val(assignData.title);
        $(".duration-modal input").val(assignData.time_duration);
        $(".negative-marks-modal input").val(assignData.negative);
        $(".pass-marks-modal input").val(assignData.pass_marks);
        $(".total-question-modal input").val(assignData.total);
        $(".per-question-modal input").val(assignData.each_question_marks);

        $(".save-the-changes").click(function (s) {
            s.preventDefault();
            // let title = $(".div-one-modal input").val();
            // let time_duration = $(".duration-modal input").val();
            // let negative = $(".negative-marks-modal input").val();
            // let pass_marks = $(".pass-marks-modal input").val();
            // let total = $(".total-question-modal input").val();
            // let each_question_marks = $(".per-question-modal input").val();
            assignData.title = $(".div-one-modal input").val();
            assignData.time_duration = $(".duration-modal input").val();
            assignData.negative = $(".negative-marks-modal input").val();
            assignData.pass_marks = $(".pass-marks-modal input").val();
            assignData.total = $(".total-question-modal input").val();
            assignData.each_question_marks = $(".per-question-modal input").val();
            // let examAssignObj = {
            //     id: assignData.id,
            //     title: title,
            //     class: assignData.class,
            //     subject: assignData.subject,
            //     time_duration: time_duration,
            //     negative: negative,
            //     pass_marks: pass_marks,
            //     total: total,
            //     each_question_marks: each_question_marks,
            //     status: assignData.status
            // };

            let indexOfAssign = assignDatas.assign.findIndex((i) => i.id == examIds);
            // if (title && time_duration && negative && pass_marks && total && each_question_marks) {
                assignDatas.assign[indexOfAssign] = assignData;
                saveToLocalStorage("Database", db);
                $("#exampleModal").modal("hide");
                window.location.reload();
            // } else {
            //     alert("Please fill all fields.")
            // }
        })

    });

});