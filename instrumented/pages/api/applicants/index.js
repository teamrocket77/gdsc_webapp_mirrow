function cov_2ag0v0bjye() {
  var path = "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\pages\\api\\applicants\\index.js";
  var hash = "7ec7a611093429c571de64609f2e07420538bc49";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\pages\\api\\applicants\\index.js",
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
          column: 4
        },
        end: {
          line: 10,
          column: 5
        }
      },
      "2": {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 8,
          column: 83
        }
      },
      "3": {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 9,
          column: 13
        }
      },
      "4": {
        start: {
          line: 11,
          column: 21
        },
        end: {
          line: 11,
          column: 76
        }
      },
      "5": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 79
        }
      },
      "6": {
        start: {
          line: 12,
          column: 65
        },
        end: {
          line: 12,
          column: 75
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
            line: 13,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 58
          },
          end: {
            line: 12,
            column: 59
          }
        },
        loc: {
          start: {
            line: 12,
            column: 65
          },
          end: {
            line: 12,
            column: 75
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 10,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 10,
            column: 5
          }
        }, {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 10,
            column: 5
          }
        }],
        line: 6
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
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7ec7a611093429c571de64609f2e07420538bc49"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ag0v0bjye = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2ag0v0bjye();
import { firestoreApp } from '../../../database';
import { getFirestore } from 'firebase-admin/firestore';
const Firestore_Database = (cov_2ag0v0bjye().s[0]++, getFirestore(firestoreApp));
export default async function handler(req, res) {
  cov_2ag0v0bjye().f[0]++;
  cov_2ag0v0bjye().s[1]++;
  if (req.method !== 'GET') {
    cov_2ag0v0bjye().b[0][0]++;
    cov_2ag0v0bjye().s[2]++;
    res.status(405).send({
      message: 'Only GET requests at this endpoint, please'
    });
    cov_2ag0v0bjye().s[3]++;
    return;
  } else {
    cov_2ag0v0bjye().b[0][1]++;
  }
  const snapshot = (cov_2ag0v0bjye().s[4]++, await Firestore_Database.collection('applicants').get());
  cov_2ag0v0bjye().s[5]++;
  res.status(200).json(JSON.stringify(snapshot.docs.map(doc => {
    cov_2ag0v0bjye().f[1]++;
    cov_2ag0v0bjye().s[6]++;
    return doc.data();
  })));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmaXJlc3RvcmVBcHAiLCJnZXRGaXJlc3RvcmUiLCJGaXJlc3RvcmVfRGF0YWJhc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJzbmFwc2hvdCIsImNvbGxlY3Rpb24iLCJnZXQiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImRvY3MiLCJtYXAiLCJkb2MiLCJkYXRhIl0sInNvdXJjZXMiOlsiaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlyZXN0b3JlQXBwICB9IGZyb20gJy4uLy4uLy4uL2RhdGFiYXNlJztcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSAnZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlJztcclxuY29uc3QgRmlyZXN0b3JlX0RhdGFiYXNlID0gZ2V0RmlyZXN0b3JlKGZpcmVzdG9yZUFwcCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBpZihyZXEubWV0aG9kICE9PSAnR0VUJylcclxuICAgIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDUpLnNlbmQoe21lc3NhZ2U6ICdPbmx5IEdFVCByZXF1ZXN0cyBhdCB0aGlzIGVuZHBvaW50LCBwbGVhc2UnfSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBGaXJlc3RvcmVfRGF0YWJhc2UuY29sbGVjdGlvbignYXBwbGljYW50cycpLmdldCgpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oSlNPTi5zdHJpbmdpZnkoc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IGRvYy5kYXRhKCkpKSk7XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixTQUFTQSxZQUFZLFFBQVMsbUJBQW1CO0FBQ2pELFNBQVNDLFlBQVksUUFBUSwwQkFBMEI7QUFDdkQsTUFBTUMsa0JBQWtCLDZCQUFHRCxZQUFZLENBQUNELFlBQVksQ0FBQztBQUVyRCxlQUFlLGVBQWVHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFBQTtFQUFBO0VBQzVDLElBQUdELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFDdkI7SUFBQTtJQUFBO0lBQ0VELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7TUFBQ0MsT0FBTyxFQUFFO0lBQTRDLENBQUMsQ0FBQztJQUFBO0lBQzdFO0VBQ0YsQ0FBQztJQUFBO0VBQUE7RUFDRCxNQUFNQyxRQUFRLDZCQUFHLE1BQU1SLGtCQUFrQixDQUFDUyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUNDLEdBQUcsRUFBRTtFQUFDO0VBQ3pFUCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ00sSUFBSSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0wsUUFBUSxDQUFDTSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRyxJQUFJO0lBQUE7SUFBQTtJQUFBLE9BQUFBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO0VBQUQsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5RSJ9