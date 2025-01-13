"use server";
import { executeGql } from "@/lib/api";
import { graphql } from "@/lib/graphql/graphql";
import { defaultSession, SessionData } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { Button } from "../ui/button";

// const SkeletonNavBar = () => {
//   return <>Loading...</>;
// };

const CategoriesQuery = graphql(`
  query GetL1Categories {
    categories {
      id
      categoryName
      path
    }
  }
`);

async function getIronSessionData(): Promise<SessionData> {
  const session = await getIronSession<SessionData>(await cookies(), {
    password: process.env.IRON_PASSWORD as string,
    cookieName: process.env.IRON_NAME as string,
  });
  return session ?? defaultSession;
}
const NavBarWithCategories = async () => {
  const session = await getIronSessionData();

  const categoriesQuery = await executeGql(CategoriesQuery, {}, session);

  return (
    <div className="hidden md:flex items-center gap-6">
      {categoriesQuery.data.categories.map((category) => (
        <Button key={category.path} variant="link" asChild>
          <a href={category.path}>{category.categoryName}</a>
        </Button>
      ))}
    </div>
  );
};

const NavBar = async () => {
  return <NavBarWithCategories />;
};

export { NavBar };
