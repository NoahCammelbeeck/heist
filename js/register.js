const form = document.querySelector("form");

const hvadOutput = document.querySelector("#hvadOutput");
const uddybOutput = document.querySelector("#uddybOutput");
const checkOutput = document.querySelector("#checkOutput");
const telOutput = document.querySelector("#telOutput");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const hvad = formData.get("hvad");
  const uddyb = formData.get("uddyb");
  const check = formData.get("check");
  const tel = formData.get("tel");

  // 1. Saml værdierne fra formularen

  // 2. Vis værdierne i de rigtige output-felter
  hvadOutput.textContent = hvad;
  uddybOutput.textContent = uddyb;
  checkOutput.textContent = check;
  telOutput.textContent = tel;

  if(check === "on"){
  udrykning();
}

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);



function udrykning (){
  alert("Du har svaret du er i fare! Politiet er på vej til din nuværende lokation.")
}