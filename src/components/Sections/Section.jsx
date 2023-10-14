"use client";
const Section = ({ bgColor, children }) => {
  return (
    <section className={`w-full overflow-hidden px-4 py-24 ${bgColor}`}>
      <div className="max-w-screen-2xl mx-auto">{children}</div>
    </section>
  );
};

export default Section;
