//aqui é referente ao google maps 
window.onload = function() { 

	//menu mobile 
	 
	$('.mobile-menu').click(function(){ 
		$(this).find('ul').slideToggle()
	}) 

	//scroll dinamico 

	$('nav a').click(function(){ 
		var href = $(this).attr('href'); 
		var offSetTop = $(href).offset().top; 
		 
		$('html,body').animate({'scrollTop':offSetTop}) 
		return false;
	})  

	//Slider apresentação 
	 
	var delay = 3000;
	var curIndex = 0;
	var amt;

	initSlider();
	autoPlay();

	function initSlider(){
		amt = $('.sobre-autor').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;
		$('.sobre-autor').css('width',sizeBoxSingle+'%');
		$('.scroll-wraper').css('width',sizeContainer+'%'); 


		for(var i = 0; i < amt; i++){
			if(i == 0)
				$('.slider-bullets').append('<span style="background-color:rgb(15,15,15);"></span>');
			else
				$('.slider-bullets').append('<span></span>');
		}

	}

	function autoPlay(){
		setInterval(function(){
			curIndex++;
			if(curIndex == amt)
				curIndex = 0;
			goToSlider(curIndex);
		},delay)
	}

	function goToSlider(curIndex){
		var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
		$('.slider-bullets span').css('background-color','rgb(200,200,200)');
		$('.slider-bullets span').eq(curIndex).css('background-color','rgb(15,15,15)');
		$('.scroll-ap').stop().animate({'scrollLeft':offSetX+'px'});

	}

	$(window).resize(function(){
		$('.scroll-ap').stop().animate({'scrollLeft':0});
	})




	//plugin mask 
	 
	$('input[name=telefone]').mask('(00)0 0000-0000') 

	//validação de formulário em js puro
	  
	const form = document.getElementById('form'); 
	const campos = document.querySelectorAll('.required'); 
	const spans = document.querySelectorAll('.span-required'); 
	const emailRegex = /^\w+([-+.']\w+)*@\w+([--.]\w+)*\.\w+([--.]\w+)*$/; 
	
	nameValidate(); 
	emailValidate();
	
	form.addEventListener('submit', (event) => { 
		event.preventDefault(); 
		nameValidate(); 
		emailValidate();
	});
 
	function setError(index) { 
		campos[index].style.border = '2px solid #e63636'; 
		spans[index].style.display = 'block'; 
	} 

	function removeError(index) { 
		campos[index].style.border = ''; 
		spans[index].style.display = 'none'; 
	}

	function nameValidate() { 
		if(campos[0].value.length < 3) 
		{ 
			setError(0);
		}  
		else  
		{  
		 	removeError(0); 
		} 

	} 
	
	function emailValidate() { 
		if(!emailRegex.test(campos[1].value))  
		{ 
			setError(1)
		} 
		else 
		{ 
			removeError(1);
		} 
		 
	}
	 
}
 
