<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<t:wrapper>
    <div id="thank-you-page" class="container">
        <div class="row mb-3 mt-3">
            <div class="col-12">
                <c:set var="now" value="<%=new java.util.Date()%>" />
                <span class="float-right"><fmt:formatDate pattern="EEEE, yyyy MMMMM dd" value="${now}" /></span>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h1 class="font-weight-lighter">Thank you! your message has been received as follow:</h1>
            </div>
            <div class="card-body" >
                <p>Name: <c:out value="${requestScope.name}"/></p>
                <p class="mt-2 text-muted">Gender: <c:out value="${requestScope.gender}"/></p>
                <p class="mt-2 text-muted">Category: <c:out value="${requestScope.category}"/></p>
                <p class="mt-2 mb-5">Message: <c:out value="${requestScope.message}"/></p>
                <p class="mt-2 mt-5">
                    please feel free to
                    <a href="/lab11/contact-form"> Contact Us </a>
                    again</p>
            </div>
        </div>
    </div>
</t:wrapper>