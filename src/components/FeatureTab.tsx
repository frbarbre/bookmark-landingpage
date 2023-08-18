import Title from "./Title";

export default function FeatureTab({
  image,
  text,
  title,
}: {
  image: string;
  text: string;
  title: string;
}) {
  return (
    <section className="relative">
      <section className="max-w-[1162px] mx-auto flex flex-col md:flex-row">
        <div className="md:w-[538px] flex items-center justify-center md:justify-end">
          <img src={image} alt="" />
        </div>
        <article>
          <Title title={title} textAlign="text-center md:text-left" />
        </article>
      </section>
      <div className="h-[175px] md:h-[353px] rounded-r-full absolute bg-primary-blue left-[-26px] top-[20%] sm:top-[30%] md:top-[62%] translate-y-[-50%] max-w-[325px] md:max-w-[650px] w-full z-[-1]" />
    </section>
  );
}
