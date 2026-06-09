"use client";

import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16">

        <header className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600">
            Northern Tanzania Union Conference
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            Seventh-day Adventist Church
          </p>
        </header>

        <article className="max-w-4xl mx-auto">

          <div className="space-y-8 text-gray-700 leading-8 text-justify">

            <p>
              The Northern Tanzania Union Conference (NTUC) is an administrative
              unit of the Seventh-day Adventist Church responsible for
              coordinating the mission, ministries, and institutional work of
              the Church throughout Northern Tanzania. The Union provides
              spiritual leadership, strategic direction, and operational support
              to its constituent fields and institutions in advancing the
              Church’s mission of proclaiming the everlasting gospel and
              preparing people for the soon return of Jesus Christ.
            </p>

            <p>
              Through its conferences, missions, churches, educational
              institutions, healthcare facilities, media ministries, and
              community outreach programs, NTUC seeks to promote holistic
              ministry that addresses spiritual, physical, social, and
              educational needs. The Union works closely with local church
              members, leaders, and institutions to strengthen discipleship,
              evangelism, stewardship, youth development, and community service.
            </p>

            <p>
              NTUC serves a large and diverse membership spread across multiple
              regions of Northern Tanzania. Its ministry network includes more
              than 2,000 churches and companies, serving over 900,000 members.
              The Union also supports universities, schools, training
              institutions, hospitals, clinics, media ministries, and
              humanitarian initiatives that contribute to the well-being of
              communities throughout its territory.
            </p>

            <h2 className="pt-6 text-2xl font-semibold text-orange-600">
              Historical Background
            </h2>

            <p>
              The Seventh-day Adventist message was introduced to Tanzania in
              1903 and has continued to grow steadily through decades of
              evangelistic outreach, education, healthcare ministry, and church
              planting. As the work expanded, administrative structures evolved
              to provide effective leadership and support for the growing
              membership and institutional network.
            </p>

            <p>
              Following organizational developments within the Church, the
              Northern Tanzania Union Conference was formally organized in 2013.
              Since then, NTUC has continued to strengthen mission initiatives,
              develop institutions, and support the growth of the Church across
              its territory while remaining committed to the values and mission
              of the worldwide Seventh-day Adventist Church.
            </p>

            <h2 className="pt-6 text-2xl font-semibold text-orange-600">
              Mission and Commitment
            </h2>

            <p>
              NTUC remains dedicated to sharing the love of Christ through
              evangelism, education, healthcare, humanitarian service, and
              leadership development. Guided by biblical principles and inspired
              by a rich heritage of faith, the Union continues to serve its
              communities with integrity, compassion, and a commitment to
              excellence in ministry.
            </p>

          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-lg font-medium text-orange-600">
              Intergrated For Mission.
            </p>
          </div>

        </article>
      </section>
    </>
  );
}
