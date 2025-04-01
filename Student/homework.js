$(document).ready(function () {
    let student_data = db.student.find((vs) => vs.id == login.relation_id);
    console.log(student_data);
    let student_homework = db.homework.filter((v) => v.class == student_data.class);
    console.log(student_homework);
    let student_id = login.relation_id;
    student_homework = student_homework.sort((a, b) => b.id - a.id);
    student_homework = student_homework.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });
    let html = '';
    student_homework.forEach(v => {
        var current_homework_data = v.student_answer.find(v => v.student == student_id && v.answer != '')
        var old_text = current_homework_data ? "Complete" : "Pending...";
        html += '<td>' + v.date + '</td>'
        html += '<td>' + v.title + '</td>'
        html += '<td class="status">' + old_text + '</td>'
        html += '<td><button class="action-btn details-btn" date = ' + v.date + ' homeworkId = ' + v.id + '>Details</button></td>'
        html += '</tr>'
    });
    $('.homework-dynamic-page').html(html);

    $('#summernote').summernote({
        height: 290,
        toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['color', ['white']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
        ]
    });
    $(".close-btn").click(function (e) {
        e.preventDefault();
        $(".homework-list-entry").css("display", "none");
        $(".show-homework-list").css("display", "block");
    });

    $(".details-btn").click(function (e) {
        e.preventDefault();
        $(".homework-list-entry").css("display", "block");
        $(".show-homework-list").css("display", "none");
        let homework_id = $(this).attr("homeworkId");
        $('#homework_id').val(homework_id);
        let student_id = login.relation_id;
        console.log(student_id);
        console.log(homework_id);
        let student_homework = db.homework.find((v1) => v1.id == homework_id);
        console.log(student_homework);
        $(".homework-title p").text(student_homework.title);
        $(".homework-content p").html(student_homework.content);
        console.log(student_homework.student_answer);
        let current_homework_data = student_homework.student_answer.find(v => v.student == student_id);
        console.log(current_homework_data);
        var old_text = current_homework_data?.answer ?? '';
        $('.content-textarea').summernote('code', old_text);
    });

    $(".answer-submit-button").click(function(e){
        e.preventDefault();
        let student_new_data = $(".content-textarea").val();
        let homework_id = $('#homework_id').val();
        let student_id = login.relation_id;
        let student_homework = db.homework.find((v1) => v1.id == homework_id);
        let b = student_homework.student_answer;
        let old_student_work_index = b.findIndex((v2) => v2.student == student_id);
        let student_answer_object = {
            student: student_id,
            answer:student_new_data
        }
        if(old_student_work_index == -1){
            b.push(student_answer_object);
        }else{
                b.splice(old_student_work_index, 1, student_answer_object);
        }
        saveToLocalStorage("Database", db);
        alert("Data is successfully Added.")
        window.location.reload();
    })

})