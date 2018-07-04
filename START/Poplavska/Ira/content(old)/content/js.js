function addEffectQum(){
	$( "div#qum,h3:first-of-type" ).toggle(1000);} /*++++*/
	
function addEffectHistory(){
	$( "div#history,h3:nth-of-type(2)" ).toggle(1000);} /*++++*/
	
function addEffectSinger(){
	$( "h2,h3:last-of-type" ).toggle(1000);} /*++++*/
	

	
	


function addEffect1singer(){ 
	$( "div#1singer,div#1singer>.sngl" ).toggle(1000); }

function addEffect2singer(){ 
	$( "div#2singer,div#2singer>.sngl" ).toggle(1000); }
	
function addEffect3singer(){ 
	$( "div#3singer,div#3singer>.sngl" ).toggle(1000); }
	
function addEffect4singer(){ 
	$( "div#4singer,div#4singer>.sngl" ).toggle(1000); }
	
function addEffect5singer(){ 
	$( "div#5singer,div#5singer>.sngl" ).toggle(1000); }
	
function addEffect6singer(){ 
	$( "div#6singer,div#6singer>.sngl" ).toggle(1000); }
	
	
	
	
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
