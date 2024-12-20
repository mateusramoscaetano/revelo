import "./styles.css";
export function WhereWeAreMap() {
  return (
    <>
      <div className="w-full  min-h-full flex flex-col items-center justify-center mb-[60px]">
        <div className="pb-2  w-full max-w-[357px] lg:max-w-[1116px] flex flex-col items-start  justify-start mb-5 px-5 lg:px-0 ">
          <div className=" text-xl  font-semibold flex items-center">
            Onde Estamos
            <div className="ml-2 h-0.5 w-[62px] bg-red-500"></div>
          </div>
        </div>

        <div className="relative w-full h-96">
          <iframe
            title="locale"
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
    </>
  );
}
