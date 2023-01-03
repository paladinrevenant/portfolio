import React           from "react";
import TitleBar        from "Components/TitleBar/TitleBar";
import TitleBarDesktop from "Components/TitleBarDesktop/TitleBarDesktop";
import SideDrawer      from "Components/SideDrawer/SideDrawer";
import classes         from "./Layout.less";

const Layout = (props) =>  {
    const titleBar = props.isDesktopView ? (
        <TitleBarDesktop />
    ) : (
        <TitleBar
            menuClickHandler={ props.toggleSideDrawer }
            drawerCloser={ props.closeSideDrawer }
        />
    );

    return (
    <div>
        { titleBar }
        <SideDrawer isOpen={ props.isSideDrawerOpen } drawerCloser={ props.closeSideDrawer } />
        <main className={ classes.content }>
            { props.children }
        </main>
    </div>
    );
};

export default Layout;