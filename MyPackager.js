const { Packager } = require('parcel-bundler')

class MyPackager extends Packager {
  async start() {
    // optional. write file header if needed.
    await this.dest.write(header)
  }

  async addAsset(asset) {
    // required. write the asset to the output file.
    await this.dest.write(asset.generated.foo)
  }

  async end() {
    // optional. write file trailer if needed.
    await this.dest.end(trailer)
  }
}

module.exports = MyPackager