<?php
include './configurations/config.php';

if(isset($_POST['login_btn'])){
    $username = $_POST["username"];
    $password = $_POST["password"];
    $query = "SELECT * FROM `users` WHERE `username` = '$username' AND `password`='$password'";
    $result = mysqli_query($connection, $query);
    if(mysqli_num_rows($result) > 0){
        $row = mysqli_fetch_assoc($result);
        array_splice($row,3, 1);
        $_SESSION['login'] = $row;
        header("Location: dashboard/dashboard.php");
        exit;
    }else{
        echo "Invalid username or password";
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page Section</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="./login/index.css">
</head>

<body>
    <div class="wrapper">
        <form class="login_sec" method="post">
            <h1 class="main-heading">Login</h1>
            <div class="input-box input-box-username">
                <input type="text" placeholder="Username" name="username" required>
                <i class='bx bxs-user'></i>
            </div>
            <div class="input-box input-box-password">
                <input type="text" placeholder="Password" name="password" required>
                <i class='bx bxs-lock-alt'></i>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox"> Remember Me</label>
                <a href="#">Forgot Password</a>
            </div>  
            <button type="submit" name="login_btn" class="click-button">Login</button>
            <div class="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </form>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
        </script>
        
</body>

</html>