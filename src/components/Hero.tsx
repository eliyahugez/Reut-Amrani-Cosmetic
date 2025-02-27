import ScrollReveal from "./ScrollReveal";
import imageBG from "../../assets/bg.png";
export default function Hero() {
  const classspan =
    "inline-block mx-2 w-2 h-2 bg-[#C0A080] rounded-full align-middle";

  return (
    <div id="home" className="relative h-screen w-min-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={imageBG}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-200/40 to-black/60"></div>
      <div className="absolute inset-0 w-10/12 h-3/12 bg-white/30 backdrop-blur-sm rounded-lg shadow-lg transform -translate-y-4 md:-translate-y-8 mx-auto max-w-4xl"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between text-center">
        <ScrollReveal className="max-w-3xl px-4 w-full mx-auto flex flex-col h-full justify-between">
          <div className="items-center justify-center mt-[50vh] transform -translate-y-1/2">
            <h2 className="signature-style text-7xl md:text-8xl text-white/90 mb-8 leading-tight">
              Reut Amrani
            </h2>
            <p className="text-white hebrew-signature text-lg md:text-4xl mb-4 tracking-wider">
              <div>
                <span>לייזר</span>
                <span className={classspan}></span>
                <span>טיפולי פנים</span>
                <span className={classspan}></span>
                <span>קוסמטיקה רפואית</span>
              </div>
              <div>
                <span>הרמת ריסים</span>
                <span className={classspan}></span>
                <span>הרמת גבות</span>
              </div>
            </p>
            <p className="amatic-sc-bold text-2xl pt-10 text-zinc-950 leading-tight">
              מגיע לך רגע של אהבה לעצמך{" "}
            </p>
          </div>
          <div className="mb-16">
            <p className="Rubik_Vinyl text-5xl md:text-7xl text-white/90 mb-8 leading-tight"></p>
            <button
              onClick={() => {
                window.location.href = `https://wa.me/972527456181?text=היי רעות , הגעתי דרך האתר , אני רוצה לקבוע תור בבקשה ..`;
              }}
              className="bg-[#C0A080] Rubik_Vinyl text-white px-10 py-4 rounded-full hover:bg-[#A88860] transition-all duration-300 transform hover:scale-105"
            >
              תראי זוהרת כבר מחר
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
