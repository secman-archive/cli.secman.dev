export const core = "https://secman.dev";

export const imgs_secman = "https://assets.secman.dev";

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

  secman_site_repo: "",

  sm_scoop_repo: "",

  docs: {
    main: `${core}/docs`,
    cryptography: "",
    commands: "",
    sm_upg: "",
  },

  news: `${core}/blog`,

  get_secman: `${core}/get-secman`,

  changelog: "https://changelog.secman.dev",

  team: `${core}/team`,

  twitter: "https://twitter.com/SecmanDev",

  discord: "https://discord.gg/fR5EXyuy",

  github_relases_page: "",

  building_from_source: "",

  // logos
  icon: `${imgs_secman}/icon.svg`,

  logo: `${imgs_secman}/logo.svg`,

  logo_white: `${imgs_secman}/logo_white.svg`,

  homebrew_tap: "",

  deps_site: "/",

  sys_statuses: "https://status.secman.dev",
};

URLS.secman_org = `${URLS.gh}/secman-team`;
URLS.secman_repo = `${URLS.secman_org}/secman`;
URLS.secman_site_repo = `${URLS.secman_org}/secman.dev`;
URLS.docs.sm_upg = `${URLS.docs.main}/Secman/sm-upg`;
URLS.docs.cryptography = `${URLS.docs.main}/cryptography`;
URLS.docs.commands = `${URLS.docs.main}/commands/all`;
URLS.github_relases_page = `${URLS.secman_repo}/releases/latest`;
URLS.building_from_source = `${URLS.docs.main}/Secman/building_from_source`;
URLS.homebrew_tap = `${URLS.secman_org}/homebrew-smx`;
URLS.sm_scoop_repo = `${URLS.secman_org}/sm-scoop`;
