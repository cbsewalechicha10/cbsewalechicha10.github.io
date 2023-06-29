<!DOCTYPE html>
<html>
<head>
  <title>Animate Background</title>
  <style>
    body {
      overflow: hidden;
    }

    .background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    .water-wave {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(circle, #0099ff, #0000ff);
      animation: wave 5s ease-in-out infinite;
    }

    @keyframes wave {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }

    .stars {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('https://cdn.jsdelivr.net/gh/Ashwinvalento/cartoon-avatar@latest/assets/images/male/45.png');
      animation: twinkling 5s infinite;
    }

    @keyframes twinkling {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  </style>
</head>
<body>
  <div class="background">
    <div class="water-wave"></div>
    <div class="stars"></div>
  </div>
  
  <!-- Rest of your content goes here -->

</body>
</html>

</head>
<body>
  <div class="bio-data">
    <h1>Bio Data</h1>
    <p>Name: Vishesh verma</p>
    <p>Age: 10</p>
    <p>Occupation: Nalla</p>
  </div>

  <div class="contact-info">
    <h2>Contact Information</h2>
    <p>Email: tooerstage10@gmail.com</p>
    <p>Phone: idk </p>
    <p>Address: India </p>
  </div>
</body>
</html>
