import { Section, Container } from "@/components/craft";
import ContactForm from "@/components/forms/ContactForm";

const ContactPage = () => {
  return (
    <Section>
      <Container>
        <h1>Contact Us</h1>
        <p>Please fill out the form below to get in touch with us.</p>
        <ContactForm />
      </Container>
    </Section>
  );
};

export default ContactPage;
