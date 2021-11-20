<?php 

session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.php");
}

?>





<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Group6</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.0/css/all.css" integrity="sha384-Mmxa0mLqhmOeaE8vgOSbKacftZcsNYDjQzuCOm6D02luYSzBG8vpaOykv9lFQ51Y" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,800;1,700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;400&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">

</head>
<body>
     <!-- Header-->
     <div class="start">
       <header>
         <div class="logo">
         <a href="#"> <img src="https://www.freepnglogos.com/uploads/email-logo-png-22.png"  alt=""> </a>
        </div>
              <nav>
                <ul>
                 <li><a href= "#">HOME</a></li>
                 <li> <a href="im.php">INBOX</a></li>
                 <li><a href="#">SENT</a></li>
                 <li><a href="">DRAFT</a></li>

             </ul>
       </nav>
       <div class="search-container">
   <form action="search.php" method="GET"> 
   <input type="text" name="search" class='form-control' placeholder="Search By Name" value=<?php echo @$_GET['search']; ?> > 
         <button type="submit"><i class="fa fa-search"></i></button>
       </form>
     </div>
     <a href="logout.php" class="btn btn-info btn-lg">
             <span class="glyphicon glyphicon-log-out"></span> Logout
           </a>
           <?php echo "<h1>Welcome " . $_SESSION['username'] . "</h1>"; ?>
           </header>
     </div>

  <div class="container">
  <div class="Boxes">
    <div class="compose">
      <a href="contact.php" class="sidebar_compose">
           <button type="submit">Compose</button>
            </a>
            </div>

     <!-- <div class="hello">
      <form action="">
        <div class="email-box">
          <i class="far fa-envelope"></i>
          <input class="tbox" type="email" name="" value="" placeholder="Enter your email">
          <button class="btn" type="button" name="button">Subscribe</button>
        </div>
      </form>
      </div> -->
     
      
    </div>
    </div>

   


<button onclick="topFunction()" id="myBtn" title="Go to top"><img src="images/up.png"></button>
<script>
  //Get the button
  var mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
 </Script>

</body>
</html>
