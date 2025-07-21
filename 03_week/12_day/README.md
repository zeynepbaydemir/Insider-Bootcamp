## Program Çıktıları:

<img width="1620" height="768" alt="Ekran görüntüsü 2025-07-21 164923" src="https://github.com/user-attachments/assets/fb3df4fa-eb88-42f4-8b6b-2092837dd096" />
Ürünlerin listelendiği bölüm:
<img width="1632" height="813" alt="Ekran görüntüsü 2025-07-21 164951" src="https://github.com/user-attachments/assets/141be074-f547-4718-9f37-22bfd1dd293d" />

## Karşılanan İsterler

- Ürünler AJAX ile `https://fakestoreapi.com/products` API’sinden çekildi.
- Ürünler jQuery ile dinamik olarak `<div id="productList">` içine `<div class="product-card">` olarak eklendi.
- Her ürün kartında; ürün ismi, fiyatı, fotoğrafı, "Sepete Ekle" ve "Detay Göster" butonları eklendi.
- "Detay Göster" butonu Fancybox plugin’i ile ürün görselini modal olarak büyütüyor.
- İndirimdeki ürünler Slick Carousel kullanılarak slider şeklinde gösterildi.
- "Sepete Ekle" butonuna tıklanınca ilgili ürünün küçük bir kopyası `<div id="cartItems">` içine eklendi.
- Sepete eklenen ürün bilgileri LocalStorage’a kaydediliyor ve sayfa yenilense bile sepet bilgisi korundu.
- "Sepeti Temizle" butonu ile hem DOM’daki sepet ürünleri `.empty()` ile temizleniyor, hem de LocalStorage temizleniyor.
- Ürün kartları ekrana **fadeIn()** efekti ile yumuşak şekilde geliyor.
- Sepete eklenen ürünler **slideDown()** animasyonu ile görünür hale getirildi.
- Ürün kartlarında hover efekti (ölçek büyüme ve gölge) CSS ile uygulandı.
- Dinamik olarak eklenen ürün kartlarındaki "Sepete Ekle" butonlarına event delegation ile tıklama olayları bağlandı.
- jQuery seçiciler, `.closest()`, event delegation gibi ileri düzey DOM manipülasyonları kullanıldı.
- Arama kutusunda ürün başlığına göre filtreleme yapılabiliyor, arama işlemi için **debounce** uygulandı.
