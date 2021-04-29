export const core = "https://secman.vercel.app";

export const Routes = {
  secmanSite: "https://secman.vercel.app",
  secmanOrg: "https://github.com/secman-team",
  secmanRepo: "https://github.com/secman-team/secman",
  statusSite: "https://secman.checklyhq.com",
  logoURL: "https://imgs-secman.web.app/logo.png",
  smURL: "https://imgs-secman.web.app/sm.png",
  gsmURL: "https://imgs-secman.web.app/glitsh_sm.png",
};

export const URLS = {
  gh: "https://github.com",

  docker: {
    main: "/docker",
    hub: "https://hub.docker.com/r/smcr/secman",
    gh_packages: "https://github.com/secman-team/secman-docker/packages/733282",
    ghcr: "https://ghcr.io/secman-team/secman",
  },

  secman_org: "",

  secman_repo: "",

  sm_scoop_repo: "",

  docs: {
    main: `${core}/docs`,
    sm_sync: "",
    cryptography: "",
    commands: "",
  },

  posts: `${core}/posts`,

  cli: `${core}/cli`,

  changelog: "https://secman-chlog.web.app",

  team: `${core}/team`,

  contact: `${core}/contact`,

  getting_started: {
    main: `${core}/getting_started`,
  },

  installation: {
    main: `${core}/installation`,
  },

  discord: "https://discord.gg/secman",

  features: {
    id: `${core}/#features`,
  },

  deps_site: "/",

  sys_statuses: "https://secman.checklyhq.com",
};

URLS.secman_org = `${URLS.gh}/secman-team`;
URLS.secman_repo = `${URLS.secman_org}/secman`;
URLS.docs.sm_sync = `${URLS.docs.main}/secman-sync`;
URLS.docs.cryptography = `${URLS.docs.main}/cryptography`;
URLS.docs.commands = `${URLS.docs.main}/commands`;
URLS.sm_scoop_repo = `${URLS.secman_org}/sm-scoop`;
