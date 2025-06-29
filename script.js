const validPhone = "3792308586";
let generatedCode = "";

function sendCode() {
  const phone = document.getElementById("phone").value;
  const msg = document.getElementById("msg");

  if (phone !== validPhone) {
    msg.textContent = "Numărul nu este autorizat.";
    return;
  }

  // Simulăm trimiterea codului SMS
  generatedCode = String(Math.floor(100000 + Math.random() * 900000));
  console.log("Cod trimis prin SMS (simulat):", generatedCode);

  msg.textContent = "Cod trimis! Verifică SMS-ul.";
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
}

function verifyCode() {
  const code = document.getElementById("code").value;
  const msg = document.getElementById("msg");

  if (code === generatedCode) {
    msg.textContent = "Autentificare reușită!";
    setTimeout(() => {
      window.location.href = "admin.html";
    }, 1000);
  } else {
    msg.textContent = "Cod greșit.";
  }
}
