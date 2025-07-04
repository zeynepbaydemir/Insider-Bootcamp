## Program Çıktıları:

## Karşılanan İsterler

### HTML Yapısı

- Sayfanın en üstüne `<h1>` etiketiyle **"Yeni Sezon Ürünleri"** başlığı eklendi.
- Ürün kartlarının tamamını kapsayan bir ana konteyner oluşturuldu: `.product-grid`.
- Her ürün için `.product-card` sınıfı kullanıldı.
  - Kartın içinde:
    - **Resim alanı:** `.product-image` div’i içinde `<img>`.
    - **Bilgi alanı:** `.product-info` div’i içinde ürün başlığı `<h3>`, fiyat `<p>` ve **"Sepete Ekle"** butonu `<button>`.
- Kart yapısı çoğaltılarak **10 adet farklı ürün** hazırlandı. Her birinin başlığı ve fiyatı gerçekçi şekilde düzenlendi.

---

### CSS Düzeni

#### Grid Düzeni

- `.product-grid` sınıfı için **CSS Grid** düzeni kuruldu.
- Kartlar arasında `gap` ayarlandı.
- **Bonus:** `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));` kullanılarak vitrin, ekran boyutuna göre otomatik sütun düzeni alacak şekilde esnek hale getirildi.

#### Kart İçeriği (Flexbox)

- `.product-card` içinde **Flexbox** kullanılarak içerik dikeyde hizalandı.
- Butonun kart yükseklikleri değişse bile her zaman kartın altına sabitlenmesi için `margin-top: auto;` kullanıldı.
- Tüm kartlara `border`, `background-color` ve `box-shadow` gibi temel stiller verildi.

#### Hover Efektleri

- Kartların üzerine gelindiğinde `transform` ile kart hafifçe yukarı kalkıyor.
- `box-shadow` değeri artırılarak hover efekti güçlendirildi.
- `transition` özelliğiyle geçişler yumuşak hale getirildi.

---

### Responsive Tasarım

- **@media queries** kullanılarak vitrin farklı cihazlarda uyumlu hale getirildi:
  - `max-width: 1024px` → 3 sütun
  - `max-width: 768px` → 2 sütun
  - `max-width: 480px` → 1 sütun
- Ayrıca, **modern teknik olarak** `repeat(auto-fill, minmax(250px, 1fr))` kullanılarak grid sütunlarının dinamik davranması sağlandı.

---

### Bonus Özellikler

- Bazı ürün kartlarına `.sold-out` sınıfıyla **"Tükendi" rozeti** eklendi.
- Rozet, `.product-image` alanı içinde `position: absolute;` ile resmin sol üst köşesine konumlandırıldı.

---

---

# Ödev - İsterler

## Bootcamp 3. Gün: CSS Ödevi - Sıfırdan Responsive Ürün Vitrini

### Amaç

Sıfırdan başlayarak, hem HTML yapısını kurup hem de modern CSS teknikleriyle responsive ve interaktif bir ürün listeleme vitrini tasarlamak.  
Bu proje, bugüne kadar öğrendiğiniz tüm bilgileri (HTML, CSS, Flexbox, Grid, Responsive Tasarım) birleştirmenizi sağlayacak.

---

## Görev 1: HTML İskeletini Oluşturma (`index.html`)

1. **Ana Başlık:**  
   Sayfanın en üstüne, kullanıcıların göreceği bir `<h1>` etiketi ile `"Yeni Sezon Ürünleri"` gibi bir başlık ekleyin.

2. **Ana Konteyner:**  
   Tüm ürün kartlarını içinde barındıracak bir ana div oluşturun ve ona `class="product-grid"` adını verin.

3. **Ürün Kartı Yapısını Tasarlayın:**

   - `product-grid`'in içine, tek bir ürünü temsil edecek bir div oluşturun ve `class="product-card"` adını verin.
   - Bu kartın içine iki ana bölüm ekleyin:
     - **Resim Alanı:**
       ```html
       <div class="product-image">
         <img src="https://via.placeholder.com/300" alt="Ürün Görseli" />
       </div>
       ```
     - **Bilgi Alanı:**
       ```html
       <div class="product-info">
         <h3>Modern Lamba</h3>
         <p>749.99 TL</p>
         <button>Sepete Ekle</button>
       </div>
       ```

4. **Kartları Çoğaltın:**  
   Oluşturduğunuz `.product-card` yapısını kopyalayıp yapıştırarak `.product-grid` içerisinde toplam **6 adet ürün kartı** olmasını sağlayın.  
   Her birinin başlığını ve fiyatını değiştirerek vitrininizi daha gerçekçi hale getirin.

---

## Görev 2: Vitrini CSS ile Hayata Geçirme (`style.css`)

1. **Izgara Düzenini Kurun (Grid):**

   - `.product-grid` seçicisini hedefleyerek grid kuralını uygulayın.
   - Geniş ekranlar için 4 sütunlu bir vitrin oluşturun.
   - Kartlar arasına boşluklar ekleyin.

2. **Kart İçini Hizalayın (Flexbox):**

   - `.product-card` sınıflarına `border`, `background-color`, `box-shadow` gibi temel stil özellikleri vererek kart görünümünü oluşturun.
   - `.product-info` alanı içindeki başlık, fiyat ve butonu dikey olarak hizalayın.
   - Tüm `"Sepete Ekle"` butonlarının, kart yükseklikleri farklı olsa bile en altta hizalayın.

3. **İnteraktif Efektler Ekleyin (Transition & Transform):**

   - Bir kartın üzerine fare ile gelindiğinde, `transform` ile kartın hafifçe yukarı kalkmasını ve gölgesinin artmasını sağlayın.
   - Bu efekti `transition` özelliği ekleyerek yumuşak hale getirin.

4. **Responsive Tasarımı Tamamlayın (Media Queries):**

   - Oluşturduğunuz vitrinin farklı cihazlarda düzgün görünmesi için `@media` kuralları yazın.
   - **Tabletler için (max-width: 1024px):** Vitrindeki sütun sayısını 3'e düşürün.
   - **Dikey Tabletler/Büyük Telefonlar için (max-width: 768px):** Sütun sayısını 2'ye düşürün.
   - **Mobil Telefonlar için (max-width: 480px):** Vitrini tek sütunlu bir yapıya geçirin.

---

## 🎯 Bonus Puan İçin

- Media query'leri tek tek yazmak yerine, `grid-template-columns` için

  ```css
  repeat(auto-fill, minmax(250px, 1fr));
  gibi gelişmiş bir teknik kullanarak vitrininizin kendini otomatik olarak ayarlamasını araştırıp uygulayın.

  ```

- Bazı ürün kartlarına position: absolute ile "Tükendi" gibi bir rozet ekleyerek konumlandırma bilginizi pekiştirin.
