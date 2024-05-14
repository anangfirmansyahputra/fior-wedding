import React from "react";

export default function HowHelp() {
  return (
    <section className="py-20">
      <div className="container mx-auto border-b border-t border-dark-accent px-4 pb-32 pt-20">
        <h2 className="mb-6 text-center text-3xl font-bold text-[#656565]">
          How We Can Help
        </h2>
        <p className="mb-8 text-center text-lg text-[#989898]">
          Bringing your dream wedding to life with our comprehensive planning
          services.
        </p>
        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="cursor-pointer rounded-lg bg-white p-6 text-[#656565] shadow-md transition-shadow duration-200 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-bold">Personalized Planning</h3>
            <p>
              Every wedding is unique. We offer personalized planning tailored
              to your vision and preferences to ensure your day is exactly as
              you imagined.
            </p>
          </div>
          <div className="cursor-pointer rounded-lg bg-white p-6 text-[#656565] shadow-md transition-shadow duration-200 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-bold">Vendor Coordination</h3>
            <p>
              We handle all aspects of vendor coordination from selection to
              management, ensuring you get the best service at the best price.
            </p>
          </div>
          <div className="cursor-pointer rounded-lg bg-white p-6 text-[#656565] shadow-md transition-shadow duration-200 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-bold">Event Design</h3>
            <p>
              Our expert designers will help create a stunning and cohesive look
              for your wedding that reflects your style and wows your guests.
            </p>
          </div>
          <div className="cursor-pointer rounded-lg bg-white p-6 text-[#656565] shadow-md transition-shadow duration-200 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-bold">Day-of Coordination</h3>
            <p>
              On your wedding day, we take care of all the details so you can
              relax and enjoy your special day without any stress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
