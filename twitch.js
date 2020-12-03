function Temporizador(initiate) {
  if (initiate !== true) {
    var btnResgate = document.querySelector(
      "button.tw-button.tw-button--success.tw-interactive"
    );
    if (btnResgate) {
        var time = new Date();
        btnResgate.click();
      console.log(`Resgatou ${time.getHours()}:${time.getMinutes()}`);
    } 
  }
  setTimeout(Temporizador, 120000);
}
