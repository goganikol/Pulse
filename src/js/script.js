
$(document).ready(function(){
    $('.slider_wrapper').slick({
        speed: 1200,
        //adapriveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg" alt="left"></button>',
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this).addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active')
    });
    
    
    function toggleSlideItem(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    
    toggleSlideItem('.catalog-item__link');
    toggleSlideItem('.catalog-item__back');

    //Modal
    $('[data-modal=consultation]').on('click',function(){
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal_close').on('click', function(){
        $('.overlay, #consultation #thanks #order').fadeOut('slow');
    });

    $('.button_mini').each( function(i){
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });
});

          