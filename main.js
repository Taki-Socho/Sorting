var students_name =[];

function submit(){
    var name1=document.getElementById("NAME_OF_THE_STUDENT1").value;
    var name2=document.getElementById("NAME_OF_THE_STUDENT2").value;
    var name3=document.getElementById("NAME_OF_THE_STUDENT3").value;
    var name4=document.getElementById("NAME_OF_THE_STUDENT4").value;

    students_name.push(name1);
    students_name.push(name2);
    students_name.push(name3);
    students_name.push(name4);
 console.log(students_name);
 document.getElementById("answer").innerHTML=students_name;

 document.getElementById("Submit_button").style.display="none";
 document.getElementById("Sorting_button").style.display="inline";
}
function sorting(){
 students_name.sort();  
 console.log(students_name);
 document.getElementById("answer").innerHTML=students_name; 
}