// $(".class-schedule").css("display", "none");
$(".class-schedule").css("display", "block");

$('.class_details_page').css("display", "none");
$('.dashboard').click((v) => {
    $(".front-preview").css("display", "flex");
    // $(".class-schedule").css("display", "none");
    $('.class_details_page').css("display", "none");

});

$(".schedule").click((v) => {
    v.preventDefault();   
    $(".front-preview").css("display", "none");
    $('.class_details_page').css("display", "none");
    $(".class-schedule").css("display", "block");
    let student_info = db.student.find((vb) => vb.id == login.relation_id);
    let student_class = db.class.find((vb) => vb.id == student_info.class);
    let htmls = "";
    student_class.subject.forEach((v, i) => {
        var teacher_name = db.teacher.find((v1, i) => v1.id == v.id);
        var subject_name = db.subject.find((v2, i) => v2.id == v.id);
        htmls += "<tr>";
        htmls += "<td>" + v.id + "</td>";
        htmls += "<td>" + subject_name.subject + "</td>";
        htmls += "<td>" + v.start + "</td>";
        htmls += "<td>" + v.end + "</td>";
        htmls += "<td>" + teacher_name.name + "</td>";
        htmls += "</tr>";
    });
    $(".class-teacher-list-of-class-schedule").html(htmls);

})

