interface Props {
  title: string;
  textAlign?: string;
}

export default function Title({ title, textAlign }: Props) {
  return (
    <h2
      className={`font-medium text-neutral-blue text-[20px] md:text-[32px] leading-[23px] ${
        textAlign || "text-center"
      }`}
    >
      {title}
    </h2>
  );
}
