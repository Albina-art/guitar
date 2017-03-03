module.exports = (grunt) ->
  grunt.initConfig
    uglify:
      dist:
        files:
          'app/js/app.min.js': ['temp/es/app.js']
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
        files:
          'app/js/app.js': 'app/js/app.min.js'
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
        files: 'temp/es/app.js'
        tasks: ['uglify', 'babel']
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
        'watch:concat',
        'uglify',
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
  grunt.loadNpmTasks 'grunt-contrib-cssmin'

  grunt.registerTask 'default', ['cssmin','haml','concat','uglify','babel']
  # ,'concurrent:cwatch']
  return
