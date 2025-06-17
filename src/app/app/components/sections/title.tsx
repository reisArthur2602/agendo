type TitleSectionProps = {
  badge: string;
  title: string;
  description: string;
};
export const TitleSection = ({
  badge,
  description,
  title,
}: TitleSectionProps) => {
  return (
    <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="bg-primary text-primary-foreground mb-2 inline-block rounded-lg px-3 py-1 text-sm">
          {badge}
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};
