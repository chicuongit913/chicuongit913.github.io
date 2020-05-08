<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<t:wrapper>
    <div class="container">
        <section class="clearfix">
            <h2 class="mt-5 mb-5 font-weight-light">List Contact Message</h2>
            <form method="get" action="/lab11/contact-message">
                <div class="md-form active-pink active-pink-2 mb-3 mt-0">
                    <input autofocus value="${requestScope.searchCustomerNamePattern}" class="form-control" type="text" name="search-customer-name" placeholder="Enter customer name and Hit enter" aria-label="Search">
                </div>
            </form>

            <table id="tbl-list-product" class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Category</th>
                    <th scope="col">Message</th>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <c:forEach var="contactData" items="${requestScope.contactMessages}" varStatus="iteration">
                    <tr>
                        <th><c:out value="${iteration.index+1}"/></th>
                        <td><c:out value="${contactData.customerName}" escapeXml="false"/></td>
                        <td><c:out value="${contactData.gender}"/></td>
                        <td><c:out value="${contactData.category}"/></td>
                        <td><c:out value="${contactData.message}"/></td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
        </section>
    </div>
</t:wrapper>