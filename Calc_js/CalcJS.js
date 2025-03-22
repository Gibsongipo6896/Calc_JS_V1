const display = document.getElementById("display");

const ongezaChar = (data) =>{
    if (display.value === "Empty EQ" || display.value == "Error"){
        display.value = "";
        display.value += data;
    }
    else{
        display.value += data;
    }
}

const rubbChars = () => {
    display.value = "";
}

const rubbOne = () => {
    display.value = display.value.slice(0,-1)
}

const calculate = () => {
    if (display.value === "" || display.value == null){
        display.value = "Empty EQ";
    }
    else{
        try{
            display.value = eval(display.value);
        }
        catch{
            display.value = "Error";
        }
      
    }
}


