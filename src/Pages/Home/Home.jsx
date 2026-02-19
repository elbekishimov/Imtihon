import { Link, Outlet } from "react-router-dom";
import unnamed from "../../IMG/unnamed.png"

export default function Home() {
  return (
    <>
      <section class="relative h-[500px] overflow-hidden">
        <img
          alt="Medical Center Exterior"
          className="absolute inset-0 w-full h-full object-cover"
          data-alt="Modern high-tech glass hospital building exterior"
          src={unnamed}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/20 flex items-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white leading-tight mb-6">
                Advancing Healthcare <br /><span class="text-primary"
                >Through Innovation</span
                >
              </h1>
              <p className="text-xl text-slate-100 mb-8 leading-relaxed">
                Dedicated to providing world-class medical care with compassion
                and precision since 1985.
              </p>
              <div className="flex gap-4">
                <div
                  className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20"
                >
                  <span className="material-icons text-primary">verified</span>
                  <span className="text-sm font-medium uppercase tracking-wider"
                  >JCI Accredited</span
                  >
                </div>
                <div
                  className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20"
                >
                  <span className="material-icons text-primary">emoji_events</span>
                  <span className="text-sm font-medium uppercase tracking-wider"
                  >ISO 9001 Certified</span
                  >
                </div>
                <div>
                  <button className="text-white border px-3 py-3 rounded-lg ">
                    <Link to={'/sign-up'}>Sign Up</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <main><Outlet /></main>
    </>
  )
}
