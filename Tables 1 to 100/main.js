let inputNm = 0;

let lbtn = document.getElementById("lbtninput");
let rbtn = document.getElementById("rbtninput");

let maintable = document.getElementById("maintable");

let inputNumber = document.getElementById("imputNum");

let iptbltext = document.getElementById("iptbltext");

let maintabletxt = document.getElementById("maintabletxt");


rbtn.onclick  = function rbtnval() {
  if (inputNm < 100) {
   //window.alert(inputNm++); // Tab to edit
    iptbltext.value = 1+inputNm++;
    let tableContent = "";
    let zero = "0";
    for (m=1; m<=10; m++) {
      if(m<10)
     { let line = inputNm+" * "+zero+m+" = "+inputNm*m;
      console.log(inputNm+" * "+m+" = "+inputNm*m);
      
      tableContent += line + "\n";
      maintabletxt.value = tableContent.trim();
}
      else {
        let line = inputNm+" * "+m+" = "+" "+inputNm*m;
      console.log(inputNm+" * "+m+" = "+inputNm*m);
      
      tableContent += line + "\n";
      maintabletxt.value = tableContent.trim();
      }
    }
    
  }
  if (inputNm >=1){
    iptbltext.style.display="flex";
    
    maintabletxt.style.display="block";
    maintabletxt.style.transition = 2+"s";
  }

}

/*lbtn.onclick = function() {
  if (inputNm !=0 && inputNm>0) {

   //window.alert(inputNm++); // Tab to edit
    iptbltext.value=inputNm-- -1;
    for (m=1; m<=10; m++) {
      let lines = inputNm+" * "+m+" = "+inputNm*m;
      console.log(inputNm+" * "+m+" = "+inputNm*m);
      maintabletxt.value =lines;
    }



  }
  if (inputNm == 0){
    iptbltext.style.display="none";
    maintabletxt.style.display="none";
  }
  else if (inputNm >=1){
    iptbltext.style.display="flex";
  }

}*/

lbtn.onclick = function() {
  if (inputNm !=0 && inputNm>0) {

   //window.alert(inputNm++); // Tab to edit
   let tableContent = "";
    iptbltext.value=inputNm-- -1;
    let zero = "0";
    for (m=1; m<=10; m++) {
      if(m<10)
      {
      let line = inputNm+" * "+zero+m+" = "+inputNm*m;
      console.log(inputNm+" * "+m+" = "+inputNm*m);
      
      tableContent += line + "\n";
      maintabletxt.value = tableContent.trim();
    }
    else {
      let line = inputNm+" * "+m+" = "+inputNm*m;
      console.log(inputNm+" * "+m+" = "+inputNm*m);
      
      tableContent += line + "\n";
      maintabletxt.value = tableContent.trim();
    }
  }



  }
  if (inputNm == 0){
    iptbltext.style.display="none";
    maintabletxt.style.display="none";
  }
  else if (inputNm >=1){
    iptbltext.style.display="flex";
  }

}


iptbltext.oninput = function() {
  
  if (iptbltext.value !=0 && iptbltext.value>0) {
   //window.alert(inputNm++); // Tab to edit
   let tableContent = "";
    let iptbltext2=iptbltext.value;
    let zero = "0";
    for (m=1; m<=10; m++) {
      if(m<10)
      {
      let line = iptbltext2+" * "+zero+m+" = "+iptbltext2*m;
      console.log(iptbltext2+" * "+m+" = "+iptbltext2*m);
      
      tableContent += line + "\n";
      maintabletxt2 = tableContent.trim();
    }
    else {
      let line = iptbltext2+" * "+m+" = "+iptbltext2*m;
      console.log(iptbltext.value+" * "+m+" = "+iptbltext2*m);
      
      tableContent += line + "\n";
      maintabletxt.value = tableContent.trim();
    }
  }



  }
  if (iptbltext2 == 0){
    maintabletxt.style.display="none";
  }
  else if (iptbltext2 >=1){
    iptbltext.style.display="flex";
  }

}