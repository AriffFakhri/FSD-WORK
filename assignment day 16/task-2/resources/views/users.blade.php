
<h1>Task 2</h1>

@foreach ( $user as $id => $u)
<h3>{{$id}} {{$u['name']}} | {{$u['phone']}} | {{$u['city']}}</h3>
    
@endforeach