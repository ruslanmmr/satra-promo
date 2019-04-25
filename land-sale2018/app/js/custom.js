$(document).ready(function () {
  slider1();
  slider2();
  lazy();
  cover();
  autoBlockHeight();
});

//image-cover-box
function cover() {
  $('.cover-box').each(function() {
    //set size
    var th = $(this).height(),//box height
        tw = $(this).width(),//box width
        im = $(this).children('img'),//image
        ih = im.height(),
        iw = im.width();
    if ((tw/th) >= (iw/ih)) {
        im.addClass('ww').removeClass('wh');
    } else {
        im.addClass('wh').removeClass('ww');
    }
  });
}

//blocks
function autoBlockHeight() {
  resize();
  $(window).resize(function () {
    resize();
  });

  function resize() {
    var mh = 0,
    $block = $(".popular-slide__content");

    $block.css('height', 'auto');
    $block.each(function () {
      var h_block = parseInt($(this).height());
      if(h_block > mh) {
        mh = h_block;
      };
    });
    $block.height(mh);
  }
}

//lazy
function lazy() {
  $(".lazy").Lazy({
    visibleOnly: true,
    effect: 'fadeIn',
    effectTime: '300'
  });
}

function slider1() {
  var $slider = $('.cook-slider'),
      $link = $('.cook-slider a');

  $link.on('click', function(e) {
    if($(this).parents('.slick-slide').hasClass('slick-center')) {}
    else {
      e.preventDefault();
    }
  })

  $slider.on('afterChange', function(){
    lazy();
  });

  $slider.slick({
    infinite: true,
    dots: false,
    arrows: true,
    speed: 400,
    slidesToShow: 3,
    variableWidth: true,
    centerMode: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    draggable: true
  });
}
function slider2() {
  var $slider = $('.popular-slider');

  $slider.on('afterChange', function(){
    lazy();
  });

  $slider.slick({
    infinite: true,
    dots: false,
    arrows: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true
  });
}