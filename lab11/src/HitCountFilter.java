import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@WebFilter(filterName = "HitCountFilter")
public class HitCountFilter implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest request, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        System.out.println("Request intercepted by HitCountFilter");
        String KeyHitCountByPage = ((HttpServletRequest)request).getServletPath().substring(1);

        Integer hitCountByPage = (Integer)request.getServletContext().getAttribute(KeyHitCountByPage);
        if(hitCountByPage == null) {
            hitCountByPage = 1;
        } else {
            hitCountByPage++;
        }
        request.getServletContext().setAttribute(KeyHitCountByPage, hitCountByPage);

        Integer totalHitCount = (Integer)request.getServletContext().getAttribute("totalHitCount");
        totalHitCount++;
        request.getServletContext().setAttribute("totalHitCount", totalHitCount);

        request.setAttribute("totalHitCount", totalHitCount);
        request.setAttribute("hitCountByPage", hitCountByPage);
        chain.doFilter(request, resp);
    }

    public void init(FilterConfig config) throws ServletException {
        System.out.println("HitCountFiler is initializing" + config.getFilterName());
        int totalHitCount = 0;
        config.getServletContext().setAttribute("totalHitCount", totalHitCount);
    }

}
