function addHeadLinks() {
  const head = document.head;

  // Google Fonts
  const fontLink = document.createElement("link");
  fontLink.href = "https://fonts.googleapis.com/css2?family=Inter&display=swap";
  fontLink.rel = "stylesheet";
  head.appendChild(fontLink);

  // Slick CSS
  const slickCss = document.createElement("link");
  slickCss.rel = "stylesheet";
  slickCss.href =
    "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css";
  head.appendChild(slickCss);

  const slickThemeCss = document.createElement("link");
  slickThemeCss.rel = "stylesheet";
  slickThemeCss.href =
    "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css";
  head.appendChild(slickThemeCss);

  // Fancybox CSS
  const fancyCss = document.createElement("link");
  fancyCss.rel = "stylesheet";
  fancyCss.href =
    "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css";
  head.appendChild(fancyCss);

  // jQuery
  const jqScript = document.createElement("script");
  jqScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
  jqScript.defer = true;
  head.appendChild(jqScript);

  // Slick JS
  const slickScript = document.createElement("script");
  slickScript.src =
    "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";
  slickScript.defer = true;
  head.appendChild(slickScript);

  // Fancybox JS
  const fancyScript = document.createElement("script");
  fancyScript.src =
    "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js";
  fancyScript.defer = true;
  head.appendChild(fancyScript);
}

// Stil
function addStyles() {
  const style = document.createElement("style");
  style.textContent = `
    body {
      font-family: 'Inter', sans-serif;
      background: #f9fafb;
      color: #222;
      margin: 0;
      padding: 20px;
    }
    h2 {
      text-align: center;
      color: #2563eb;
      margin-bottom: 25px;
    }
    #productList {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      justify-content: center;
      max-width: 900px;
      margin: 0 auto;
    }
    .product-card {
      width: 200px;
      background: white;
      border-radius: 12px;
      padding: 15px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }
    .product-card:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }
    .product-card img {
      width: 100%;
      height: 160px;
      object-fit: contain;
      margin-bottom: 10px;
      border-radius: 8px;
    }
    .product-card h4 {
      font-size: 16px;
      margin: 0 0 8px 0;
      height: 40px;
      overflow: hidden;
    }
    .product-card p {
      font-weight: 700;
      margin: 0 0 10px 0;
    }
    button {
      background-color: #2563eb;
      color: white;
      border: none;
      border-radius: 8px;
      padding: 10px;
      font-weight: 600;
      width: 100%;
      margin-top: 10px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    button:hover {
      background-color: #1e40af;
    }
    a button {
      margin-top: 5px;
    }
    #cart {
      position: fixed;
      right: 20px;
      top: 20px;
      background: #fff;
      border: 2px solid #2563eb;
      padding: 15px;
      width: 220px;
      max-height: 320px;
      overflow-y: auto;
      border-radius: 12px;
      box-shadow: 0 4px 16px rgba(37, 99, 235, 0.25);
      font-size: 14px;
    }
    #cart h4 {
      margin-top: 0;
      color: #2563eb;
      font-weight: 700;
      margin-bottom: 15px;
    }
    .cart-item {
      padding: 8px 0;
      border-bottom: 1px solid #e2e8f0;
    }
    #clearCart {
      margin-top: 15px;
      background-color: #ef4444;
      width: 100%;
    }
    #clearCart:hover {
      background-color: #b91c1c;
    }
    #searchBox {
      display: block;
      margin: 0 auto 30px auto;
      padding: 10px 15px;
      width: 280px;
      border-radius: 8px;
      border: 1.5px solid #ccc;
      font-size: 15px;
      transition: border-color 0.3s ease;
    }
    #searchBox:focus {
      border-color: #2563eb;
      outline: none;
    }
    .discount-title {
      text-align: center;
      color: #ef4444;
      font-size: 20px;
      margin: 40px 0 20px;
      font-weight: 700;
    }
    .discount-carousel {
      max-width: 1000px;
      margin: 0 auto 30px;
    }
    .discount-carousel .product-card {
      width: 180px;
      margin: 10px;
    }
  `;
  document.head.appendChild(style);
}

