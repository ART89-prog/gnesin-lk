$(() => {
    $('.releases_items-lk').slick({
        infinite: true,
        lazyLoad: 'ondemand',
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: '.slider-arrows',
        prevArrow: "<img src='images/arrow-prev.svg'>",
        nextArrow: "<img src='images/arrow-next.svg'>",
        responsive: [{
            breakpoint: 1023,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    // // Кастомный select
    $('.select-block').niceSelect()
    // Моб. меню в личный кабинет
    $('body').on('click', '.profile:not(.active)', function(e) {
        e.preventDefault()
        $('.profile').addClass('active')
        $('body').addClass('menu_open_lk')
        $('.main-content_aside').addClass('show')
        $('.overlay').fadeIn(300)
    })
    $('body').on('click', '.lk header .close_btn, .overlay, .profile.active', function(e) {
        $('.profile').removeClass('active')
        $('body').removeClass('menu_open_lk')
        $('.main-content_aside').removeClass('show')
        $('.overlay').fadeOut(300)
    })
    if ($(window).width() < 767) {
        $(".steps_item:not(.active)").prev(".active").show();
    }
    // Изменение количества товара
    $('body').on('click', '.steps_info-amount .minus', function(e) {
        e.preventDefault()
        let parent = $(this).closest('.amount')
        let input = parent.find('.input')
        let inputVal = parseFloat(input.val())
        let minimum = parseFloat(input.data('minimum'))
        let step = parseFloat(input.data('step'))
        let unit = input.data('unit')
        if (inputVal > minimum) {
            input.val(inputVal - step + unit)
        }
        if ($(this).hasClass('update_price')) {
            updateCartPrice($(this).closest('.product'))
        }
    })
    $('body').on('click', '.steps_info-amount .plus', function(e) {
        e.preventDefault()
        let parent = $(this).closest('.amount')
        let input = parent.find('.input')
        let inputVal = parseFloat(input.val())
        let maximum = parseFloat(input.data('maximum'))
        let step = parseFloat(input.data('step'))
        let unit = input.data('unit')
        if (inputVal < maximum) {
            input.val(inputVal + step + unit)
        }
        if ($(this).hasClass('update_price')) {
            updateCartPrice($(this).closest('.product'))
        }
    })
    $('.steps_info-amount .input').keydown(function() {
        let _self = $(this)
        setTimeout(function() {
            if (_self.val() == '' || _self.val() == 0) {
                _self.val(parseInt(_self.data('minimum')))
            }
            if (_self.hasClass('update_price')) {
                updateCartPrice(_self.closest('.product'))
            }
        }, 10)
    })
    $('body').on('change', '.form input[type=file]', function(e) {
        $(this).closest('.file').find('label').text($(this).val())
    })
    $('.js-example-basic-multiple').select2({
        language: "ru"
    });
    new Sortable(example1, {
        animation: 150,
        ghostClass: 'blue-background-class'
    });
    // Аккордион
    $('body').on('click', '.accordion .accordion_item .head', function(e) {
        e.preventDefault()
        const $item = $(this).closest('.accordion_item'),
            $accordion = $(this).closest('.accordion')
        if ($item.hasClass('active')) {
            $item.removeClass('active').find('.data').slideUp(300)
        } else {
            $accordion.find('.accordion_item').removeClass('active')
            $accordion.find('.data').slideUp(300)
            $item.addClass('active').find('.data').slideDown(300)
        }
    })
    // Удаление файла
    $('.form .file .selected .remove').click(function(e) {
        e.preventDefault()
        let parent = $(this).closest('.file')
        $(this).closest('div').remove()
        parent.find('input[type=file]').val('')
    })
});