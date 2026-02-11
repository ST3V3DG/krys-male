import Image from "next/image";

export function AboutSection() {
  return (
    <section className="bg-secondary/20 overflow-hidden lg:h-svh">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 justify-content-center gap-4">
        <div className="flex flex-col py-24 gap-8">
          <h2 className="text-5xl text-primary">About Me</h2>
          <p className="text-pretty">Books have always sparked my imagination and they have become my biggest inspiration in my artworks.
          As a restless artist, I dive into many fields to make art for books - be it a quote illustration, an artwork full of symbols, fancy book edges or pretty book covers. The joy of creating never ends when you have an endless library!</p>
          <p className="text-pretty">Every artwork from me is created solely by me, without any use of Artificial Intelligence. I work with Procreate (iPad), Photoshop and Illustrator to help my visions come to life.
          I've been working in this industry since 2017 and have loved every second of it!</p>
        </div>
        <div>
          <Image alt="illustration" className="object-cover opacity-50 object-center size-full" height={800} src="/images/black-guy.png" width={400} />
        </div>
      </div>
    </section>
  );
}