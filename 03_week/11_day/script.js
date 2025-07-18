$(document).ready(function () {
  $.ajax({
    url: "https://randomuser.me/api/?results=8",
    dataType: "json",
    success: function (data) {
      data.results.forEach((user, index) => {
        const userId = `user-modal-${index}`;

        const modalContent = $(`
            <div style="display:none;" id="${userId}">
              <h2>Kullanıcı Bilgileri</h2>
              <img class="modal-image" src="${user.picture.medium}" alt="profile">
              <p><strong>İsim:</strong> ${user.name.first} ${user.name.last}</p>
              <p><strong>E-posta:</strong> ${user.email}</p>
              <p><strong>Ülke:</strong> ${user.location.country}</p>
              <p><strong>Telefon:</strong> ${user.phone}</p>
              <p><strong>Yaş:</strong> ${user.dob.age}</p>
            </div>
          `);
        $("body").append(modalContent);

        const card = $(`
            <div class="card" style="display:none;">
              <a data-fancybox data-src="#${userId}" href="javascript:;">
                <img src="${user.picture.medium}" alt="profile">
              </a>
              <div class="info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.email}</p>
                <p>${user.location.country}</p>
              </div>
            </div>
          `);

        card.hover(
          function () {
            $(this).fadeTo(200, 0.9);
          },
          function () {
            $(this).fadeTo(200, 1);
          }
        );

        $(".container").append(card);
        card.slideDown(500).effect("bounce", { times: 1 }, 300);

        $(".user-slider").append(`
            <div class="slider-card">
              <img src="${user.picture.medium}" alt="${user.name.first}" />
              <h5>${user.name.first} ${user.name.last}</h5>
              <p>${user.location.country}</p>
            </div>
          `);
      });

      $(".user-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        infinite: true,
        arrows: true,
        dots: false,
        pauseOnHover: true,
        prevArrow: '<button class="slick-prev custom-arrow">←</button>',
        nextArrow: '<button class="slick-next custom-arrow">→</button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    },
  });
});
