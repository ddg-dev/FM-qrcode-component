const qrcode = new QRCode(document.querySelector('.qrcode'),  {
    text: "https://github.com/ddg-dev",
    width: 160,
    height: 160,
    colorDark: 'white',
    colorLight: '#2C7DFA',
})