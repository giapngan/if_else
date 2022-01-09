function changeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let result;

    if (FromC == "USD" && To == "VND") {
        result = "result :" + (Amount * 20000) + "Đ";        
    }
    else if (FromC == "VND" && To == "USD") {
        result = "result :" + (Amount / 20000) + "$";  
    } 
    else if (FromC == "VND") {
        result = "result :" + Amount + "Đ"
    } else {  
        result = "result :" + Amount + "$"   
    }
    document.getElementById("result").innerHTML = result;

}