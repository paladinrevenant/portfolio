import React           from "react";
import {
    BrowserRouter,
    Routes,
    Route } from "react-router-dom";
import About           from "Components/About/About";
import Backdrop        from "Components/Backdrop/Backdrop";
import Layout          from "Components/Layout/Layout";
import SideDrawer      from "Components/SideDrawer/SideDrawer";
import SkillViewer     from "Components/SkillViewer/SkillViewer";
import TitleBar        from "Components/TitleBar/TitleBar";
import TitleBarDesktop from "Components/TitleBarDesktop/TitleBarDesktop";
import Welcome         from "Components/Welcome/Welcome";
import ViewportService from "Services/viewport";
import classes         from "./App.less";

class App extends React.Component {
    state = {
        isDesktopView:     false, // Should the site be displayed in Desktop view? False is the equivalent of Mobile view. Defaults to false.
        isSideDrawerOpen:  false, // Is the side-drawer visible? Defaults to false.
        isBackdropVisible: false    // Should the backdrop component show? Defaults to false.
    }

    constructor(props) {
        super(props);

        // Bind all functions to this context
        this.updateView       = this.updateView.bind(this);
        this.closeSideDrawer  = this.closeSideDrawer.bind(this);
        this.toggleSideDrawer = this.toggleSideDrawer.bind(this);
        this.showBackdrop     = this.showBackdrop.bind(this);
        this.hideBackdrop     = this.hideBackdrop.bind(this);

        // Subscribe to updates from the viewport service
        ViewportService.subscribe(this.updateView);
    }

    render() {
        const titleBar = this.state.isDesktopView ? (
            <TitleBarDesktop />
        ) : (
            <TitleBar
                menuClickHandler={ this.toggleSideDrawer }
                drawerCloser={ this.closeSideDrawer }
            />
        );

        return (
        <div>
            { this.starGradient }
            <Backdrop show={ this.state.isSideDrawerOpen } clickHandler={ this.closeSideDrawer }/>
            <main className={ classes.content }>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <Layout
                                isDesktopView={ this.state.isDesktopView }
                                showBackdrop={ this.showBackdrop }
                                hideBackdrop={ this.hideBackdrop }
                                isSideDrawerOpen={ this.state.isSideDrawerOpen }
                                toggleSideDrawer={ this.toggleSideDrawer }
                                closeSideDrawer={ this.closeSideDrawer }
                            >
                                <Welcome />
                            </Layout>
                        } />
                        <Route path="/skills/" element={
                            <Layout
                                isDesktopView={ this.state.isDesktopView }
                                showBackdrop={ this.showBackdrop }
                                hideBackdrop={ this.hideBackdrop }
                                isSideDrawerOpen={ this.state.isSideDrawerOpen }
                                toggleSideDrawer={ this.toggleSideDrawer }
                                closeSideDrawer={ this.closeSideDrawer }
                            >
                                <SkillViewer />
                            </Layout>
                        } />
                        <Route path="/me/" element={
                            <Layout
                                isDesktopView={ this.state.isDesktopView }
                                showBackdrop={ this.showBackdrop }
                                hideBackdrop={ this.hideBackdrop }
                                isSideDrawerOpen={ this.state.isSideDrawerOpen }
                                toggleSideDrawer={ this.toggleSideDrawer }
                                closeSideDrawer={ this.closeSideDrawer }
                            >
                                <About />
                        </Layout>
                    } />
                    </Routes>
                </BrowserRouter>
            </main>
        </div>
        );
    }

    /**
     * Update the local state based on the viewport service
     */
    updateView() {
        if (ViewportService.isDesktop != this.state.isDesktopView){
            this.setState({ isDesktopView: ViewportService.isDesktop});
        }
    }

    /**
     * Close the side drawer
     */
    closeSideDrawer() {
        this.setState({ isSideDrawerOpen: false });
    }

    /**
     * Toggle the side drawer between open and closed
     */
    toggleSideDrawer() {
        this.setState(currentState => {
            return {
                isSideDrawerOpen: !currentState.isSideDrawerOpen
            };
        });
    }

    /**
     * Update the state to cause the backdrop component to show
     */
    showBackdrop() {
        this.setState({ isBackdropVisible: true });
    }
    
    /**
     * Update the state to cause the backdrop component to be hidden
     */
    hideBackdrop() {
        this.setState({ isBackdropVisible: false });
    }

    starGradient = (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className={classes.svgSettings}>
        <defs>
            <linearGradient id="starGradient" x1="0%" y1="100%" x2="65%" y2="0%">
                <stop className={classes.starGradientStop0} offset="0%"></stop>
                <stop className={classes.starGradientStop1} offset="60%"></stop>
                <stop className={classes.starGradientStop2} offset="100%"></stop>
            </linearGradient>
        </defs>
        </svg>
    );

    componentDidMount() {
        this.updateView();
    }
}

export default App;