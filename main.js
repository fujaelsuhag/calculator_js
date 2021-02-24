
function allClear() {
    document.getElementById('first_number').innerText = 0
    document.getElementById('second_number').innerText = 0
    document.getElementById('chinno').innerText = ""
    document.getElementById('result').innerText = 0

}


function typeNumber(number) {
    let chinnoGula = document.getElementById('chinno').innerText

    if (number == '+' || number == '-' || number == 'x' || number == '/') {
        document.getElementById("chinno").innerText = number
        return;
    }

    if (chinnoGula == '') {
        let first_value = document.getElementById('first_number').innerText
        if (first_value == 0) {
            document.getElementById('first_number').innerText = number
        }
        else {
            document.getElementById('first_number').innerText += number
        }
    }
    else {
        let second_value = document.getElementById('second_number').innerText
        if (second_value == 0) {
            document.getElementById('second_number').innerText = number
        }
        else {
            document.getElementById('second_number').innerText += number
        }
    }
}


function calculation(){
    let first_number = parseInt(document.getElementById('first_number').innerText)
    let second_number = parseInt(document.getElementById('second_number').innerText)
    let chinnoGula = document.getElementById('chinno').innerText

    let result = 0
    switch (chinnoGula) {
        case '+':
            result = first_number + second_number
            break
        case '-':
            result = first_number - second_number
            break
        case 'x':
            result = first_number * second_number
            break
        case '/':
            result = first_number / second_number
            break
        default:
            result = 0
    } 
    document.getElementById('result').innerText = result
}