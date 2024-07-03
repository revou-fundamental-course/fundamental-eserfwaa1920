// Ini Javascript


function validateform() {
    let name = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let notes = document.getElementById('notes').value;
    let medsos = document.getElementById('medsos').value;

    console.log (name)
    console.log (email)
    console.log (gender)
    console.log (notes)
    console.log (medsos)

    if (name !=''; email !='' gender !=''|| notes !=''||medsos !='') {
        alert ('Message succes')
    } else {
        alert ('Not Respon');
    }


}