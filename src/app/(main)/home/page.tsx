"use client";

import CommonCarousel from "@/components/layout/CommonCarousel";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-white dark:bg-black text-neutral-800 dark:text-neutral-200">
      <section className="h-[50vh] md:h-[80vh] w-full overflow-hidden">
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

      {/* Main Content Sections */}
      <main className="w-full flex-1">
        <div className="max-w-9xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 space-y-16 md:space-y-24">
          {/* About Us Section */}
          <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 flex flex-col">
              <header className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-neutral-900 dark:text-white uppercase font-montserrat">
                  ABOUT US
                </h2>
                <div className="w-12 h-[3px] bg-blue-600 mx-auto mt-2.5 rounded-full" />
              </header>

              <p className="text-justify text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                The Students' Gymkhana is a student body, fostering all student activities at IIT Bhubaneswar and bridging the gap between the students and the authorities. From its genesis in the year 2010, it seeks to cultivate various qualitative approaches amongst students to master an enhanced life. The Students' Gymkhana is the nucleus of the numerous extra-curricular, technical and co-curricular activities held in IIT Bhubaneswar spanning activities of different genres of sports, cultural and technical fields. It plays a cardinal role in cultivating and nurturing their extra-curricular talents here by encouraging their participation in a number of contrasting events. Gymkhana works towards an aim to bring all round development in the students through their active role in extra-curricular activities to supplement education and advancing the general welfare of our students. The hierarchy of Students' Gymkhana comprises the President, Students' Senate, an elected representative body and the elected executives: the Vice President, General Secretary Socio-Cultural Council, General Secretary Science and Technology Council, General Secretary Sports Council. The Senate lays down the general guideline for the functions of the executives and their associated councils. General Elections are held every year during spring for various offices of powers. The elections are presided over by an election commissioner. The Gymkhana Elections and its healthy functioning are done in accordance to the Gymkhana Constitution.
              </p>
            </div>
          </section>

          {/* President's Word Section */}
          <section id="president-word" className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* President Profile Card */}
            <div className="md:col-span-3 flex flex-col items-center">
              <div className="w-full relative max-w-[300px] bg-white dark:bg-neutral-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/img/office26/pres.png"
                  alt="Dr. Chetan "
                  className="w-full h-auto max-h-[320px] object-cover object-top block mx-auto"
                />
                <div className="py-3 w-full px-2 text-center absolute bottom-0 bg-linear-to-t from-black to-transparent">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 dark:text-white hover:text-blue-600 transition-colors">
                    <a
                      href="https://sms.iitbbs.ac.in/index.php/chetan/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dr. Chetan
                    </a>
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 leading-snug">
                    President
                    <br />
                    Students Gymkhana
                  </p>
                </div>
              </div>
            </div>

            {/* President's Message */}
            <div className="md:col-span-9 flex flex-col">
              <header className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-neutral-900 dark:text-white uppercase font-montserrat">
                  PRESIDENT'S WORD
                </h2>
                <div className="w-12 h-[3px] bg-blue-600 mx-auto mt-2.5 rounded-full" />
              </header>

              <p className="text-justify text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                Indian Institute of Technology, Bhubaneswar, from its humble start in 2008 has come down a long way in its strife to become one of the leading institutes of the country. Achieving this success in this short a journey would have been impossible without the contribution of the students and extensive support of the Students' Gymkhana, the students' representative body. Established in 2009, the Gymkhana has been efficiently working as an independent, self-governing and democratic organization that has bridged the gap between the students and the administration. From managing various societies catering to different interests and talents of the students, organizing various intra-college co-curricular, technical and sports events and competitions, holding informative workshops, celebrating the festivals at hostels with great fervor and organizing the institute's very own socio-cultural and technical fests, Alma Fiesta and Wissenaire respectively, the Students' Gymkhana has played a commendable role in nurturing the extra-curricular talents of the students, enhancing their personality and cultivating leadership qualities in them to equip them for a successful independent corporate and social life. It gives me immense pride and pleasure to be heading this organization, I congratulate all its members for their achievements so far and extend my support and good wishes to continue these appreciable efforts.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
