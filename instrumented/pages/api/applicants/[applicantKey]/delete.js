function cov_wljhm0moo() {
  var path = "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\pages\\api\\applicants\\[applicantKey]\\delete.js";
  var hash = "3ab0800c140622d8fe8957b6c7d10a600b6f5dca";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\pages\\api\\applicants\\[applicantKey]\\delete.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 27
        },
        end: {
          line: 3,
          column: 53
        }
      },
      "1": {
        start: {
          line: 6,
          column: 25
        },
        end: {
          line: 6,
          column: 30
        }
      },
      "2": {
        start: {
          line: 7,
          column: 17
        },
        end: {
          line: 7,
          column: 104
        }
      },
      "3": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "4": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 17
        }
      },
      "5": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 93
        }
      },
      "6": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 14
        }
      }
    },
    fnMap: {
      "0": {
        name: "deleteApplicant",
        decl: {
          start: {
            line: 5,
            column: 22
          },
          end: {
            line: 5,
            column: 37
          }
        },
        loc: {
          start: {
            line: 5,
            column: 45
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        }, {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        }],
        line: 8
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3ab0800c140622d8fe8957b6c7d10a600b6f5dca"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_wljhm0moo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_wljhm0moo();
import { firestoreApp } from '../../../../database';
import { getFirestore } from 'firebase-admin/firestore';
const Firestore_Database = (cov_wljhm0moo().s[0]++, getFirestore(firestoreApp));
export async function deleteApplicant(query) {
  cov_wljhm0moo().f[0]++;
  const {
    applicantKey
  } = (cov_wljhm0moo().s[1]++, query);
  const docref = (cov_wljhm0moo().s[2]++, await Firestore_Database.collection('applicants').doc(applicantKey.toLowerCase()).get());
  cov_wljhm0moo().s[3]++;
  if (docref.data() == undefined) {
    cov_wljhm0moo().b[0][0]++;
    cov_wljhm0moo().s[4]++;
    return false;
  } else {
    cov_wljhm0moo().b[0][1]++;
  }
  cov_wljhm0moo().s[5]++;
  await Firestore_Database.collection('applicants').doc(applicantKey.toLowerCase()).delete();
  cov_wljhm0moo().s[6]++;
  return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmaXJlc3RvcmVBcHAiLCJnZXRGaXJlc3RvcmUiLCJGaXJlc3RvcmVfRGF0YWJhc2UiLCJkZWxldGVBcHBsaWNhbnQiLCJxdWVyeSIsImFwcGxpY2FudEtleSIsImRvY3JlZiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ0b0xvd2VyQ2FzZSIsImdldCIsImRhdGEiLCJ1bmRlZmluZWQiLCJkZWxldGUiXSwic291cmNlcyI6WyJkZWxldGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlyZXN0b3JlQXBwIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGF0YWJhc2UnO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tICdmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmUnO1xyXG5jb25zdCBGaXJlc3RvcmVfRGF0YWJhc2UgPSBnZXRGaXJlc3RvcmUoZmlyZXN0b3JlQXBwKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVBcHBsaWNhbnQocXVlcnkpIHtcclxuICBjb25zdCB7YXBwbGljYW50S2V5fSA9IHF1ZXJ5XHJcbiAgY29uc3QgZG9jcmVmID0gYXdhaXQgRmlyZXN0b3JlX0RhdGFiYXNlLmNvbGxlY3Rpb24oJ2FwcGxpY2FudHMnKS5kb2MoYXBwbGljYW50S2V5LnRvTG93ZXJDYXNlKCkpLmdldCgpO1xyXG4gIGlmKGRvY3JlZi5kYXRhKCkgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGF3YWl0IEZpcmVzdG9yZV9EYXRhYmFzZS5jb2xsZWN0aW9uKCdhcHBsaWNhbnRzJykuZG9jKGFwcGxpY2FudEtleS50b0xvd2VyQ2FzZSgpKS5kZWxldGUoKTtcclxuICByZXR1cm4gdHJ1ZTtcclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7QUFBQTtBQUFBO0FBZlosU0FBU0EsWUFBWSxRQUFRLHNCQUFzQjtBQUNuRCxTQUFTQyxZQUFZLFFBQVEsMEJBQTBCO0FBQ3ZELE1BQU1DLGtCQUFrQiw0QkFBR0QsWUFBWSxDQUFDRCxZQUFZLENBQUM7QUFFckQsT0FBTyxlQUFlRyxlQUFlLENBQUNDLEtBQUssRUFBRTtFQUFBO0VBQzNDLE1BQU07SUFBQ0M7RUFBWSxDQUFDLDRCQUFHRCxLQUFLO0VBQzVCLE1BQU1FLE1BQU0sNEJBQUcsTUFBTUosa0JBQWtCLENBQUNLLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsR0FBRyxDQUFDSCxZQUFZLENBQUNJLFdBQVcsRUFBRSxDQUFDLENBQUNDLEdBQUcsRUFBRTtFQUFDO0VBQ3ZHLElBQUdKLE1BQU0sQ0FBQ0ssSUFBSSxFQUFFLElBQUlDLFNBQVMsRUFBRTtJQUFBO0lBQUE7SUFDN0IsT0FBTyxLQUFLO0VBQ2QsQ0FBQztJQUFBO0VBQUE7RUFBQTtFQUNELE1BQU1WLGtCQUFrQixDQUFDSyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUNDLEdBQUcsQ0FBQ0gsWUFBWSxDQUFDSSxXQUFXLEVBQUUsQ0FBQyxDQUFDSSxNQUFNLEVBQUU7RUFBQztFQUMzRixPQUFPLElBQUk7QUFDYiJ9