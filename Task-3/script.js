let display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((elem) => {
    elem.onclick = (event) => {
        event.preventDefault();

        try {
            if (elem.dataset.button == "AC") {
                display.value = "";
            }
            else if (elem.dataset.button == "CE") {
                let string = display.value;
                display.value = string.substr(0, string.length - 1)
            }
            else if (elem.dataset.button == "%") {
                display.value = eval(display.value / 100);
            }
            else if (elem.dataset.button == "+/-") {
                display.value = eval(display.value * (-1));
            }
            else if (elem.dataset.button == "=") {
                if (display.value == "") {
                    display.value = "";
                }
                else {
                    try {
                        display.value = eval(display.value);
                    }
                    catch (error) {
                        display.value = "Error"
                        setTimeout(() => {
                            display.value = ""
                        }, 1500);
                    }
                }
            }
            else {
                display.value += elem.dataset.button;
            }

        }
        catch (error) {
            display.value = "Error"
            setTimeout(() => {
                display.value = ""
            }, 1500);
        }
    }
});