let totalPoints = 0;
let totalUnits = 0;



var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");

var  addCourse1 = document.getElementById("addCourse1");


var course = document.getElementById("course");
var score = document.getElementById("score");
var unit = document.getElementById("unit");
var grade = document.getElementById("grade");

// var grad = 0;




addCourse1.addEventListener("click", function(){
    if(input1.value && input2.value && input3.value){
        var couse = document.createElement("li");
        couse.textContent = input1.value;
        course.appendChild(couse);
        input1.value = "";

        var sco = document.createElement("li");
        sco.textContent = input2.value;
        // console.log(input2.value);
        // console.log(typeof(input2.value));

        var conv2 = parseInt(input2.value);
        // console.log("convert:"+typeof(conv));
        score.appendChild(sco);
        input2.value = "";

var uni = document.createElement("li");
uni.textContent = input3.value;
var conv3 =parseInt(input3.value);

unit.appendChild(uni);
input3.value = "";




const gradePoint = calculateCGPA(conv2, conv3 );
console.log(gradePoint);

totalPoints += gradePoint;
// totalUnits += conv3;

// console.log(totalPoints);

totalUnits += conv3;


//call gpa
updateGPA();



// for gp 
var grade_point = document.createElement("li");
grade_point.textContent = gradePoint;
document.getElementById("grade").appendChild(grade_point);
console.log(grade_point);
  


}
})

function calculateCGPA(score, unit){
    if(score >= 70) return 4 * unit;
    if(score >= 60) return 3 * unit;
    if(score >= 50) return 2 * unit;
    if(score >= 40) return 1 * unit;
    else{
        return 0;
    }
    // return score*unit;
   }

function updateGPA(){
    // console.log(totalPoints);
    let cgpa = totalPoints / totalUnits;
    console.log(cgpa)
    document.getElementById("gpa_value").textContent = cgpa.toFixed(2);
}



// for 5.0 GPA calculate

let totalScores = 0;
let totalNumbers= 0;

var input11 = document.getElementById("input11");
var input22 = document.getElementById("input22");
var input33 = document.getElementById("input33");
var  addCourse2 = document.getElementById("addCourse2");

var course1 = document.getElementById("course1");
var score1 = document.getElementById("score1");
var unit1 = document.getElementById("unit1");
var grade1 = document.getElementById("grade1");


addCourse2.addEventListener("click", function(){
    if(input11.value && input22.value && input33.value){
        var cous = document.createElement("li");
        cous.textContent = input11.value;
        course1.appendChild(cous);
        input11.value = "";

        var scor = document.createElement("li");
        scor.textContent = input22.value;
        // console.log(input2.value);
        // console.log(typeof(input2.value));

        var conv22 = parseInt(input22.value);
        // console.log("convert:"+typeof(conv));
        score1.appendChild(scor);
        input22.value = "";

var unite = document.createElement("li");
unite.textContent = input33.value;
var conv33 =parseInt(input33.value);

unit1.appendChild(unite);
input33.value = "";




const gradePoints = calculateCGPA(conv22, conv33 );
console.log(gradePoints);

// totalPoints += gradePoints;

totalScores +=gradePoints;

// console.log(totalPoints);

// totalUnits += conv3;
totalNumbers += conv33;

//call gpa
GPACalculate();



// for gp 
var record_value = document.createElement("li");
record_value.textContent = gradePoints;
document.getElementById("grade1").appendChild(record_value);
console.log(record_value);
  


}
})
    

function calculatCGPA(score1, unit1){
    if(score1 >= 70) return 5 * unit1;
    if(score1 >= 60) return 4 * unit1;
    if(score1 >= 50) return 3 * unit1;
    if(score1 >= 45) return 2 * unit1;
    if(score1 >= 40) return 1 * unit1;
    else{
        return 0;
    }
}



function GPACalculate(){
    // console.log(totalPoints);
    let gpa = totalScores / totalNumbers;

    console.log("totalscore:"+totalScores);
    console.log("totalNUmber:"+totalNumbers);
    console.log(gpa)
    document.getElementById("gpa_value1").textContent = gpa.toFixed(2);
}


document.querySelector(".switch_Case").addEventListener("click", function(){
    document.querySelector(".container1").classList.toggle("display_none");
    document.querySelector(".container2").classList.toggle("display_none");
})