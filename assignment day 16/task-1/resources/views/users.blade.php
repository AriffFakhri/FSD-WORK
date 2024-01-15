@foreach ( $user as $id => $u)
<h3>{{$id}} {{$u['name']}} | {{$u['phone']}} | {{$u['city']}}</h3>
    
@endforeach 
