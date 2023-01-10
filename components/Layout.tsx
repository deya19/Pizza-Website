import Footer from "./Footer";
import Navbar from "./Navbar";

interface Data{
  children:React.ReactNode;
}

const Layout:React.FC<Data> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
