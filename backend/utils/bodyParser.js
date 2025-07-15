//isteğin body kısmındaki veriye ulaşabilmek için parça parça gelen bütün byte'ları birleştirip fonksiyonun çağrıldığı yere return et

const bodyParser = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";

      //frontendten body nin her parşası geldğinde onu al ve yukarıdaki stringe ekle
      req.on("data", (chunk) => {
        body += chunk;
      });

      //yüklenme bittiğinde json verisini js verisine çevir
      req.on("end", () => {
        //fonksiyonu çağırıldığı yere body içeriğini return et
        resolve(JSON.parse(body));
      });
    } catch (err) {
      //hata oluşursa hatayı döndür
      reject(err);
    }
  });
};

module.exports = bodyParser;
