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
  // console.log(dataMap.get('firstName'));
  // dataMap.forEach(entry => {

  //   if(entry){console.log(entry.length)};
  // });
  let firstName="", lastName="", title="", phone="", mobile="", emailContact="", website="", organisation="";
  if(dataMap.get('firstName')){firstName = dataMap.get('firstName')}
  if(dataMap.get('lastName')){lastName = dataMap.get('lastName')}
  if(dataMap.get('title')){title = dataMap.get('title')}
  if(dataMap.get('organisation')){street = dataMap.get('organisation')}
  if(dataMap.get('phone')){phone = dataMap.get('phone')}
  if(dataMap.get('mobile')){mobile = dataMap.get('mobile')}
  if(dataMap.get('emailContact')){emailContact = dataMap.get('emailContact')}
  if(dataMap.get('website')){firstName = dataMap.get('website')}

  const vcardData = `BEGIN:VCARD
  VERSION:3.0
  N:${lastName};${firstName};;${title};
  FN:${firstName} ${lastName}
  ORG: ${organisation}
  TEL;TYPE=WORK,MSG:${phone}
  TEL;TYPE=WORK,MOBILE:${mobile}
  EMAIL;TYPE=INTERNET:${emailContact}
  URL: ${website}
  END:VCARD`;

  console.log(vcardData);
  const qrDiv = document.getElementById("contact-qr");
  qrDiv.innerHTML = "";

  new QRCode(qrDiv, {
              text: vcardData,
              width: 200,
              height: 200,
              render: "canvas"
          });

});

