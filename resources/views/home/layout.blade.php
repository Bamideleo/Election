<!DOCTYPE html>
<html lang="en">
<head>
 <title>@yield('title','layout page')</title>
  <!--Import Google Icon Font-->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!-- import shortcut icon--> 
  <link rel="shortcut icon" href="{{asset('dist/image/logo/bamz.png')}}">
      <!--Import materialize.css-->
      <link href="{{asset('dist/materialize/css/materialize.css')}}" rel="stylesheet">
      <!-- import font-->
      <link href="{{asset('dist/font/font/css/all.css')}}" rel="stylesheet">
      <!--custom css import-->
      <link href="{{asset('dist/materialize/css/my.css')}}" rel="stylesheet">
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>
@include('home.header')
    @yield('content')
    @include('home.footer')