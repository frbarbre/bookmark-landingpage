interface Props {
  text: string;
  height?: string;
  width?: string;
  color: string;
  textStyles?: string;
  type?: 'submit' | 'button';
}

export default function Button({
  color,
  width,
  height,
  textStyles,
  text,
  type,
}: Props) {
  return (
    <button
      type={type || 'button'}
      className={`${color} border-[3px] border-solid hover:bg-white transition-colors ${
        width || 'px-[24px] w-max'
      } ${height || 'h-[39px] md:h-[48px]'} rounded-[4px] shadow-md ${
        textStyles ||
        'text-[12px] font-medium md:text-[14.4px] md:tracking-[0.072px]'
      }`}
    >
      {text}
    </button>
  );
}
