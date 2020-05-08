<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@taglib prefix="ct" uri="/WEB-INF/my-custom-tlds/currentDateTime.tld"%>

<t:wrapper>
  <div class="container text-center m-5">
    <ct:currentDateTime color="red" size="12px" />
  </div>
</t:wrapper>