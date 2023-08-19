import { useState } from 'react';

export default function Question({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <article className="border-b-neutral-gray/40 border-b">
      <article
        onClick={() => setIsOpened(!isOpened)}
        className="flex justify-between items-center cursor-pointer pr-[23px] py-[23px]"
      >
        <h2 className="text-neutral-blue text-[14px] md:text-[16px]">
          {question}
        </h2>
        <img
          src={isOpened ? '/icon-arrow-red.svg' : '/icon-arrow.svg'}
          alt="arrow-icon"
          className={isOpened ? 'rotate-180' : ''}
        />
      </article>
      {isOpened && (
        <p className="text-neutral-gray text-[13px] md:text-[15px] py-[25px]">
          {answer}
        </p>
      )}
    </article>
  );
}
