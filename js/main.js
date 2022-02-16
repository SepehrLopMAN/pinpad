const passcode = prompt("Welcome\nEnter a passcode",123);
if(passcode === null || passcode != parseFloat(passcode))
   location.reload();
let submit = false;
document.querySelector('div').addEventListener('click', (event)=> {
    const IsBtn = event.target.nodeName === 'BUTTON';
    if (!IsBtn || submit)
        return;
    if (event.target.value === '' && event.target.firstElementChild.classList.contains('fas')) {
        if(event.target.firstElementChild.classList.contains('fa-backspace'))    
        document.querySelector('input').value = document.querySelector('input').value.slice(0 , document.querySelector('input').value.length - 1);
        else {
            submit = true;
            if(document.querySelector('input').value == passcode){
                document.querySelector('input').style.border = "1px solid var(--access-granted-clr)";
                document.querySelector('input').style.color  = "var(--access-granted-clr)";
                for (let element of document.querySelectorAll('button')) {
                    element.style.border = "1px solid var(--access-granted-clr)";
                    element.style.color = "var(--access-granted-clr)"; 
                    element.classList.add('access-granted');
                }
            }
            else {
                document.querySelector('input').style.border = "1px solid var(--access-denied-clr)";
                document.querySelector('input').style.color  = "var(--access-denied-clr)";
                for (let element of document.querySelectorAll('button')) {
                    element.style.border = "1px solid var(--access-denied-clr)";
                    element.style.color = "var(--access-denied-clr)"; 
                    element.classList.add('access-denied');
                }
            }
            setTimeout(() => location.reload(),3000);

        }
        return;
    }
    document.querySelector('input').value += event.target.value;
});