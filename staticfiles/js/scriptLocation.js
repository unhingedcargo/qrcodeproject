function website_onload(){
    document.getElementById("location-url").value = "";
    document.getElementById("location-qr").innerHTML="";
}

window.onload = website_onload()

document.getElementById("createlocationqr").addEventListener('click', (e) => {
    const qrDiv = document.getElementById("location-qr");
    qrDiv.innerHTML = "";
    const qrData = document.getElementById("location-url").value;
    console.log(qrData);
    new QRCode(qrDiv, {
                text: qrData,
                width: 400,
                height: 400,
                render: "canvas"
            });

});

function downloadQR() {
    const img = document.querySelector("#website-qr img");
    const canvas = document.querySelector("#website-qr canvas");
    if (!img) {
        alert("QR code not found");
        return;
    }

//   const url = canvas.toDataURL("image/png");
    

  const a = document.createElement("a");
  a.href = img.src;
  a.download = "qrcode.png";
  a.click();
}


