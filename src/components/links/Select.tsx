import { useState } from "react";
import { socialMediaPlatforms } from "./platformsData";
import Image from "next/image";

const Select = () => {

      const [isOpen, setIsOpen] = useState(false);
      const [selectedValue, setSelectedValue] = useState('Please make a selection');

      const handleClick = () => {
        setIsOpen(!isOpen);
      };

      const handleOptionClick = (value:string) => {
        setSelectedValue(value);
        setIsOpen(false);
        // onchange(value); // Call the callback function with the selected value
      };
  return (
    <div className='custom-select relative'>
      <button
        className='select-button w-full rounded border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500'
        onClick={handleClick}>
        {selectedValue}
      </button>
      {isOpen && (
        <ul className='options-list absolute top-full left-0 w-full rounded shadow bg-white overflow-y-auto max-h-60 z-50'>
          {socialMediaPlatforms.map((option) => (
            <li
              key={option.platform}
              className='option-item px-3 py-2 hover:bg-gray-100 cursor-pointer'
                  onClick={() => handleOptionClick(option.platform)}>
                  <Image src={option.inactiveIcon} alt={option.platform}  />
              {option.platform}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select
