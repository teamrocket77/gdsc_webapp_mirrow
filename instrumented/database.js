function cov_1uea7ln0mj() {
  var path = "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\database.js";
  var hash = "599f79522e8b59a4e338278a7ad5134db47a447e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\database.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 26
        },
        end: {
          line: 10,
          column: 31
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 3,
            column: 26
          },
          end: {
            line: 10,
            column: 31
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 3,
            column: 46
          },
          end: {
            line: 10,
            column: 12
          }
        }, {
          start: {
            line: 10,
            column: 15
          },
          end: {
            line: 10,
            column: 31
          }
        }],
        line: 3
      },
      "1": {
        loc: {
          start: {
            line: 6,
            column: 16
          },
          end: {
            line: 6,
            column: 149
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 6,
            column: 67
          },
          end: {
            line: 6,
            column: 137
          }
        }, {
          start: {
            line: 6,
            column: 140
          },
          end: {
            line: 6,
            column: 149
          }
        }],
        line: 6
      }
    },
    s: {
      "0": 0
    },
    f: {},
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "599f79522e8b59a4e338278a7ad5134db47a447e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1uea7ln0mj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1uea7ln0mj();
import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app';
export let firestoreApp = (cov_1uea7ln0mj().s[0]++, !getApps().length ? (cov_1uea7ln0mj().b[0][0]++, initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_SERVICE_ACCOUNT_PROJECT_ID,
    privateKey: process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY ? (cov_1uea7ln0mj().b[1][0]++, process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n')) : (cov_1uea7ln0mj().b[1][1]++, undefined),
    clientEmail: process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL
  }),
  databaseURL: process.env.FIRESTORE_SERVICE_DATABASE_URL
}, "COMMON")) : (cov_1uea7ln0mj().b[0][1]++, getApp("COMMON")));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiY2VydCIsImdldEFwcHMiLCJnZXRBcHAiLCJmaXJlc3RvcmVBcHAiLCJsZW5ndGgiLCJjcmVkZW50aWFsIiwicHJvamVjdElkIiwicHJvY2VzcyIsImVudiIsIkZJUkVCQVNFX1NFUlZJQ0VfQUNDT1VOVF9QUk9KRUNUX0lEIiwicHJpdmF0ZUtleSIsIkZJUkVCQVNFX1NFUlZJQ0VfQUNDT1VOVF9QUklWQVRFX0tFWSIsInJlcGxhY2UiLCJ1bmRlZmluZWQiLCJjbGllbnRFbWFpbCIsIkZJUkVCQVNFX1NFUlZJQ0VfQUNDT1VOVF9DTElFTlRfRU1BSUwiLCJkYXRhYmFzZVVSTCIsIkZJUkVTVE9SRV9TRVJWSUNFX0RBVEFCQVNFX1VSTCJdLCJzb3VyY2VzIjpbImRhdGFiYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGNlcnQsIGdldEFwcHMsIGdldEFwcCB9IGZyb20gJ2ZpcmViYXNlLWFkbWluL2FwcCc7XHJcblxyXG5leHBvcnQgbGV0IGZpcmVzdG9yZUFwcCA9ICFnZXRBcHBzKCkubGVuZ3RoID8gaW5pdGlhbGl6ZUFwcCh7XHJcbiAgY3JlZGVudGlhbDogY2VydCh7XHJcbiAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1NFUlZJQ0VfQUNDT1VOVF9QUk9KRUNUX0lELFxyXG4gICAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfU0VSVklDRV9BQ0NPVU5UX1BSSVZBVEVfS0VZID8gcHJvY2Vzcy5lbnYuRklSRUJBU0VfU0VSVklDRV9BQ0NPVU5UX1BSSVZBVEVfS0VZLnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKSA6IHVuZGVmaW5lZCxcclxuICAgIGNsaWVudEVtYWlsOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9TRVJWSUNFX0FDQ09VTlRfQ0xJRU5UX0VNQUlMLFxyXG4gIH0pLFxyXG4gIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFU1RPUkVfU0VSVklDRV9EQVRBQkFTRV9VUkxcclxufSwgXCJDT01NT05cIikgOiBnZXRBcHAoXCJDT01NT05cIik7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7QUFBQTtBQUFBO0FBZlosU0FBU0EsYUFBYSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxRQUFRLG9CQUFvQjtBQUV6RSxPQUFPLElBQUlDLFlBQVksNkJBQUcsQ0FBQ0YsT0FBTyxFQUFFLENBQUNHLE1BQU0sZ0NBQUdMLGFBQWEsQ0FBQztFQUMxRE0sVUFBVSxFQUFFTCxJQUFJLENBQUM7SUFDZk0sU0FBUyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsbUNBQW1DO0lBQzFEQyxVQUFVLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxvQ0FBb0MsZ0NBQUdKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxvQ0FBb0MsQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsaUNBQUdDLFNBQVM7SUFDakpDLFdBQVcsRUFBRVAsT0FBTyxDQUFDQyxHQUFHLENBQUNPO0VBQzNCLENBQUMsQ0FBQztFQUNGQyxXQUFXLEVBQUVULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUztBQUMzQixDQUFDLEVBQUUsUUFBUSxDQUFDLGlDQUFHZixNQUFNLENBQUMsUUFBUSxDQUFDIn0=