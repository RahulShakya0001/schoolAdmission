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

let option = "";
let teacher_data = db.teacher.find((v) => v.id == login.relation_id);
teacher_data.select_mul_class.forEach((v) => {
    let class_data = db.class.find((i) => i.id == parseInt(v));
    option += "<option value='" + v + "'>" + class_data.class + "</option>";
});
$(".class-for-homework").append(option);

$(".submit-button-homework").click(() => {
    var a = db.homework;
    var sortVal = a.sort((s, b) => b.id - s.id)[0];
    var oj = sortVal != null ? sortVal.id : 0;

    let class_value = $(".class-for-homework").val();
    let homework_date = $(".choose-date-div input").val();
    let title = $(".title-enter input").val();
    let content = $('#summernote').summernote('code');

    if (class_value && homework_date && title && content) {
        if (db.homework.some((v1) => v1.class == class_value && v1.date == homework_date)) {
            alert("Data is Already Exist");
        } else {
            let obj = {
                id: oj + 1,
                class: class_value,
                date: homework_date,
                title: title,
                content: content,
                student_answer: []
            };
            db.homework.push(obj);
            saveToLocalStorage("Database", db);
            $('.form-reset')[0].reset();
            $('.content-textarea').val("")
            alert("Homework added successfully!");
        }
    } else {
        alert("Fill All Input.");
    }
});
