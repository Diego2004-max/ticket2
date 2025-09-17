export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 p-6">
      <div className="relative w-full max-w-3xl">
        {/* Ticket */}
        <div className="relative mx-auto flex w-full h-55 overflow-hidden rounded-3xl bg-white shadow-2xl">
          {/* Muescas sobre el separador vertical (arriba y abajo) */}
          <div className="absolute left-[22%] top-0 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-orange-500"></div>
          <div className="absolute left-[22%] bottom-0 -translate-x-1/2 translate-y-1/2 h-6 w-6 rounded-full bg-orange-500"></div>

          {/* Lado izquierdo con QR */}
          <div className="relative w-[22%] pl-0 pr-6 py-6">
              <div className="absolute right-0 top-3 bottom-3 border-r-2 border-dashed border-gray-300"></div>

              <div className="rounded-xl border-[10px] border-white p-2 w-32 h-32 md:w-40 md:h-40">
                <img 
                  src="/qr2.jpg"
                  alt="qr image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          {/* Lado derecho con información de vuelo */}
          <div className="relative w-[%] p-8">
              <div className="absolute right-0 top-0 h-full w-16 bg-indigo-950 text-white flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    {/* Boarding Pass */}
                    <div className="flex items-center text-[9px] tracking-widest [writing-mode:vertical-rl] rotate-180">
                      <span>Boarding Pass</span>
                    </div>

                    {/* Jet Airways */}
                    <div className="text-[9px] tracking-widest [writing-mode:vertical-rl] rotate-180">
                      JET AIRWAYS ✈️
                    </div>
                  </div>
                </div>

            {/* Encabezado: BOM — (línea con avión) — AMS */}
            <div className="flex items-center pr-16">
              <div className="min-w-[7rem]">
              <div className="text-sm text-gray-900">
                    Mumbai, <br /> India
                  </div>
                <div className="text-5xl font-extrabold text-indigo-950 leading-none">BOM</div>
                <div className="mt-2 text-xs text-gray-500">
                  Wed, July 27th <br />1:00 AM</div>
              </div>

              {/* Línea con avión al centro */}
              <div className="flex-1 relative mx-6 h-8">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-gray-300"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-950">✈</div>
              </div>

              <div className="min-w-[7rem] text-right">
                <div className="text-sm text-gray-900">
                  Amsterdam, <br /> Netherlands
                </div>
                <div className="text-5xl font-extrabold text-indigo-950 leading-none">AMS</div>
                <div className="mt-2 text-xs text-gray-500">
                  Thu, July 27th <br />8:30 AM</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-5 gap-8 pr-16 text-xs text-gray-500">
              <div>
                <div className="col-span-2">Passenger</div>
                <div className="font-semibold text-gray-900 whitespace-nowrap">Nikita Sharma</div>
              </div>
              <div>
                <div>Seat</div>
                <div className="font-semibold text-gray-900">4A</div>
              </div>
              <div>
                <div>Terminal</div>
                <div className="font-semibold text-gray-900">D</div>
              </div>
              <div>
                <div>Gate</div>
                <div className="font-semibold text-gray-900">32</div>
              </div>
              <div>
                <div>Boarding</div>
                <div className="font-semibold text-gray-900">12:40 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
