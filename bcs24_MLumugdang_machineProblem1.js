// ITCS227 Source Code Template for 2T AY 2022-2023
/* 
    Program:    Computation of Grades using Function
    Programmer: Matthew H. Lumugdang
    Section:    BCS24
    Start Date: April 17, 2023
    End Date:   April 20, 2023
    
        Additional Notes: See machineProblem1.html for webpage table view, and through 'inspect' (right-click) -> 'console' for console table.

*/

let place = ['first','second','third','fourth','fifth']
let nameSet = [];
let enablingAssessmentGradeSet = [[],[],[],[],[]];
let summativeAssessmentGradeSet = [[],[],[],[],[]];
let majorExamGradeSet = [];
let finalDataSet = [[],[],[],[],[]]

for (let x = 0; x < 5; x++) {
    nameSet[x] = prompt(`Enter the Name of the ${place[x]} Student:`);
    for (let y = 0; y < 5; y++) {
        enablingAssessmentGradeSet[x][y] = parseInt(prompt(`Enter enabling assessment ${y+1}: `));
    }
    for (let z = 0; z < 3; z++) {
        summativeAssessmentGradeSet[x][z] = parseInt(prompt(`Enter summative assessment ${z+1}: `));
    }
    majorExamGradeSet[x] = parseInt(prompt(`Enter major exam grade: `));
}

function gradeAve(enablingAve,summativeAve,majorGrade) {
    return Math.floor((enablingAve*.3)+(summativeAve*.3)+(majorGrade*.4));
}

function grade(grade) {
    if (grade >= 90 && grade <= 100)
        return 'A';
    else if (grade >= 80)
        return 'B';
    else if (grade >= 70)
        return 'C';
    else if (grade >= 60)
        return 'D';
    else if (grade < 60 && grade >= 0)
        return 'F';
    else
        return 'Error';
}

for (let a = 0; a < 5; a++) {
    finalDataSet[a][0] = nameSet[a];
    
    finalDataSet[a][1] = Math.floor((
        enablingAssessmentGradeSet[a][0] + 
        enablingAssessmentGradeSet[a][1] + 
        enablingAssessmentGradeSet[a][2] + 
        enablingAssessmentGradeSet[a][3] + 
        enablingAssessmentGradeSet[a][4])/5);

    finalDataSet[a][2] = Math.floor((
        summativeAssessmentGradeSet[a][0] +
        summativeAssessmentGradeSet[a][1] + 
        summativeAssessmentGradeSet[a][2])/3);

    finalDataSet[a][3] = majorExamGradeSet[a];
    finalDataSet[a][4] = gradeAve(finalDataSet[a][1], finalDataSet[a][2], finalDataSet[a][3]);
    finalDataSet[a][5] = grade(finalDataSet[a][4]);
}
//From Testing
//console.log(nameSet);
//console.table(enablingAssessmentGradeSet);
//console.table(summativeAssessmentGradeSet);
//console.log(majorExamGradeSet);

console.log(`Console Table View.`);
console.table(finalDataSet);