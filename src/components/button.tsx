interface ButtonProps {
    text: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
      <button className="group border-2 border-white relative inline-flex h-12 text-4xl items-center justify-center overflow-hidden bg-black px-20 py-10 font-medium text-white transition hover:scale-110"><span>{text}</span><div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className="relative h-full w-8 bg-white/20"></div></div></button>
    );
  }
  
  export default Button;