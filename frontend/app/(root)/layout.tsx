import { ReactNode } from "react";
import Header from "@/components/Header";
//import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { after } from "next/server";
import Footer from "@/components/Footer";
//import { db } from "@/database/drizzle";
//import { users } from "@/database/schema";
//import { eq } from "drizzle-orm";

const Layout = async ({ children }: { children: ReactNode }) => {
  //const session = await auth();

//   if (!session) redirect("/sign-in");

//   after(async () => {
//     if (!session?.user?.id) return;

//     const user = await db
//       .select()
//       .from(users)
//       .where(eq(users.id, session?.user?.id))
//       .limit(1);

//     if (user[0].lastActivityDate === new Date().toISOString().slice(0, 10))
//       return;

//     await db
//       .update(users)
//       .set({ lastActivityDate: new Date().toISOString().slice(0, 10) })
//       .where(eq(users.id, session?.user?.id));
//   });

  return (
    <main className="root-container">
      <div>
        <Header/>
        <div className="mt-40 pb-20">{children}</div>
        <Footer/>
      </div>
    </main>
  );
};

export default Layout;