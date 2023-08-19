import { useState } from 'react';
import Button from './Button';

export default function ContactForm() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      value !== '' &&
      value.includes('@') &&
      value.includes('.') &&
      !value.includes(' ')
    ) {
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[530px] mx-auto flex flex-col md:flex-row gap-[16px] justify-center"
    >
      {error ? (
        <div className="p-[3px] bg-primary-red rounded-[6px] md:max-w-[300px] w-full">
          <div className="relative w-full">
            <input
              type="text"
              value={value}
              placeholder="Enter your email address"
              onChange={(e) => setValue(e.target.value)}
              className="pl-[18px] text-[14px] outline-none h-[42px] md:h-[48px] w-full md:max-w-[300px] rounded-[4px]"
            />
            <div className="absolute top-[50%] translate-y-[-50%] right-[11px]">
              <img src="/icon-error.svg" alt="icon-error" />
            </div>
          </div>
          <p className="text-[12px] italic font-medium text-white p-[6px] pl-[10px]">
            Whooops, make sure it's an email
          </p>
        </div>
      ) : (
        <input
          type="text"
          value={value}
          placeholder="Enter your email address"
          onChange={(e) => setValue(e.target.value)}
          className="pl-[18px] text-[14px] outline-none h-[42px] md:h-[48px] w-full md:max-w-[300px] rounded-[4px] shadow-md"
        />
      )}
      <Button
        type="submit"
        text="Contact Us"
        color="bg-primary-red border-primary-red text-white hover:text-primary-red"
        width="w-full md:w-[127px]"
      />
    </form>
  );
}
