/* Article FructCode.com */
$( document ).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'matrix.php');
			return false;
            alert ("hello"); 
		}
	);
});
 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
        	$('#result_form').html(result.el1+'; '+result.el2+'; '+result.el3+'; '+result.el4+';<br> '+result.el5+'; '+result.el6+
                '; '+result.el7+';'+result.el8+';<br> '+result.el9+
               '; '+result.el10+';'+result.el11+'; '+result.el12+
               ';<br>'+result.el3+'; '+result.el4+';'+result.el15+
               '; '+result.el16+'<br>Определитель='+result.dela);
            
    	},
    	error: function(response) { // Данные не отправлены
         $('#result_form').html('Ошибка. Данные не отправлены.');
        }
    });
}

