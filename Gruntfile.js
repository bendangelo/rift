
module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                linefeed: "\n",
                process: "true"
            },

          all: {
            src: [
                'src/header.js',
                'src/<%= pkg.name %>.js',
                'src/**/!(footer).js',
                'src/footer.js'
                ],
            dest: '<%= pkg.name %>.js'
          }

        },

        uglify: {

            build: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            }

        },

        mocha: {

          all:{
            options: {
              run: true,
              ignoreLeaks: false
            },

            src: [ 'test/test.html' ]
          }

        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('build', ['concat:all', 'uglify']);

    grunt.registerTask('default', ['mocha', 'build']);

};