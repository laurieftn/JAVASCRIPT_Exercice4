document.getElementById('button_valider').onclick = showAlert;

function showAlert(){
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var city = document.getElementById("city").value;

    alert('Nom : ' + firstName + '\nPrénom : ' + lastName + '\nVille : ' + city);
}








