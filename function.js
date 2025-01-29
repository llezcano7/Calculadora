const display = document.querySelector('.display');
const btn = document.querySelectorAll('.btn');

btn.forEach(btn => {
    btn.addEventListener ('click', () =>{

        const pressedbtn = btn.textContent;

        if(btn.id === 'c'){
            display.textContent = '0';
           return
    };
    console.log(btn.id);
     if (btn.id === 'delete') {
        if (display.textContent.length === 1 || display.textContent === 'error') {
            display.textContent = '0';
        } else {
                display.textContent = display.textContent.slice(0, -1);
            }
            return;
        } 
        if (btn.id === "same") {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'error';
            }
            return;
        }
        if (display.textContent === '0' || display.textContent === 'error') {
            display.textContent = pressedbtn;
        } else {
            display.textContent += pressedbtn;
     }
    });
});