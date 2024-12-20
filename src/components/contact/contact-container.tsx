import { ContactIntro } from "./contact-intro";
import { ContactForm } from "./contact-form";

interface IContactContainerProps {}

export function ContactContainer({}: IContactContainerProps) {
  return (
    <div className="flex flex-col sm:flex-row w-full max-w-[1116px] min-h-full items-center justify-center pb-[50px] px-5 ">
      <ContactIntro />
      <ContactForm />
    </div>
  );
}
