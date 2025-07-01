import { Container } from "@/components/common/container";
import { Logo } from "@/components/common/logo";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-6 bg-blue-50">
      <header className="bg-white">
        <Container className="flex items-center justify-between p-4">
          <Logo variant="short" />
          logout button
        </Container>
      </header>
      <Container className="grid flex-1">{children}</Container>
    </div>
  );
};

export default Layout;
