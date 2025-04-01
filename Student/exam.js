$(document).ready(function () {
    let user_data = db.student.find((v) => v.id == login.relation_id);
    // empty_db_table("exam_result")    
    let student_class = user_data.class;
    let find_class = db.class.find((i) => i.id == student_class * 1)
    // console.log(find_class);
    let exam_data = db.exam.filter((v) => v.class == find_class.class);
    let val = db.exam_result.reduce((aa, c, n) => {
        aa.push(c.assign_data);
        return aa;
    }, []);
    // console.log(val);

    let html = "";
    exam_data.forEach((v, i) => {
        v.assign.forEach((vv, ii) => {
            let sub_text = db.subject.find((s) => s.id == v.subject);
            // console.log(sub_text);
            html += '<tr>';
            html += '<td>' + vv.id + '</td>';
            html += '<td>' + vv.title + '</td>';
            html += '<td>' + sub_text.subject + '</td>';
            html += '<td>';
            let exit = val.find((m) => m.id == vv.id);
            if (typeof exit == "undefined" && vv.status == 1) {
                html += '<a href="exam_paper.html?id=' + vv.id + '" class="exam-button">Exam</a>';
            } else {
                html += '<a class="result-button" res_id=' + vv.id + '>Result</a>';
            }
            html += '</td>';
            if (typeof exit == 'undefined') {
                html += '<td>Pending...</td>';
            } else {
                html += '<td>Submitted</td>';
            }
            html += '</tr>';
        });
        $(".student-assign-list").html(html);
    });
    $(".close-the-page").click(function (i) {
        i.preventDefault();
        $('.show-list-data-of-exam').css("display", "block");
        $('.show-result').css("display", "none");

    })
    $(".result-button").click(function (e) {
        e.preventDefault();
        $('.show-list-data-of-exam').css("display", "none");
        $('.show-result').css("display", "block");
        let result_id = $(this).attr("res_id");
        result_id = result_id * 1;
        // console.log(result_id);// Done   
        let login_student = db.student.find((v) => v.id == login.relation_id * 1);
        console.log(login_student);
        let result_data = db.exam_result.reduce((a, c, i)=>{
            let log_class = db.class.find((l) => l.id == login_student.class)
            console.log(log_class);
            if(c.class_id == log_class.class){
                a.push(c.assign_data);
            }
            return a;
        }, []);
        console.log(result_data);

        result_data.forEach((v) => {
            if(v.id == result_id){
                let result = db.exam_result.find((vv) => vv.assign_data == v);
                console.log(v);
                let sub_text = db.subject.find((s)=> s.id == result.subject_id);
                $('.show-subject-of-result').text("Subject: " + sub_text.subject);
                $('.exam_title').text(v.title);
                $('.total_question').text(v.total);
                $('.question_marks').text(v.each_question_marks);
                $('.total_marks').text(v.total_marks);
                $('.pass_marks').text(v.pass_marks);
                let len = 0;
                let neg = 0;
                result.student_answer.forEach((a) => {
                    if (a.answer == a.user_answer) {
                        len++
                    }
                    else {
                        neg++
                    }
                });
                $(".right_question").text(len);
                let student_total_marks = len * v.each_question_marks;
                let neg_marks = neg * v.negative;
                student_total_marks = Math.round(student_total_marks - neg_marks);
                $(".student_marks").text(student_total_marks);
                if(v.pass_marks * 1 > student_total_marks){
                    $(".student_status").text("Fail");
                }else{
                    $(".student_status").text("Pass");
                }

            }
        })


    })





});