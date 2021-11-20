<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
   





    <title>Send</title>
  </head>
  <body style="margin:20px;">
  
<form name="form1" method="post" enctype="multipart/form-data" action= "sendmail.php">
    <div class="col-md-6">
  <label for="exampleFormControlInput1" class="form-label">*To:</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="to"  required>
</div>
<div class="col-md-6">
  <label for="exampleFormControlInput1" class="form-label">*NAME:</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="user_name"  required>
  </div>
  <div class="col-md-6">
  <label for="exampleFormControlInput1" class="form-label">*SUBJECT:</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="subject"  required>
</div>


 <div class="col-md-6">
  <label for="exampleFormControlInput1" class="form-label">*CC:</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="cc"  required>
</div>
<!-- <div class="col-md-6">
  <label for="exampleFormControlInput1" class="form-label">*BCC:</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="bcc"  required>
</div>
<div class="col-md-6">
  <label for="exampleFormControlInput1" class="form-label">*ReplyTo:</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="replyto"  required>
</div> --> 
<div class="col-md-6">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"   name="message" required></textarea>
</div>
<div class="col-md-6">
  <label for="formFileMultiple" class="form-label">select multiple files</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple  name="file[]">
</div>
<input type="submit" name="submit" value="Send Data" class="btn btn-primary btn-lg"></button>

</form>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

  </body>
</html>