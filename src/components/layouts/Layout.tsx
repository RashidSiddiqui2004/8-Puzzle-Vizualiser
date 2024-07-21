import Footer from "../footer/Footer";
import AppName from "../header/appname";

const Layout = ({ children }: { children: any }) => {
    return (
        <div>
            <AppName />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
