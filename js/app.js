window.addEventListener("load", function() {
  let woomen = [],
    i = 0;
  (woomen[0] = "woman-1"),
    (woomen[1] = "woman-2"),
    (woomen[2] = "woman-3"),
    (rellax = new Rellax(".sphere")),
    (getWoomen = document.querySelector("#woman"));

  let timerId = setTimeout(function tick() {
    i++;
    getWoomen.classList.remove(woomen[i - 1]);
    if (i === woomen.length) {
      i = 0;
    }
    getWoomen.classList.add(woomen[i]);
    timerId = setTimeout(tick, 2500);
  }, 2500);

  $(".mirror-2__dot").click(function() {
    const that = this,
      getId = that.id,
      active = that.classList.contains("mirror-2__dot_active");

    if (active !== true) {
      $(".mirror-2__dot").removeClass("mirror-2__dot_active");
      $(".result__item").removeClass("result__item_active");
      $(".mirror-2__dot span").html("+");

      if (window.innerWidth <= 992) {
        $(".result__item").fadeOut(200, function() {
          that.children[0].innerText = "-";
          setTimeout(function() {
            that.classList.add("mirror-2__dot_active");

            $('[data-id="' + getId + '"]')
              .addClass("result__item_active")
              .fadeIn(100);
          }, 200);
        });
      } else {
        that.children[0].innerText = "-";
        that.classList.add("mirror-2__dot_active");
        $('[data-id="' + getId + '"]').addClass("result__item_active");
      }
    }
  });
});
