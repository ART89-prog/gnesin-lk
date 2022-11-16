$(() => {

      $('.releases_items-lk').slick({
        infinite: true,
        lazyLoad: 'ondemand',
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows:'.slider-arrows',
        prevArrow: "<img src='images/arrow-prev.svg'>",
        nextArrow: "<img src='images/arrow-next.svg'>",
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 479,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });



      // Кастомный select
	    $('select').niceSelect()

    
       
    });


