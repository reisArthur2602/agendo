import { Progress } from "@/components/ui/progress";

type ProgressBarProps = {
  step: number;
  total: number;
};

export const ProgressBar = ({ step, total }: ProgressBarProps) => {
  const value = (step / total) * 100;

  return (
    <div className="w-full text-sm">
      <div className="mb-2 flex w-full items-center justify-between">
        <span>
          Passo {step} de {total}
        </span>
        <span>{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  );
};
