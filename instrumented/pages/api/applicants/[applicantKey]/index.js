function cov_2dr2cu9d1l() {
  var path = "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\pages\\api\\applicants\\[applicantKey]\\index.js";
  var hash = "3dfccf56ae320b1c3f2a4b76e4975de454e2d7f8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\pages\\api\\applicants\\[applicantKey]\\index.js",
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
          column: 2
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "2": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 81
        }
      },
      "3": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 11
        }
      },
      "4": {
        start: {
          line: 11,
          column: 14
        },
        end: {
          line: 11,
          column: 23
        }
      },
      "5": {
        start: {
          line: 12,
          column: 25
        },
        end: {
          line: 12,
          column: 30
        }
      },
      "6": {
        start: {
          line: 13,
          column: 17
        },
        end: {
          line: 13,
          column: 104
        }
      },
      "7": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 20,
          column: 3
        }
      },
      "8": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 82
        }
      },
      "9": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 39
        }
      }
    },
    fnMap: {
      "0": {
        name: "handler",
        decl: {
          start: {
            line: 5,
            column: 30
          },
          end: {
            line: 5,
            column: 37
          }
        },
        loc: {
          start: {
            line: 5,
            column: 48
          },
          end: {
            line: 21,
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
            line: 6,
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
            line: 6,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        }, {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        }],
        line: 6
      },
      "1": {
        loc: {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        }, {
          start: {
            line: 14,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        }],
        line: 14
      }
    },
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
      "9": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3dfccf56ae320b1c3f2a4b76e4975de454e2d7f8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2dr2cu9d1l = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2dr2cu9d1l();
import { firestoreApp } from '../../../../database';
import { getFirestore } from 'firebase-admin/firestore';
const Firestore_Database = (cov_2dr2cu9d1l().s[0]++, getFirestore(firestoreApp));
export default async function handler(req, res) {
  cov_2dr2cu9d1l().f[0]++;
  cov_2dr2cu9d1l().s[1]++;
  if (req.method !== 'GET') {
    cov_2dr2cu9d1l().b[0][0]++;
    cov_2dr2cu9d1l().s[2]++;
    res.status(405).send({
      message: 'Only GET requests at this endpoint, please'
    });
    cov_2dr2cu9d1l().s[3]++;
    return;
  } else {
    cov_2dr2cu9d1l().b[0][1]++;
  }
  var query = (cov_2dr2cu9d1l().s[4]++, req.query);
  const {
    applicantKey
  } = (cov_2dr2cu9d1l().s[5]++, query);
  const docref = (cov_2dr2cu9d1l().s[6]++, await Firestore_Database.collection('applicants').doc(applicantKey.toLowerCase()).get());
  cov_2dr2cu9d1l().s[7]++;
  if (docref.data() == undefined) {
    cov_2dr2cu9d1l().b[1][0]++;
    cov_2dr2cu9d1l().s[8]++;
    res.status(404).send({
      message: 'Applicant with this key could not be found.'
    });
  } else {
    cov_2dr2cu9d1l().b[1][1]++;
    cov_2dr2cu9d1l().s[9]++;
    res.status(200).json(docref.data());
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmaXJlc3RvcmVBcHAiLCJnZXRGaXJlc3RvcmUiLCJGaXJlc3RvcmVfRGF0YWJhc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJxdWVyeSIsImFwcGxpY2FudEtleSIsImRvY3JlZiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ0b0xvd2VyQ2FzZSIsImdldCIsImRhdGEiLCJ1bmRlZmluZWQiLCJqc29uIl0sInNvdXJjZXMiOlsiaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlyZXN0b3JlQXBwIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGF0YWJhc2UnO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tICdmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmUnO1xyXG5jb25zdCBGaXJlc3RvcmVfRGF0YWJhc2UgPSBnZXRGaXJlc3RvcmUoZmlyZXN0b3JlQXBwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZihyZXEubWV0aG9kICE9PSAnR0VUJylcclxuICB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuc2VuZCh7bWVzc2FnZTogJ09ubHkgR0VUIHJlcXVlc3RzIGF0IHRoaXMgZW5kcG9pbnQsIHBsZWFzZSd9KVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB2YXIgcXVlcnkgPSByZXEucXVlcnlcclxuICBjb25zdCB7YXBwbGljYW50S2V5fSA9IHF1ZXJ5XHJcbiAgY29uc3QgZG9jcmVmID0gYXdhaXQgRmlyZXN0b3JlX0RhdGFiYXNlLmNvbGxlY3Rpb24oJ2FwcGxpY2FudHMnKS5kb2MoYXBwbGljYW50S2V5LnRvTG93ZXJDYXNlKCkpLmdldCgpO1xyXG4gIGlmKGRvY3JlZi5kYXRhKCkgPT0gdW5kZWZpbmVkKVxyXG4gIHtcclxuICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHttZXNzYWdlOiAnQXBwbGljYW50IHdpdGggdGhpcyBrZXkgY291bGQgbm90IGJlIGZvdW5kLid9KVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oZG9jcmVmLmRhdGEoKSlcclxuICB9XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixTQUFTQSxZQUFZLFFBQVEsc0JBQXNCO0FBQ25ELFNBQVNDLFlBQVksUUFBUSwwQkFBMEI7QUFDdkQsTUFBTUMsa0JBQWtCLDZCQUFHRCxZQUFZLENBQUNELFlBQVksQ0FBQztBQUVyRCxlQUFlLGVBQWVHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFBQTtFQUFBO0VBQzlDLElBQUdELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFDdkI7SUFBQTtJQUFBO0lBQ0VELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7TUFBQ0MsT0FBTyxFQUFFO0lBQTRDLENBQUMsQ0FBQztJQUFBO0lBQzdFO0VBQ0YsQ0FBQztJQUFBO0VBQUE7RUFDRCxJQUFJQyxLQUFLLDZCQUFHTixHQUFHLENBQUNNLEtBQUs7RUFDckIsTUFBTTtJQUFDQztFQUFZLENBQUMsNkJBQUdELEtBQUs7RUFDNUIsTUFBTUUsTUFBTSw2QkFBRyxNQUFNVixrQkFBa0IsQ0FBQ1csVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDQyxHQUFHLENBQUNILFlBQVksQ0FBQ0ksV0FBVyxFQUFFLENBQUMsQ0FBQ0MsR0FBRyxFQUFFO0VBQUM7RUFDdkcsSUFBR0osTUFBTSxDQUFDSyxJQUFJLEVBQUUsSUFBSUMsU0FBUyxFQUM3QjtJQUFBO0lBQUE7SUFDRWIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztNQUFDQyxPQUFPLEVBQUU7SUFBNkMsQ0FBQyxDQUFDO0VBQ2hGLENBQUMsTUFDRztJQUFBO0lBQUE7SUFDRkosR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNZLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxJQUFJLEVBQUUsQ0FBQztFQUNyQztBQUNGIn0=