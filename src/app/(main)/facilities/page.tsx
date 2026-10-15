"use client";

import CommonCarousel from "@/components/layout/CommonCarousel";

const facilities = [
  {
    id: "student-activity-center",
    title: "STUDENT ACTIVITY CENTER",
    image: "/img/facilities/sac.png",
    imageAlt: "Student Activity Center at IIT Bhubaneswar",
    description:
      "IITs are well known for their fabulous amalgamation of extracurriculars with academics. At the heart of these activities, you can find the Students Activity Center. The SAC boasts an array of badminton, squash, basketball, and volleyball courts, complete with a swimming pool. It houses a gym, a dance room and plenty of amenities to assist the functioning of socio-cultural societies. The Student Activity Center ought to be a haven for sports and sociocultural activities at IIT Bhubaneswar for years to come.",
    imageFirst: true,
  },
  {
    id: "green-field-campus",
    title: "GREEN FIELD CAMPUS",
    image: "/img/facilities/green.png",
    imageAlt: "Green Field Campus at IIT Bhubaneswar",
    description:
      "The horticulture activity started in the year 2015 as a first step towards ensuring a more vibrant and spirited environment filled with frondescence. The flora includes a variety of exotic and indigenous species (both deciduous and coniferous) like palm, pine, long-life tall trees and some medicinal plants. The board members inaugurated the first phase of the Plantation Project by planting the saplings of Gulmohar and Mahogany around the Sports Ground on 10th July 2015. The main focus of the Horticulture Department, at least for the next five years lies in creating a natural landscape in newly constructed areas. Lush green gardens adorned with ornamental and medicinal plants help maintain a clean and healthy environment for the students and residents of the campus. Nurturing nature is not just a duty but it's a responsibility and IIT Bhubaneswar believes that this is the best way to promote creativity amongst students and the verdure also creates a positive effect on mental and physical well-being. The plants and trees shall be chosen in such a way that it creates a habitat for local birds, bees and butterflies. To achieve sustainability, the horticulture center focuses on building rooftop rainwater harvesting, surface rainwater harvesting infrastructure and setting up a waste management system and wastewater recycling plant. Also part of the 2015-2020 plan, an autonomous water irrigation system shall be set up to save expenditure.",
    imageFirst: false,
  },
];

export default function Facilities() {
  return (

    <main className="w-full bg-white text-neutral-800 dark:bg-black dark:text-neutral-200">
      {/* Hero carousel: existing component preserved */}
      <section className="h-[50vh] w-full overflow-hidden md:h-[80vh]">
        <CommonCarousel
          commonName=" "
          heightClassName="h-full"
          images={[
            "/img/home-carousel/1.webp",
            "/img/home-carousel/2.webp",
            "/img/home-carousel/3.webp",
            "/img/home-carousel/4.webp",
            "/img/home-carousel/5.webp",
            "/img/home-carousel/6.webp",
          ]}
        />
      </section>

      {/* Facilities content */}
      <div className="mx-auto max-w-[1800px] px-5 py-12 sm:px-8 md:py-16 lg:px-8 lg:py-20">
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {facilities.map((facility) => (
            <section
              key={facility.id}
              id={facility.id}
              className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-10 lg:gap-12"
            >
              {/* Image */}
              <div
                className={`md:col-span-5 ${
                  facility.imageFirst
                    ? "md:order-1"
                    : "md:order-2"
                }`}
              >
                <div className="group relative h-[260px] overflow-hidden sm:h-[340px] md:h-[325px] lg:h-[380px]">
                  <img
                    src={facility.image}
                    alt={facility.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Heading and description */}
              <div
                className={`md:col-span-7 ${
                  facility.imageFirst
                    ? "md:order-2"
                    : "md:order-1"
                }`}
              >
                <header className="mb-6 text-center">
                  <h2 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-3xl lg:text-[40px]">
                    {facility.title}
                  </h2>

                  <div className="mx-auto mt-4 flex w-[150px] items-center justify-center">
                    <span className="h-[2px] flex-1 bg-neutral-300 dark:bg-neutral-700" />
                    <span className="h-[4px] w-[50px] bg-blue-700" />
                    <span className="h-[2px] flex-1 bg-neutral-300 dark:bg-neutral-700" />
                  </div>
                </header>

                <p className="text-justify text-[15px] leading-7 text-neutral-500 dark:text-neutral-400 sm:text-base sm:leading-[29px]">
                  {facility.description}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Back to top */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m6 14 6-6 6 6"
          />
        </svg>
      </button>
    </main>
  );
}