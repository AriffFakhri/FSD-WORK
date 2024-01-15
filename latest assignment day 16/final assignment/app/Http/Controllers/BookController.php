<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class BookController extends Controller
{
    public function show(): View
    {
        return view('Book.index', [
            'books' => [
                1 => [
                    'title' => 'The Great Gatsby',
                    'author' => 'F. Scott Fitzgerald',
                    'genre' => 'Classic',
                    'description' => 'A novel about the American Dream and the Roaring Twenties.'
                ],
                2 => [
                    'title' => 'To Kill a Mockingbird',
                    'author' => 'Harper Lee',
                    'genre' => 'Fiction',
                    'description' => 'A story of racial injustice and moral growth set in the American South.'
                ],
                3 => [
                    'title' => '1984',
                    'author' => 'George Orwell',
                    'genre' => 'Dystopian',
                    'description' => 'A classic novel depicting a totalitarian society and government surveillance.'
                ],
            ],

        ]);
    }

    public function create(): View
    {
        return view('Book.create');
    }

    public function edit(): View
    {
        return view('Book.edit');
    }

    public function delete(): View
    {
        return view('Book.delete');
    }
}
