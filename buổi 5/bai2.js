
    function testChanLe() {
    var userInput = document.getElementById("numberInput").value;
    var number = parseInt(userInput);
    
    if (isNaN(number)) {
        alert("Đây không phải là một số hợp lệ.");
        return;
    }
    
    if (number % 2 === 0) {
    alert("Số " + number + " là số chẵn.");
    } else {
        alert("Số " + number + " là số lẻ.");
        }
    }
