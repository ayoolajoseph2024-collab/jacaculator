function press(value) {
    document.getElementById("display").value += value;
}

function clearAll() {
    document.getElementById("display").value = "";
}

function deleteOne() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");

    if (display.value === "") {
        alert('you have not input any thing')
    }

    display.value = eval(display.value);
}
