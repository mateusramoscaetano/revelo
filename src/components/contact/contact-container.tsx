import { ContactForm } from "./contact-form";
import { ContactIntro } from "./contact-intro";

export function ContactContainer() {
  return (
    <div
      id="contact"
      className="flex flex-col sm:flex-row w-full max-w-[1116px] min-h-full items-center justify-center pb-[50px] px-5 pt-[60px]"
    >
      <ContactIntro />
      <ContactForm />
    </div>
  );
}
