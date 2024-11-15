
<?php 
    $result = "";
    $error  = "";
if(isset($_POST['submit']))
{
    require 'PHPMailerAutoload.php';
    $mail = new PHPMailer;
    //smtp settings
    $mail->isSMTP(); // send as HTML
    $mail->Host = "smtp.gmail.com"; // SMTP servers
    $mail->SMTPAuth = true; // turn on SMTP authentication
    $mail->Username = " Your mail"; // Your mail
    $mail->Password = 'Your password mail'; // Your password mail
    $mail->Port = 587; //specify SMTP Port
    $mail->SMTPSecure = 'tls';                               
    $mail->setFrom($_POST['email'],$_POST['name']);
    $mail->addAddress('hiren.websitedeveloper@gmail.com');
    $mail->addReplyTo($_POST['email'],$_POST['name']);
    $mail->isHTML(true);
    $mail->Subject='Form Submission:' .$_POST['subject'];
    $mail->Body='<h3>Name :'.$_POST['name'].'<br> Email: '.$_POST['email'].'<br>Message: '.$_POST['message'].'</h3>';
    if(!$mail->send())
    {
        $error = "Something went worng. Please try again.";
    }
    else 
    {
        $result="Thanks\t" .$_POST['name']. " for contacting us.";
    }
}


?>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Contact Form</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 m-auto">
                <div class="contact-form">
                    <h1>Contact Form SendMail</h1>
                    <h2 class="text-center text-white"> <?=$result; ?></h2>
                    <h2 class="text-center text-danger"> <?=$error; ?></h2>
                    <form action="" method="post">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="inputName">Name</label>
                                    <input type="text" class="form-control" id="Name" name="name" placeholder="Enter Full" required>
                                </div>
                            </div>
                            <div class="col-sm-6">
                            <div class="form-group">
                                <label for="inputEmail">Email</label>
                                <input type="email" class="form-control" id="Email" name="email" placeholder="Enter Email" required>
                            </div>
                        </div>
                    </div>            
                    <div class="form-group">
                        <label for="inputSubject">Subject</label>
                        <input type="text" class="form-control" id="Subject"​ name="subject" placeholder="Enter Subject" required>
                    </div>
                    <div class="form-group">
                        <label for="inputMessage">Message</label>
                        <textarea class="form-control" id="Message" name="message" rows="5" placeholder="Enter Message..." required></textarea>
                    </div>
                    <div class="text-center">
                        <button type="submit" name="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Send</button>
                    </div>            
                </form>
            </div>
        </div>
    </div>
</div>
</body>
</html>                            