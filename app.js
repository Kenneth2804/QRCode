function generateQRCode() {
	const inputText = document.getElementById('inputText').value;

if (!inputText) {
	alert("Hey Cabrón mete algo al Label o q ");
	return;
}

const qrcode = new QRCode(document.getElementById('qrcode'),{
text: inputText,
width: 256,
height: 256,

});

}