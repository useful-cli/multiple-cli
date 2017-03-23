var path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`);
var src = 'src';
var dist = 'dist/assets/';
var srcAssets = 'src/assets';
var distAssets = 'dist/assets';
var distView = 'dist/view';

const defaults = {
  src: src,
  dist: dist,
  del: {
    dist: 'dist/'
  },
  scripts: {
    src: 'src/assets/js/*.js',
    ignore: '!src/assets/js/lib/*.js',
    libjs: ['src/assets/js/lib/*.js', 'src/assets/js/lib/**/*.js'],
    distignore: 'dist/assets/js/lib',
    dist: 'dist/assets/js'
  },
  html: {
    index: 'src/*.html',
    src: 'src/view/*.html',
    dist: 'dist/',
    view: 'dist/view'
  },
  less: {
    src: ['src/assets/less/main.less'],
    ignore: '!src/assets/less/extend/{reset,test}.less',
    dist: 'dist/assets/css'
  },
  css: {
    libsrc: ['src/assets/css/*.css', 'src/assets/css/*.*.css']
  },
  images: {
    src: ['src/assets/images/**/*', 'src/assets/images/*.*'],
    dist: 'dist/assets/images/'
  },
  browsersync: {
    server: {
      baseDir: ['dist']
    },
    port: 9999,
    files: [
      srcAssets + '/css/*.css',
      srcAssets + '/js/*.js',
      srcAssets + '/images/**',
      srcAssets + '/fonts/*'
    ]
  },
  copyfonts: {
    src:  srcAssets + '/fonts/*',
    dest: distAssets + '/fonts'
  },
  watch: {
    cssstyles: srcAssets + '/css/*.css',
    lessstyles: [srcAssets + '/less/*.less', srcAssets + '/less/**/*.less'],
    scripts: srcAssets + '/js/**/*.js',
    libscripts: [srcAssets + '/js/lib/*.js', srcAssets + '/js/lib/**/*.js'],
    images: srcAssets + '/images/**/*',
    indexhtml: 'src/*.html',
    viewhtml: 'src/view/*.html',
    temlhtml: 'src/template/*.html',
    disthtml: ['dist/*.html', 'dist/view/*.html'],
    sprites: srcAssets + '/images/**/*.png',
    svg: 'vectors/*.svg',
    disthtml: ['dist/view/*.html','dist/*.html', 'dist/template/*.html']
  },
  include: {
    src: ['src/view/*.html'],
    dist: distView
  },
  rsync: {
    src: '/**',
    options: {
      destination: '~/path/to/my/website/root/',
      hostname: 'mydomain.com',
      username: 'user',
      incremental: true,
      progress: true,
      relative: true,
      emptyDirectories: true,
      recursive: true,
      clean: true,
      exclude: ['.DS_Store'],
      include: []
    }
  }
};

module.exports = Object.assign(defaults, config);
