import React, { PureComponent } from "react";
import { hot } from "react-hot-loader/root";
import MainPage from "./pages/MainPage/MainPage";
import { initGA, logPageView } from "./utils/analytic";
import ReactGA from "react-ga";

const DEFAULT_CONFIG = {
  trackingId: "UA-38394408-15",
  debug: true,
  gaOptions: {
    siteSpeedSampleRate: 100,
    allowAnchor: false
  }
};

class App extends PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      reactGaInitialised: false,
      configs: [DEFAULT_CONFIG]
    };
  }

  componentDidMount() {
    initGA();
    logPageView();
    // ReactGA.initialize(this.state.configs, { standardImplementation: true });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <>
        <MainPage />
      </>
    );
  }
}

export default hot(App);
