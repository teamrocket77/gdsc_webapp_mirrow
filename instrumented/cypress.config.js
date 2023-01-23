function cov_1jh0a8lqma() {
  var path = "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\cypress.config.js";
  var hash = "9f82142802eeda932fd7428ef673c8c025ce06e6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\cypress.config.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 25
        },
        end: {
          line: 15,
          column: 43
        }
      },
      "1": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 32,
          column: 2
        }
      },
      "2": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 56
        }
      },
      "3": {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 27,
          column: 76
        }
      },
      "4": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        loc: {
          start: {
            line: 21,
            column: 32
          },
          end: {
            line: 30,
            column: 5
          }
        },
        line: 21
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9f82142802eeda932fd7428ef673c8c025ce06e6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1jh0a8lqma = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1jh0a8lqma();
// import { defineConfig } from '@cypress/code-coverage'

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       require('@cypress/code-coverage/task')(on, config);
//       config.supportFile = false;
//       on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));
//       return config;
//     },
//   }
// })

const {
  defineConfig
} = (cov_1jh0a8lqma().s[0]++, require('cypress'));
cov_1jh0a8lqma().s[1]++;
module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      cov_1jh0a8lqma().f[0]++;
      cov_1jh0a8lqma().s[2]++;
      require('@cypress/code-coverage/task')(on, config);
      // tell Cypress to use .babelrc file
      // and instrument the specs files
      // only the extra application files will be instrumented
      // not the spec files themselves
      cov_1jh0a8lqma().s[3]++;
      on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));
      cov_1jh0a8lqma().s[4]++;
      return config;
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkZWZpbmVDb25maWciLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImUyZSIsInNldHVwTm9kZUV2ZW50cyIsIm9uIiwiY29uZmlnIl0sInNvdXJjZXMiOlsiY3lwcmVzcy5jb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAnQGN5cHJlc3MvY29kZS1jb3ZlcmFnZSdcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbi8vICAgZTJlOiB7XHJcbi8vICAgICBzZXR1cE5vZGVFdmVudHMob24sIGNvbmZpZykge1xyXG4vLyAgICAgICAvLyBpbXBsZW1lbnQgbm9kZSBldmVudCBsaXN0ZW5lcnMgaGVyZVxyXG4vLyAgICAgICByZXF1aXJlKCdAY3lwcmVzcy9jb2RlLWNvdmVyYWdlL3Rhc2snKShvbiwgY29uZmlnKTtcclxuLy8gICAgICAgY29uZmlnLnN1cHBvcnRGaWxlID0gZmFsc2U7XHJcbi8vICAgICAgIG9uKCdmaWxlOnByZXByb2Nlc3NvcicsIHJlcXVpcmUoJ0BjeXByZXNzL2NvZGUtY292ZXJhZ2UvdXNlLWJhYmVscmMnKSk7XHJcbi8vICAgICAgIHJldHVybiBjb25maWc7XHJcbi8vICAgICB9LFxyXG4vLyAgIH1cclxuLy8gfSlcclxuXHJcbmNvbnN0IHsgZGVmaW5lQ29uZmlnIH0gPSByZXF1aXJlKCdjeXByZXNzJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lQ29uZmlnKHtcclxuICAvLyBzZXR1cE5vZGVFdmVudHMgY2FuIGJlIGRlZmluZWQgaW4gZWl0aGVyXHJcbiAgLy8gdGhlIGUyZSBvciBjb21wb25lbnQgY29uZmlndXJhdGlvblxyXG4gIGUyZToge1xyXG4gICAgc2V0dXBOb2RlRXZlbnRzKG9uLCBjb25maWcpIHtcclxuICAgICAgcmVxdWlyZSgnQGN5cHJlc3MvY29kZS1jb3ZlcmFnZS90YXNrJykob24sIGNvbmZpZylcclxuICAgICAgLy8gdGVsbCBDeXByZXNzIHRvIHVzZSAuYmFiZWxyYyBmaWxlXHJcbiAgICAgIC8vIGFuZCBpbnN0cnVtZW50IHRoZSBzcGVjcyBmaWxlc1xyXG4gICAgICAvLyBvbmx5IHRoZSBleHRyYSBhcHBsaWNhdGlvbiBmaWxlcyB3aWxsIGJlIGluc3RydW1lbnRlZFxyXG4gICAgICAvLyBub3QgdGhlIHNwZWMgZmlsZXMgdGhlbXNlbHZlc1xyXG4gICAgICBvbignZmlsZTpwcmVwcm9jZXNzb3InLCByZXF1aXJlKCdAY3lwcmVzcy9jb2RlLWNvdmVyYWdlL3VzZS1iYWJlbHJjJykpXHJcblxyXG4gICAgICByZXR1cm4gY29uZmlnXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtFQUFFQTtBQUFhLENBQUMsNkJBQUdDLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFBQTtBQUUzQ0MsTUFBTSxDQUFDQyxPQUFPLEdBQUdILFlBQVksQ0FBQztFQUM1QjtFQUNBO0VBQ0FJLEdBQUcsRUFBRTtJQUNIQyxlQUFlLENBQUNDLEVBQUUsRUFBRUMsTUFBTSxFQUFFO01BQUE7TUFBQTtNQUMxQk4sT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUNLLEVBQUUsRUFBRUMsTUFBTSxDQUFDO01BQ2xEO01BQ0E7TUFDQTtNQUNBO01BQUE7TUFDQUQsRUFBRSxDQUFDLG1CQUFtQixFQUFFTCxPQUFPLENBQUMsb0NBQW9DLENBQUMsQ0FBQztNQUFBO01BRXRFLE9BQU9NLE1BQU07SUFDZjtFQUNGO0FBQ0YsQ0FBQyxDQUFDIn0=