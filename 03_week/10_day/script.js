let start = 0;
const limit = 5;
let isLoading = false;

function loadPosts() {
  if (isLoading) return;
  isLoading = true;

  $("#loading").show();
  $("#error").text("");

  $.get(
    `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
  )
    .done(function (data) {
      data.forEach((post) => {
        $("#postContainer").append(`
          <div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `);
      });
      start += limit;
    })
    .fail(function () {
      $("#error").text("Veriler yüklenemedi.");
    })
    .always(function () {
      $("#loading").hide();
      isLoading = false;
    });
}

$(document).ready(function () {
  loadPosts();

  $(window).on("scroll", function () {
    if (
      $(window).scrollTop() + $(window).height() >=
      $(document).height() - 50
    ) {
      loadPosts();
    }
  });
});
