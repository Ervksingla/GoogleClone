let array = [
  "Akash",
  "Akash",
  "Ajay",
  "Bhaskar",
  "Bhawna",
  "Chetan",
  "Chris",
  "Cindrell",
  "Danny",
  "Daksh",
  "dkjjk",
  "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"
];
function func() {
  //var c=document.getElementById("namserach")

  var d = document.getElementById("namsearch").value;
  let load=document.getElementById("list")

  // console.log(document.getElementById("input"))
  let len = d.length;
  
  if (len > 0) {
    
    var html = "";
    for (let i = 0; i < array.length; i++) {
      if (array[i].toLowerCase( ).includes(d)) {
        html += `<option id=${i}>${array[i]}</option>`;   
      
      }
      // array[i].addEventListener("click",()=>{
      //   document.getElementById("namsearch").value=array[i]
      // }) 
    }
    if(html!=""){
      html='<select>'+html+'</select>'  
     load.addEventListener('click',(e)=>{
        document.getElementById("namsearch").value=e.target.value
        // document.getElementById("namsearch").

        console.log(e.target.value); 
      })    
      document.getElementById("namsearch").classList.add("otherclass");
      document.getElementById("list").innerHTML = html; 
      // console.log("if")
    }
    else{
      document.getElementById("namsearch").classList.remove("otherclass");
    }
    // sel.addEventListener("keypress" , function onEvent(event) {
      //   if(event.keypress === "Enter") {
        //     document.getElementById('list').click();
        //   }
        // });
        
        
      } else {
        document.getElementById("list").innerHTML = "";
        document.getElementById("namsearch").classList.remove("otherclass");
      }
    }
    
    // function keydown(){
      
      // }
      