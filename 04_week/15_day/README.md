## Program Çıktıları:

## Karşılanan İsterler

- `appendLocation` isminde bir değişken ile dış container belirlenebilir yapıldı.
- Tüm kullanıcı verileri bu container içine append ediliyor.
- Veriler `localStorage` ile saklanıyor; farklı bir storage veya expire süresi kullanılmadı.
- Sayfa yüklendiğinde `localStorage`'da veri varsa oradan; yoksa API'den veri çekiliyor.
- Her kullanıcı kartında silme butonu yer alıyor, kullanıcıyı silince `localStorage` güncelleniyor.
- Tüm kullanıcılar silinirse, `MutationObserver` ile "Kullanıcıları Yeniden Yükle" butonu otomatik olarak gösteriliyor.
- Bu buton tıklanınca kullanıcılar yeniden API'den çekiliyor ve `sessionStorage`'a bir kayıt yapılıyor.
- `sessionStorage` kontrolü ile bu buton yalnızca bir oturumda bir kez kullanılabiliyor.
