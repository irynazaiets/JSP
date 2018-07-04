
function addEffectCurrentSinger(idStr){
	domObj = document.getElementById(idStr);
	var obj = $(domObj);
	obj.toggle(1000);

	var divs = domObj.parentNode.querySelectorAll('div[id]');
	for(i = 0; i < divs.length; ++i)
	{
		if(divs[i] === domObj) continue;
		divs[i].removeAttribute('style');
	}
};

$(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); 
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
            var coords = 'center '+ yPos + 'px';
            $bgobj.css({ backgroundPosition: coords });
        });
    });
});
