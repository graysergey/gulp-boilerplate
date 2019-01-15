const browserSync = require(`browser-sync`);

class Server {
  constructor() {
    this._server = browserSync.create();
  }

  init(done) {
    this._server.init({
      server: `./dist`,
      notify: false,
      open: true,
      port: 3000,
      ui: false,
      files: `dist/**/*`
    });
    done();
  }

  reload(done) {
    this._server.reload();
    done();
  }

  stream(opts) {
    this._server.stream(opts);
  }
}

module.exports = Server;
