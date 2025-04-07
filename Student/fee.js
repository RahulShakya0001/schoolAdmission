
    let student_info = db.student.find((v) => v.id == login.relation_id);
    console.log(student_info);
    let class_info = db.class.find((v, i) => v.id == student_info.class);
    let registration_fees = class_info.registration_fees;
    let addmission_fees = class_info.admission_fees;
    let exam_fees = class_info.exam_fees;
    let total_fees = registration_fees + addmission_fees + exam_fees;
    $(".reg_fees").text("Registration Fees : " + registration_fees);
    $(".addmission_fees").text("Admission Fees : " + addmission_fees);
    $(".exam_fees").text("Exam Fees : " + exam_fees);
    $(".total_fees").text("Total Fees : " + total_fees);

    // insert pending fee
    let fee_data = db.fees.filter((v, i) => v.student_id == login.relation_id);
    var old_reg_fees = fee_data.reduce((a, c) => {
        if (c.fee_type == "registration_fees") {
            var a = a + (c.pay_fee * 1);
        }
        return a;
    }, 0);
    console.log(old_reg_fees);
    var old_admission_fees = fee_data.reduce((a, c) => {
        if (c.fee_type == "admission_fees") {
            var a = a + (c.pay_fee * 1);
        }
        return a;
    }, 0);

    var old_exam_fees = fee_data.reduce((a, c) => {
        if (c.fee_type == "exam_fees") {
            var a = a + (c.pay_fee * 1);
        }
        return a;
    }, 0);

    let student_data = db.student.find((v, i) => v.id == login.relation_id);
    var register = student_data.fee_details.registration_fees - old_reg_fees;
    var addmission = student_data.fee_details.admission_fees - old_admission_fees;
    var exam = student_data.fee_details.exam_fees - old_exam_fees;
    var total = register + addmission + exam;
    console.log(student_data.fee_details.registration_fees);
    console.log(old_reg_fees);
    console.log(exam);
    console.log(total);
    $(".pend_reg").text("Registration fees : " + register);
    $('.pend_add').text("Admission Fees: " + addmission);
    $('.pend_exam').text("Exam Fees: " + exam);
    $(".pend_total").text("Total Fees: " + total)
    console.log(db.fees);
    let special_filter = db.fees.filter((v) => v.student_id == login.relation_id );
    let htmls = "";
    console.log(special_filter);
    special_filter.forEach((v, i) => {
        htmls += '<tr>'
        htmls += '<td>' + (i + 1) + '</td>'
        htmls += '<td>' + v.fee_type + '</td>'
        htmls += '<td>' + v.pay_fee + '</td>'
        htmls += '<td>' + v.fee_date + '</td>'
        htmls += '<td>' + v.current_date + '</td>'
        htmls += '<td>' + v.remark + '</td>'
        htmls += ' </tr>'
    });
    $(".data-table-tbody").html(htmls);

// });

