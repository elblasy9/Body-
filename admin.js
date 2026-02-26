// إضافة طالب
function addStudent(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const grade = document.getElementById("grade").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email,password)
  .then(userCredential=>{
    const uid = userCredential.user.uid;
    db.collection("students").doc(uid).set({
      name, email, phone, grade
    });
    alert("تم إضافة الطالب بنجاح");
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
    document.getElementById("grade").value="";
    document.getElementById("password").value="";
  })
  .catch(error=>alert(error.message));
}

// رفع كورس
function uploadCourse(){
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const videoURL = document.getElementById("videoURL").value;

  db.collection("courses").add({
    title, description, videoURL, date: new Date()
  })
  .then(()=>{
    alert("تم رفع الكورس بنجاح");
    document.getElementById("title").value="";
    document.getElementById("description").value="";
    document.getElementById("videoURL").value="";
  })
  .catch(error=>alert(error.message));
}
