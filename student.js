// حماية الصفحات
auth.onAuthStateChanged(function(user){
  if(!user){
    window.location="login.html";
  }
});

// تسجيل الدخول في login.html
function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email,password)
  .then(function(user){
    window.location="dashboard.html";
  })
  .catch(function(error){
    alert(error.message);
  });
}

// تسجيل الخروج
function logout(){
  auth.signOut().then(()=>window.location="login.html");
}

// عرض الكورسات
db.collection("courses").orderBy("date","desc").get().then(snapshot=>{
  snapshot.forEach(doc=>{
    const course = doc.data();
    document.getElementById("courses").innerHTML += `
      <div class="card">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <iframe width="100%" height="200"
        src="${course.videoURL.replace("watch?v=","embed/")}"
        frameborder="0"
        allowfullscreen></iframe>
      </div>
    `;
  });
});
