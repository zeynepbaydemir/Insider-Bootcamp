## Program Çıktıları:

<img width="1228" height="525" alt="image" src="https://github.com/user-attachments/assets/8fa95ca2-2b11-4f30-8827-14a7e7b659ab" />


## Karşılanan İsterler

- HTML dosyasına `ins-api-users` sınıfına sahip bir `<div>` eklendi.
- Tüm içerik ve stiller JavaScript üzerinden dinamik olarak oluşturuldu ve `ins-api-users` div'ine eklendi.
- Fetch API ile `https://jsonplaceholder.typicode.com/users` adresinden kullanıcı verisi çekildi.
- API'den çekilen veri `Promise` ile yönetildi.
- Hata yönetimi yapılarak API hatalarında kullanıcıya mesaj gösterildi.
- Çekilen veriler `localStorage`'a 1 günlük süre ile kaydedildi.
- Sayfa yenilendiğinde `localStorage` kontrol edilerek veri tekrar kullanılabilir hale getirildi.
- Her kullanıcı için kullanıcı adı, e-posta ve adres bilgileri gösterildi.
- Kullanıcıları silme butonu eklendi.
- Silinen kullanıcı hem arayüzden hem de `localStorage`'tan kaldırıldı.
- Arayüz modern ve kart yapısıyla sade bir görünüme kavuşturuldu.
