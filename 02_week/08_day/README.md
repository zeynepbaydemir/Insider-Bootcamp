## Program Çıktıları:

## Karşılanan İsterler

- **Boş görev listesiyle başlama:** Sayfa yüklendiğinde görev listesi boş olarak başlıyor.
- **Görev ekleme:** Kullanıcı görev başlığı, açıklama ve öncelik seçerek yeni görev ekleyebiliyor.
- **Zorunlu alan kontrolü:** Başlık boş bırakılırsa ve öncelik seçilmezse hata mesajı gösteriliyor.
- **Form temizleme:** Görev eklendikten sonra form alanları temizleniyor.
- **DOM manipülasyonu:** Görevler dinamik olarak HTML'e ekleniyor.
- **Tamamlandı olarak işaretleme:** Görevler tamamlandı olarak işaretlenebiliyor, arka plan yeşil oluyor.
- **Görev silme:** Her görev satırında görev silme butonu bulunuyor.
- **Event Delegation:** Dinamik öğelerde `event.target` kullanılıyor, `stopPropagation()` ile kontrol sağlanıyor.
- **Filtreleme:** Kullanıcı, "Sadece tamamlananları göster" butonunu kullanarak görevleri filtreleyebiliyor.
- **Önceliğe göre sıralama:** Görevler, öncelik değerine göre **Yüksek → Orta → Düşük** şeklinde sıralanabiliyor.

---

> Bu proje, belirtilen tüm isterleri başarıyla karşılamaktadır.

---

---

# Ödev - İsterler

## Gerçek Zamanlı Görev Yönetim Uygulaması

## 1. Görev Listesi Arayüzü (HTML, CSS, JS ile Dinamik İçerik)

- Sayfa yüklendiğinde, boş bir görev listesi gösterilecek.
- Kullanıcı bir görev ekleyebilecek.
- Her görev için:
  - **Başlık** (Zorunlu Alan)
  - **Açıklama** (Opsiyonel)
  - **Öncelik**: Düşük / Orta / Yüksek (Radio butonları ile)
  - **Tamamlandı mı?** (Varsayılan olarak tamamlanmamış olacak)

---

## 2. Görev Ekleme & DOM Manipülasyonu

- Kullanıcı formu doldurup "Ekle" butonuna bastığında, yeni görev listeye eklenecek.
- Görev dinamik olarak HTML'e eklenmeli (Sayfa yenilendiğinde sıfırlanmalı).
- Form gönderildikten sonra form inputları temizlenmeli.

---

## 3. Olay Yönetimi & Event Delegation

- Kullanıcı, her görev satırında bulunan butonları kullanarak:
  - **Tamamlandı olarak işaretleyebilir.** (Yeşil bir arka plan eklenebilir)
  - **Görevi listeden silebilir.**
- `event.target` kullanılarak dinamik elemanlar dinlenmeli.
- `stopPropagation()` ile istenmeyen event bubbling önlenmeli.

---

## 4. Form Doğrulama ve Hata Yönetimi

- Kullanıcı, boş bir görev ekleyemez.
- Öncelik seçilmezse bir hata mesajı gösterilmeli.
- `try-catch` bloğu ile beklenmedik hatalar yakalanmalı.

---

## 5. Filtreleme & Sıralama (Opsiyonel)

- Kullanıcı, "Sadece tamamlananları göster" butonuna bastığında tamamlanan görevleri filtreleyebilmeli.
- Önceliğe göre sıralama seçeneği eklenebilir (**Düşük → Orta → Yüksek**).
