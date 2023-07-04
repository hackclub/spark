import { FAQ } from "@/components/Faq";
import { Photos } from "@/components/Photos";

export default function Home() {
  return (
    <div className="px-8 py-16">
      <main>
        <section className="mt-14 text-center">
          <h2 className="text-4xl font-medium uppercase text-purple-300">
            Hack Club presents...
          </h2>
          <h1 className="mt-4 text-9xl font-bold">Spark ✨</h1>
          <h3 className="mt-8 text-3xl text-gray-600">
            📅 August 12 - 13 &bull; 📍 SF
          </h3>
          <a className="mx-auto mt-4 block w-fit rounded bg-purple-500 px-8 py-4 text-2xl font-bold text-white hover:bg-purple-600">
            Apply Now!
          </a>
        </section>
        <section className="mx-auto mt-20 max-w-6xl">
          <div className="max-w-2xl space-y-4 text-xl">
            <h2 className="text-4xl font-semibold">Spark is...</h2>
            <p>
              Spark is a gender-focused hackathon (social coding event) open to
              all. We welcome all high school programmers, artists, dreamers,
              creators to join us for 24 hours of building, exploring, and
              sharing.
            </p>
            <p>
              At Spark, you&apos;ll have the freedom to create anything you
              want, learn from your peers, and explore the city. Spark is
              organized entirely by girls in the Hack Club community, and we
              want you to help!{" "}
              <a
                href="https://hackclub.com/slack/?event=spark"
                target="_blank"
                rel="noreferrer"
                className="font-medium"
              >
                Join us
              </a>{" "}
              to craft Spark into the experience you want it to be.
            </p>
          </div>
        </section>
        <section className="mt-20">
          <Photos />
        </section>
        <section className="mx-auto mt-20 max-w-6xl">
          <FAQ />
        </section>
      </main>
    </div>
  );
}
