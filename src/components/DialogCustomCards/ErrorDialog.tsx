import type { FC } from 'react';
import type { FieldErrors } from 'react-hook-form';
import type { writeForm } from '../../pages/new-post';

interface IErrorDialog {
  errors: FieldErrors<writeForm>;
}

export const ErrorDialog: FC<IErrorDialog> = ({ errors }) => {
  return (
    <section className="fixed left-12 bottom-16 w-fit rounded-[5px] border bg-black p-4 text-red-600">
      <div className="flex h-full w-full flex-col  gap-2">
        {Object.values(errors).map((value, i) => (
          <p key={i} className="text-sm text-red-400">
            {value.message?.toString()}
          </p>
        ))}
      </div>
    </section>
  );
};
