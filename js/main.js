var nameInput = document.getElementById("bookName");
var urlInput = document.getElementById("bookUrl");

bookMarkArry = []

function getBook(){
  if(checkName() == true && checkUrl()== true){
    var bookObj= {
      name: nameInput.value,
      url: urlInput.value
    }
    
    bookMarkArry.push(bookObj)
    localStorage.setItem("mark" , JSON.stringify(bookMarkArry))
    displayData()
    
  }

}


function displayData(){
  var temp = "" ;
  for (var i=0; i< bookMarkArry.length; i++){
    temp += `
    <tr>
    <td>`+[i+1]+`</td>
    <td>`+bookMarkArry[i].name+`</td>
    <td>
      <button  class=" btn btn-visit" > <a  href=`+bookMarkArry[i].url+` target="_blank"  ><i class="fa-solid fa-eye"></i> Visit</a></button>
    </td>
    <td>
        <button onclick="deletepro(`+i+`)" class="btn btn-delete"> <i class="fa-solid fa-trash-can"></i> Delete</button>
    </td>
    </tr>`
  }
  document.getElementById("tableBody").innerHTML = temp
}



if(localStorage.getItem("mark") != null){
  bookMarkArry = JSON.parse(localStorage.getItem("mark"))
}

function deletepro(x){
  bookMarkArry.splice(x,1)
  localStorage.setItem("mark" , JSON.stringify(bookMarkArry))
  displayData()
  }

  var nameRegex = /^\w{3,}(\s+\w+)*$/;
var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

bookName.addEventListener("input", function () {
  validate(bookName, nameRegex);
});

bookUrl.addEventListener("input", function () {
  validate(bookUrl, urlRegex);
});

function validate(element, regex) {
  var testRegex = regex;
  if (testRegex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
};


function checkName(){
  var rgex = /^[A-Z][a-z]{3,10}[0-9]{0,2}$/
  var res = rgex.test(nameInput.value)
  console.log(res)
  if(res == true){
    document.getElementById("alertName").style.display = "none"
    return true
  }else{
    document.getElementById("alertName").style.display = "block"
    return false
  }
}


function checkUrl(){
  var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
  var result = urlRegex.test(urlInput.value)
  if(result == true){
    document.getElementById("alertUrl").style.display = "none"
    return true
  }else{
    document.getElementById("alertUrl").style.display = "block"
    return false
  }
}