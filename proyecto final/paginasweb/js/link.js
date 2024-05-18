/*inicio usuario*/
function formulario(){
    location.href="http://127.0.0.1:5500/Trabajo-grupal/proyecto%20final/paginasweb/formulario.html"
}




function IR() {
    var contraseña ="953899452";
    var usuario = "juancarlos";
    if (document.formulario.password.value === contraseña && document.formulario.logear.value === usuario) {
        alert("buenas:V");
    } else {
        alert("TU NO ERES PARTE DEL SISTEMA  :V  ");
    }
}







