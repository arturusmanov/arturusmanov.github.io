// файл vue.config.js расположен в корне вашего репозитория
// убедитесь, что обновили `yourProjectName` на имя вашего проекта GitLab

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/spa/'
    : '/'
}
