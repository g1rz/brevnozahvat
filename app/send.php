<?php 

$to='zloi.g1rz@gmail.com';


$hdr="From: noreply@hostim.ru\nMIME-Version: 1.0\nContent-Type:text/plain;charset=\"utf-8\"";

$theme = '';

$act = isset($_POST['act']) ? strip_tags($_POST['act']) : '';

$name = isset($_POST['name']) ? strip_tags($_POST['name']) : '';
$phone = isset($_POST['phone']) ? strip_tags($_POST['phone']) : '';
$comment = isset($_POST['comment']) ? strip_tags($_POST['comment']) : '';

if ($act == 'callback') {
    $theme = 'Заказ обратного звонка';

    $message .= "Имя: $name\n";
    $message .= "Телефон: $phone\n";
} elseif ($act == 'order') {
    $theme = 'Заказ обратного звонка';

    $message .= "Имя: $name\n";
    $message .= "Телефон: $phone\n";
    $message .= "Комментарий: $comment\n";
}


if (mail($to, "=?utf-8?B?".base64_encode($theme)."?=", $message, $hdr)) {
	print_r('<p>Спасибо за&nbsp;обращение! Перезвоним в&nbsp;течение 15&nbsp;минут в&nbsp;рабочее время</p>');
}
else {
	print_r('<p class="error">Ошибка, ваше сообщение не отправлено. Попробуйте отправить данные еще раз.</p>');
}



?>
