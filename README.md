<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Structura</title>
  <style>
    /* General Styling */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      color: #333;
      text-align: center;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: white;
      border-bottom: 1px solid #ccc;
    }

    .logo {
      display: flex;
      align-items: center;
    }

    .logo img {
      width: 40px;
      margin-right: 10px;
    }

    nav {
      display: flex;
      gap: 20px;
    }

    nav a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
    }

    nav a:hover {
      text-decoration: underline;
    }

    .download-btn {
      background-color: #d6c479;
      color: black;
      padding: 5px 10px;
      border-radius: 15px;
      font-weight: bold;
      text-decoration: none;
    }

    .download-btn:hover {
      background-color: #c0ac63;
    }

    .hero {
      padding: 5rem 2rem;
      background-color: #fdfdfd;
      color: #333;
    }

    .hero h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .hero h1 span {
      color: #ffc107;
      font-weight: bold;
    }

    .hero p {
      font-size: 1rem;
      color: #555;
    }

    .login-link {
      display: block;
      margin-top: 2rem;
      font-size: 0.9rem;
      color: #555;
    }

    .login-link a {
      color: #333;
      text-decoration: none;
      font-weight: bold;
    }

    .login-link a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

<header>
  <div class="logo">
    <img src="https://via.placeholder.com/40" alt="Structura Logo">
    <h2>Structura</h2>
  </div>
  <nav>
    <a href="#explore">Explore</a>
    <a href="#about">About</a>
    <a href="#help">Help</a>
    <a href="#signin">Sign In</a>
    <a href="#download" class="download-btn">Download</a>
  </nav>
</header>

<section class="hero">
  <h1>Simplify with <span>Effortless</span> Note-Taking and Organization</h1>
  <p>Stay on your tasks, manage your ideas, and get more done—all in one place.</p>
  <p class="login-link">Already have an account? <a href="#login">Log In</a></p>
</section>

</body>
</html>

