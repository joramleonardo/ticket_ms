<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Ticket Management System</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

        <link href="{{ asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/templatemo-lava.css')}}"/>

        <!-- ADMIN TEMPLATE -->
        <!-- <link rel="stylesheet" href="{{ asset('css/sb-admin-2.min.css')}}"/>
        <link rel="stylesheet" href="{{ asset('css/dataTables.bootstrap4.min.css')}}"/> -->




    </head>
    <body> 
        <div id="app"></div>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        <script src="{{ asset('js/app.js') }}"> </script>
        <script src="{{ asset('js/scripts2.js') }}"> </script>
        <script src="{{ asset('js/scripts.js') }}"> </script>

        <!-- ADMIN TEMPLATE -->
        <!-- <script src="{{ asset('js/jquery.dataTables.min.js') }}"> </script>
        <script src="{{ asset('js/dataTables.bootstrap4.min.js') }}"> </script> -->
        <!-- <script src="{{ asset('js/sb-admin-2.min.js') }}"> </script> -->

        
        <!-- <script src="{{ asset('js/jquery-2.1.0.min.js') }}"> </script>
        <script src="{{ asset('js/popper.js') }}"> </script>
        <script src="{{ asset('js/bootstrap.min.js') }}"> </script>
        <script src="{{ asset('js/owl-carousel.js') }}"> </script>
        <script src="{{ asset('js/scrollreveal.min.js') }}"> </script>
        <script src="{{ asset('js/waypoints.min.js') }}"> </script>
        <script src="{{ asset('js/jquery.counterup.min.js') }}"> </script>
        <script src="{{ asset('js/imgfix.min.js') }}"> </script>
        <script src="{{ asset('js/custom.js') }}"> </script> -->
    </body>
</html>
