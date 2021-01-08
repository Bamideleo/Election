@extends('home.layout')
@section('title', 'Local Government Page')
@section('content')
<div  style="padding-left:85px;padding-right:85px;">
<div class="polltable">
  <form action="{{route('areas')}}" method="post">
    @csrf
<div class="row">
        <div class="input-field col s12" >
        <select name="lga_name" id="camera">
      <option value="" disabled selected>Local Government</option>
      @foreach($area as $areas)
      <option value="{{$areas->lga_name}}">{{$areas->lga_names}}</option>
    @endforeach
    </select>
        </div>
      <button class="btn waves-effect" style="background:rgb(12, 165, 12);">submit</button>
    </form> 
</div>
</div>
</div>
@endsection