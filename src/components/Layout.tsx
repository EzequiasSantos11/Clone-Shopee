import { GridLayout, Section } from "../styles/layoutStyles";
import { ReactNode, useMemo } from "react";
import { useRouter } from "next/router";
import { Aside } from "./Aside";
import { Header } from "./Header";

interface PropsLayout {
  children: ReactNode,
}

export function Layout({ children }: PropsLayout){
  const router = useRouter();
  const pagesWithoutLayout = useMemo(() => {
    return ['/', '/login', '/404', '/forgot-password', '/recovery-password'];
  }, []);
  return(
    <>
      {!pagesWithoutLayout.includes(router.pathname)?(
        <GridLayout>
          <Aside/>
          <Header/>
          <Section>{children}</Section>
        </GridLayout>
      ):(
        <Section>{children}</Section>
      )}
    </>
  )
}