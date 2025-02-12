import { Stack } from "@mui/material";
import Head from "next/head";
import Top from "../Top";
import HeaderFilter from "../homepage/HeaderFilter";
import Footer from "../Footer";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nest</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack id={"top"}>
            <Top />
          </Stack>
          <Stack className="header-main">
            <Stack className="container">
              <HeaderFilter />
            </Stack>
          </Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack id={"footer"}>
            <Footer />
          </Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutMain;
