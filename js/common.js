!(function (e) {
  "use strict";
  if (
    (e(window).on("load", function () {
      setTimeout(function () {
        var i = e(".preloader");
        i.addClass("loaded"), i.find(".centrize").fadeOut();
      }, 1e3),
        e(".scroll-animate").scrolla({ once: !0, mobile: !0 });
    }),
    Splitting(),
    e(window).width() > 1024)
  )
    skrollr.init();
  e(".kf-header").length &&
    e(window).on("scroll", function () {
      e(window).scrollTop() > 48
        ? e(".kf-header").addClass("fixed")
        : e(".kf-header").removeClass("fixed");
    }),
    e(".kf-started-inner .kf-parallax-bg").length ||
      e(".kf-started-slider").length ||
      e(".kf-navbar").addClass("inner-navbar"),
    e(".kf-header").on("click", ".kf-menu-btn", function () {
      return (
        e(this).hasClass("active")
          ? (e(this).removeClass("active"),
            e(".kf-header").removeClass("show"),
            e(".kf-header").addClass("no-touch"),
            setTimeout(function () {
              e(".kf-header").removeClass("animated");
            }, 500),
            setTimeout(function () {
              e(".kf-header").removeClass("opened"),
                e(".kf-header").removeClass("no-touch");
            }, 1e3))
          : (e(this).addClass("active"),
            e(".kf-header").addClass("animated"),
            e(".kf-header").addClass("no-touch"),
            setTimeout(function () {
              e(".kf-header").addClass("opened");
            }, 500),
            setTimeout(function () {
              e(".kf-header").addClass("show"),
                e(".kf-header").removeClass("no-touch");
            }, 1e3)),
        !1
      );
    }),
    e(".kf-navbar-mobile .kf-main-menu").on(
      "click",
      ".has-children > i",
      function () {
        return (
          e(this).closest("li").hasClass("opened")
            ? (e(this).closest("li").removeClass("opened"),
              e(this).closest("li").find("> ul").slideUp())
            : (e(this).closest("li").addClass("opened"),
              e(this).closest("li").find("> ul").slideDown()),
          !1
        );
      }
    ),
    e(window).width() > 1024 &&
      e(".js-parallax").paroller({
        factor: -0.3,
        factorXs: 0.1,
        factorSm: 0.2,
        factorMd: 0.2,
        factorLg: 0.3,
        type: "foreground",
        direction: "vertical",
        transition: "transform 0.1s ease",
      });
  new Swiper(".kf-started-slider .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: !0,
    speed: 1e3,
    parallax: !0,
    autoplay: { delay: 9e3 },
    watchSlidesProgress: !0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      progress: function () {
        for (var e = 0; e < this.slides.length; e++) {
          var i = this.slides[e].progress * (0.5 * this.width);
          this.slides[e].querySelector(".slide").style.transform =
            "translateX(" + i + "px)";
        }
      },
      touchStart: function () {
        for (var e = 0; e < this.slides.length; e++)
          this.slides[e].style.transition = "";
      },
      setTransition: function (e, i) {
        for (var t = 0; t < e.slides.length; t++)
          (e.slides[t].style.transition = i + "ms"),
            (e.slides[t].querySelector(".slide").style.transition = i + "ms");
      },
    },
  }),
    new Swiper(".kf-grid-carousel .swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
	  autoplay: true,
      loop: !5,
      speed: 1e3,
      watchSlidesProgress: !0,
      pagination: !1,
      navigation: !1,
      breakpoints: {
        0: { slidesPerView: 1 },
        767: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      },
    }),
    new Swiper(".kf-insta-carousel .swiper-container", {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: !0,
      speed: 1e3,
      watchSlidesProgress: !0,
      pagination: !1,
      navigation: !1,
      breakpoints: {
        0: { slidesPerView: 1 },
        767: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
      },
    }),
    new Swiper(".kf-testimonials-slider .swiper-container", {
      slidesPerView: 1,
      spaceBetween: 60,
      loop: !1,
      speed: 1e3,
      pagination: !1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }),
    new Swiper(".kf-testimonials-carousel .swiper-container", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: !1,
      speed: 1e3,
      watchSlidesProgress: !0,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: "true",
      },
      navigation: !1,
      breakpoints: {
        0: { slidesPerView: 1 },
        767: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
    }),
    new Swiper(".kf-history-carousel .swiper-container", {
      slidesPerView: 1,
      spaceBetween: 70,
      loop: !1,
      speed: 1e3,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: "true",
      },
      scrollbar: { el: ".swiper-scrollbar", draggable: !1 },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  e(".kf-history-carousel .swiper-pagination-bullet").each(function (i) {
    e(".kf-history-carousel .swiper-slide:nth-child(1)").index() ===
      e(this).index() &&
      e(this).text(
        "" +
          e(".kf-history-carousel .swiper-slide:nth-child(1)")
            .find(".date-value")
            .text()
      ),
      e(".kf-history-carousel .swiper-slide:nth-child(2)").index() ===
        e(this).index() &&
        e(this).text(
          "" +
            e(".kf-history-carousel .swiper-slide:nth-child(2)")
              .find(".date-value")
              .text()
        ),
      e(".kf-history-carousel .swiper-slide:nth-child(3)").index() ===
        e(this).index() &&
        e(this).text(
          "" +
            e(".kf-history-carousel .swiper-slide:nth-child(3)")
              .find(".date-value")
              .text()
        ),
      e(".kf-history-carousel .swiper-slide:nth-child(4)").index() ===
        e(this).index() &&
        e(this).text(
          "" +
            e(".kf-history-carousel .swiper-slide:nth-child(4)")
              .find(".date-value")
              .text()
        ),
      e(".kf-history-carousel .swiper-slide:nth-child(5)").index() ===
        e(this).index() &&
        e(this).text(
          "" +
            e(".kf-history-carousel .swiper-slide:nth-child(5)")
              .find(".date-value")
              .text()
        ),
      e(".kf-history-carousel .swiper-slide:nth-child(6)").index() ===
        e(this).index() &&
        e(this).text(
          "" +
            e(".kf-history-carousel .swiper-slide:nth-child(6)")
              .find(".date-value")
              .text()
        ),
      e(".kf-history-carousel .swiper-slide:nth-child(7)").index() ===
        e(this).index() &&
        e(this).text(
          "" +
            e(".kf-history-carousel .swiper-slide:nth-child(7)")
              .find(".date-value")
              .text()
        ),
      e(".kf-history-carousel .swiper-slide:nth-child(8)").index() ===
        e(this).index() &&
        e(this).text(
          "" +
            e(".kf-history-carousel .swiper-slide:nth-child(8)")
              .find(".date-value")
              .text()
        ),
      e(".kf-history-carousel .swiper-slide:nth-child(9)").index() ===
        e(this).index() &&
        e(this).text(
          "" +
            e(".kf-history-carousel .swiper-slide:nth-child(9)")
              .find(".date-value")
              .text()
        ),
      e(".kf-history-carousel .swiper-slide:nth-child(10)").index() ===
        e(this).index() &&
        e(this).text(
          "" +
            e(".kf-history-carousel .swiper-slide:nth-child(10)")
              .find(".date-value")
              .text()
        );
  });
  var i = e(".kf-gallery-items");
  i.imagesLoaded(function () {
    i.isotope({ itemSelector: ".kf-gallery-col", percentPosition: !0 });
  }),
    e(".kf-filter-gal").on("click", "a", function () {
      var t = e(this).attr("data-href");
      return (
        i.isotope({ filter: t }),
        e(".kf-filter-gal a").removeClass("active"),
        e(this).addClass("active"),
        e(t).find(".scroll-animate").removeClass("animate__active"),
        e(t).find(".scroll-animate").addClass("animate__active"),
        !1
      );
    });
  var t = e(".kf-menu-tabs .kf-menu-items .row");
  t.imagesLoaded(function () {
    t.isotope({ itemSelector: ".kf-menu-item-col", percentPosition: !0 });
  }),
    e(".kf-filter-menu").on("click", "a", function () {
      var i = e(this).attr("data-href");
      return (
        t.isotope({ filter: i }),
        e(".kf-filter-menu a").removeClass("active"),
        e(this).addClass("active"),
        e(i).find(".scroll-animate").removeClass("animate__active"),
        e(i).find(".scroll-animate").addClass("animate__active"),
        !1
      );
    }),
    e(".has-popup-image").magnificPopup({
      type: "image",
      closeOnContentClick: !0,
      mainClass: "mfp-fade",
      image: { verticalFit: !0 },
    }),
    e(".has-popup-video").magnificPopup({
      disableOn: 700,
      type: "iframe",
      iframe: {
        patterns: {
          youtube_short: {
            index: "youtu.be/",
            id: "youtu.be/",
            src: "https://www.youtube.com/embed/%id%?autoplay=1",
          },
        },
      },
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
      mainClass: "mfp-fade",
      callbacks: {
        markupParse: function (e, i, t) {
          e.find("iframe").attr("allow", "autoplay");
        },
      },
    }),
    e(".has-popup-gallery").magnificPopup({
      type: "image",
      gallery: { enabled: !0 },
    }),
    e(".tab-menu").on("click", ".tab-btn", function () {
      var i = e(this).attr("href");
      return (
        e(this).closest(".tab-menu").find("li").removeClass("active"),
        e(this).closest("li").addClass("active"),
        e(this).closest(".tabs").find("> .tab-item").hide(),
        e(i).fadeIn(),
        !1
      );
    }),
    e(".collapse-item").on("click", ".collapse-btn", function () {
      e(this).closest(".collapse-item").hasClass("active")
        ? (e(this)
            .closest(".collapse-item")
            .find(".collapse-content")
            .slideUp(),
          e(this).closest(".collapse-item").removeClass("active"),
          e(this).removeClass("active"))
        : (e(this)
            .closest(".collapse-item")
            .find(".collapse-content")
            .slideDown(),
          e(this).closest(".collapse-item").addClass("active"),
          e(this).addClass("active"));
    }),
    e(".kf-video-item").on("click", ".play, img", function () {
      return (
        e(this).closest(".kf-video-item").addClass("active"),
        (function (e) {
          var i = e.data("src");
          e.attr("src", i);
        })(e(this).closest(".kf-video-item").find(".js-video-iframe")),
        !1
      );
    }),
    e(".kf-contacts-form").length &&
      e("#cform").validate({
        rules: {
          name: { required: !0 },
          tel: { required: !0 },
          subject: { required: !0 },
          message: { required: !0 },
          email: { required: !0, email: !0 },
        },
        success: "valid",
        submitHandler: function () {
          e.ajax({
            url: "mailer/feedback.php",
            type: "post",
            dataType: "json",
            data:
              "name=" +
              e("#cform").find('input[name="name"]').val() +
              "&email=" +
              e("#cform").find('input[name="email"]').val() +
              "&tel=" +
              e("#cform").find('input[name="tel"]').val() +
              "&subject=" +
              e("#cform").find('input[name="subject"]').val() +
              "&message=" +
              e("#cform").find('textarea[name="message"]').val(),
            beforeSend: function () {},
            complete: function () {},
            success: function (i) {
              e("#cform").fadeOut(), e(".alert-success").delay(1e3).fadeIn();
            },
          });
        },
      }),
    e(".kf-reservation").length &&
      e("#rform").validate({
        rules: {
          name: { required: !0 },
          tel: { required: !0 },
          date: { required: !0 },
          time: { required: !0 },
          persons: { required: !0 },
          email: { required: !0, email: !0 },
        },
        success: "valid",
        submitHandler: function () {
          e.ajax({
            url: "mailer/feedback_r.php",
            type: "post",
            dataType: "json",
            data:
              "name=" +
              e("#rform").find('input[name="name"]').val() +
              "&email=" +
              e("#rform").find('input[name="email"]').val() +
              "&tel=" +
              e("#rform").find('input[name="tel"]').val() +
              "&time=" +
              e("#rform").find('input[name="time"]').val() +
              "&date=" +
              e("#rform").find('textarea[name="date"]').val() +
              "&persons=" +
              e("#rform").find('textarea[name="persons"]').val(),
            beforeSend: function () {},
            complete: function () {},
            success: function (i) {
              e("#rform").fadeOut(), e(".alert-success").delay(1e3).fadeIn();
            },
          });
        },
      });
})(jQuery);

(function ($) {
  "use strict";

  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/62961d197b967b1179922b9c/1g4d7oaso";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();
})(jQuery);
