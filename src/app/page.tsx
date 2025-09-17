export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 p-6">
      <div className="relative w-full max-w-4xl">
        {/* Ticket */}
        <div className="relative mx-auto flex w-full overflow-hidden rounded-3xl bg-white shadow-2xl">
          {/* Muescas sobre el separador vertical (arriba y abajo) */}
          <div className="absolute left-[22%] top-0 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-orange-500"></div>
          <div className="absolute left-[22%] bottom-0 -translate-x-1/2 translate-y-1/2 h-6 w-6 rounded-full bg-orange-500"></div>

          {/* Lado izquierdo con QR */}
          <div className="relative w-[22%] p-6 border-r-2 border-dashed border-gray-300">
            <div className="rounded-xl border-[10px] border-white p-2 w-32 h-32 md:w-40 md:h-40 mx-auto">
              {/* QR simple en SVG para placeholder */}
              <img 
              src="/qr2.jpg"
              alt="qr image"
              />
            </div>
          </div>

          {/* Lado derecho con información de vuelo */}
          <div className="relative w-[78%] p-8">
            <div className="absolute right-0 top-0 h-full w-16 bg-indigo-950 text-white flex items-center justify-center">
              <div className="text-xs tracking-widest [writing-mode:vertical-rl] rotate-180">Boarding Pass</div>
            </div>

            {/* Encabezado: BOM — (línea con avión) — AMS */}
            <div className="flex items-center pr-16">
              <div className="min-w-[7rem]">
                <div className="text-sm text-gray-500">Mumbai, India</div>
                <div className="text-6xl font-extrabold text-indigo-950 leading-none">BOM</div>
                <div className="mt-2 text-xs text-gray-500">Wed, July 27th · 1:00 AM</div>
              </div>

              {/* Línea con avión al centro */}
              <div className="flex-1 relative mx-6 h-8">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-gray-300"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-950">✈</div>
              </div>

              <div className="min-w-[7rem] text-right">
                <div className="text-sm text-gray-500">Amsterdam, Netherlands</div>
                <div className="text-6xl font-extrabold text-indigo-950 leading-none">AMS</div>
                <div className="mt-2 text-xs text-gray-500">Thu, July 27th · 8:30 AM</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-5 gap-8 pr-16 text-xs text-gray-500">
              <div>
                <div>Pasajero</div>
                <div className="font-semibold text-gray-900">Nikita Sharma</div>
              </div>
              <div>
                <div>Asiento</div>
                <div className="font-semibold text-gray-900">4A</div>
              </div>
              <div>
                <div>Terminal</div>
                <div className="font-semibold text-gray-900">D</div>
              </div>
              <div>
                <div>Puerta</div>
                <div className="font-semibold text-gray-900">32</div>
              </div>
              <div>
                <div>Embarque</div>
                <div className="font-semibold text-gray-900">12:40 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
