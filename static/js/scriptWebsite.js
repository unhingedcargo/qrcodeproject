function website_onload(){
    document.getElementById("website-url").value = "";
    document.getElementById("website-qr").innerHTML = "";
}

window.onload = website_onload()

document.getElementById("createqr").addEventListener('click', (e) => {
    const qrDiv = document.getElementById("website-qr");
    qrDiv.innerHTML = "";
    const qrData = document.getElementById("website-url").value;

    new QRCode(qrDiv, {
                text: qrData,
                width: 200,
                height: 200,
                render: "canvas"
            });

});

function downloadQR() {
      const img = document.querySelector("#website-qr img");
      const canvas = document.querySelector("#website-qr canvas");

      let url;

      if (img) {
        // If it's an <img>
        url = img.src;
      } else if (canvas) {
        // If it's a <canvas>
        url = canvas.toDataURL("image/png");
      } else {
        alert("QR code not found");
        return;
      }

      const a = document.createElement("a");
      a.href = url;
      a.download = "qrcode.png";
      a.click();
    }


