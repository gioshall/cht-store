// preload //

$(document).ready( function() {
    var timer;   
    $('body').jpreLoader({
        splashID: "#jSplash",
        loaderVPos: '0%',
        autoClose: true        
    }); 
});

// device

$(document).ready(function(){
var device = navigator.userAgent.toLowerCase();
var mobile = device.match(/(iphone|ipod|ipad|android)/);
if (mobile) {
      $(document).bind('touchmove', function(e) {
      e.preventDefault();
      });     
     }
});


// scroll

var dHeight = $(document).height();
var wHeight = $(window).height();
var gwH = $('.block-02').offset().top;

//console.log(dHeight);

$('.toGames,.toTop').click(function(){
  $("html, body").animate( { scrollTop: $('.block-01').offset().top }, 700);
});
$('.toDevices').click(function(){
  $("html, body").animate( { scrollTop: $('.block-02').offset().top }, 700);
});
$('.toDownload').click(function(){
  $("html, body").animate( { scrollTop: $('.block-03').offset().top }, 700);
});

$( window ).scroll(function(){
  var stx = $( this ).scrollTop();
  //console.log(stx);
  console.log( gwH );
  $('.gw-04').css('transform', 'translate3d(0,' + stx / -0.8 + 'px,0)');
  $('.gw-03').css('transform', 'translate3d(0,' + stx / -1.2 + 'px,0)');
  $('.gw-02').css('transform', 'translate3d(0,' + stx / -1.5 + 'px,0)');
  $('.gw-01').css('transform', 'translate3d(0,' + stx / -1.8 + 'px,0)');
  $('.game-hand').css('transform', 'translate3d(0,' + stx / -30 + '%,0)');
  if( stx >= dHeight*0.15 ) {
    $('.blk02bg.bg02').css('transform', 'translate3d(0,' + (stx- (dHeight/6)) / -3 + 'px,0)');
    $('.blk02bg.bg01').css('transform', 'translate3d(0,' + (stx- (dHeight/6)) / -5 + 'px,0)');
  }
  if( stx >= gwH ) {
    $('.game-wall , .game-hand').attr('style', '');   
  }
  if( stx > gwH ) {
    var opcr = stx / dHeight - 0.4;
    console.log( opcr );
    $('.block-03').css('background-color','rgba(0,0,0,' + opcr * 2.2 + ')');
    $('.gw-04').css('transform', 'translate3d(0,' + opcr * 120 + 'px,0)');
    $('.gw-03').css('transform', 'translate3d(0,' + opcr * 150 + 'px,0)');
    $('.gw-02').css('transform', 'translate3d(0,' + opcr * 200 + 'px,0)');
    $('.gw-01').css('transform', 'translate3d(0,' + opcr * 280 + 'px,0)');
    //$('.game-hand').css('transform', 'translate3d(0,' + opcr * 20 + '%,0)')
  }
});

$('.dvc').click(function(){
    $('.devices').fadeIn(200);
    $('.dvc-mask').show();
});
$('.devices .close, .dvc-mask').click(function(){
    $('.devices').fadeOut(100);
    $('.dvc-mask').hide()
});
