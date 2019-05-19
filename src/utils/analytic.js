import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize({
    trackingId: "UA-38394408-15",
    debug: true,
    gaOptions: {
      siteSpeedSampleRate: 100,
      allowAnchor: false,
      userId: "USER_ID"
    }
  });
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.set({ dataSource: "web" });
  ReactGA.set({ referrer: document.referrer });
  ReactGA.set({
    screenResolution: `${window.screen.width}x${window.screen.height}`
  });
  ReactGA.set({
    viewportSize: `${window.innerWidth}x${window.innerHeight}`
  });
  ReactGA.set({ userId: "USER_ID" });
  ReactGA.pageview(window.location.pathname);
  ReactGA.send("pageview");
};

export const logEvent = data => {
  ReactGA.event(data);
};
