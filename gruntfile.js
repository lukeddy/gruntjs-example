module.exports = function(grunt) {
	"use strict";
	
	grunt.initConfig({
		uglify: {
			dev: {
				files: {
					'build/test.min.js': ['src/test.js']
				},
				options: {
					banner: '/*\n' +
					' * Developing Javascript Module with GruntJS\n' +
					' * Author: OhByeongYun\n' +
					' * Copyright <%= grunt.template.today("yyyy") %> OhByeongYun.\n' +
					' *\n' +
					' * Compiled: <%= grunt.template.today("yyyy-mm-dd") %>.\n' +
					' */\n'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			dev: {
				//files: ['src/test.js', 'index.html', 'test/test.qunit.html'],
				//tasks: ['uglify:dev', 'qunit']
				files: ['src/test.js'],
				tasks: ['requirejs']
			}
		},
		requirejs: {
			compile: {
				options: {
					name: 'src/test',
					baseUrl: '.',
					mainConfigFile: 'src/test.js',
					out: 'build/test.js',
					optimize: 'none'
				}
			}
		},
		qunit: {
			files: ['test/test.qunit.html']
		},
		express: {
			dev: {
				options: {
					port: 9000,
					hostname: 'localhost',
					bases: [__dirname],
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-express');

	grunt.registerTask('dev', ['express:dev', 'watch:dev']);
};
