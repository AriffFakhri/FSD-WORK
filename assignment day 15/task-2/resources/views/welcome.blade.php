@php
    $names = ['mail', 'yuni', 'ariff', 'minah'];
@endphp

<ul>
    @foreach ($names as $n)
        @if ($loop->even)
            <li style="color: red">{{ $n }}</li>
        @else
            <li style="color: green">{{ $n }}</li>
        @endif
    @endforeach
</ul>

<script>
    @foreach ($names as $n)
        console.log("{{ $n }}");
    @endforeach
</script>
