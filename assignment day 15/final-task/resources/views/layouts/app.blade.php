<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box
        }

        body {
            min-height: 100vh;
            display: grid;
            grid-template-rows: auto 1fr auto;
        }

        footer {
            width: 100%;
            height: 5rem;
            background-color: rgb(33, 31, 31);
            display: grid;
            place-items: center;
            color: white;
        }
    </style>
    <title>@yield('title')</title>
</head>

<body>
    @include('pages.header')
    <div>@yield('content')</div>
    @include('pages.footer')
</body>

</html>
