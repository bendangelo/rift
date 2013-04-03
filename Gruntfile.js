module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        dox: {
            options: {
                title: "Rift Documentation"
            },
            files: {
                src: ['lib/*.js'],
                dest: 'docs'
            }
        },

        concat: {

            lib: {

                options: {
                    banner: '/*! <%= pkg.name %> V<%= pkg.version %> %> */\n',
                    linefeed: "\n",
                    process: "true"
                },

                src: [
                    'lib/header.js',
                    'lib/<%= pkg.name %>.js',
                    'lib/**/!(footer).js',
                    'lib/footer.js'],
                dest: '<%= pkg.name %>.js'
            },

            test: {
                src: [
                    'test/**/*_test.js'],
                dest: 'dest/tests.js'
            }

        },

        uglify: {

            build: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            }

        },

        mochaTest: {
            files: ['test/**/*_test.js']
        },

        mochaTestConfig: {
            options: {
                reporter: 'landing',
                ui: "qunit"
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-dox');

    grunt.registerTask('test', ['concat:lib', 'mochaTest']);
    grunt.registerTask('build', ['concat:lib', 'uglify', 'dox']);

    grunt.registerTask('default', ['test', 'build']);

};