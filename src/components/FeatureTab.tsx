import Button from './Button';
import Paragraph from './Paragraph';
import Title from './Title';

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
      <section className="max-w-[1162px] mx-auto flex flex-col md:flex-row gap-[71px] md:gap-[125px] items-center">
        <div className="md:w-[538px] flex items-center justify-center md:justify-end">
          <img src={image} alt="" />
        </div>
        <article className="flex flex-col gap-[25px] md:gap-[34px] max-w-[430px] items-center md:items-start">
          <Title title={title} textAlign="text-center md:text-left" />
          <Paragraph text={text} textAlign="text-center md:text-left" />
          <Button
            color="bg-primary-blue border-primary-blue text-white hover:text-primary-blue"
            text="More Info"
          />
        </article>
      </section>
      <div className="h-[175px] md:h-[353px] rounded-r-full absolute bg-primary-blue left-[-26px] top-[20%] sm:top-[30%] md:top-[62%] translate-y-[-20%] sm:translate-y-0 md:translate-y-[-50%] max-w-[325px] md:max-w-[450px] lg:max-w-[650px] w-full z-[-1]" />
    </section>
  );
}
