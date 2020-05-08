package cs472.mvc.service;

import cs472.mvc.model.ContactMessage;
import cs472.mvc.repository.ContactMessageRepository;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class ContactMessageService {
    private final ContactMessageRepository contactMessageRepository;

    public ContactMessageService(){
        this.contactMessageRepository = new ContactMessageRepository();
    }

    public List<ContactMessage> getContactMessages() {
        return this.contactMessageRepository.getContactMessages();
    }

    public List<ContactMessage> getContactMessagesSorted() {
        return this.contactMessageRepository.getContactMessages()
                .stream()
                .sorted(Comparator.comparing(ContactMessage::getCustomerName))
                .collect(Collectors.toList());
    }

    public List<ContactMessage> getContactMessagesFilter(String searchCustomerNamePattern) {
        return this.contactMessageRepository.getContactMessages()
                .stream()
                .sorted(Comparator.comparing(ContactMessage::getCustomerName))
                .filter(cm -> cm.getCustomerName().toLowerCase().contains(searchCustomerNamePattern.toLowerCase()))
                //Todo replace with ignore case
//                .peek(cm -> cm.setCustomerName(cm.getCustomerName().replace(searchCustomerNamePattern, "<strong>" + searchCustomerNamePattern + "</strong>")))
                .collect(Collectors.toList());
    }
}
