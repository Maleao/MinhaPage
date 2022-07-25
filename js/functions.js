//aqui é referente ao google maps 
window.onload = function() { 
    alert("O google maps não está 100%, pois é necessário uma API KEY ativada com cartão. Como a página é apenas uma apresentação informal, não me dei o trabalho de realizar a ativação da API.");  


    var map; 

    function initialize() { 
        var mapProp = { 
            center: new google.maps.LatLng(-21.74965,-43.36597),  
            scrollwheel:false, 
            zoom:15, 
            mapTypeId:'roadmap'

        } 
         
        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }
	function addMarker(lat,long,icon,content,click) {
		var latLng = {'lat':lat,'lng':long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		}); 
        
			google.maps.event.addListener(marker,'click',function(){
				infoWindow.open(map,marker);
			});
		
	}

	initialize();

	var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;border-bottom:1px solid black;">Meu endereço</p>';
	addMarker(-21.74965,-43.36597,'',conteudo); 

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
	 
	const button = document.getElementById('submit') 
		 
		button.addEventListener('click', (event) => { 
		event.preventDefault()  
	 
		const email = document.getElementById('email') 
		const name = document.getElementById('name') 
		const msg = document.getElementById('msg') 

		if (email.value == '') { 
			email.classList.add("errorInput") 
			alert("O campo E-mail precisa ser preenchido")
		} else { 
			email.classList.remove("errorInput")
		}

		if (name.value == '') { 
			name.classList.add("errorInput") 
			alert("O campo nome precisa ser preenchido")
		} else { 
			name.classList.remove("errorInput")
		}  

		if (msg.value == '') { 
			msg.classList.add("errorInput") 
			alert("Inclua uma mensagem")
		} else { 
			msg.classList.remove("errorInput")
		} 

		if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) { 
			email.classList.add("errorInput")
		} else { 
			email.classList.remove("errorInput")
		}  

	})



}
