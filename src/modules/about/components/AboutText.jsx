import React from 'react';

export const AboutText = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-8 py-16 max-w-6xl mx-auto">
      <div className="md:w-1/3">
        <h2 className="text-4xl font-bold leading-tight text-black">
          Nos dedicamos a <br />satisfacer tus necesidades
        </h2>
      </div>
      <div className="md:w-2/3 mt-6 md:mt-0">
        <p className="text-gray-700 text-justify leading-relaxed text-base">
          Lorem ipsum dolor sit amet consectetur, Blanditiis ab laudantium ab earum ad ipsam officiis.
          Atque placeat delectus ut nesciunt dignissimos. Officiis harum facilis obcaecati dolores quidem.
          Possimus fuga at tempore repudiandae! Repellat totam alias, nihil molestias eveniet nihil?
          Asperiores iure error blanditiis blanditiis maiores. Praesentium reiciendis et suscipit,
          officiis est velit soluta.
        </p>
      </div>
    </section>
  );
};
