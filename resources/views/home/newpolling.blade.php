@extends('home.layout')
@section('title', 'Local Government Page')
@section('content')
<div  style="padding-left:85px;padding-right:85px;">
<div class="polltable">
@if(session()->has('message'))
<div class="green-text">{{session()->get('message')}}</div>
@elseif(session()->has('error'))
<div class="red-text">{{session()->get('error')}}</div>
@endif
  <form action="{{route('units')}}" method="post">
    @csrf
    <div class="row">
        <div class="input-field col s12">
        <span class="red-text" style="font-size:12">{{$errors->first('polling_unit_name')}}</span>
          <input placeholder="Polling Unit Name" type="text" id="mobile_title" name="polling_unit_name">
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12" >
        <span class="red-text" style="font-size:12">{{$errors->first('polling_unit_id')}}</span>
        <select name="polling_unit_id" id="camera">
      <option value="" disabled selected>Polling Unit NUmber</option>
      @foreach($polling as $pollings)
      <option value="{{$pollings->polling_unit_id}}">{{$pollings->polling_unit_number}}</option>
   @endforeach
    </select>
        </div>
        </div>
      <div class="row">
        <div class="input-field col s12" >
        <span class="red-text" style="font-size:12">{{$errors->first('ward_id')}}</span>
        <select name="ward_id" id="camera">
      <option value="" disabled selected>Ward</option>
      @foreach($ward as $wards)
      <option value="{{$wards->ward_id}}">{{$wards->ward_name}}</option>
  @endforeach
    </select>
    </div>
        </div>
      <div class="row">
        <div class="input-field col s12">
        <span class="red-text" style="font-size:12">{{$errors->first('polling_unit_description')}}</span>
          <input placeholder="Polling Unit Description" type="text" id="mobile_title" name="polling_unit_description">
        </div>
      </div>
<div class="row">
        <div class="input-field col s12" >
        <span class="red-text" style="font-size:12">{{$errors->first('lga_id')}}</span>
        <select name="lga_id" id="camera">
      <option value="" disabled selected>Local Government</option>
     @foreach($local as $locals)
      <option value="{{$locals->lga_id}}">{{$locals->lga_names}}</option>
   @endforeach
    </select>
    </div>
        </div>
      <button class="btn waves-effect" style="background:rgb(12, 165, 12);">submit</button>
    </form> 
</div>
</div>
</div>
@endsection