<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>calculator</title>
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
  <script type="text/javascript" src="js/ajaks.js"></script>
  
 </head>
 <body>
  <div class="conteiner">
    <div class="top">
      <div class="nav_verh">
      <nav>
  <ul class="topmenu1">
     <li><a href="">&#128222 87711937392</a></li>
    <li><a href="" class="down1">Личный кабинет &#9660</a>
      <ul class="submenu1">
        <li><a href="">Category</a></li>
        <li><a href="">Author</a></li>
      </ul>
    </li>
     <li><a href="">&#10084Закладки</a></li>

  </ul>
</nav></div>
    </div>
    <div class="shapka">
    <div id="logo">
                    <a href="#"><img src="logocalcul.png"  class="img-responsive" style="width: 100px;" /></a>
                    <p id="logotext">Calculator</p>
                  </div>
    <div class="poisk">
  <input type="text" name="search" value="" placeholder="Поиск" class="form-control" />
  <span class="input-group-btn">
    <button type="button" class="btn">&#128269</button>
   
  </span>
      </div>
      </div>
    <div class="menu">
    <nav>
  <ul class="topmenu">
    <li><a href="" class="down">Матрицы</a>
      <ul class="submenu">
      <li><a href="index.html">Обращение матриц</a></li></br>
        <li><a href="gaus.php">Метод Гаусса</a></li>
      </ul>
    </li>
    <li><a href="">Сложение матриц</a></li>
    <li><a href=""></a></li>
  </ul>
</nav>
    </div>
  <div class="pyt"> Обращение матриц</div>
    <div class="content">
      <div class="prav_nav">
  
  <ul class="nav">
      <li><a href="">Обращение матриц</a></li>
    <li><a href="">Сложение матриц</a></li>
      <li><a href="gaus.php">Метод Гаусса</a></li>
    <li><a href="">Другие действия</a></li>
    </ul>
        
    </div>
    <div class="postel">
    <strong class="zagolovok"> Обращение матриц</strong>
  <p class="sravnenie">Введите матрицу, указав для начала</br> размер вашей матрицы.</br>
  После того, как Вы ввели все значения, </br> нажмите кнопку "обратить"</p>
  <!--
    <span class="input-group-btn2">
    <button type="button" class="btn3">c</button>
    <button type="button" class="btn4">c</button>
  </span>-->
  <div class="input-group">
  <label type="text" class="sort">Размер:</label> 
  <select type="text" class="inp_sort">
  <option>2х2</option>
  <option>3х3</option>
  <option>4х4</option>
  </select>
 <!-- <label type="text" class="pokaz">Показать:</label>
  <select class="int_pokaz">
  <option>15</option>
  <option>35</option>
  <option>75</option>
  <option>100</option>
  </select>-->
  </div>
  <div class="reklama">
  <form action="" method="post" id="ajax_form">
<div>
        <div>
    <input type="number" name="element1" class="elem1" id="vvod" >
     <input type="number" name="element2" class="elem2" id="vvod" >
      <input type="number" name="element3" class="elem3" id="vvod" >
      <input type="number" name="element10" class="elem10" id="vvod"  >
  </div>
<div>
       <input type="number" name="element4" class="elem4" id="vvod" >
        <input type="number" name="element5" class="elem5" id="vvod" >
         <input type="number" name="element6" class="elem6" id="vvod" >
         <input type="number" name="element11" class="elem11" id="vvod" >
</div>
<div>
          <input type="number" name="element7" class="elem7" id="vvod" >
           <input type="number" name="element8" class="elem8" id="vvod" >
            <input type="number" name="element9" class="elem9" id="vvod" >
            <input type="number" name="element12" class="elem12" id="vvod" >
        </div>
        <div>
          <input type="number" name="element17" class="elem7" id="vvod" >
           <input type="number" name="element18" class="elem8" id="vvod" >
            <input type="number" name="element19" class="elem9" id="vvod" >
            <input type="number" name="element13" class="elem12" id="vvod" >
        </div>
        </div>

 
  <span class="input-group-btn3">
    <input type="submit" class="btn5" id="btn"  value="Обратить">
    <button type="button" class="btn6">&#10084</button>
    <button type="button" class="btn7">&#8644</button>
  </span>
  </form>
  <div>
    <p>Обратная матрица</p>
  </div>
  <div id="result_form"></div> 
  
    </div>
  </div>
</div>
    <div class="left"></div>
    <div class="footer">
    
            <div class="col-sm-3">
        <h5>Информация</h5>
        <ul class="list-unstyled">
                    <li><a href="#">Обращение матриц</a></li>
                    <li><a href="#">Операции над матрицами</a></li>
                    <li><a href="#">Определитель матрицы</a></li>
                    <li><a href="gaus.html">Метод Гаусса</a></li>
                  </ul>
      </div>
            <div class="col-sm-4">
        <h5>Служба поддержки</h5>
        <ul class="list-unstyled">
          <li><a href="#">Обратная связь</a></li>
          <li><a href="#">Контакты</a></li>
          <li><a href="#">Карта сайта</a></li>
        </ul>
      </div>
      <div class="col-sm-5">
        <h5>Дополнительно</h5>
        <ul class="list-unstyled">
          <li><a href="#">Производители</a></li>
          <li><a href="#">Теория</a></li>
          <li><a href="#">Уроки</a></li>
          <li><a href="#">Задания</a></li>
        </ul>
      </div>
      <div class="col-sm-6">
        <h5>Что интересного у автора</h5>
        <ul class="list-unstyled">
          <li><a href="#">Заказ сайтов</a></li>
          <li><a href="#">Мобильные приложения</a></li>
          <li><a href="#">Уроки программировния</a></li>
          <li><a href="#">Помощь в создании сайтов</a></li>
        </ul>
      </div>
    
      <div class="niz">
    <hr>
    <p>Над проектом работали <a href="#" class="opencart">очень умные люди)</a><br /> Calculator &copy; 2020</p>
      </div>
  </div>
  </div>
</body>
</html>
 