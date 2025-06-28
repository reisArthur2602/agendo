import { HomeNavbar } from "./components/home/navbar";
import { HomeFooter } from "./components/home/footer";
import { HomeSections } from "./components/home/sections";

const Page = () => {
  return (
    <div>
      <HomeNavbar />
      <HomeSections />
      <HomeFooter />
    </div>
  );
};

export default Page;
