package cs472.mvc.repository;

import cs472.mvc.model.ContactMessage;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

public class ContactMessageRepository {
    private List<ContactMessage> contactMessages = Arrays.asList(
        new ContactMessage("Bob W.Adamson", "Male", "Complaint", "This is compliant"),
        new ContactMessage("John H.Smith", "Male", "Feedback", "This is feedback"),
        new ContactMessage("Tuyen Le Nguyen", "Female", "Feedback", "This is feedback"),
        new ContactMessage("Anna Jones", "Female", "Inquiry", "This is inquiry"),
        new ContactMessage("Carlos Hernandez", "Male", "Inquiry", "This is inquiry"),
        new ContactMessage("Zacary Najib Ali", "Male", "Inquiry", "This is inquiry")
    );

    public ContactMessageRepository() {
    }

    public List<ContactMessage> getContactMessages() {
        return contactMessages;
    }
}
