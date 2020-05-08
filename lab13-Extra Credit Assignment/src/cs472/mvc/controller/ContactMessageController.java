package cs472.mvc.controller;
import cs472.mvc.model.ContactMessage;
import cs472.mvc.service.ContactMessageService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "ContactUs")
public class ContactMessageController extends HttpServlet {

    private final ContactMessageService contactMessageService = new ContactMessageService();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String searchCustomerNamePattern = request.getParameter("search-customer-name");
        List<ContactMessage> contactMessages;

        if(searchCustomerNamePattern == null || searchCustomerNamePattern.equals("")) {
            contactMessages = this.contactMessageService.getContactMessagesSorted();
        } else {
            contactMessages = this.contactMessageService.getContactMessagesFilter(searchCustomerNamePattern);
        }

        request.setAttribute("searchCustomerNamePattern", searchCustomerNamePattern);
        request.setAttribute("contactMessages", contactMessages);
        request.getRequestDispatcher("/WEB-INF/views/contact-message.jsp").forward(request, response);
    }
}
