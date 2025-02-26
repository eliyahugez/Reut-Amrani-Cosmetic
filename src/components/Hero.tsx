import ScrollReveal from "./ScrollReveal";
import imageBG from "../../assets/bg.jpg";
import h1bg from "../../assets/Reut_Amrani_bg_removed.png.png";
export default function Hero() {
  return (
    <div id="home" className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pt-6 transform scale-105 transition-transform duration-[2s]"
        style={{
          backgroundImage: `url(${imageBG})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-200/40 to-black/60"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <ScrollReveal className="max-w-3xl px-4 space-y-8">
          <h1 className="font-heebo text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            <img
              src={h1bg}
              className="opacity-35 "
              alt="Reut_Amrani_bg_removed"
            />
          </h1>
          <p className="Rubik_Vinyl text-5xl md:text-7xl text-white/90 mb-8 leading-tight">
            Reut Amrani
          </p>
          <div className="pb-16">
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
