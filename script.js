let output=document.getElementById('value');

function display(num){
    output.value+=num

}

function calculate(){
    try{
        output.value=eval( output.value)
    }
    catch{
        alert('invalid operation')
    }
  
}

function clean(){
 output.value=" "
}
 

  

function deletebut(){
    output.value=output.value.slice(0,-1)
}



    
    













  








    


















 










