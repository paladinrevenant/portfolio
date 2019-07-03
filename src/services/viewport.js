/**
 * This service tracks the viewport size and allows the rest of the site to
 * render based on the viewport. This avoids having a bunch of hidden elements
 * in the DOM that don't need to be there.
 * 
 * Almost everything in this class is static to avoid scoping issues. I should
 * probably look into refactoring the whole thing at some point.
 * 
 * Viewport Sizes
 * 
 * If using three sizes
 * Mobile  <  640px
 * Tablet  >= 640px && < 1024px
 * Desktop >= 1024px
 * 
 * If using 2 sizes
 * Mobile  <  640px
 * Desktop >= 640px
 */
class ViewportService {
  static desktopMatcher = window.matchMedia("(min-width: 640px)");
  static isMobile    = true;  // True if the viewport matches the rules for Mobile. Defaults to true, so if matching doesn't work, the user will be served the mobile page
  static isdesktop   = false; // True if the viewport matches the rules for Desktop.
  static subscribers = [];    // List of subscribed update functions.

  /**
   * Registers the listener function and updates the boolan
   */
  constructor() {
    ViewportService.desktopMatcher.addListener(ViewportService.matcherListener);
    ViewportService.updateViewport();
  }

  /**
   * Executed whenever the viewport crosses the threshold for the matcher
   * In most cases this will not ever be called.
   */
  static matcherListener() {
    ViewportService.updateViewport();
    ViewportService.publish();
  }

  /**
   * Updates the static booleans
   */
  static updateViewport() {
    ViewportService.isDesktop =  ViewportService.desktopMatcher.matches;
    ViewportService.isMobile  = !ViewportService.desktopMatcher.matches;
  }

  /**
   * Accepts a callback function that will be called wnenever the viewport
   * changes past the threshold. These callback functions MUST be bound
   */
  static subscribe(callback) {
    ViewportService.subscribers.push({callback});
  }

  /**
   * Calls all of the subscribed callbacks
   */
  static publish() {
    ViewportService.subscribers.forEach(el => {el.callback();});
  }

  //TODO: Add unsubscribe functionality if needed.
}

export default ViewportService;
