## Program Çıktıları:

<img width="1458" height="622" alt="image" src="https://github.com/user-attachments/assets/ddb221c4-ae3c-4289-9a54-01ca78c5cdd4" />


## Karşılanan İsterler

### 1. Statik JSON Verisi

- `studentData` adında bir dizi JavaScript içinde doğrudan tanımlandı.
- Öğrenci bilgileri `id`, `name`, `class`, `age`, `email`, `grade`, `status` gibi alanları içeriyor.

### 2. Öğrencileri Tablo/Listede Görüntüleme

- HTML'de `<table>` yapısı kullanılarak öğrenciler dinamik şekilde listeleniyor.
- `renderTable()` fonksiyonu ile veriler tabloya yazılıyor.

### 3. Yeni Öğrenci Bilgileri Ekleme

- Birden fazla `<input>` alanı ile form oluşturuldu:
  - İsim, sınıf, yaş, email, not ve durum bilgileri girilebiliyor.
- `Ekle` butonuna tıklandığında, girilen veriler JSON dizisine ekleniyor ve tablo güncelleniyor.

### 4. Öğrenci Silme

- Her tablo satırında bir “Sil” butonu var.
- Silme işlemi, tıklanan satırın `data-index` değeriyle `studentData` dizisinden çıkarılmasıyla yapılmakta.

### 5. jQuery Event Örneği: Satıra Tıklama

- Bir tablo satırına (`<tr>`) tıklandığında, arka plan rengi değişiyor.
- Bu işlem jQuery `toggleClass()` ile sağlandı ve `.clicked` sınıfı CSS’te tanımlandı.

---

---

# Ödev - İsterler

## Görev

Bir HTML sayfası oluşturun:

- Statik JSON verisi (örneğin, `studentData` adında bir dizi) kodun içinde tanımlanacak. Ayrı bir dosya yerine doğrudan JavaScript değişkeni olarak saklayabilirsiniz.

- Bu JSON verisindeki öğrencileri bir tablo veya listede görüntüleyin.

- Bir form veya birkaç `<input>` elementi ekleyerek yeni öğrenci bilgilerinin (isim ve sınıf gibi) tabloya / JSON’a eklenmesini sağlayın.

- Öğrencileri listeden silme ve basit bir etkileşim (örneğin: satıra tıklanınca rengi değişsin) gibi küçük jQuery event örnekleri ekleyin.

---
