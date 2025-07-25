## Program Çıktıları:
1.
<img width="1242" height="780" alt="image" src="https://github.com/user-attachments/assets/ae2155f1-6c7b-4a80-ae5a-5bd9a18aa580" />
2.
<img width="1088" height="282" alt="image" src="https://github.com/user-attachments/assets/62e45e82-e63c-46d6-9772-ef9262f05e57" />
3.
<img width="1086" height="185" alt="image" src="https://github.com/user-attachments/assets/9302a952-a345-41ef-8d6c-85976e5683a6" />

## Karşılanan İsterler

- `appendLocation` isminde bir değişken ile dış container belirlenebilir yapıldı.
- Tüm kullanıcı verileri bu container içine append ediliyor.
- Veriler `localStorage` ile saklanıyor; farklı bir storage veya expire süresi kullanılmadı.
- Sayfa yüklendiğinde `localStorage`'da veri varsa oradan; yoksa API'den veri çekiliyor.
- Her kullanıcı kartında silme butonu yer alıyor, kullanıcıyı silince `localStorage` güncelleniyor.
- Tüm kullanıcılar silinirse, `MutationObserver` ile "Kullanıcıları Yeniden Yükle" butonu otomatik olarak gösteriliyor.
- Bu buton tıklanınca kullanıcılar yeniden API'den çekiliyor ve `sessionStorage`'a bir kayıt yapılıyor.
- `sessionStorage` kontrolü ile bu buton yalnızca bir oturumda bir kez kullanılabiliyor.
