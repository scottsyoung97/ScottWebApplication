var submit = document.getElementById("submitButton")

submit.addEventListener("click", function () {

    var assignments = Number(document.getElementById("assignments").value)
    var groupProject = Number(document.getElementById("groupProj").value)
    var quizzes = Number(document.getElementById("quizzes").value)
    var exams = Number(document.getElementById("exams").value)
    var intex = Number(document.getElementById("intex").value)

    var finalPercent = (assignments * .5) + (groupProject * .1) +
        (quizzes * .1) + (exams * .2) + (intex * .1);

    var finalGrade = "";

    if (finalPercent >= 94) {
        finalGrade = "A"
    }
    else if (finalPercent >= 90) {
        finalGrade = "A-"
    }
    else if (finalPercent >= 87) {
        finalGrade = "B+"
    }
    else if (finalPercent >= 84) {
        finalGrade = "B"
    }
    else if (finalPercent >= 80) {
        finalGrade = "B-"
    }
    else if (finalPercent >= 77) {
        finalGrade = "C+"
    }
    else if (finalPercent >= 74) {
        finalGrade = "C"
    }
    else if (finalPercent >= 70) {
        finalGrade = "C-"
    }
    else if (finalPercent >= 67) {
        finalGrade = "D+"
    }
    else if (finalPercent >= 64) {
        finalGrade = "D"
    }
    else if (finalPercent >= 60) {
        finalGrade = "D-"
    }
    else {
        finalGrade = "E"
    }

    finalPercent = String(finalPercent);
    finalString = finalGrade + " " + finalPercent + "%"

    alert(finalString);

})