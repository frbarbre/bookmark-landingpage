interface Props {
  text: string;
  textAlign?: string;
}

export default function Paragraph({ text, textAlign }: Props) {
  return (
    <h2
      className={`text-neutral-gray text-[12px] tracking-[-0.12px] leading-[20px] md:text-[18.5px] md:leading-[27px] md:tracking-[-0.185px] max-w-[534px] mx-auto ${
        textAlign || "text-center"
      }`}
    >
      {text}
    </h2>
  );
}
