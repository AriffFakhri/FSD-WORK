@extends('layouts.app')

@section('title', 'Products')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h1 class="mt-5">Our Products</h1>
                <p class="lead">Check out our range of products.</p>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <img src="https://via.placeholder.com/300" class="card-img-top" alt="Product 1">
                    <div class="card-body">
                        <h5 class="card-title">Product 1</h5>
                        <p class="card-text">Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.</p>
                        <a href="{{ route('product', ['id' => '1']) }}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card">
                    <img src="https://via.placeholder.com/300" class="card-img-top" alt="Product 2">
                    <div class="card-body">
                        <h5 class="card-title">Product 2</h5>
                        <p class="card-text">Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.</p>
                        <a href="{{ route('product', ['id' => '2']) }}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card">
                    <img src="https://via.placeholder.com/300" class="card-img-top" alt="Product 3">
                    <div class="card-body">
                        <h5 class="card-title">Product 3</h5>
                        <p class="card-text">Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.</p>
                        <a href="{{ route('product', ['id' => '3']) }}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
