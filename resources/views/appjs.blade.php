<html>
    <head>

        <script src="before.js">
        </script>

        <script>
            var posebanScript = "Poseban script";

        </script>
        <script src="app.js">
            
        </script>

        <script src="after.js">
        </script>
        <title>App Name - @yield('title')</title>
    </head>
    <body>
        @section('sidebar')
            This is the master sidebar.
        @show

        <div class="container">
            @yield('content')
        </div>
    </body>
</html>
