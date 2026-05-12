$(document).ready(function () {
    $('i').tooltip({
        html: true,
        delay: 300
    });

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip()

    $(".btnModal").click(function () {
        
        var callback = $(this).attr("data-callback");
        if(callback == null) {
            callback = () => {};
        } else {
            callback = eval(callback);
        }
        
        $("#myModal").load($(this).attr("data-href"), callback);
        $("#myModal").modal({
            backdrop: 'static',
            keyboard: false
        });
    });

    
    // Mega-menu
    window.prettyPrint && prettyPrint()
    $(document).on('click', '.yamm .dropdown-menu', function (e) {
        e.stopPropagation()
    })

    // Botão de voltar ao topo
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });


    // Impressão
    $("#imprimir").click(function () {
        window.print();
        return false;
    });


    // Remover paragráfos vazios
    $('article p').each(function () {
        var $p = $(this),
            txt = $p.html();
        if (txt == '&nbsp;') {
            $p.remove();
        }
    });


    // Tabelas com classes do Bootstrap
    $("table").addClass("table table-striped table-hover");
    $("table").removeAttr("border");
    $(".table").removeAttr("style");
    $('table').wrap('<div class="table-responsive"></div>');


    // Menu mobile
    var menuMobile = document.getElementById('menumobile');
    if(menuMobile == null) {
        $('#trigger-menu-mobile').addClass('d-none').removeClass('d-block');
    }
    
    $("[data-trigger]").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var offcanvas_id = $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");

    });

    // Fecha o menu quando pressionar ESC
    $(document).on('keydown', function (event) {
        if (event.keyCode === 27) {
            $(".screen-overlay").removeClass("show");
            $(".offcanvas").removeClass("show");
            $("body").removeClass("offcanvas-active");
        }
    });

    $(".btn-close, .screen-overlay").click(function (e) {
        $(".screen-overlay").removeClass("show");
        $(".offcanvas").removeClass("show");
        $("body").removeClass("offcanvas-active");
    });

    // Barra do topo que some e aparece em relação a rolagem da página
    $('body').css('padding-top', $('#barra-topo').outerHeight(true) + 'px');

    $(window).resize(function () {
        $('body').css('padding-top', $('#barra-topo').outerHeight(true) + 'px');
    });

    if ($('.smart-scroll').length > 0) { // check if element exists
        var last_scroll_top = 0;
        $(window).on('scroll', function () {
            scroll_top = $(this).scrollTop();
            if (scroll_top > $('#barra-topo').outerHeight(true)) {
                if (scroll_top < last_scroll_top) {
                    $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
                }
                else {
                    $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
                }
                last_scroll_top = scroll_top;
            }
        });
    }


    // Dropdown do menu
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 768px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Habilitar Swipe do Carousel em telas com touch

    $('.carousel').on('touchstart', function (event) {
        const xClick = event.originalEvent.touches[0].pageX;
        $(this).one('touchmove', function (event) {
            const xMove = event.originalEvent.touches[0].pageX;
            const sensitivityInPx = 5;

            if (Math.floor(xClick - xMove) > sensitivityInPx) {
                $(this).carousel('next');
            }
            else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
                $(this).carousel('prev');
            }
        });
        $(this).on('touchend', function () {
            $(this).off('touchmove');
        });
    });

});