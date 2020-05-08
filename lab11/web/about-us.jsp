<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Servlet - Homepage - Cuong Nguyen - 611111</title>

    <link rel="icon" href="./assets/images/favicon-cc.png" type="image/x-icon" />

    <link href="./assets/libs/bootstrap/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
    <link href="./assets/css/main.css" type="text/css" rel="stylesheet" />

    <script src="./assets/libs/jquery/jquery-3.4.1.min.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" type="text/javascript"></script>
    <script src="./assets/libs/bootstrap/js/bootstrap.js" type="text/javascript"></script>
    <script src="./assets/js/main.js" type="text/javascript"></script>
</head>
<body>
<header>
    <nav id="nav-menu" class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">CS472 ::: Lab10</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto ml-3">
                <li class="nav-item">
                    <a class="nav-link" href="/lab10/hello-servlet">Home</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/lab10/about-us">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/lab10/contact-form">Contact Us</a>
                </li>
            </ul>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</header>
<main>
    <div class="container">
        <div class="jumbotron">
            <h1 class="display-4">About Us!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
        <div class="row mt-5">
            <div class="col-12">
                <span class="float-left">Hit Count for this page: <c:out value="${requestScope.totalHitCount}"/></span>
                <span class="float-right">Hit Count for the entry WebApp:  <c:out value="${requestScope.hitCountByPage}"/></span>
            </div>
        </div>
    </div>
</main>

<footer class="footer">
    <div class="container-fluid">
        <span class="text-muted float-left">Chi Cuong - 611111 ::: CS472-WAP</span>
        <span class="text-muted float-right">© May 2020</span>
    </div>
</footer>
<!-- Footer -->
</body>
</html>