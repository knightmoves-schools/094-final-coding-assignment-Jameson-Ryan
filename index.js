// Put your code here
let total = 0;
function addChair() {
    total += 20;
    document.getElementById("total").innerText = "Total: $" + total;
}

function addTable() {
    total += 15;
    document.getElementById("total").innerText = "Total: $" + total;
}

function addDesk() {
    total += 30;
    document.getElementById("total").innerText = "Total: $" + total;
}
