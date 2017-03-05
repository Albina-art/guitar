module.exports = (grunt) ->
  grunt.initConfig
    uglify:
      dist:
        files: 'app/js/app.js': 'temp/es/app.js'
    cssmin:
      dist:
        expand: true,
        cwd: 'css/',
        src: ['*.css'],
        dest: 'app/css',
        ext: '.min.css'
    babel:
      options:
        sourceMap: true
        presets: ['es2015']
      dist:
        expand: true,
        cwd: 'js/',
        src: ['*.js'],
        dest: 'bable/',
        ext: '.js'
    haml:
      templates:
        options:
          target: 'js'
          language: 'coffee'
          precompile: true
        files:
          'temp/templates.js': ['haml/[^~]*.haml']
    concat:
      options:
        separator: ';'
      dev:
        src: ["temp/templates.js", 'vendor/*.js', 'bable/*.js', 'bable/controllers/*.js']
        dest: 'temp/es/app.js'
    watch:
      options:
        liverload: true
      uglify:
        files: ['temp/es/app.js']
        tasks: 'uglify',
      cssmin:
        files: ['css/*.css'],
        tasks: 'cssmin',
      haml:
        files: ['haml/[^~]*.haml'],
        tasks: 'haml',
      concat:
        files: ['temp/templates.js', 'vendor/*.js', 'js/declare.js', 'js/include/*.js', 'js/controllers/*.js', 'js/init.js','css/*.css']
        tasks: 'concat',
      babel:
        files: 'js/controllers/*.js'
        tasks: 'babel'
        options:
          atBegin: true
          liverload: true
    concurrent:
      options:
        limit: 20
        logConcurrentOutput: true
      cwatch: [
        'watch:cssmin'
        'watch:haml',
        'watch:babel',
        'watch:concat',
        'watch:uglify',
      ]


  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-haml'
  grunt.loadNpmTasks 'grunt-concurrent'
  grunt.loadNpmTasks 'grunt-babel'
  grunt.loadNpmTasks 'grunt-contrib-cssmin'

  grunt.registerTask 'default', ['cssmin','haml','babel','concat','uglify','concurrent:cwatch']
  return
