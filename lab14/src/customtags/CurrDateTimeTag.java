package customtags;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class CurrDateTimeTag extends SimpleTagSupport {

    String color;
    String size;

    public void doTag() throws JspException, IOException {
        JspWriter out = getJspContext().getOut();
        LocalDateTime dtNow = LocalDateTime.now();
        List<String> styles = new ArrayList<>();

        if (color != null) {
            styles.add(String.format("color:%s", color));
        }

        if (size != null) {
            styles.add(String.format("font-size:%s", size));
        }

        if(styles.size() > 0 ) {
            String style = String.join(";", styles);
            out.write("<span style=\""+style+"\">"+dtNow.format(DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy"))+"</span>");
        }
        else
            out.write(String.format("<span>"+dtNow.format(DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy"))+"</span>", color));
    }

    public void setColor(String foreColor) {
        this.color = foreColor;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
