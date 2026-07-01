interface LandingButtonProps {
  text: string;
  type: 'large' | 'small' | 'go';
  link?: string;
}

//px para padding horizontal, py para padding vertical

export default function LandingButton(props: LandingButtonProps) {
  return (
    <div>
      {props.type === 'large' && (
        <button className="bg-[var(--orange-color)] text-[var(--primary-color)] px-30 py-4 mt-5 font-bold rounded-4xl hover:bg-[var(--primary-color)] transition-colors cursor-pointer hover:text-[var(--dark-color)] text-lg mb-10">
          {props.text}
        </button>
      )}
      {props.type === 'small' && (
        <button className="bg-[var(--orange-color)] text-[var(--primary-color)] font-bold py-2 px-4 rounded-lg hover:bg-[var(--primary-color)] transition-colors cursor-pointer hover:text-[var(--dark-color)]">
          {props.text}
        </button>
      )}
      {props.type === 'go' && (
        <button
          className="bg-[var(--orange-color)] text-[var(--primary-color)] font-semibold py-2 px-6 rounded-full text-sm hover:bg-[var(--blue-color)] hover:text-[var(--dark-color)] transition-colors cursor-pointer"
        >
          {props.text}
        </button>
      )}
    </div>
  );
}