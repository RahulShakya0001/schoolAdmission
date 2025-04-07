let ids = window.location.href.split("=");
let exam_sub_id = ids.length > 1 ? Number(ids[1]) : null;

let login_student = db.student.find((v) => v.id == login.relation_id);
console.log(login_student);

let exam_data = db.exam.reduce((a, c) => {
    let exam_data_actual = db.exam.find((v) => Number(v.class) == exam_sub_id);
    console.log(exam_data_actual);

    if (exam_data_actual?.question_data?.length > 0) {
        exam_data_actual.question_data.forEach((question) => {
            a.push(question);
        });
    }
    return a; 
}, []);

console.log(exam_data);

let val = db.exam_result.reduce((aa, c, n) => {
    aa.push(c.question_data)
    return aa
}, []);
console.log(val);
if (typeof exam_data != 'undefined') {
    let assign_data = db.exam.reduce((v, c, i) => {
        c.assign.forEach((vv, ii) => {
            if (vv.id == exam_sub_id) {
                v.push(vv);
            }
        });
        return v;
    }, [])
    console.log(assign_data);
    assign_data = assign_data.find((s) => s.status === 1);
    exam_data.forEach((vv) => {
        let exit = val.find((m) => m.id == assign_data.id);
        if (typeof assign_data != "undefined" && typeof exit == 'undefined') {
            $(".paper-name-main").text(assign_data.title);
            let ques_no = 1;
            let question_data = vv.question_data.find((a) => a.id == ques_no);
            // console.log(question_data);
            question(question_data)
            $(".current_id").val(ques_no);
            // let current_id = $(".current_id").val()
            var ary = [];
            $(".button-section-next").click(function (e) {
                e.preventDefault();
                let current_id = $(".current_id").val();
                current_id = (current_id * 1);
                let value = $(':radio:checked').val();
                let obj = {
                    q_id: current_id,
                    value: value
                }
                if (ary.some((v) => {
                    return v.q_id == current_id;
                })) {
                    let index = ary.findIndex((vv) => vv.q_id == current_id);
                    ary.splice(index, 1, obj);
                } else {
                    ary.push(obj);
                }

                let ary_length = assign_data.total;
                current_id++;
                if (current_id <= assign_data.total) {
                    $('.current_id').val(current_id);
                    var question_data = vv.question_data.find((a) => a.id == current_id);
                    question(question_data);
                }
                if (current_id == (ary_length * 1)) {
                    $('.button-section-next').css("display", "none")
                    $('.button-section-finish').css("display", "block")
                    $('.button-section-previous').css("display", "block");
                }
                else {
                    $('.button-section-next').css("display", "block")
                    $('.button-section-previous').css("display", "block");
                    $('.button-section-finish').css("display", "none")
                }
                color(ary)
            });

            $(".button-section-previous").click(function (e) {
                e.preventDefault();
                let current_id = $('.current_id').val();
                current_id = (current_id * 1);
                let value = $(':radio:checked').val();
                obj = {
                    q_id: current_id,
                    value: value,
                }
                if (ary.some((v) => {
                    return v.q_id == current_id
                })) {
                    let index = ary.findIndex((vv) => vv.q_id == current_id);
                    ary.splice(index, 1, obj);
                }
                else {
                    console.log(obj);
                    ary.push(obj);
                }
                current_id--;
                if (current_id > 0 && current_id <= assign_data.total) {
                    $('.current_id').val(current_id)
                    var question_data = vv.question_data.find((a) => a.id == current_id);
                    question(question_data)
                }
                if (current_id == 1) {
                    $('.button-section-previous').css("display", "none")
                    $('.button-section-next').css("display", "block")
                }
                else {
                    $('.button-section-next').css("display", "block")
                    $('.button-section-finish').css("display", "none")
                }
                color(ary);
            });

            let time = assign_data.time_duration
            let min = time - 1;
            let sec = 60
            setInterval(function () {
                if (min == 0 && sec == 1) {
                    var q_ary = []
                    ary.forEach((a, ii) => {
                        var ans = typeof a.value != 'undefined' ? a.value : '';
                        var q_data = vv.question_data.find((q) => q.id == a.q_id);
                        ob = {
                            question: q_data.question,
                            a: q_data.a,
                            b: q_data.b,
                            c: q_data.c,
                            d: q_data.d,
                            answer: q_data.answer,
                            user_answer: ans,
                        }
                        q_ary.push(ob)
                    });
                    obj = {
                        student_id: login.relation_id,
                        exam_id: vv.id,
                        class_id: vv.class,
                        subject_id: vv.subject,
                        assign_data: assign_data,
                        student_answer: q_ary
                    }
                    // db_insert("exam_result", obj);
                    db.exam_result.push(obj);
                    saveToLocalStorage("Database", db)
                    window.location.href = './exam.html';
                }
                else {
                    sec--
                    if (sec == 0) {
                        min--
                        sec = 60
                        if (min == 0) {
                            min = min
                        }
                    }
                }
                $('.timer-section-main').text(min + ": " + sec);
            }, 1000)



            $('.button-section-finish').click(function (e) {
                e.preventDefault();
                let current_id = $('.current_id').val();
                current_id = (current_id * 1);
                let value = $(':radio:checked').val();
                obj = {
                    q_id: current_id,
                    value: value,
                }
                if (ary.some((v) => {
                    return v.q_id == current_id
                })) {
                    let index = ary.findIndex((vv) => vv.q_id == current_id);
                    ary.splice(index, 1, obj);
                }
                else {
                    ary.push(obj);

                }

                let q_ary = []
                ary.forEach((a, ii) => {
                    let ans = typeof a.value != 'undefined' ? a.value : '';
                    console.log(ans);
                    let q_data = vv.question_data.find((q) => q.id == a.q_id);
                    ob = {
                        question: q_data.question,
                        a: q_data.a,
                        b: q_data.b,
                        c: q_data.c,
                        d: q_data.d,
                        answer: q_data.answer,
                        user_answer: ans,
                    }
                    q_ary.push(ob)
                });
                obj = {
                    student_id: login.relation_id,
                    exam_id: vv.id,
                    class_id: vv.class,
                    subject_id: vv.subject,
                    assign_data: assign_data,
                    student_answer: q_ary
                }
                db.exam_result.push(obj)
                saveToLocalStorage("Database", db)
                window.location.href = './exam.html';
            });

            function color(ary) {
                console.log(ary);
                if (ary != '') {
                    ary.forEach((v) => {
                        if (typeof v.value != 'undefined') {
                            $('.box-section .box:nth-child(' + v.q_id + ')').css("background-color", "green");
                            $('.box-section .box:nth-child(' + v.q_id + ')').css("color", "white");
                        }
                        else {
                            $('.box-section .box:nth-child(' + v.q_id + ')').css("background-color", "#DF2E38")
                            $('.box-section .box:nth-child(' + v.q_id + ')').css("color", "white")
                        }
                    });
                }
            };
            color('')
            function question(question_data) {
                if (ary != undefined) {
                    var val = ''
                    ary.forEach((v) => {
                        if (v.q_id == question_data.id) {
                            val = v.value
                        }
                    });
                };
                var html = '';
                html += '<div>';
                html += '<div class="question-sec">';
                html += '<p class="question-section-main">' + question_data.id + ' ' + question_data.question + ';</p>';
                html += '</div>';
                html += '<div class="option-sec">';
                html += '<div class="first-option-sec">';
                html += '<div class="option">';
                html += '<label>A: </label>';
                html += '<input id="a" type="radio" class="aa" ' + (val == "a" ? 'checked="true"' : '') + ' name="option" value="a"> '
                html += '<label for="a"  id="opt_a">' + question_data.A + '</label>'
                html += '</div>';
                html += '<div class="option">';
                html += '<label>C: </label>';
                html += '<input id="b" type="radio" class="aa" name="option" ' + (val == "b" ? 'checked="true"' : '') + ' value="b" >'
                html += '<label for="b"  id="opt_b">' + question_data.B + '</label>'
                html += '</div>';
                html += '</div>';
                html += '<div class="secont-option-sec">';
                html += '<div class="option">';
                html += '<label>B: </label>';
                html += '<input id="c" type="radio" class="aa" name="option" ' + (val == "c" ? 'checked="true"' : '') + ' value="c"> '
                html += '<label for="c"  id="opt_c">' + question_data.C + '</label>'
                html += '</div>';
                html += '<div class="option">';
                html += '<label>D: </label>';
                html += '<input id="d" type="radio" class="aa" name="option" ' + (val == "d" ? 'checked="true"' : '') + ' value="d">'
                html += '<label for="d"  id="opt_d">' + question_data.D + '</label>'
                html += '</div>';
                html += '</div>';

                html += '</div>';

                html += '</div>';
                $('.second-section').html(html);
            }
            var html = '';
            for (let i = 0; i < assign_data.total; i++) {
                html += "<div class='box-section'>"
                html += "<div class='box' id=" + (i + 1) + ">" + (i + 1) + "</div>"
                html += "</div>"
            }
            $('.answer-section').html(html);
        } else {
            alert("Your Exam Time is Out")
            // window.location.href = './exam.html'
        }
    })
} else {
    alert("Your Exam Time is Out")
    // window.location.href = './exam.html'
}
