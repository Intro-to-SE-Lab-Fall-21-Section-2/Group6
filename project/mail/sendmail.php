<?php 

if(count($_POST)>0)
{
$to=$_POST['to'];
$username=$_POST['user_name'];
$subject=$_POST['subject'];
$cc=$_POST['cc'];
// $bcc=$_POST['bcc'];
// $replyto=$_POST['replyto'];
$message=$_POST['message'];


}


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'C:\PHPMailer\src\Exception.php';
require 'C:\PHPMailer\src\PHPMailer.php';
require 'C:\PHPMailer\src\SMTP.php';

include 'data.php';

$mail=new PHPMailer(true);

// $mail -> SMTPDebug=3;

$mail -> isSMTP();
$mail -> Host="smtp.gmail.com";

$mail -> SMTPAuth=true;

$mail -> Username=USERNAME;
$mail -> Password=PASSWORD;

$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;  

$mail-> From= USERNAME;
$mail-> FromName="Eric";

$mail->addAddress($to,$username);
// $mail->addReplyTo(USERNAME,"Eric");
 $mail->addCC(USERNAME);
// $mail->addBCC("erikalvin63@gmail.com");
$mail-> isHTML(true);


foreach ($_FILES['file']['name'] as $key => $value) 
{
 $mail -> AddAttachment($_FILES['file']['tmp_name'][$key],$_FILES['file']['name'] [$key]);
}

$mail-> subject=$subject;
$mail-> Body=$message;

try
{
$mail->send();
echo"<h4>Your mail is sent successfully.</h4>";
}
catch(Exception $e)
{
    echo"Error Information";
}
?>