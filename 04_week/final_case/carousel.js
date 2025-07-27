(() => {
  const STORAGE_KEY_PRODUCTS = "lcw_carousel_products";
  const STORAGE_KEY_FAVORITES = "lcw_carousel_favorites";
  const JSON_URL =
    "https://gist.githubusercontent.com/sevindi/5765c5812bbc8238a38b3cf52f233651/raw/56261d81af8561bf0a7cf692fe572f9e1e91f372/products.json";

  const init = async () => {
    if (!$(".product-detail").length) return;
    const products = await getProducts();
    const favorites = getFavorites();
    buildStyles();
    buildHTML(products, favorites);
    bindEvents(products);
  };

  const getProducts = async () => {
    const cached = localStorage.getItem(STORAGE_KEY_PRODUCTS);
    if (cached) return JSON.parse(cached);
    const res = await fetch(JSON_URL);
    const data = await res.json();
    localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(data));
    return data;
  };

  const getFavorites = () => {
    const favs = localStorage.getItem(STORAGE_KEY_FAVORITES);
    return favs ? JSON.parse(favs) : [];
  };

  const saveFavorites = (favList) => {
    localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(favList));
  };

  const createHeartSVG = (isFilled) => {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", "21");
    svg.setAttribute("height", "20");
    svg.classList.add("lcw-heart");
    if (isFilled) svg.classList.add("filled");

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute(
      "d",
      "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
    );

    svg.appendChild(path);
    return svg;
  };

  const buildStyles = () => {
    const css = `
      .lcw-carousel-container {
        margin-top: 32px;
        padding: 0 150px;
        font-family: "Open Sans", sans-serif;
      }
  
      @media (max-width: 1024px) {
        .lcw-carousel-container {
          padding: 0 60px;
        }
      }
  
      @media (max-width: 768px) {
        .lcw-carousel-container {
          padding: 0 20px;
        }
      }
  
      .lcw-carousel-title {
        font-family: "Open Sans", sans-serif;
        font-weight: 100;
        color: rgb(41, 50, 59);
        font-size: 32px;
        line-height: 43px;
        margin-bottom: 16px;
      }
  
      .lcw-carousel-body {
        position: relative;
        display: flex;
        align-items: center;
      }
  
      .lcw-carousel-wrapper {
        display: flex;
        gap: 12px;
        overflow-x: auto;
        scroll-behavior: smooth;
        padding-bottom: 10px;
      }
  
      .lcw-carousel-wrapper::-webkit-scrollbar {
        display: none;
      }
  
      .lcw-carousel-product {
        flex: 0 0 auto;
        width: 228.35px;
        height: 405px;
        background-color: #fff;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: column;
      }
  
      .lcw-carousel-product img {
        width: 100%;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        display: block;
      }
  
      .lcw-carousel-product-title {
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        color: rgb(48, 46, 43);
        font-size: 15px;
        line-height: 20px;
        padding: 10px 10px 0;
        text-align: left;
        min-height: 36px;
        margin-bottom: 30px;
      }
  
      .lcw-carousel-product-price {
        font-family: "Open Sans", sans-serif;
        font-weight: 700;
        color: rgb(25, 61, 176);
        font-size: 18px;
        line-height: 22px;
        padding: 4px 10px 10px;
        text-align: left;
        margin-top: auto;
        display: flex;
        height: 44px;
        align-items: center;
      }
  
      .lcw-heart {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        z-index: 2;
        fill: white;
        stroke: #B6B7B9;
        stroke-width: 1.1;
        width: 24px;
        height: 24px;
      }
  
      .lcw-heart.filled {
        fill: #193db0;
        stroke: #193db0;
      }
  
      .lcw-carousel-arrow {
        width: 50px;
        height: 90px;
        background: transparent;
        color: #333;
        font-size: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 5;
        border-radius: 10px;
        user-select: none;
        transition: background 0.2s;
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
        outline: none;
      }
  
      .lcw-carousel-arrow.left {
        position: absolute;
        left: -40px;
        top: 50%;
        transform: translateY(-50%);
      }
  
      .lcw-carousel-arrow.right {
        position: absolute;
        right: -40px;
        top: 50%;
        transform: translateY(-50%);
      }
  
      @media (max-width: 1024px) {
        .lcw-carousel-arrow.left {
          left: -20px;
        }
      
        .lcw-carousel-arrow.right {
          right: -20px;
        }
      }
  
      @media (min-width: 769px) and (max-width: 1024px) {
        .lcw-carousel-product {
          width: 180px; 
        }
      }

      @media (max-width: 768px) {
        .lcw-carousel-product {
          width: 140px;
        }
  
        .lcw-carousel-arrow {
          display: none;
        }
      }

      @media (max-width: 1024px) and (min-width: 769px) {
        .lcw-carousel-arrow {
          display: none !important;
        }
      }
  
      @media (max-width: 480px) {
        .lcw-carousel-product {
          width: 65%;
        }
      }
    `;
    $("<style>").html(css).appendTo("head");
  };

  const buildHTML = (products, favorites) => {
    const container = $(`
          <div class="lcw-carousel-container">
            <div class="lcw-carousel-title">You Might Also Like</div>
            <div class="lcw-carousel-body">
              <button type="button" aria-label="prev" class="lcw-carousel-arrow left">
                <svg xmlns="http://www.w3.org/2000/svg" width="14.242" height="24.242" viewBox="0 0 14.242 24.242">
                  <path fill="none" stroke="#333" stroke-linecap="round" stroke-width="3px" d="M2106.842 2395.467l-10 10 10 10" transform="translate(-2094.721 -2393.346)"></path>
                </svg>
              </button>
              <div class="lcw-carousel-wrapper"></div>
              <button type="button" aria-label="next" class="lcw-carousel-arrow right" style="overflow: visible;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" >
                    <path fill="none" stroke="#333" stroke-linecap="round" stroke-width="3" d="M4 2l10 10-10 10" />
                </svg>
            </button>
            </div>
          </div>
        `);

    const wrapper = container.find(".lcw-carousel-wrapper");

    products.forEach((product) => {
      const isFav = favorites.includes(product.id);
      const productEl = $(`
            <div class="lcw-carousel-product" data-id="${product.id}">
              <img src="${product.img}" alt="${product.name}" />
              <div class="lcw-carousel-product-title">${product.name}</div>
              <div class="lcw-carousel-product-price">${product.price} TL</div>
            </div>
          `);

      const heart = createHeartSVG(isFav);
      productEl.append(heart);
      wrapper.append(productEl);
    });

    $(".product-detail").after(container);
  };

  const bindEvents = (products) => {
    $(document).on(
      "click",
      ".lcw-carousel-product img, .lcw-carousel-product-title, .lcw-carousel-product-price",
      function () {
        const id = $(this).closest(".lcw-carousel-product").data("id");
        const product = products.find((p) => p.id === id);
        if (product && product.url) {
          window.open(product.url, "_blank");
        }
      }
    );

    $(document).on("click", ".lcw-heart", function (e) {
      e.stopPropagation();
      const heart = $(this);
      const card = heart.closest(".lcw-carousel-product");
      const id = card.data("id");

      let favs = getFavorites();
      if (heart.hasClass("filled")) {
        favs = favs.filter((favId) => favId !== id);
        heart.removeClass("filled");
      } else {
        favs.push(id);
        heart.addClass("filled");
      }
      saveFavorites(favs);
    });

    $(document).on("click", ".lcw-carousel-arrow.left", function () {
      $(".lcw-carousel-wrapper").animate({ scrollLeft: "-=300" }, 300);
    });

    $(document).on("click", ".lcw-carousel-arrow.right", function () {
      $(".lcw-carousel-wrapper").animate({ scrollLeft: "+=300" }, 300);
    });
  };

  init();
})();
