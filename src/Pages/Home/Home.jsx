import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Content from "./Content";
// import TopPanels from "../../Components/Header/TopPanel";

function Home() {
  // const dispatch = useDispatch();
  // const { wai } = useSelector((state) => state.user);

  // useEffect(() => {
  //   (async () => {
  //     if (wai) {
  //       dispatch(showUserBio());
  //     }
  //   })();
  // }, [dispatch, wai]);

  return (
    <>
      {/* <TopPanels /> */}
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}

export default Home;
