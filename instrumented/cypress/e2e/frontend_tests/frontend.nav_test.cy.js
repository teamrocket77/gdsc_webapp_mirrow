function cov_1ngktc19u8() {
  var path = "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\cypress\\e2e\\frontend_tests\\frontend.nav_test.cy.js";
  var hash = "fc88d570e3ea7b37e1869ef9173b883b74f439fe";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\cypress\\e2e\\frontend_tests\\frontend.nav_test.cy.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 23,
          column: 2
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 22,
          column: 4
        }
      },
      "2": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 37
        }
      },
      "3": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 32
        }
      },
      "4": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 55
        }
      },
      "5": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 51
        }
      },
      "6": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 33
        }
      },
      "7": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 57
        }
      },
      "8": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 53
        }
      },
      "9": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 32
        }
      },
      "10": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 58
        }
      },
      "11": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 50
        }
      },
      "12": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 25
          },
          end: {
            line: 1,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1,
            column: 31
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 2,
            column: 15
          },
          end: {
            line: 2,
            column: 16
          }
        },
        loc: {
          start: {
            line: 2,
            column: 21
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 2
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fc88d570e3ea7b37e1869ef9173b883b74f439fe"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ngktc19u8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1ngktc19u8();
cov_1ngktc19u8().s[0]++;
describe('Nav Bar Test', () => {
  cov_1ngktc19u8().f[0]++;
  cov_1ngktc19u8().s[1]++;
  it('passes', () => {
    cov_1ngktc19u8().f[1]++;
    cov_1ngktc19u8().s[2]++;
    cy.visit('http://localhost:3000');
    cov_1ngktc19u8().s[3]++;
    cy.log('Visiting base page');
    cov_1ngktc19u8().s[4]++;
    cy.get('[data-cy = "nav-bar-option-About"').click();
    cov_1ngktc19u8().s[5]++;
    cy.location('pathname').should('eq', '/about');
    cov_1ngktc19u8().s[6]++;
    cy.log('Visiting about page');
    cov_1ngktc19u8().s[7]++;
    cy.get('[data-cy = "nav-bar-option-Socials"').click();
    cov_1ngktc19u8().s[8]++;
    cy.location('pathname').should('eq', '/socials');
    cov_1ngktc19u8().s[9]++;
    cy.log('Visiting base page');
    cov_1ngktc19u8().s[10]++;
    cy.get('[data-cy = "nav-bar-option-Our Team"').click();
    cov_1ngktc19u8().s[11]++;
    cy.location('pathname').should('eq', '/team');
    cov_1ngktc19u8().s[12]++;
    cy.log('Visiting team page');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiY3kiLCJ2aXNpdCIsImxvZyIsImdldCIsImNsaWNrIiwibG9jYXRpb24iLCJzaG91bGQiXSwic291cmNlcyI6WyJmcm9udGVuZC5uYXZfdGVzdC5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZSgnTmF2IEJhciBUZXN0JywgKCkgPT4ge1xyXG4gIGl0KCdwYXNzZXMnLCAoKSA9PiB7XHJcbiAgICBjeS52aXNpdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwJylcclxuICAgIGN5LmxvZygnVmlzaXRpbmcgYmFzZSBwYWdlJylcclxuXHJcbiAgICBjeS5nZXQoJ1tkYXRhLWN5ID0gXCJuYXYtYmFyLW9wdGlvbi1BYm91dFwiJykuY2xpY2soKVxyXG5cclxuICAgIGN5LmxvY2F0aW9uKCdwYXRobmFtZScpLnNob3VsZCgnZXEnLCAnL2Fib3V0Jyk7XHJcbiAgICBjeS5sb2coJ1Zpc2l0aW5nIGFib3V0IHBhZ2UnKVxyXG5cclxuICAgIGN5LmdldCgnW2RhdGEtY3kgPSBcIm5hdi1iYXItb3B0aW9uLVNvY2lhbHNcIicpLmNsaWNrKClcclxuXHJcbiAgICBjeS5sb2NhdGlvbigncGF0aG5hbWUnKS5zaG91bGQoJ2VxJywgJy9zb2NpYWxzJyk7XHJcbiAgICBjeS5sb2coJ1Zpc2l0aW5nIGJhc2UgcGFnZScpXHJcblxyXG5cclxuICAgIGN5LmdldCgnW2RhdGEtY3kgPSBcIm5hdi1iYXItb3B0aW9uLU91ciBUZWFtXCInKS5jbGljaygpXHJcblxyXG4gICAgY3kubG9jYXRpb24oJ3BhdGhuYW1lJykuc2hvdWxkKCdlcScsICcvdGVhbScpO1xyXG4gICAgY3kubG9nKCdWaXNpdGluZyB0ZWFtIHBhZ2UnKVxyXG5cclxuICB9KVxyXG59KVxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFmWkEsUUFBUSxDQUFDLGNBQWMsRUFBRSxNQUFNO0VBQUE7RUFBQTtFQUM3QkMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNO0lBQUE7SUFBQTtJQUNqQkMsRUFBRSxDQUFDQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7SUFBQTtJQUNqQ0QsRUFBRSxDQUFDRSxHQUFHLENBQUMsb0JBQW9CLENBQUM7SUFBQTtJQUU1QkYsRUFBRSxDQUFDRyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQ0MsS0FBSyxFQUFFO0lBQUE7SUFFbkRKLEVBQUUsQ0FBQ0ssUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQztJQUFDO0lBQy9DTixFQUFFLENBQUNFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztJQUFBO0lBRTdCRixFQUFFLENBQUNHLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDQyxLQUFLLEVBQUU7SUFBQTtJQUVyREosRUFBRSxDQUFDSyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUNDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDO0lBQUM7SUFDakROLEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0lBQUE7SUFHNUJGLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUNDLEtBQUssRUFBRTtJQUFBO0lBRXRESixFQUFFLENBQUNLLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7SUFBQztJQUM5Q04sRUFBRSxDQUFDRSxHQUFHLENBQUMsb0JBQW9CLENBQUM7RUFFOUIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDIn0=