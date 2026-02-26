function login(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

auth.signInWithEmailAndPassword(email,password)

.then(function(user){

alert("تم تسجيل الدخول بنجاح");

window.location = "dashboard.html";

})

.catch(function(error){

alert(error.message);

});

}
