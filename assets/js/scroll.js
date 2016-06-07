var hash = location.hash.replace('#','');
window.location.hash = '';

$(function(){

  $(window).load(function(){
   // Remove the # from the hash, as different browsers may or may not include it
   if(hash != ''){

      // Clear the hash in the URL
      // location.hash = '';   // delete front "//" if you want to change the address bar

       $('html, body').animate({ scrollTop: $('#'+hash).offset().top}, 'slow', function(){
         window.location.hash = hash;
       });

      }
  });

  $("a.scroll-to").each(function(){
    var targetId = $(this).attr('href')
    if(targetId.indexOf('/')===0) return;
    var target = $(targetId);
    $(this).click(function(e){
      e.preventDefault();

      $('html,body').animate({scrollTop: target.offset().top},'slow', function(){
        window.location.hash = targetId;
      });
    });
  });

  $(window).bind('hashchange',function(e){
    e.preventDefault();
  });
});
