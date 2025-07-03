## Program Çıktıları:
![Ekran görüntüsü 2025-07-03 132638](https://github.com/user-attachments/assets/b4196f34-b993-4e8c-a131-dede219c6326)

![Ekran görüntüsü 2025-07-03 132558](https://github.com/user-attachments/assets/3f65e1fb-37b0-4422-a579-80ca9c9f52f6)



# CSS Ödevi - Login ve Kayıt Sayfalarını Tasarlama

## Amaç

Dün hazırladığınız `login.html` ve `signup.html` sayfalarını, bugün öğrendiğiniz CSS bilgileriyle modern ve kullanışlı bir tasarıma kavuşturmak.

---

## Genel Kurulum

1. Proje klasörünüzde `style.css` adında tek bir CSS dosyası oluşturun.
2. Bu `style.css` dosyasını hem `login.html` hem de `signup.html` dosyalarınıza `<link>` etiketi ile bağlayın.  
   Bu sayede iki sayfa da aynı stil kurallarını kullanacak ve tutarlı görünecek.

---

## Adım Adım Görevler

### 1. Sayfa Arka Planı ve Ortalaması

- `<body>` etiketini seçerek tüm sayfanın arka plan rengini soluk bir gri veya mavi tonu yapın.
- Formun sayfada dikey ve yatay olarak ortalanmasını sağlayın.

### 2. Form Kutusu (Login/Kayıt Alanı)

- `<form>` etiketlerinizi bir `div` içine alın ve bu `div`e `.form-container` gibi bir class verin.
- `.form-container`'a şu stilleri verin:
  - Beyaz bir `background-color` ayarlayın.
  - İçeriden boşluk vermek için `padding` kullanın.
  - Köşeleri yumuşatmak için `border-radius` ekleyin.
  - Kutuyu sayfadan ayırmak için `box-shadow` ile hafif bir gölge verin.

### 3. Başlıklar ve Metinler

- "Giriş Yap" ve "Hesap Oluştur" ana başlıklarının yazı tipini ve rengini değiştirin.
- Form altındaki "Hesabın yok mu? Kayıt Ol" gibi linklerin altındaki çizgiyi kaldırın ve rengini değiştirin.

### 4. Form Elemanlarını Güzelleştirme (input ve button)

#### Input Alanları:

- Genişliklerini `%100` yaparak kutuya tam yayılmalarını sağlayın.
- `padding` ile içten boşluk vererek daha okunaklı hale getirin.
- `margin-bottom` ile her bir input'un altına boşluk bırakarak birbirlerine yapışmalarını engelleyin.
- `border` stillerini değiştirerek daha modern bir görünüm kazandırın.

#### Butonlar:

- "Giriş Yap" / "Kayıt Ol" butonlarına özel stil verin:
  - Arka plan rengini (`background-color`) ve yazı rengini (`color`) değiştirin.
  - Varsayılan kenarlığı (`border`) kaldırın.
  - Butonun üzerine gelince imlecin el işareti olmasını sağlayın.

---

## Bonus Puan İçin

- Farenizle butonun üzerine geldiğinizde arka plan renginin hafifçe değişmesini sağlayın.
- Bir input alanına tıklandığında kenarlık renginin (`border-color`) belirginleşmesini sağlayın.
- [fonts.google.com](https://fonts.google.com) adresinden seçeceğiniz bir yazı tipini projenize ekleyerek başlıklarınızda kullanın.

---
