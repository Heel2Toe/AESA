interface props {
  value: string;
  onChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
}

const TextBox: React.FC<props> = ({ value, onChange }) => {
  return (
    <input
      onChange={onChange}
      name={value}
      placeholder={value}
      className="outline-none text-white font-extrabold border border-transparent 
      border-b-blue-300 p-2 bg-transparent placeholder:text-blue-300 placeholder:font-extrabold w-[90%]"
    />
  );
};

export default TextBox;
