<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <h1>About Page</h1>

    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Aspernatur laudantium voluptas maiores minima, magni quibusdam sunt adipisci laborum quia excepturi?
    </p>
{{-- 
    @stack('scripts') --}}
   
    <a href="{{route('users')}}">users</a>
    <a href="{{route('home')}}">home</a>
    <a href="{{route('about')}}">about</a>
</body>
</html>