!(function (e) {
  e(window).on("load", function () {
    e(".preloader").fadeOut();
  }),
    e(".preloader").length > 0 &&
      e(".preloaderCls").each(function () {
        e(this).on("click", function (t) {
          t.preventDefault(), e(".preloader").css("display", "none");
        });
      }),
    (e.fn.vsmobilemenu = function (t) {
      var s = e.extend(
        {
          menuToggleBtn: ".vs-menu-toggle",
          bodyToggleClass: "vs-body-visible",
          subMenuClass: "vs-submenu",
          subMenuParent: "vs-item-has-children",
          subMenuParentToggle: "vs-active",
          meanExpandClass: "vs-mean-expand",
          appendElement: '<span class="vs-mean-expand"></span>',
          subMenuToggleClass: "vs-open",
          toggleSpeed: 400,
        },
        t
      );
      return this.each(function () {
        var t = e(this);
        function a() {
          t.toggleClass(s.bodyToggleClass);
          var a = "." + s.subMenuClass;
          e(a).each(function () {
            e(this).hasClass(s.subMenuToggleClass) &&
              (e(this).removeClass(s.subMenuToggleClass),
              e(this).css("display", "none"),
              e(this).parent().removeClass(s.subMenuParentToggle));
          });
        }
        t.find("li").each(function () {
          var t = e(this).find("ul");
          t.addClass(s.subMenuClass),
            t.css("display", "none"),
            t.parent().addClass(s.subMenuParent),
            t.prev("a").append(s.appendElement),
            t.next("a").append(s.appendElement);
        });
        var o = "." + s.meanExpandClass;
        e(o).each(function () {
          e(this).on("click", function (t) {
            var a;
            t.preventDefault(),
              (a = e(this).parent()),
              e(a).next("ul").length > 0
                ? (e(a).parent().toggleClass(s.subMenuParentToggle),
                  e(a).next("ul").slideToggle(s.toggleSpeed),
                  e(a).next("ul").toggleClass(s.subMenuToggleClass))
                : e(a).prev("ul").length > 0 &&
                  (e(a).parent().toggleClass(s.subMenuParentToggle),
                  e(a).prev("ul").slideToggle(s.toggleSpeed),
                  e(a).prev("ul").toggleClass(s.subMenuToggleClass));
          });
        }),
          e(s.menuToggleBtn).each(function () {
            e(this).on("click", function () {
              a();
            });
          }),
          t.on("click", function (e) {
            e.stopPropagation(), a();
          }),
          t.find("div").on("click", function (e) {
            e.stopPropagation();
          });
      });
    }),
    e(".vs-menu-wrapper").vsmobilemenu();
  var t = "",
    s = ".scrollToTop";
  e(window).on("scroll", function () {
    var a, o, n, i, r;
    (a = e(".sticky-active")),
      (o = "active"),
      (n = "will-sticky"),
      (i = e(window).scrollTop()),
      (r = a.css("height")),
      a.parent().css("min-height", r),
      e(window).scrollTop() > 800
        ? (a.parent().addClass(n), i > t ? a.removeClass(o) : a.addClass(o))
        : (a.parent().css("min-height", "").removeClass(n), a.removeClass(o)),
      (t = i),
      e(this).scrollTop() > 500
        ? e(s).addClass("show")
        : e(s).removeClass("show");
  }),
    e(s).each(function () {
      e(this).on("click", function (s) {
        return (
          s.preventDefault(),
          e("html, body").animate({ scrollTop: 0 }, t / 3),
          !1
        );
      });
    }),
    e("[data-bg-src]").length > 0 &&
      e("[data-bg-src]").each(function () {
        var t = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + t + ")"),
          e(this).removeAttr("data-bg-src").addClass("background-image");
      }),
    e(".vs-carousel").each(function () {
      var t = e(this);
      function s(e) {
        return t.data(e);
      }
      var a =
          '<button type="button" class="slick-prev"><i class="' +
          s("prev-arrow") +
          '"></i></button>',
        o =
          '<button type="button" class="slick-next"><i class="' +
          s("next-arrow") +
          '"></i></button>';
      e("[data-slick-next]").each(function () {
        e(this).on("click", function (t) {
          t.preventDefault(), e(e(this).data("slick-next")).slick("slickNext");
        });
      }),
        e("[data-slick-prev]").each(function () {
          e(this).on("click", function (t) {
            t.preventDefault(),
              e(e(this).data("slick-prev")).slick("slickPrev");
          });
        }),
        1 == s("arrows") &&
          (t.closest(".arrow-wrap").length ||
            t.closest(".container").parent().addClass("arrow-wrap")),
        t.slick({
          dots: !!s("dots"),
          fade: !!s("fade"),
          arrows: !!s("arrows"),
          speed: s("speed") ? s("speed") : 1e3,
          asNavFor: !!s("asnavfor") && s("asnavfor"),
          autoplay: (s("autoplay"), !1),
          infinite: 0 != s("infinite"),
          slidesToShow: s("slide-show") ? s("slide-show") : 1,
          adaptiveHeight: !!s("adaptive-height"),
          centerMode: !!s("center-mode"),
          autoplaySpeed: s("autoplay-speed") ? s("autoplay-speed") : 8e3,
          centerPadding: s("center-padding") ? s("center-padding") : "0",
          focusOnSelect: 0 != s("focuson-select"),
          pauseOnFocus: !!s("pauseon-focus"),
          pauseOnHover: !!s("pauseon-hover"),
          variableWidth: !!s("variable-width"),
          vertical: !!s("vertical"),
          verticalSwiping: !!s("vertical"),
          prevArrow: s("prev-arrow")
            ? a
            : '<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
          nextArrow: s("next-arrow")
            ? o
            : '<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
          rtl: "rtl" == e("html").attr("dir"),
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                arrows: !!s("xl-arrows"),
                dots: !!s("xl-dots"),
                slidesToShow: s("xl-slide-show")
                  ? s("xl-slide-show")
                  : s("slide-show"),
                centerMode: !!s("xl-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 1400,
              settings: {
                arrows: !!s("ml-arrows"),
                dots: !!s("ml-dots"),
                slidesToShow: s("ml-slide-show")
                  ? s("ml-slide-show")
                  : s("slide-show"),
                centerMode: !!s("ml-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                arrows: !!s("lg-arrows"),
                dots: !!s("lg-dots"),
                slidesToShow: s("lg-slide-show")
                  ? s("lg-slide-show")
                  : s("slide-show"),
                centerMode: !!s("lg-center-mode") && s("lg-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 992,
              settings: {
                arrows: !!s("md-arrows"),
                dots: !!s("md-dots"),
                slidesToShow: s("md-slide-show") ? s("md-slide-show") : 1,
                centerMode: !!s("md-center-mode") && s("md-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 767,
              settings: {
                arrows: !!s("sm-arrows"),
                dots: !!s("sm-dots"),
                slidesToShow: s("sm-slide-show") ? s("sm-slide-show") : 1,
                centerMode: !!s("sm-center-mode") && s("sm-center-mode"),
                centerPadding: 0,
              },
            },
            {
              breakpoint: 576,
              settings: {
                arrows: !!s("xs-arrows"),
                dots: !!s("xs-dots"),
                slidesToShow: s("xs-slide-show") ? s("xs-slide-show") : 1,
                centerMode: !!s("xs-center-mode") && s("xs-center-mode"),
                centerPadding: 0,
              },
            },
          ],
        });
    });
  var a,
    o,
    n,
    i = ".ajax-contact",
    r = "is-invalid",
    l = '[name="email"]',
    c =
      '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]',
    d = e(".form-messages");
  function u() {
    var t,
      s = e(i).serialize();
    (t = (function () {
      var t,
        s = !0;
      function a(a) {
        a = a.split(",");
        for (var o = 0; o < a.length; o++)
          (t = i + " " + a[o]),
            e(t).val()
              ? (e(t).removeClass(r), (s = !0))
              : (e(t).addClass(r), (s = !1));
      }
      a(c),
        e(l).val() &&
        e(l)
          .val()
          .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
          ? (e(l).removeClass(r), (s = !0))
          : (e(l).addClass(r), (s = !1));
      return s;
    })()),
      t &&
        jQuery
          .ajax({ url: e(i).attr("action"), data: s, type: "POST" })
          .done(function (t) {
            d.removeClass("error"),
              d.addClass("success"),
              d.text(t),
              e(i + ' input:not([type="submit"]),' + i + " textarea").val("");
          })
          .fail(function (e) {
            d.removeClass("success"),
              d.addClass("error"),
              "" !== e.responseText
                ? d.html(e.responseText)
                : d.html(
                    "Oops! An error occured and your message could not be sent."
                  );
          });
  }
  e(i).on("submit", function (e) {
    e.preventDefault(), u();
  }),
    e(".popup-image").magnificPopup({
      type: "image",
      gallery: { enabled: !0 },
    }),
    e(".popup-video").magnificPopup({ type: "iframe" }),
    e(".filter-active").imagesLoaded(function () {
      var t = ".filter-active",
        s = ".filter-menu-active";
      if (e(t).length > 0) {
        var a = e(t).isotope({
          itemSelector: ".filter-item",
          filter: "*",
          masonry: { columnWidth: 1 },
        });
        e(s).on("click", "button", function () {
          var t = e(this).attr("data-filter");
          a.isotope({ filter: t });
        }),
          e(s).on("click", "button", function (t) {
            t.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          });
      }
    }),
    (a = ".sidemenu-wrapper"),
    (o = ".sideMenuCls"),
    (n = "show"),
    e(".sideMenuToggler").on("click", function (t) {
      t.preventDefault(), e(a).addClass(n);
    }),
    e(a).on("click", function (t) {
      t.stopPropagation(), e(a).removeClass(n);
    }),
    e(a + " > div").on("click", function (t) {
      t.stopPropagation(), e(a).addClass(n);
    }),
    e(o).on("click", function (t) {
      t.preventDefault(), t.stopPropagation(), e(a).removeClass(n);
    }),
    (function (t, s, a, o) {
      e(s).on("click", function (s) {
        s.preventDefault(), e(t).addClass(o);
      }),
        e(t).on("click", function (s) {
          s.stopPropagation(), e(t).removeClass(o);
        }),
        e(t)
          .find("form")
          .on("click", function (s) {
            s.stopPropagation(), e(t).addClass(o);
          }),
        e(a).on("click", function (s) {
          s.preventDefault(), s.stopPropagation(), e(t).removeClass(o);
        });
    })(".popup-search-box", ".searchBoxTggler", ".searchClose", "show"),
    e("#slider-range").slider({
      range: !0,
      min: 40,
      max: 300,
      values: [60, 570],
      slide: function (t, s) {
        e("#minAmount").text("$" + s.values[0]),
          e("#maxAmount").text("$" + s.values[1]);
      },
    }),
    e("#minAmount").text("$" + e("#slider-range").slider("values", 0)),
    e("#maxAmount").text("$" + e("#slider-range").slider("values", 1)),
    e("#ship-to-different-address-checkbox").on("change", function () {
      e(this).is(":checked")
        ? e("#ship-to-different-address").next(".shipping_address").slideDown()
        : e("#ship-to-different-address").next(".shipping_address").slideUp();
    }),
    e(".woocommerce-form-login-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-login").slideToggle();
    }),
    e(".woocommerce-form-coupon-toggle a").on("click", function (t) {
      t.preventDefault(), e(".woocommerce-form-coupon").slideToggle();
    }),
    e(".shipping-calculator-button").on("click", function (t) {
      t.preventDefault(),
        e(this).next(".shipping-calculator-form").slideToggle();
    }),
    e('.wc_payment_methods input[type="radio"]:checked')
      .siblings(".payment_box")
      .show(),
    e('.wc_payment_methods input[type="radio"]').each(function () {
      e(this).on("change", function () {
        e(".payment_box").slideUp(),
          e(this).siblings(".payment_box").slideDown();
      });
    }),
    e(".rating-select .stars a").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault(),
          e(this).siblings().removeClass("active"),
          e(this).parent().parent().addClass("selected"),
          e(this).addClass("active");
      });
    }),
    e(".quantity-plus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var s = e(this).siblings(".qty-input"),
          a = parseInt(s.val());
        isNaN(a) || s.val(a + 1);
      });
    }),
    e(".quantity-minus").each(function () {
      e(this).on("click", function (t) {
        t.preventDefault();
        var s = e(this).siblings(".qty-input"),
          a = parseInt(s.val());
        !isNaN(a) && a > 1 && s.val(a - 1);
      });
    }),
    (e.fn.vsAudioPlayer = function (t) {
      return this.each(function () {
        let s = e(this);
        function a(e) {
          return s.find(e);
        }
        function o(e) {
          return s.data(e);
        }
        function n() {
          a(".audio-pause-play").removeClass("replay");
        }
        let i = e.extend(
          {
            container: a(".audio-waveform")[0],
            height: o("wav-height"),
            waveColor: o("wav-color"),
            progressColor: o("progress-color"),
            cursorColor: o("progress-color"),
            cursorWidth: 0,
            barWidth: 2,
            barGap: 1,
            barRadius: 0,
            barHeight: 3,
            url: o("track"),
            autoplay: !1,
          },
          t
        );
        const r = WaveSurfer.create(i);
        a(".audio-pause-play").on("click", () => {
          n(), a(".audio-pause-play").toggleClass("pause"), r.playPause();
        });
        var l = !0;
        a(".audio-mic").on("click", () => {
          a(".audio-mic").toggleClass("mute"), r.setMuted(l), (l = 0 == l);
        }),
          a(".audio-backward").on("click", () => {
            r.skip(-5), n();
          }),
          a(".audio-forward").on("click", () => {
            r.skip(5), n();
          });
        let c = (e) =>
            `${Math.floor(e / 60)}:${`0${Math.round(e) % 60}`.slice(-2)}`,
          d = e(a(".audio-time"))[0],
          u = e(a(".audio-duration"))[0];
        r.on("decode", (e) => (u.textContent = c(e))),
          r.on("timeupdate", (e) => (d.textContent = c(e))),
          r.on("finish", () => {
            a(".audio-pause-play").addClass("replay"),
              a(".audio-pause-play").removeClass("pause");
          });
        var p = a(".audio-repeat");
        p.on("click", () => {
          p.attr("data-repeat")
            ? p.removeAttr("data-repeat")
            : p.attr("data-repeat", "true");
        }),
          r.on("finish", () => {
            p.attr("data-repeat") &&
              (r.play(),
              a(".audio-pause-play").addClass("pause").removeClass("replay"));
          });
      });
    }),
    e(".audio-active").vsAudioPlayer(),
    e(".audio-active2").vsAudioPlayer({
      barGap: null,
      barWidth: null,
      barGap: null,
      barHeight: 0.1,
      dragToSeek: !1,
      cursorWidth: 10,
      cursorColor: "#F58800",
    }),
    e(".team-share").on("click", function () {
      e(this).parent().toggleClass("active"),
        e(this)
          .closest(".team-style1")
          .siblings(".team-style1")
          .find(".team-social.active")
          .removeClass("active");
    }),
    (e.fn.countdown = function () {
      e(this).each(function () {
        var t = e(this),
          s = new Date(t.data("offer-date")).getTime();
        function a(e) {
          return t.find(e);
        }
        var o = setInterval(function () {
          var e = new Date().getTime(),
            n = s - e,
            i = Math.floor(n / 864e5),
            r = Math.floor((n % 864e5) / 36e5),
            l = Math.floor((n % 36e5) / 6e4),
            c = Math.floor((n % 6e4) / 1e3);
          n < 0
            ? (clearInterval(o),
              t.addClass("expired"),
              t.find(".message").css("display", "block"))
            : (a(".day").html(i + " "),
              a(".hour").html(r + " "),
              a(".minute").html(l + " "),
              a(".seconds").html(c + " "));
        }, 1e3);
      });
    }),
    e(".offer-counter").length && e(".offer-counter").countdown();
})(jQuery);
window.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  !1
),
  (document.onkeydown = function (e) {
    if (
      123 == event.keyCode ||
      (e.ctrlKey && e.shiftKey && 73 == e.keyCode) ||
      (e.ctrlKey && e.shiftKey && 67 == e.keyCode) ||
      (e.ctrlKey && e.shiftKey && 74 == e.keyCode) ||
      (e.ctrlKey && 85 == e.keyCode)
    )
      return !1;
  });

  