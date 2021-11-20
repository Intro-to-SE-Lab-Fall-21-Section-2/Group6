<?php

$username  = 'priscillaafigunu@gmail.com';
$password  = 'erik1erik';
$hostname = '{imap.gmail.com:993/imap/ssl}Drafts';
$inbox = imap_open($hostname,$username,$password) or die('Cannot connect to Gmail: ' . imap_last_error());
$emails = imap_search($Drafts,'ALL');
    
rsort($emails);
foreach($emails as $email_number) 
{
    
    $overview = imap_fetch_overview($Drafts,$email_number,0);
    print_r($overview);
    echo "<br><br><br>";        
} 
imap_close($Drafts);
?>