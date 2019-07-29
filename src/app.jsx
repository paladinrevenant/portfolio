import React           from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Backdrop        from "Components/Backdrop/Backdrop";
import SideDrawer      from "Components/SideDrawer/SideDrawer";
import SkillViewer     from "Components/SkillViewer/SkillViewer";
import TitleBar        from "Components/TitleBar/TitleBar";
import Welcome         from "Components/Welcome/Welcome";
import ViewportService from "Services/viewport";
import { VIEWS }       from "Source/constants";
import classes         from "./App.less";

class App extends React.Component {
  state = {
    desktopView:    false, // Should the site be displayed in Desktop view? False is the equivalent of Mobile view. Defaults to false.
    sideDrawerOpen: false  // Is the side-drawer visible? Defaults to false.
  }

  constructor(props) {
    super(props);

    // Bind all functions to this context
    this.updateView       = this.updateView.bind(this);
    this.sideDrawerClose  = this.sideDrawerClose.bind(this);
    this.sideDrawerToggle = this.sideDrawerToggle.bind(this);

    // Subscribe to updates from the viewport service
    ViewportService.subscribe(this.updateView);
  }

  render() {
    return (
      <Router>
        { this.starGradient }
        <TitleBar
          view={ this.state.desktopView ? VIEWS.DESKTOP : VIEWS.MOBILE }
          menuClickHandler={ this.sideDrawerToggle }
        />
        <Backdrop show={ this.state.sideDrawerOpen } clickHandler={ this.sideDrawerClose }/>
        <SideDrawer open={ this.state.sideDrawerOpen } drawerCloser={ this.sideDrawerClose } />
        <main className={ classes.content }>
          <Route path="/" exact component={ Welcome } />
          <Route path="/skills/" exact component={ SkillViewer } />
        </main>
      </Router>
    );
  }

  /**
   * Update the local state based on the viewport service
   */
  updateView() {
    if (ViewportService.isDesktop != this.state.desktopView){
      this.setState({ desktopView: ViewportService.isDesktop});
    }
  }

  // sideDrawerOpen() {
  //   this.setState({ sideDrawerOpen: true });
  // }

  /**
   * Close the side drawer
   */
  sideDrawerClose() {
    this.setState({ sideDrawerOpen: false });
  }

  /**
   * Toggle the side drawer between open and closed
   */
  sideDrawerToggle() {
    this.setState(currentState => {
      return {
        sideDrawerOpen: !currentState.sideDrawerOpen
      };
    });
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
}

export default App;