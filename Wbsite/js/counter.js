// $("#counter").countMe(0,1);
// $("#counter2").countMe(0,1);
// $("#counter3").countMe(0,1);
// $("#counter4").countMe(0,1);
$(".count").each(function () {
    $(this)
      .prop("Counter", 100)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 800,
          easing: "swing",
          step: function (now) {
            now = Number(Math.ceil(now)).toLocaleString('en');
                                  $(this).text(now);
          },
        }
      );
  });