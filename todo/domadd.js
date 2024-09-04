const input = document.getElementById('input')
const button = document.getElementById('btn');
const ul = document.getElementById('ul')
const div=document.getElementById('div')
button.addEventListener('click', (ele) => {
    const li = document.createElement('li');
    if (input.value === '') {
        return
    }
    li.textContent = input.value
    li.style.color = 'white'
    const rmv = document.createElement('button')
    rmv.style.backgroundColor = 'red';
    rmv.style.borderRadius = '5px'
    rmv.style.color = 'white'
    rmv.textContent = 'remove'
    rmv.addEventListener("click", () => {
        li.remove()
    });
    const edt = document.createElement('button');
    edt.style.borderRadius = '5px';
    edt.style.backgroundColor = 'blue';
    edt.style.color = 'white';
    edt.textContent = 'edit';
    edt.addEventListener('click', () => {
        div.style.backgroundColor='gray'
        input.style.visibility='hidden'
        button.style.visibility='hidden'
        // input.remove()
        // button.remove()
        rmv.remove()
        edt.remove()

        const editinput = document.createElement('input');
        editinput.value = li.textContent;
        li.textContent = '';
        li.appendChild(editinput);
        const save = document.createElement('button');
        save.textContent = 'save';
        save.style.marginLeft = '5px'
        save.style.borderRadius = '10px'
        save.style.backgroundColor = 'lightgreen';
        save.addEventListener('click', () => {
             
            input.style.visibility='visible'
            button.style.visibility='visible'
             div.style.backgroundColor='black'
            // div.style.display='block'
            
            // div.appendChild(input);
            // div.appendChild(button);
            li.textContent = editinput.value
            li.appendChild(rmv);
            li.appendChild(edt);
           
        });
        li.appendChild(save);
    })
    li.append(rmv);
    li.append(edt);
    ul.prepend(li);
   
    input.value = ''
});