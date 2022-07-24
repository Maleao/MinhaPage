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
