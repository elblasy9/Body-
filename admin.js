function addStudent(){

const name = name.value;
const email = email.value;
const phone = phone.value;
const grade = grade.value;
const password = password.value;

auth.createUserWithEmailAndPassword(email,password)
.then(userCredential=>{

const uid = userCredential.user.uid;

db.collection("students").doc(uid).set({

 name: name,
 email: email,
 phone: phone,
 grade: grade

});

alert("تم إضافة الطالب");

});

}
