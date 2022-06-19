var text = document.getElementById("numbers");

//for( var i = 0; i <= 100; i++)
var BtnAdd = document.getElementById("generator");
BtnAdd.addEventListener("click", AddNew);
function AddNew(){
    for(var i = 0; i<= 100; i++){
    newDiv = document.createElement('div');
    //console.log(newDiv);
    newDiv.className = ("newDiv");
    text.append(newDiv);
    newDiv.innerHTML += i;
    
    let isPrime = true;
    if( i == 0){
        newDiv.style.backgroundColor = "Green";
        
    }
     else if( i == 1){
        newDiv.style.backgroundColor = "yellow";  
    }
     else if( i == 2){
        newDiv.style.backgroundColor = "red";
    } else{
        for( let j = 2; j < i; j++) {
            if( i % j == 0){
                isPrime = false;
                console.log(i);
                break;
            }
        }
        if(isPrime){
            newDiv.style.backgroundColor = "red";
        } else{
            if(i % 2 == 0){
                newDiv.style.backgroundColor = "Green";
            } else{
                newDiv.style.backgroundColor = "yellow";   
            }
        }
    }
    
     
}
}
