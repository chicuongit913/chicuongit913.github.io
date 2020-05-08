import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "ProcessContactForm")
public class ProcessContactForm extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String name = request.getParameter("name");
        String gender = request.getParameter("gender");
        String category = request.getParameter("category");
        String message = request.getParameter("message");

        List<String> errorMessages = new ArrayList<String>();

        if (name.equals("")) {
            errorMessages.add("Name is missing");
        } else {
            request.setAttribute("name",name);
        }

        if (gender == null || gender.equals("")) {
            errorMessages.add("Gender is missing");
        } else {
            request.setAttribute("gender",gender);
        }

        if (category.equals("")) {
            errorMessages.add("Category is missing");
        } else {
            request.setAttribute("category",category);
        }

        if (message.equals("")) {
            errorMessages.add("Message is missing");
        } else {
            request.setAttribute("message",message);
        }

        if(errorMessages.size() > 0) {
            request.setAttribute("errorMessages",errorMessages);
            request.getRequestDispatcher("contact-form.jsp").forward(request, response);
        } else {
            String param = "name=" + name + "&gender=" + gender + "&category=" + category + "&message=" + message;
            response.sendRedirect("/lab10/thankyou?"+param);
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String name = request.getParameter("name");
        String gender = request.getParameter("gender");
        String category = request.getParameter("category");
        String message = request.getParameter("message");

        request.setAttribute("name",name);
        request.setAttribute("gender",gender);
        request.setAttribute("category",category);
        request.setAttribute("message",message);

        request.getRequestDispatcher("thank-you.jsp").forward(request, response);
    }
}
