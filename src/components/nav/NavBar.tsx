import { GetL1Categories } from "@/lib/services/CategoryService";
import { Button } from "../ui/button";
import { Suspense } from "react";

const SkeletonNavBar = () => {
  return <>Loading...</>;
};

const NavBarWithCategories = async () => {
  const categories = await GetL1Categories();

  return (
    <div className="hidden md:flex items-center gap-6">
      {categories.map((category) => (
        <Button key={category.path} variant="link" asChild>
          <a href={category.path}>{category.categoryName}</a>
        </Button>
      ))}
    </div>
  );
};

const NavBar = async () => {
  return (
    <Suspense fallback={<SkeletonNavBar />}>
      <NavBarWithCategories />
    </Suspense>
  );
};

export { NavBar };
