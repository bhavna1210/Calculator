let screenValue = '';
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

for (item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        switch (buttonText) {
            case 'X':
                buttonText = '*';
                screenValue += buttonText;
                screen.value = screenValue;
                break;
            case 'AC':
                screenValue = '';
                screen.value = screenValue;
                break;
            case '=':
                screen.value = eval(screenValue);
                break;
            default:
                screenValue += buttonText;
                screen.value = screenValue;
                break;
        }
    });
}