module.exports = (on, config) => {
  on('@cypress/code-coverage/task')(on, config)
  return config
}
