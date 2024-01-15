<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Group 3</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('book') }}">Book</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('book.create') }}">Create</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('book.edit') }}">Edit</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('book.delete') }}">Delete</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
