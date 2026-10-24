"use client";

import CommonCarousel from "@/components/layout/CommonCarousel";

export default function Home() {
  return (
    <main className="w-full bg-white text-neutral-800">
      <section className="h-dvh w-full overflow-hidden">
        <CommonCarousel
          commonName=" "
          heightClassName="h-dvh min-h-screen"
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

      {/* Main Content Sections */}
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-16 md:space-y-24">
          {/* About Us Section */}
          <section id="about" className="max-w-5xl mx-auto flex flex-col">
            <header className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-neutral-900 uppercase font-montserrat">
                ABOUT US
              </h2>
              <div className="mx-auto mt-4 flex w-36 items-center">
                <span className="h-[2px] flex-1 bg-neutral-300" />
                <span className="h-1 w-12 bg-blue-700" />
                <span className="h-[2px] flex-1 bg-neutral-300" />
              </div>
            </header>

            <p className="text-justify text-neutral-600 text-sm sm:text-base leading-relaxed">
              The Students&apos; Gymkhana is a student body, fostering all student activities at IIT Bhubaneswar and bridging the gap between the students and the authorities. From its genesis in the year 2010, it seeks to cultivate various qualitative approaches amongst students to master an enhanced life. The Students&apos; Gymkhana is the nucleus of the numerous extra-curricular, technical and co-curricular activities held in IIT Bhubaneswar spanning activities of different genres of sports, cultural and technical fields. It plays a cardinal role in cultivating and nurturing their extra-curricular talents here by encouraging their participation in a number of contrasting events. Gymkhana works towards an aim to bring all round development in the students through their active role in extra-curricular activities to supplement education and advancing the general welfare of our students. The hierarchy of Students&apos; Gymkhana comprises the President, Students&apos; Senate, an elected representative body and the elected executives: the Vice President, General Secretary Socio-Cultural Council, General Secretary Science and Technology Council, General Secretary Sports Council. The Senate lays down the general guideline for the functions of the executives and their associated councils. General Elections are held every year during spring for various offices of powers. The elections are presided over by an election commissioner. The Gymkhana Elections and its healthy functioning are done in accordance to the Gymkhana Constitution.
            </p>
          </section>

          {/* President's Word Section */}
          <section id="president-word" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* President Profile Card */}
            <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center">
              <article className="group w-full max-w-[280px] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative flex h-[280px] sm:h-[300px] items-center justify-center overflow-hidden bg-neutral-100 p-3">
                  <img
                    src="/img/office26/pres.png"
                    alt="Dr. Chetan"
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-4 pb-4 pt-10 text-white">
                    <h3 className="text-center text-base sm:text-lg font-bold leading-snug">
                      <a
                        href="https://sms.iitbbs.ac.in/index.php/chetan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Dr. Chetan
                      </a>
                    </h3>
                    <p className="mt-0.5 text-center text-xs font-semibold uppercase tracking-wide text-neutral-200">
                      PRESIDENT
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center px-4 py-4 text-center">
                  <p className="text-sm font-semibold text-neutral-800">PRESIDENT</p>
                  <p className="mt-1 text-xs tracking-wide text-neutral-500">STUDENTS&apos; GYMKHANA</p>
                  <p className="text-xs tracking-wide text-neutral-500">IIT BHUBANESWAR</p>
                </div>
              </article>
            </div>

            {/* President's Message */}
            <div className="md:col-span-8 lg:col-span-9 flex flex-col">
              <header className="text-center md:text-left mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-neutral-900 uppercase font-montserrat">
                  PRESIDENT&apos;S WORD
                </h2>
                <div className="mt-4 flex w-36 items-center mx-auto md:mx-0">
                  <span className="h-[2px] flex-1 bg-neutral-300" />
                  <span className="h-1 w-12 bg-blue-700" />
                  <span className="h-[2px] flex-1 bg-neutral-300" />
                </div>
              </header>

              <p className="text-justify text-neutral-600 text-sm sm:text-base leading-relaxed">
                Indian Institute of Technology, Bhubaneswar, from its humble start in 2008 has come down a long way in its strife to become one of the leading institutes of the country. Achieving this success in this short a journey would have been impossible without the contribution of the students and extensive support of the Students&apos; Gymkhana, the students&apos; representative body. Established in 2009, the Gymkhana has been efficiently working as an independent, self-governing and democratic organization that has bridged the gap between the students and the administration. From managing various societies catering to different interests and talents of the students, organizing various intra-college co-curricular, technical and sports events and competitions, holding informative workshops, celebrating the festivals at hostels with great fervor and organizing the institute&apos;s very own socio-cultural and technical fests, Alma Fiesta and Wissenaire respectively, the Students&apos; Gymkhana has played a commendable role in nurturing the extra-curricular talents of the students, enhancing their personality and cultivating leadership qualities in them to equip them for a successful independent corporate and social life. It gives me immense pride and pleasure to be heading this organization, I congratulate all its members for their achievements so far and extend my support and good wishes to continue these appreciable efforts.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
