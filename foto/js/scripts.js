	 var menu1=0; //вспомогательный для 1 набора (очки)
	 var menu2=0; //вспомогательный для 2 набора (бороды)
	 var menu3=0; //вспомогательный для 3 набора (шапки)
	 var choice =[]; //массив для выбранных инструментов
	 var selected_accessories; //выбранный инструмент
	 var zoom=5; //шаг для увеличение/уменьшения выбранного объекта
	 var ugol = 15; //угол поворота
	 var menu_number = ""; //номер набора инструментов (1-очки, 2-бороды, 3-шапки)
 
$(document).ready(function(){
	
  $("#openimgfile").css({"opacity" : "0"});//скрываем кнопку(делаем прозрачным)

  //для открытия картинки перемещением
  var dropZone = document.getElementById('openimg');   
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);
  //для открытия картинки перемещением

	viewdiv('menu1') ; //показываем меню
	
	move_glasses(); //делаем объекты меню перемещаемыми (очки)
	move_beards();	//делаем объекты меню перемещаемыми (бороды)
	move_hats();	//делаем объекты меню перемещаемыми (шапки)

	$("#picture").droppable({
  	drop:function(event, ui){
	  
	 //console.log(ui.draggable.attr('id'));
		var p =  ui.draggable.attr('id'); //берем премещаемый объект(инструмент)

		var coord = $("#picture").offset();//берем координаты рабочей области потом будем центрировать сюда объекты

		choice.push("imageFace"); //вставляем в массив фото
		$("#imageFace").css({
			"position" : "absolute", //меняем позицию
			"z-index": "0"	//чтобы не ушел на задний план
		})

		console.log(" left "+coord.left);
		
		$("#"+p).css({
			"position" : "absolute",	//позиция инструмента
			"left" : coord.left+ ($("#picture").width()-$("#"+p).width()) /2,//координаты по центру
			"top" : coord.top + ($("#picture").height()-$("#"+p).height())/2 //координаты по центру

		})

		$("#"+p).draggable({
  			containment: "parent" //ограничиваем движение объекта (внутри родителя)
		});
		if (menu_number==1){
			menu1=1;
			if (choice.indexOf(p)!=-1) {$("#picture").droppable({ disabled: true });}
		};
		if (menu_number==2){
			menu2=1;
			if (choice.indexOf(p)!=-1) {$("#picture").droppable({ disabled: true });}
		};
		if (menu_number==3){
			menu3=1;
			if (choice.indexOf(p)!=-1) {$("#picture").droppable({ disabled: true });}
		};
		
		console.log(menu_number, menu1);
		console.log(menu_number, menu2);
		console.log(menu_number, menu3);
 		
 		move_obj(p, 'picture');
 		choice.push(p);

    	$("#picture").on('click', function(e) {
         		selected_accessories =  e.target.id;

         		console.log(" klikkkk "+e.target.id);
         		
				var svoi_element =choice.indexOf(selected_accessories);
         		if (svoi_element!=-1){
         			edit_accessories();
         			$("#picture").droppable({disabled: false});
         			console.log(" to edit accessories ");
         		}
    	});
	
  }

});

$('#menu1').droppable({
	//accept : "#glasses_1"; "#glasses_2"; "#glasses_3"; "#glasses_4",
  	drop:function(event, ui){
  		console.log("меня установу инстурментов");
		if (menu_number==1 && menu1 ==1) {
			menu1=0
			var p =  ui.draggable.attr('id');
			console.log(" drop menu2"+p);
			move_obj(p, 'menu1');
		};
  	}
});

$('#menu2').droppable({
  	drop:function(event, ui){
  		console.log("меня установу инстурментов");
		if (menu_number==2 && menu2 ==1) {
			menu2=0
			var p =  ui.draggable.attr('id');
			console.log(" drop menu2"+p);
			move_obj(p, 'menu2');
		};
  	}
});

$('#menu3').droppable({
  	drop:function(event, ui){
  		console.log("меня установу инстурментов");
		if (menu_number==3 && menu3 ==1) {
			menu3=0
			var p =  ui.draggable.attr('id');
			console.log(" drop menu2"+p);
			move_obj(p, 'menu3');
		};
  	}
});

});
//////////////////////////////////////////////////////////
 function handleFileSelect(evt) {
 	//Вставляем каринку перетаскиванием
    evt.stopPropagation();
    evt.preventDefault();
    var err_msg="";
    var files = evt.dataTransfer.files; // FileList object.
     for (var i = 0, f; f = files[i]; i++) {

//console.log("type    "+f.type+  '   size-  '+   f.size);
     
    	if (!f.type.match('image/jp*')) {err_msg="Поддерживается только JPG файлы!  "}
    	if (f.size> 307200) {err_msg=err_msg+" Размер картинки не должен превышать 300КБ!"}
	if (err_msg=="") {
        var reader = new FileReader();
	    reader.onload = (function(theFile) {
        return function(e) {
          $("#imageFace").css("backgroundImage", "url(" + e.target.result + ")");
           $(".drop").css("background-color", "blue");
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }else{
    	alert(err_msg);
    }

}

  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }


 function move_obj(id, to_div) 
	{
		//вырезаем перемещенный инструмент и вставляем в рабочую область (на фото)
		var p =  $("#"+id).detach();
		$(p).appendTo($("#"+to_div));
		//$(p).prepend($("#"+to_div));
		console.log(" id "+id);
		console.log(" to_div "+to_div);
	
	}
	
function move_glasses() 
	{
		//двигаем очки
		$("#glasses_1, #glasses_2, #glasses_3, #glasses_4").draggable({ 
			revert: "invalid",
			start: function(){
			menu_number=1; //номер текущего набора инструментов
			console.log("menu1= "+menu1);
			//если не добавлен инстурмент с данной категорий то можем вставлять в рабочую зону

			if (menu1==0){
				$("#picture").droppable({ 
					disabled: false//,
					//accept: ".glasses accessories"
				})
			}
			else
			{
				$("#picture").droppable({disabled: true}) //отключаем прием объектов рабочей зоны
			}
			}

		});
	}
function move_beards() 
	{
		//двигаем бороды
		$("#beards_1, #beards_2, #beards_3, #beards_4").draggable({ 
			revert: "invalid",
			start: function(){
			menu_number=2; //номер текущего набора инструментов
			console.log("menu2= "+menu2);

			//если не добавлен инстурмент с данной категорий то можем вставлять в рабочую зону
			if (menu2==0){
				$("#picture").droppable({ 
					disabled: false//,
					//accept	: ".beards accessories"
				})
			}
			else
			{
				$("#picture").droppable({disabled: true})//отключаем прием объектов рабочей зоны
			}
			}
			
		});
			
	}

	function move_hats() 
	{
		$("#hats_1, #hats_2, #hats_3, #hats_4").draggable({ 
			revert: "invalid",
			start: function(){
			menu_number=3;//номер текущего набора инструментов
			console.log("menu3= "+menu3);
			//если не добавлен инстурмент с данной категорий то можем вставлять в рабочую зону
			if (menu3==0){
				$("#picture").droppable({ 
					disabled: false//,
					//accept	: ".hats accessories"
				})
			}
			else
			{
				$("#picture").droppable({disabled: true})//отключаем прием объектов рабочей зоны
			}
			}
			
		});
    }

function screen_div(){
	//функция сохранения DIV в картинку и в файл
	var len_choice = choice.length; //кол-во элементов массива выбранных инструментов
	for(var i = 0; i < len_choice;  i++) 
	{
		$("#"+choice[i]).css({"border" : "none"}); //удаляем границы с дивов(жаксы емес)
	}

		html2canvas($("#picture"), { 
				onrendered: function(canvas) {
      var img = canvas.toDataURL("image/jpg");
     // $('body').append('<img src="'+img+'"/>'); //тут можно сохранить в img

    var dlLink = document.createElement('a');
    dlLink.download = "Photo.jpg"; // имя загружаемого файла картинки
    dlLink.href = img;
    dlLink.dataset.downloadurl = ["image/jpg", dlLink.download, dlLink.href].join(':');

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);

    }
		}); 		
}

function edit_accessories(){
	//работаем с выбранными инструментами
	var len_choice = choice.length; //кол-во элементов массива выбранных инструментов

	console.log("click  "+selected_accessories);
	for(var i = 0; i < len_choice;  i++) 
	{
		//console.log("mass el  "+choice[i]);
		$("#"+choice[i]).css({"border" : "none"}); //удаляем границы с дивов(жаксы емес)
	}
	//у выбранного объекта ставим красную пунктирную линию
	$("#"+selected_accessories).css({"border" : "2px","border-style" : "dotted","color":"red"});

	$("#"+selected_accessories).draggable({ revert: false }); //выбранного объект делаем перемещаемым
	$("#"+selected_accessories).resizable({ ghost:true });//у выбранного объекта можно менять размер
}

function rotate_left(){
	//поворот влево
	$("#"+selected_accessories).css({"transform" : "rotate(-"+ugol+"deg)"});
	ugol += 15;
	console.log("left "+selected_accessories	)

}
function rotate_right(){
	//поворот вправо

	$("#"+selected_accessories).css({"transform" : "rotate("+ugol+"deg)"});
	ugol += 15;

}
function zoom_in()
{
		//увеличение объекта
        console.log("zoom "+ selected_accessories);
        console.log(zoom);
        $("#"+selected_accessories).animate({
        	width: '+='+zoom+"px",
        	height: '+='+zoom+"px",
        	queu: false}) //одновременная анимация 
}	

function zoom_out()
{
		//уменьшение объекта
    	console.log("zoom "+selected_accessories);
    	console.log(zoom);
        $("#"+selected_accessories).animate({
        	width: '-='+zoom+"px",
        	height: '-='+zoom+"px",
         	queu: false}) //одновременная анимация 
}


function viewdiv(id) 
	{
       if (id=='menu1')//показываем первый набор инстурментов, остальные скрываем
	   {
		  document.getElementById('menu1').style.display='block'
		  document.getElementById('menu2').style.display='none';
		  document.getElementById('menu3').style.display='none';
	   }
	   if (id=='menu2') //показываем воторой набор инстурментов, остальные скрываем
	   {
		  document.getElementById('menu1').style.display='none'
		  document.getElementById('menu2').style.display='block';
		  document.getElementById('menu3').style.display='none';
	   }
	   if (id=='menu3') //показываем третий набор инстурментов, остальные скрываем
	   {
		  document.getElementById('menu1').style.display='none'
		  document.getElementById('menu2').style.display='none';
		  document.getElementById('menu3').style.display='block';
	   }
	}

$(document).keydown(function(e) {
	var mydiv = $("#"+selected_accessories);
    switch (e.which) {
    case 37:
        mydiv.css('left', mydiv.position().left - 10); //left arrow key
        break;
    case 38:
        mydiv.css('top', mydiv.position().top - 10); //up arrow key
        break;
    case 39:
        mydiv.css('left', mydiv.position().left + 10); //right arrow key
        break;
    case 40:
        mydiv.css('top', mydiv.position().top + 10);	 //bottom arrow key
        break;
    case 82:
        rotate_right();	 //онга бұру
        break;
    case 76:
        rotate_left();	 //солға бұру
        break;
    }
})