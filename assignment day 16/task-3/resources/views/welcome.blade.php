<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Hello home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquam veritatis expedita laborum totam cupiditate dicta error, sed vero
         ut pariatur quasi, nisi debitis velit, magnam sunt temporibus accusantium enim quidem tempore neque architecto maiores porro? Maxime, 
         ipsa illum? Hic quae quos illum labore maxime earum velit quas omnis sapiente!</p>
         {{-- @push('scripts')
            <script src="/example.js"></script>
         @endpush --}}

         {{-- if u want to add the file before any specific file name --}}
         {{-- @prepend('scripts') 

         @prepend --}}



         {{-- step to use controller --}}

         {{-- 1.create controller file
         2.create controller class
         3. create route --}}

         {{-- command to create controller file --}}

         {{-- php artisan make:controller file name --}}

            <a href="{{route('users')}}">users</a>
            <a href="{{route('about')}}">about</a>
            <a href="{{route('home')}}">home</a>
</body>
</html>