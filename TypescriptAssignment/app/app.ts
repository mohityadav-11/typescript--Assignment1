
var schoolList : Array<School>;
var studentList : Array<Student>;

let add = document.getElementById('submit')!.addEventListener("click", () => {
    var fName = document.getElementById('name')?.nodeValue;
    var age = document.getElementById('age')?.nodeValue;
    var clss = document.getElementById('class')?.nodeValue;
    var fSub = document.getElementById('favSub')?.nodeValue;
    var schoolName = document.getElementById('schlName')?.nodeValue;

    if(fName === null || age === null || clss === null || fSub === null || schoolName === null){
        alert("Fields can't be EMPTY");
    }else if(fName === undefined || age === undefined || clss === undefined || fSub === undefined || schoolName === undefined){
        alert("Fields Can't be Undefined");
    }else{
        var studentData = new Student(fName,parseInt(age),clss,fSub,);
        studentList.push(studentData);
        var schoolData = new School(studentList,schoolName);
        schoolList.push(schoolData);
    }
  });

  var searchData = document.getElementById("search")?.addEventListener("click",()=>{
    var searchData = document.getElementById("searchData")?.nodeValue
    if(searchData != null && searchData != undefined){
        schoolList.forEach(function (value) {
            console.log("Working");
            if (value.schoolName === searchData){
                var ul = document.getElementById("dynamic-list");
                var li = document.createElement("li");
                var info = value.Students;
                info.forEach(function (data){
                    li.setAttribute('id',data.Name);
                    li.appendChild(document.createTextNode(data.Name));
                    ul?.appendChild(li);
                });
            }
         });
    }
  });
