var header = $('.header');
var wrapper = $('.wrapper');
var logo = $('.header__logo');
var logoText = $('.header__logo--text');
var subText = $('.header__subtext');


$(window).scroll(function() {
  if ($(this).scrollTop() > 1) {
    $(header).css({
      height: '10vh',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    });
    $(logo).css({
      height: '3em',
      width: '3em',
      marginBottom: '0',
      marginLeft: '3em'
    });
    $(logoText).css({
      fontSize: '1.2em',
      marginBottom: '0',
      marginTop: '0',
      marginLeft: '1em'
    });
    $(subText).remove();
  }
});
