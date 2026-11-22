// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-the-homepage-is-finally-under-construction",
          title: 'The homepage is finally under construction.',
          description: "",
          section: "News",},{id: "projects-eptools",
          title: 'EPTools',
          description: "A Python toolkit for extracting X-ray light curves and fitting spectra from Einstein Probe and Swift-XRT observations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eptools/";
            },},{id: "projects-gcn-parser",
          title: 'GCN Parser',
          description: "A language-model tool that extracts coordinates, redshifts, and photometry from NASA GCN Circulars and assembles light-curve tables.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gcn-parser/";
            },},{id: "projects-kn-classifier",
          title: 'KN Classifier',
          description: "A temporal convolutional network for identifying kilonova candidates from light curves, tested on simulated observations from the Wide Field Survey Telescope.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kn-classifier/";
            },},{id: "projects-small-rotation",
          title: 'Small Rotation',
          description: "A Python backtest of a 20-day momentum strategy that rotates between the CSI 100, the ChiNext Index, and cash.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/small-rotation/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%69%61%6E%67%72%64@%62%61%6F.%61%63.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/LAujust", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-6223-840X", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
