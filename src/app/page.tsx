"use client";

import { Button, DrinkShowcase, LayoutWrapper } from "@/components";
import { useRouter } from "next/navigation";
import { beverages } from "./utils";

const Page = () => {
  const router = useRouter();

  const handleStartOrder = () => {
    router.push("/order-form");
  };

  return (
    <LayoutWrapper>
      <DrinkShowcase beverages={beverages} />
      <Button onClick={handleStartOrder}>Start Over</Button>
    </LayoutWrapper>
  );
};

export default Page;
