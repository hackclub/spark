export default function Home() {
  return (
    <div className="gray px-8 py-16">
      <main>
        <section className="mt-14 text-center">
          <h2 className="text-4xl font-medium">Hack Club presents...</h2>
          <h1 className="mt-2 text-9xl font-bold">Spark ✨</h1>
          <h3 className="mt-4 text-3xl">📅 August 12 - 13 &bull; 📍 SF</h3>
          <a className="mx-auto mt-4 block w-fit rounded bg-black px-8 py-4 text-2xl font-bold text-white">
            Sign Up
          </a>
        </section>
        <section className="mx-auto max-w-6xl">
          <div className="text-xl">
            <h2 className="text-4xl font-semibold">Spark is...</h2>
            <p>
              Spark is a gender-focused hackathon (social coding event) open to
              all. We welcome all high school programmers, artists, dreamers,
              creators to join us for 24 hours of building, exploring, and
              sharing.
            </p>
            <p>
              At Spark, you&apos;ll have the freedom to create anything you
              want, learn from your peers, and explore the city.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
