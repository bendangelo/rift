module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Exclude these files from the build
        // Example: ["random"]
        ignores: [],

        concat: {

            lib: {

                options: {
                    banner: '/*! <%= pkg.name %> V<%= pkg.version %> %> */\n',
                    linefeed: "\n",
                    footer: "}(this));",
                    process: true
                },

                src: [
                    'lib/header.js',
                    'lib/**/!(<%= ignores.concat("footer").join("|") %>).js',
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

        watch: {
            tests: {
                files: ["lib/**/*.js", "test/**/*_test.js"],
                tasks: ["test"]
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
        },

        dox: {
            options: {
                title: "Rift Documentation"
            },
            files: {
                src: ['lib/*.js'],
                dest: 'docs'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-dox');

    grunt.registerTask('test', ['concat:lib', 'mochaTest']);
    grunt.registerTask('build', ['concat:lib', 'uglify', 'dox']);

    grunt.registerTask('default', ['test', 'build']);

};