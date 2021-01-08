@extends('home.layout')
@section('title', 'Unit Page')
@section('content')
<div  style="padding-left:85px;padding-right:85px;">
<div class="polltable">
<table>
        <thead>
          <tr>
              <th>POLLING UNIT</th>
              <th>PARTY NAME</th>
              <th>RESULT</th>
          </tr>
        </thead>
        <tbody>
        @foreach($unit as $units)
          <tr>
            <td>{{$units->polling_unit_name}}</td>
            <td>{{$units->party_abbreviation}}</td>
            <td>{{$units->party_score}}</td>
          </tr>
          @endforeach
        </tbody>
      </table>
</div>
</div>
@endsection