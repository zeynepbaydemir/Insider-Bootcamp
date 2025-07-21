## Program Çıktıları:

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
