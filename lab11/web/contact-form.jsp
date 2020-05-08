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
                <li class="nav-item">
                    <a class="nav-link" href="/lab10/about-us">About</a>
                </li>
                <li class="nav-item active">
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
        <section>
            <h2 class="mt-5 mb-3 font-weight-light border-bottom pb-3">Customer Contact Form</h2>

            <c:choose>
                <c:when test="${requestScope['errorMessages'] != null}">
                    <c:forEach var="message" items="${requestScope.errorMessages}">
                        <div class="text-danger" >
                            <c:out value="${message}"/>
                        </div>
                    </c:forEach>
                </c:when>
            </c:choose>

            <form method="post" class="mt-3" id="add-patient-form" action="/lab10/process-contact-form">
                <div class="form-row">
                    <div class="col-12">
                        <div class="form-group">
                            <label>*Name:</label>
                            <input id="patient_id" placeholder="e.g. John Smith" name="name" value="<c:out value="${requestScope['name']}"/>" class="form-control">
                            <small class="text-muted">Enter your full name.</small>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>*Gender:</label><br/>
                            <div class="d-block">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" <c:if test="${requestScope['gender'] == 'male'}">checked</c:if> type="radio" name="gender" id="gender_male" value="male">
                                    <label class="form-check-label" for="gender_male">
                                        Male
                                    </label>
                                </div>
                                <div class="form-check form-check-inline ml-3">
                                    <input class="form-check-input" <c:if test="${requestScope['gender'] == 'female'}">checked</c:if> type="radio" name="gender" id="gender_female" value="female">
                                    <label class="form-check-label" for="gender_female">Female</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label for="category">*Category:</label>
                            <select class="form-control validate" id="category" name="category">
                                <option value="">Select...</option>
                                <option <c:if test="${requestScope['category'] == 'feedback'}">selected</c:if> value="feedback">Feedback</option>
                                <option <c:if test="${requestScope['category'] == 'inquiry'}">selected</c:if> value="inquiry">Inquiry</option>
                                <option <c:if test="${requestScope['category'] == 'complaint'}">selected</c:if> value="complaint">Complaint</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>*Message:</label>
                            <textarea id="message" name="message" class="form-control"><c:out value="${requestScope['message']}"/></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <input class="btn btn-primary col-12" name="submit" id="btn-submit" value="Submit" type="submit"/>
                </div>
            </form>
        </section>
        <div class="row mt-5">
            <div class="col-12">
                <span class="float-left">Hit Count for this page: <c:out value="${requestScope.totalHitCount}"/></span>
                <span class="float-right">Hit Count for the entry WebApp: <c:out value="${requestScope.hitCountByPage}"/></span>
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