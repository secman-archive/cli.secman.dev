export const imgs_secman = "https://assets.secman.dev";

export const URLS = {
  gh: "https://github.com",

  secman_gh_api: "https://api.github.com/repos/secman-team/secman",

  secman_org: "",

  secman_repo: "",

  secman_site_repo: "",

  sm_scoop_repo: "",

  docs: {
    main: "https://docs.secman.dev",
    installation: "",
    cryptography: "",
    commands: "",
    sm_upg: "",
  },

  news: "https://secman.dev/blog",

  dl_secman: {
    main: "https://secman.dev/download",
    cli: "",
    ins: "",
  },

  changelog: "https://changelog.secman.dev",

  team: "https://secman.dev/team",

  twitter: "https://twitter.com/SecmanDev",

  discord: "https://discord.gg/YQpgQ3cYHb",

  github_relases_page: "",

  building_from_source: "",

  // logos
  icon: `/icon.svg`,

  logo: `${imgs_secman}/apps/secman-cli.svg`,

  homebrew_tap: "",

  cli_site: "https://cli.secman.dev",

  sys_statuses: "https://status.secman.dev",

  demo: "https://demo.secman.dev",

  go_website: "https://golang.org",

  docker_org: "https://hub.docker.com/u/smcr",
};

URLS.secman_org = `${URLS.gh}/secman-team`;
URLS.secman_repo = `${URLS.secman_org}/secman`;
URLS.secman_site_repo = `${URLS.secman_org}/secman.dev`;

URLS.docs.sm_upg = `${URLS.docs.main}/Secman/sm-upg`;
URLS.docs.cryptography = `${URLS.docs.main}/cryptography`;
URLS.docs.commands = `${URLS.docs.main}/commands`;

URLS.docs.installation = `${URLS.docs.main}/getting_started/installation`;
URLS.building_from_source = `${URLS.docs.main}/Secman/building_from_source`;

URLS.dl_secman.cli = `${URLS.dl_secman.main}/cli`;
URLS.dl_secman.ins = `${URLS.dl_secman.main}/installers`;

URLS.github_relases_page = `${URLS.secman_repo}/releases/latest`;

URLS.homebrew_tap = `${URLS.secman_org}/homebrew-smx`;
URLS.sm_scoop_repo = `${URLS.secman_org}/sm-scoop`;
