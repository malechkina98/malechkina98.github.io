	 var menu1=0, menu1_pom="";
	 var menu2=0, menu2_pom="";
	 var menu3=0, menu3_pom="";
	 var move_yes=0;
	 var choice =[];
	 var selected_accessories;
	 var zoom=5;
	 var ugol = 15;

	 var menu_number = "";
 
 $(document).ready(function(){
 	//$("#imageFace").resizable({ ghost:true });
	viewdiv('menu1') ;
	//$("plus").prop( "disabled", true );
	//$( "plus:disabled" );
	//#plus, #minus, #left, #right

	//edit_accessories();
	move_glasses();
	move_beards();
	move_hats();
/*$( "#menu" ).tabs({
      event: "mouseover"
    });*/
	
	//$( "#menu" ).accordion();
	$("#picture").droppable({
  	drop:function(event, ui){
	  
	 //console.log(ui.draggable.attr('id'));
		var p =  ui.draggable.attr('id');
		
		//console.log(document.getElementById(p));
		p_html = document.getElementById(p);
		console.log("p_html"+p_html);

		var coord = $("#picture").offset();

		console.log(" left "+coord.left);
		$("#"+p).css({
			"position" : "absolute",
			"left" : coord.left+ ($("#picture").width()-$("#"+p).width()) /2,
			"top" : coord.top + ($("#picture").height()-$("#"+p).height())/2 

		})
		//console.log(p_html);
		//console.log($(p));
		//$("#glasses_2").resizable();

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
		
		//$("imageFace").after($(p));
		console.log(menu_number, menu1);
		console.log(menu_number, menu2);
		console.log(menu_number, menu3);
 		
 		move_obj(p, 'picture');
 		choice.push(p);
		

    	$("#picture").on('click', function(e) {
         		selected_accessories =  e.target.id;
         		//alert(id_click);
         		console.log(" klikkkk "+e.target.id);
         		
				var svoi_element =choice.indexOf(selected_accessories);
         		if (svoi_element!=-1){
         			edit_accessories();
         			$("#picture").droppable({disabled: false});
         			console.log(" to edit accessories ");
         		}
         		ugol = 15;
         		if (selected_accessories =="imageFace") 
         		{
   				for(var i = 0; i < choice.length;  i++) 
					{	
						$("#"+choice[i]).css({"border" : "none"});
					}
         		};
    	});

		
  }

});

$('#menu1').droppable({
	//accept : "#glasses_1"; "#glasses_2"; "#glasses_3"; "#glasses_4",
	accept : "#glasses_1",
	accept : "#glasses_2",
	accept : "#glasses_3",
	accept : "#glasses_4",
  	drop:function(event, ui){
  		console.log("меня установу инстурментов");
		if (menu_number==1 && menu1 ==1) {
			menu1=0
			var p =  ui.draggable.attr('id');
			console.log(" drop menu2"+p);
			move_obj(p, 'menu1');
		/*$("#"+p).css({
			"position" : "relative",
			"float" : "left"
		})*/
		};
  	}
});

$('#menu2').droppable({
  	//accept:"#beards_1", "#beards_2", "#beards_3", "#beardsrds_4";
  	accept:"#beards_1",
  	accept:"#beards_2",
  	accept:"#beards_3",
  	accept:"#beards_4",
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
  	//accept:"#hats_1, #hats_2, #hats_3, #hats_4";
  	accept:"#hats_1",
  	accept:"#hats_2",
  	accept:"#hats_3",
  	accept:"#hats_4",
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


 function move_obj(id, to_div) 
	{
		
		var p =  $("#"+id).detach();
		$(p).appendTo($("#"+to_div));
		//$(p).prepend($("#"+to_div));
		console.log(" id "+id);
		console.log(" to_div "+to_div);
		//$(p).after($("#imageFace"));
		//document.getElementByld("picture").innerHTML=p;
		//$("#imageFace").prepend(p);
		//$("#"+to_div).load("default.html #"+to_div);

		
	}
	
function move_glasses() 
	{
		$("#glasses_1, #glasses_2, #glasses_3, #glasses_4").draggable({ 
			revert: "invalid",
			start: function(){
			menu_number=1;
			console.log("menu1= "+menu1);
			/*if (menu1==1){
				$("#picture").droppable({ disabled: true })
			} else {
				$("#picture").droppable({ disabled:  })
			}*/
			if (menu1==0){
				$("#picture").droppable({ 
					disabled: false//,
					//accept: ".glasses accessories"
				})
			}
			else
			{
				$("#picture").droppable({disabled: true})
			}
			}

		});
	}
function move_beards() 
	{
		$("#beards_1, #beards_2, #beards_3, #beards_4").draggable({ 
			revert: "invalid",
			start: function(){
			menu_number=2;
			console.log("menu2= "+menu2);
			/*if (menu2==1){
				$("#picture").droppable({ disabled: true })
			} else {
				$("#picture").droppable({ disabled: false })
			}*/
			if (menu2==0){
				$("#picture").droppable({ 
					disabled: false//,
					//accept	: ".beards accessories"
				})
			}
			else
			{
				$("#picture").droppable({disabled: true})
			}
			}
			
		});
			
	}

	function move_hats() 
	{
		$("#hats_1, #hats_2, #hats_3, #hats_4").draggable({ 
			revert: "invalid",
			start: function(){
			menu_number=3;
			console.log("menu3= "+menu3);
			/*if (menu3==1){
				$("#picture").droppable({ disabled: true })
			} else {
				$("#picture").droppable({ disabled: false })
			}*/
			if (menu3==0){
				$("#picture").droppable({ 
					disabled: false//,
					//accept	: ".hats accessories"
				})
			}
			else
			{
				$("#picture").droppable({disabled: true})
			}
			}
			
		});
    }
function Image_Save(){
	//$("#btnSave").click(function() { 
  /*
  html2canvas($("#picture"), {
            onrendered: function(canvas) {
              $('#picture').html(canvas);
            }
          });*/
    {
    var c = document.getElementById('picture');
    var t = c.getContext('2d');
    window.location.href = image;

    window.open('', document.getElementById('picture').toDataURL());
}
}
function Image_Load(){
	
}
function edit_accessories(){

	var len_choice = choice.length;
	//ugol = 15;
	//if (len_choice >0)
	{	
		console.log("click  "+selected_accessories);
		for(var i = 0; i < len_choice;  i++) 
		{
			$("#"+choice[i]).css({"border" : "none"});
		}
		$("#"+selected_accessories).css({"border" : "2px","border-style" : "dotted","color":"red"});
		$("#"+selected_accessories).css({"position" : "absolute"});
		//selected_accessories = mass_elem;
		$("#picture").droppable({ disabled: false });
		$("#"+selected_accessories).draggable({ revert: false });
		//$("#el1").draggable({ revert: true });
		$("#"+selected_accessories).resizable({ ghost:true });
		//$("#picture").resizable({ disabled: false });
		/*$("#"+selected_accessories).prop("style").removeProperty("top");
		$("#"+selected_accessories).prop("style").removeProperty("left");*/
	}
}

function rotate_left(){
	
	$("#"+selected_accessories).css({"transform" : "rotate(-"+ugol+"deg)"});
	ugol += 15;
	console.log("left "+selected_accessories	)
	//document.getElementById(selected_accessories).style.transform='45deg';
}
function rotate_right(){
	

	$("#"+selected_accessories).css({"transform" : "rotate("+ugol+"deg)"});
	ugol += 15;
	//document.getElementById(selected_accessories).style.transform='45deg';
}
function zoom_in()
{
    //if ( zoom <= 10 )
    //{
        console.log("zoom "+ selected_accessories);
        $("#"+selected_accessories).animate({
        	width: '+='+zoom+"px",
        	height: '+='+zoom+"px",
        	queu: false})
        //zoom += 1;
    //}
}	

function zoom_out()
{
    //if ( zoom <= 10 )
    //{
    	console.log("zoom "+selected_accessories);
        $("#"+selected_accessories).animate({
        	width: '-='+zoom+"px",
        	height: '-='+zoom+"px",
        //({width:'-=50px'});
        	queu: false})
        //zoom += 1;
    //}
}


function viewdiv(id) 
	{
       if (id=='menu1')
	   {
		  document.getElementById('menu1').style.display='block'
		  document.getElementById('menu2').style.display='none';
		  document.getElementById('menu3').style.display='none';
	   }
	   if (id=='menu2')
	   {
		  document.getElementById('menu1').style.display='none'
		  document.getElementById('menu2').style.display='block';
		  document.getElementById('menu3').style.display='none';
	   }
	   if (id=='menu3')
	   {
		  document.getElementById('menu1').style.display='none'
		  document.getElementById('menu2').style.display='none';
		  document.getElementById('menu3').style.display='block';
	   }
	}
