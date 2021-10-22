
function Calcular() {

  var num1=Number(document.getElementById('num1').value);
  var num2=Number(document.getElementById('num2').value);
  if(miCheckboxs.checked) {
      var resuls = num1 + num2;
      document.getElementById('resuls').value=resuls;
    } else {
      alert('no se marco la operacion suma');
    }
  if(miCheckboxr.checked){
    var resulr= num1-num2;
    document.getElementById('resulr').value=resulr;
  } else {
      alert('no se marco la operacion resta');
    } 
      if(miCheckboxm.checked){
    var resulm= num1*num2;
    document.getElementById('resulm').value=resulm;
  } else {
      alert('no se marco la operacion multiplicar');
    }  
    if(miCheckboxd.checked){
    var resuld= num1/num2;
    document.getElementById('resuld').value=resuld;
  } else {
      alert('no se marco la operacion division');
    } 

}
function Calcular2() {
var num1=Number(document.getElementById('num1').value);
var par=num1;
var num2=Number(document.getElementById('num2').value);
var numS;
if (document.getElementById('n1').checked) {
  if(miCheckboxf.checked){
    var f=1;
    for ( var i = 1; i<=num1; i++){
        f= f*i;
      }
      document.getElementById('resulf').value=f; 
      mensaje.innerText='el factorial de:'+num1; 
    }
  if(par % 2 == 0){
    document.getElementById('miChecpar').checked='true';
  }else{document.getElementById('miChecimpar').checked='true';}
  /*
  for (var e=1; e<num1; e++){
    if(num1 % e == 0){
      var s= s+e;
    }
    if(s == num1){
    
      document.getElementById('miChecper').checked='true';
    }
  }*/
  //alert(num1);
}else{
  numS=document.getElementById('n2').value;
  alert(num2);
}
}