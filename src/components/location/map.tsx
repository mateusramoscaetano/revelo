import { SectionTitle } from "../ui/section-title";
import "./styles.css";

export function Location() {
  const hauzeMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.4459708996076!2d-49.27743212443472!3d-25.43621609071883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce477f01e1a3d%3A0x1e1bcf8486c9bdb5!2sRua%20Idelfonso%20Borba%20Cordeiro%2C%2074%20-%20Batel%2C%20Curitiba%20-%20PR%2C%2080420-140!5e0!3m2!1spt-BR!2sbr!4v1695769401955!5m2!1spt-BR!2sbr";

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center">
      <div className="pb-2 w-full max-w-[357px] lg:max-w-[1116px] flex flex-col items-start justify-start  px-5 lg:px-0">
        <SectionTitle title="Onde Estamos" className="mb-4" />
      </div>

      <div className="relative w-full h-96">
        <iframe
          title={"hauze"}
          className="absolute top-0 left-0 w-full h-full"
          src={hauzeMapUrl}
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
        ></iframe>
      </div>
    </div>
  );
}
