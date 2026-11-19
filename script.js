let calculator= [];
function press(value) {
    calculator.push(value);
    document.getElementById("display").value;
}
function clearAll() {
    calculator = [];
    document.getElementById("display").value;
}
function deleteOne() {
    calculator.pop();
    document.getElementById("display").value;
}
function calculate() {
    let result = eval(answer);
    document.getElementById("display").value = result;
    calculator = [result];
}