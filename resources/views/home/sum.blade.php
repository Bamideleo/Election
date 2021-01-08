@extends('home.layout')
@section('title', 'Local Government Page')
@section('content')
<div  style="padding-left:85px;padding-right:85px;">
<div class="polltable">
<table>
        <thead>
          <tr>
              <th> TOTAL RESULT</th>
          </tr>
        </thead>
        <tbody>
        @foreach($pro as $areas)
          <tr>
            <td>{{$areas->party_score}}</td>
          </tr>
          @endforeach
        </tbody>
      </table>
</div>
</div>
</div>
@endsection