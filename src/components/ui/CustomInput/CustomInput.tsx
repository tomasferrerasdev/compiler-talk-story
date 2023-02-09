import { FC, useState } from 'react';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { Icon } from '../Icons';

type CustomInputType = {};

export const CustomInput: FC<CustomInputType> = () => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [input, setInput] = useState('');

  const addEmoji = (e: any) => {
    let sym = e.unified.split('-');
    let codesArray: any = [];
    sym.forEach((el: any) => codesArray.push('0x' + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
    setIsPickerVisible(false);
  };

  return (
    <div>
      <div className="relative flex w-full items-center gap-4">
        <ReactTextareaAutosize
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What are your thoughts?"
          className="block w-full resize-none bg-transparent py-4 text-base text-light_gray placeholder:text-gray focus:outline-none"
        />
        <button
          className="absolute bottom-2 right-2 text-white"
          onClick={() => setIsPickerVisible(!isPickerVisible)}
        >
          <Icon name={'SmileyIcon'} />
        </button>
      </div>
      <div className="absolute">
        {isPickerVisible ? (
          <Picker
            skinTonePosition="search"
            categories={[
              'frequent',
              'people',
              'foods',
              'nature',
              'objects',
              'places',
            ]}
            onEmojiSelect={addEmoji}
            data={data}
          />
        ) : null}
      </div>
    </div>
  );
};
