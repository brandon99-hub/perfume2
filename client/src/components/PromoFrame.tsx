interface PromoFrameProps {
  title: string;
  description: string;
}

export function PromoFrame({ title, description }: PromoFrameProps) {
  return (
    <div className="border-2 border-primary rounded-md p-6 bg-accent/30">
      <h3 className="font-serif text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-sm text-foreground">{description}</p>
    </div>
  );
}