function createBody() {
  const body = document.body;
  body.innerHTML = `
    <h2>E‑Ticaret Sitesi</h2>
    <div class="carousel"></div>
    <h3 class="discount-title">İndirimdeki Ürünler</h3>
    <div class="discount-carousel"></div>
    <input id="searchBox" type="text" placeholder="Ürün ara..." />
    <div id="productList"></div>
    <div id="cart">
      <h4>Sepet</h4>
      <div id="cartItems"></div>
      <button id="clearCart">Sepeti Temizle</button>
    </div>
  `;
}

function initApp() {
  const checkJQ = setInterval(() => {
    if (window.jQuery && window.jQuery.fn.slick && window.Fancybox) {
      clearInterval(checkJQ);

      const $ = window.jQuery;

      //render
      function renderProducts(products) {
        $("#productList").empty();
        $.each(products, function (i, product) {
          const card = $(`
            <div class="product-card" data-id="${product.id}">
              <img src="${product.image}" alt="${product.title}" />
              <h4>${product.title}</h4>
              <p>${product.price} $</p>
              <button class="addToCartBtn">Sepete Ekle</button>
              <a href="${product.image}" data-fancybox="gallery" data-caption="${product.title}">
                <button>Detay Göster</button>
              </a>
            </div>
          `)
            .hide()
            .fadeIn(300);
          $("#productList").append(card);
        });
      }

      function renderDiscountedProducts(products) {
        const discounted = products.slice(0, 6);
        $(".discount-carousel").empty();
        discounted.forEach((product) => {
          const card = $(`
            <div class="product-card" data-id="${product.id}">
              <img src="${product.image}" alt="${product.title}" />
              <h4>${product.title}</h4>
              <p>${product.price} $</p>
              <button class="addToCartBtn">Sepete Ekle</button>
              <a href="${product.image}" data-fancybox="gallery" data-caption="${product.title}">
                <button>Detay Göster</button>
              </a>
            </div>
          `);
          $(".discount-carousel").append(card);
        });

        $(".discount-carousel").slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          arrows: true,
          dots: true,
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
          ],
        });
      }

      // Sepete ekle
      function addToCart(product) {
        const item = $(`
          <div class="cart-item" style="display: flex; align-items: center; gap: 8px;">
            <img src="${product.image}" alt="${product.title}" style="width:40px; height:40px; object-fit: contain; border-radius: 6px;" />
            <span>${product.title} - ${product.price} $</span>
          </div>
        `);
        $("#cartItems").append(item.hide().slideDown());
        saveToStorage(product);
      }

      // LocalStorage kaydet
      function saveToStorage(product) {
        const current = JSON.parse(localStorage.getItem("cart") || "[]");
        current.push(product);
        localStorage.setItem("cart", JSON.stringify(current));
      }

      // Sepeti temizle
      function clearCart() {
        $("#cartItems").empty();
        localStorage.removeItem("cart");
      }

      // Sepete ekle butonu event delegation
      $(document).on("click", ".addToCartBtn", function () {
        const card = $(this).closest(".product-card");
        const id = card.data("id");
        $.get("https://fakestoreapi.com/products/" + id, function (product) {
          addToCart(product);
        });
      });

      // Sepeti temizle butonu
      $("#clearCart").click(function () {
        clearCart();
      });

      // Arama kutusu debounce
      $("#searchBox").on(
        "input",
        debounce(function () {
          const keyword = this.value.trim().toLowerCase();
          if (keyword === "") {
            renderProducts(allProducts); // Hepsini göster
            return;
          }

          const filtered = allProducts.filter((product) =>
            product.title.toLowerCase().includes(keyword)
          );

          renderProducts(filtered);
        }, 300)
      );

      // Tüm ürünleri yükle

      let allProducts = [];

      function loadAllProducts() {
        $.get("https://fakestoreapi.com/products", function (data) {
          allProducts = data;
          renderProducts(allProducts);
          renderDiscountedProducts(allProducts);
        });
      }

      // Debounce fonksiyonu
      function debounce(func, wait) {
        let timeout;
        return function () {
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(this, arguments), wait);
        };
      }

      // LocalStorage'dan sepeti yükle
      function loadCartFromStorage() {
        const saved = JSON.parse(localStorage.getItem("cart") || "[]");
        if (saved.length) {
          saved.forEach((product) => {
            const item = $(
              `<div class="cart-item">${product.title} - ${product.price} $</div>`
            );
            $("#cartItems").append(item);
          });
        }
      }

      loadAllProducts();
      loadCartFromStorage();
    }
  }, 100);
}

addHeadLinks();
addStyles();
createBody();
initApp();
