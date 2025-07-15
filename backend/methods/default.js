const defaultRequest = (req, res) => {
  //cevabın durum kodunu belirle
  res.statusCode = 404;

  //cevaba gönderilecek içeriğin tipine header olarak eklenilecek
  //res.setHeader("Content-Type", "application/json");

  //cevabın içeriğini belirle
  res.write(JSON.stringify({ message: "İstek adresi tanımsız." }));
  //cevabı client'a gönder

  return res.end();
};

module.exports = defaultRequest;
