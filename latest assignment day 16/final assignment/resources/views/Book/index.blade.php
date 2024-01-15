@extends('layouts.app')

@section('title', 'Products')

@section('content')
    <div class="d-flex justify-content-center">
        <h1>Book Lists</h1>
    </div>
    <div class="row">
        @foreach ($books as $book)
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ $book['title'] }}</h5>
                        <p class="card-text"><strong>Author:</strong> {{ $book['author'] }}</p>
                        <p class="card-text"><strong>Genre:</strong> {{ $book['genre'] }}</p>
                        <p class="card-text"><strong>Description:</strong> {{ $book['description'] }}</p>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
@endsection
