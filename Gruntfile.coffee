module.exports = (grunt) ->
  grunt.initConfig
    babel:
      options:
        sourceMap: true
        presets: ['es2015']
      dist:
        files:
          'app/js/app.js': 'temp/es/app.js'
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
        src: ["temp/templates.js", 'vendor/*.js', 'js/declare.js', 'js/include/*.js', 'js/controllers/*.js', 'js/init.js']
        dest: 'temp/es/app.js'
    watch:
      options:
        liverload: true
      haml:
        files: ['haml/[^~]*.haml'],
        tasks: ['haml'],
          # liverload: true
        # liverload: true
      concat:
        files: ['temp/templates.js', 'vendor/*.js', 'js/declare.js', 'js/include/*.js', 'js/controllers/*.js', 'js/init.js']
        tasks: ['concat'],
        # options:
          # atBegin: true
          # liverload: true
      babel:
        files: 'temp/es/app.js'
        tasks: 'babel'
        options:
          atBegin: true
          liverload: true
    concurrent:
      options:
        limit: 20
        logConcurrentOutput: true
      cwatch: [
        'watch:haml',
        'watch:concat',
        'watch:babel',
      ]


  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-ng-annotate'
  grunt.loadNpmTasks 'grunt-haml'
  grunt.loadNpmTasks 'grunt-concurrent'
  grunt.loadNpmTasks 'grunt-babel'

  grunt.registerTask 'default', ['haml','concat','babel','concurrent:cwatch']
  return
