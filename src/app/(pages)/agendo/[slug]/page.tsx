import { notFound } from "next/navigation";
import { getBusiness } from "./server/get-business";
import { Layout } from "@prisma/client";
import { LayoutClassic } from "./components/layouts/classic";

type PageProps = {
  params: { slug: string };
};
const Page = async ({ params: { slug } }: PageProps) => {
  const business = await getBusiness(slug);
  if (!business) return notFound();

  const renderLayout = (layout: Layout) => {
    switch (layout) {
      case "CLASSIC":
        return <LayoutClassic business={business} />;
      default:
        return <LayoutClassic business={business} />;
    }
  };

  return <>{renderLayout(business?.layout)}</>;
};

export default Page;
