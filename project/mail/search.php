<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <meta charset="UTF-8">
 
</head>
<body>
<div class="container">
   <div class="row">
   <div class="col-md-8 col-md-offset-2" style="margin-top: 5%;">
   <div class="row">
   <?php 

     $conn = new mysqli('localhost', 'root', '', 'login_register');
     if(isset($_GET['search'])){
        $searchKey = $_GET['search'];
        $sql = "SELECT * FROM search WHERE name LIKE '%$searchKey%'";
     }else
     $sql = "SELECT * FROM search";
     $result = $conn->query($sql);
   ?>

   <br> 
   <br>
</div>

<table class="table table-bordered">
  <tr>
     <th>Name</th>
     <th>Email</th>
     <th>Subject</th>
     <th>Message</th>
  </tr>
  <?php while( $row = $result->fetch_object() ): ?>
  <tr>
     <td><?php echo $row->Name ?></td>
     <td><?php echo $row->Email_address ?></td>
     <td><?php echo $row->Subject ?></td>
     <td><?php echo $row->Message ?></td>
  </tr>
  <?php endwhile; ?>
</table>
</div>
</div>
</div>
</body>
</html>