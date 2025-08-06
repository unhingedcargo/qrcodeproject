function setContactLoad() {
  const loadInput = document.querySelectorAll(".contact-input");
  
  loadInput.forEach(input => {
    input.value = "";
  });

}

window.onload = setContactLoad();

const allInput = document.querySelectorAll(".contact-input");
const dataMap = new Map();

allInput.forEach(input => {
  input.addEventListener('blur', (e) =>{
    dataMap.set(e.target.id, e.target.value);

  });
});
  
document.getElementById('create').addEventListener('click', (e) => {
  console.log(dataMap);
});

