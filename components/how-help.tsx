import Image from "next/image";
import React from "react";

export default function HowHelp() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 pb-32 pt-20">
        <div className="mx-auto mb-[20px] w-fit">
          <h2 className="cardo-bold text-center text-2xl tracking-wider text-[#2b2b2b]">
            How We Can Help
          </h2>
          <div className="mx-auto mt-[10px] h-[3px] w-[70%] bg-[#DBBEB8]" />
        </div>
        <p className="mb-8 text-center text-lg font-light tracking-wide text-[#5A5859]">
          Bringing your dream wedding to life with our comprehensive planning
          services.
        </p>
        <div className="flex flex-col justify-center space-y-[120px] md:space-y-[100px]">
          <div className="mx-auto mt-[60px] flex flex-col items-center gap-20 md:flex-row md:gap-10 lg:gap-[163px]">
            <div className="relative ml-[70px] h-[400px] w-[320px] md:ml-[180px]">
              <Image
                src="/assets/revision/d8e253630f20b8b2c0f8a71b90699aa6.jpeg"
                alt=""
                fill
                className="z-[2] rounded-bl-[50px] rounded-tr-[50px] object-cover"
              />
              <div className="absolute left-[-70px] top-[-47px] z-[1] h-[400px] w-[320px]">
                <div className="absolute z-[1] h-full w-full rounded-bl-[50px] rounded-tr-[50px] bg-[#DBBEB8]" />
                <div className="relative h-full w-full">
                  <div className="absolute h-full w-full">
                    <div className="relative bottom-[-100px] left-[-100px] h-full max-h-[250px] w-full max-w-[250px]">
                      <Image
                        src="/assets/revision/Vector.svg"
                        alt=""
                        fill
                        className="absolute"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full space-y-[29px] md:w-1/2 lg:w-1/2 xl:w-[547px]">
              <h4 className="text-center font-carmorant text-3xl font-semibold tracking-wide md:text-start">
                Personalized Planning
              </h4>
              <p className="amiri text-center text-[20px] leading-[40px] text-[#5A5859] md:text-start">
                Every wedding is unique. We offer personalized planning tailored
                to your vision and preferences to ensure your day is exactly as
                you imagined.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-[60px] flex flex-col items-center gap-20 md:flex-row md:gap-10 lg:gap-[163px]">
            <div className="order-2 w-full space-y-[29px] md:order-1 md:w-1/2 lg:w-1/2 xl:w-[547px]">
              <h4 className="text-center font-carmorant text-3xl font-semibold tracking-wide md:text-end">
                Vendor Coordination
              </h4>
              <p className="amiri text-center text-[20px] leading-[40px] text-[#5A5859] md:text-end">
                We handle all aspects of vendor coordination from selection to
                management, ensuring you get the best service at the best price.
              </p>
            </div>

            <div className="relative order-1 mr-[70px] flex h-[400px] w-[320px] md:order-2 md:mr-[180px]">
              <Image
                src="/assets/revision/9b0d293c2dbdb02462a3c1881b8ec529.jpeg"
                alt=""
                fill
                className="z-[2] rounded-br-[50px] rounded-tl-[50px] object-cover"
              />
              <div className="absolute right-[-70px] top-[-47px] z-[1] h-[400px] w-[320px]">
                <div className="absolute z-[1] h-full w-full rounded-br-[50px] rounded-tl-[50px] bg-[#DBBEB8]" />
                <div className="relative h-full w-full">
                  <div className="absolute h-full w-full">
                    <div className="relative bottom-[-100px] right-[-160px] h-full max-h-[250px] w-full max-w-[250px] scale-x-[-1]">
                      <Image
                        src="/assets/revision/Vector.svg"
                        alt=""
                        fill
                        className="absolute"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-[60px] flex flex-col items-center gap-20 md:flex-row md:gap-10 lg:gap-[163px]">
            <div className="relative ml-[70px] h-[400px] w-[320px] md:ml-[180px]">
              <Image
                src="/assets/revision/67f38ff8c7a8c230644f61c512a352bb.jpeg"
                alt=""
                fill
                className="z-[2] rounded-bl-[50px] rounded-tr-[50px] object-cover"
              />
              <div className="absolute left-[-70px] top-[-47px] z-[1] h-[400px] w-[320px]">
                <div className="absolute z-[1] h-full w-full rounded-bl-[50px] rounded-tr-[50px] bg-[#DBBEB8]" />
                <div className="relative h-full w-full">
                  <div className="absolute h-full w-full">
                    <div className="relative bottom-[-100px] left-[-100px] h-full max-h-[250px] w-full max-w-[250px]">
                      <Image
                        src="/assets/revision/Vector.svg"
                        alt=""
                        fill
                        className="absolute"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full space-y-[29px] md:w-1/2 lg:w-1/2 xl:w-[547px]">
              <h4 className="text-center font-carmorant text-3xl font-semibold tracking-wide md:text-start">
                Event Design
              </h4>
              <p className="amiri text-center text-[20px] leading-[40px] text-[#5A5859] md:text-start">
                Our expert designers will help create a stunning and cohesive
                look for your wedding that reflects your style and wows your
                guests.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-[60px] flex flex-col items-center gap-20 md:flex-row md:gap-10 lg:gap-[163px]">
            <div className="order-2 w-full space-y-[29px] md:order-1 md:w-1/2 lg:w-1/2 xl:w-[547px]">
              <h4 className="text-center font-carmorant text-3xl font-semibold tracking-wide md:text-end">
                Day-off Coordination
              </h4>
              <p className="amiri text-center text-[20px] leading-[40px] text-[#5A5859] md:text-end">
                On your wedding day, we take care of all the details so you can
                relax and enjoy your special day without any stress.
              </p>
            </div>

            <div className="relative order-1 mr-[70px] h-[400px] w-[320px] md:order-2 md:mr-[180px]">
              <Image
                src="/assets/revision/b29a4bfeb9060315eb52905cc2444a3d.jpeg"
                alt=""
                fill
                className="z-[2] rounded-br-[50px] rounded-tl-[50px] object-cover"
              />
              <div className="absolute right-[-70px] top-[-47px] z-[1] h-[400px] w-[320px]">
                <div className="absolute z-[1] h-full w-full rounded-br-[50px] rounded-tl-[50px] bg-[#DBBEB8]" />
                <div className="relative h-full w-full">
                  <div className="absolute h-full w-full">
                    <div className="relative bottom-[-100px] right-[-160px] h-full max-h-[250px] w-full max-w-[250px] scale-x-[-1]">
                      <Image
                        src="/assets/revision/Vector.svg"
                        alt=""
                        fill
                        className="absolute"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
