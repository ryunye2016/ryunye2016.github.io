// a 클릭시 위로 튕기는 이벤트 제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault(); 
});

//scrolla.js
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일 버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
});

// splitting
$(function(){ Splitting();});

// menuOpen
$(function(){
    $('.menuOpen').on('click', function(){
        $(".gnb").addClass('on');
    });
    $('.gnb .close').on('click', function(){
        $('.gnb').removeClass('on');
    });
});
