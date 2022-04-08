let forms = document.forms.login
let lbl = document.querySelector('label')
let btn = document.querySelector('button')
let pattern = {
    name: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    surname: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
    age:/^\S[0-9]{0,3}$/
}

function validate(field,regex) {
    if(regex.test(field.value)) {
        field.classList.add('valid')
        field.classList.remove('invalid')
        btn.style.background = 'blue';
    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
        btn.style.background = 'red';
        btn.setAttribute('disabled', true)
        lbl.innerHTML = 'Please fill it out';
        lbl.style.color = 'red';
    }
}


let inputs = forms.querySelectorAll('input')

inputs.forEach(input => {
    input.onkeyup = () => {
        validate(input, pattern[input.name])
    }
});

forms.onsubmit = (event) => {
    event.preventDefault()

    let arr = []

    inputs.forEach(inp => {
        arr.push(inp.classList.value)
    })

    if(arr.includes('invalid')) {
        forms.classList.add('red')
        setTimeout(() => {
            forms.classList.remove('red')
        }, 1000);
    } else {
        submit()
    }
}


function submit() {
    let userData = {}

    let fm = new FormData(forms)

    fm.forEach((value, key) => {
        console.log(value, key);
        userData[key] = value
    })

    console.log(userData);
}