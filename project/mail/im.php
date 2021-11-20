<?php

$username  = 'priscillaafigunu@gmail.com';
$password  = 'erik1erik';
$hostname = '{imap.gmail.com:993/imap/ssl}INBOX';
$inbox = imap_open($hostname,$username,$password) or die('Cannot connect to Gmail: ' . imap_last_error());
$emails = imap_search($inbox,'ALL');
    
rsort($emails);
foreach($emails as $email_number) 
{
    
    $overview = imap_fetch_overview($inbox,$email_number,0);
    print_r($overview);
    echo "<br><br><br>";        
} 
imap_close($inbox);
?>