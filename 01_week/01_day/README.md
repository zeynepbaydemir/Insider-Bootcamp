# HTML Ödevi: İnteraktif Login ve Signup Sayfaları

## Amaç

İki ayrı HTML sayfası oluşturarak aralarında geçiş yapmayı ve farklı amaçlar için form tasarlamayı öğrenmek.

## Mini Proje Açıklaması

Bu projede iki adet HTML dosyası oluşturacaksınız: `login.html` ve `signup.html`.

- `login.html` sayfasında bir kullanıcı giriş formu olacak.
- `signup.html` sayfasında yeni bir kullanıcı kayıt formu olacak.
- En önemlisi, bu iki sayfa arasında kolayca gezinebilmek için linkler bulunacak.

---

## Görevler

### Görev 1: `login.html` (Giriş Sayfası)

1. **Dosyayı Oluştur:** `login.html` adında yeni bir HTML dosyası oluşturun ve temel HTML yapısını kurun.
2. **Sayfa Başlığı:** `<title>` etiketini kullanarak sayfa başlığını `"Giriş Yap"` olarak ayarlayın.
3. **Ana Başlık:** Sayfanın içerisine en büyük başlık etiketi (`<h1>`) ile `"Giriş Yap"` yazın.
4. **Giriş Formu:** Bir form oluşturun. İçinde şunlar olmalı:

   - **E-posta Alanı:**
     - "E-posta:" yazan bir `label`.
     - `type="email"` olan bir `input`.
   - **Şifre Alanı:**
     - "Şifre:" yazan bir `label`.
     - `type="password"` olan bir `input`.

   **Önemli:** Her `label` için `for` ve ilgili `input` için `id` niteliğini kullanarak ikisini birbirine bağlayın.

   - **Buton:** Formu göndermek için `type="submit"` olan bir `button` ekleyin.

5. **Kayıt Sayfasına Yönlendirme:**
   - Formun altına, kullanıcıyı kayıt sayfasına yönlendirecek bir link ekleyin.
   - **Örnek:** `Hesabın yok mu? Hemen Kayıt Ol`

---

### Görev 2: `signup.html` (Kayıt Sayfası)

1. **Dosyayı Oluştur:** `signup.html` adında ikinci bir HTML dosyası oluşturun ve yine temel yapıyı kurun.
2. **Sayfa Başlığı:** `<title>` etiketini `"Kayıt Ol"` olarak ayarlayın.
3. **Ana Başlık:** Sayfanın gövdesine en büyük başlık etiketi (`<h1>`) ile `"Hesap Oluştur"` yazın.
4. **Kayıt Formu:** Yeni bir form oluşturun. Giriş formundan daha fazla alan içermeli:

   - Ad Soyad Alanı
   - E-posta Alanı
   - Şifre Alanı
   - Buton

   **Önemli:** Aynı şekilde `input type`’larına ve `label`–`input` eşleşmesine dikkat edilmelidir.

5. **Giriş Sayfasına Yönlendirme:**
   - Formun altına, kullanıcıyı giriş sayfasına geri yönlendirecek bir link koyun.
   - **Örnek:** `Zaten bir hesabın var mı? Giriş Yap`

---

## Bonus Puan İçin

- `login.html` sayfasına **"Beni Hatırla"** seçeneği ekleyin (`<input type="checkbox">` & `<label>`).
- `signup.html` sayfasına **"Şifreyi Onayla"** inputu ekleyin.
- Tüm input alanlarına `placeholder` niteliği ekleyerek kullanıcılara ipucu verin.
- Formlardaki **E-posta** ve **Şifre** alanlarına `required` niteliği ekleyerek doldurulmalarını zorunlu hale getirin.

---

## Nasıl Çalışmalı?

- `login.html` dosyasını tarayıcıda açtığınızda giriş formunu görmelisiniz.
- `"Hemen Kayıt Ol"` linkine tıkladığınızda `signup.html` sayfası açılmalı.
- Oradan da `"Giriş Yap"` linkine tıklayarak geri dönebilmelisiniz.

## Program çıktıları:

![image](https://github.com/user-attachments/assets/9af8c6cb-364a-4892-b623-6460be4fbb1e)

![image](https://github.com/user-attachments/assets/db001262-7b31-421c-97e1-4ff274a36307)

