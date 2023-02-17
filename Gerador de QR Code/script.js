const content = document.querySelector('.content');
const qrCode = document.querySelector('.area-qrcode');
var botaoQrCode = document.querySelector('button');
var qrInput = document.querySelector('.text-box');
var qrImg = document.querySelector('.area-qrcode img');


// Abrir a área do QR Code após apertar no botão
botaoQrCode.addEventListener("click", () => {
    let qrValor = qrInput.value; // Reconhecer o valor da Input por qrValor
    console.log("Seu código QR foi criado com este valor: " + qrValor);
    if(!qrValor) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValor}`;
    content.classList.add("active");
    qrCode.style.display = "block"
});



