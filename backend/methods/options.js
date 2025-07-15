const optionsRequest = (req, res) => {
  //Frontendden bir post ,puth,patch,delete isteği atıldığı zaman tarayıcı öncelikle serverınbu istek tiplerini kabul ettiğini kontrol etemk amacıyla options http methoduyla istek atar.Eğer option isteğine cevap göndermezsek yukarıdaki istek türlerini api'ın kabul etmediğini sanıyor ve asıl isteği hiç bir zaman atmıyor.

  //Options isteği gelince doğru headerlarla cevap gönderirsek optionsun arkasından asıl isteği atıyor

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,DELETE,PUT,PATCH,OPTIONS"
  );

  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.end();
};

module.exports = optionsRequest;
