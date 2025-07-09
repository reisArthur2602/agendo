import { Loader} from "lucide-react";

const Page = () => {
  return (
    <div className="flex items-center justify-center bg-blue-50">
      <div className="flex items-center gap-4">
        <Loader className="text-primary h-8 w-8 animate-spin" />
        <p className="text-lg font-medium">Carregando...</p>
      </div>
    </div>
  );
};

export default Page;
