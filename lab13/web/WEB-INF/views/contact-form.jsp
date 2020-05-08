<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<t:wrapper>
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

            <form method="post" class="mt-3" id="add-patient-form" action="/lab11/process-contact-form">
                <div class="form-row">
                    <div class="col-12">
                        <div class="form-group">
                            <label>*Name:</label>
                            <input id="patient_id" placeholder="e.g. John Smith" name="name" value="${name}" class="form-control">
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
    </div>
</t:wrapper>