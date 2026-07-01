interface CostumersCardProps {
  image: string;
  name: string;
  description: string;
}

export default function HappyCostumersCards({
  image,
  name,
  description,
}: CostumersCardProps) {
  return (
    <div className="happy-card">
      <div className="happy-card-avatar">
        <img src={image} alt={name} />
      </div>

      <div className="happy-card-content">
        <p className="happy-card-description">
          “{description}”
        </p>

        <h4 className="happy-card-name">
          — {name}
        </h4>
      </div>
    </div>
  );
}