/* Article FructCode.com */
$( document ).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
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
        	$('#result_form').html('x3= '+result.name+'<br>x2= '+result.phonenumber+'<br>x1= '+result.tel);
            
    	},
    	error: function(response) { // Данные не отправлены
         $('#result_form').html('Ошибка. Данные не отправлены.');
        }
    });
}



///обращение матрицы начало

/////обращение матрицы конец