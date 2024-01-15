@extends('layouts.app')

@section('title', 'Products')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h1 class="mt-5">Product Details</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <img src="https://via.placeholder.com/400" class="img-fluid" alt="Product Image">
            </div>
            <div class="col-lg-6 mb-5">
                <h2>Product {{ $id }}</h2>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida velit ut risus
                    sodales.</p>
                <p>Price: $99.99</p>
                <p>Availability: In Stock</p>
                <button class="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    </div>
@endsection
