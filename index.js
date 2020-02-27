const { RawSource } = require('webpack-sources');

exports.WebpackRemovePlugin = class WebpackRemovePlugin {
    constructor(opts, ext) {
        this.opts = opts;
        this.ext = ext;
    }

    apply(compiler) {
        compiler.plugin('emit', (comp, callback) => {
            let assets = comp.assets;
            let keys = Object.keys(assets);
            
            keys.forEach((key) => {
                if (this.ext.includes(key.substr(key.lastIndexOf('.')))) {
                    let asset = assets[key];
                    let content = asset.source();
                    let start;
                    while ((start = content.indexOf(this.opts.start)) !== -1) {
                        const pos = content.indexOf(this.opts.end);
                        if (pos !== -1) {
                            content = content.slice(0, start) + content.slice(pos + this.opts.end.length);
                        }
                        else {
                            start = -1;
                        }
                    }
                    assets[key] = new RawSource(content);
                }
            })
            callback();
        })
    }
};
