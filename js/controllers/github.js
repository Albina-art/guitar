window.controller = window.controller || {}
controller.github = (repo) => {
  show(HAML.github({repo}))
}
