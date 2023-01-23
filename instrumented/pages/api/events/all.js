function cov_fmldnhf83() {
  var path = "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\pages\\api\\events\\all.js";
  var hash = "8b62f9230ee44f835fec3e95251d5d23b9f34181";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\pages\\api\\events\\all.js",
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
          column: 21
        },
        end: {
          line: 6,
          column: 72
        }
      },
      "2": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 48
        }
      },
      "3": {
        start: {
          line: 7,
          column: 36
        },
        end: {
          line: 7,
          column: 46
        }
      },
      "4": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 13,
          column: 5
        }
      },
      "5": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 88
        }
      },
      "6": {
        start: {
          line: 12,
          column: 72
        },
        end: {
          line: 12,
          column: 83
        }
      }
    },
    fnMap: {
      "0": {
        name: "getAllEvents",
        decl: {
          start: {
            line: 5,
            column: 22
          },
          end: {
            line: 5,
            column: 34
          }
        },
        loc: {
          start: {
            line: 5,
            column: 37
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 29
          },
          end: {
            line: 7,
            column: 30
          }
        },
        loc: {
          start: {
            line: 7,
            column: 36
          },
          end: {
            line: 7,
            column: 46
          }
        },
        line: 7
      },
      "2": {
        name: "handler",
        decl: {
          start: {
            line: 10,
            column: 30
          },
          end: {
            line: 10,
            column: 37
          }
        },
        loc: {
          start: {
            line: 10,
            column: 48
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 10
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 12,
            column: 55
          },
          end: {
            line: 12,
            column: 56
          }
        },
        loc: {
          start: {
            line: 12,
            column: 70
          },
          end: {
            line: 12,
            column: 85
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        }],
        line: 11
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
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8b62f9230ee44f835fec3e95251d5d23b9f34181"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_fmldnhf83 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_fmldnhf83();
import { firestoreApp } from '../../../database';
import { getFirestore } from 'firebase-admin/firestore';
const Firestore_Database = (cov_fmldnhf83().s[0]++, getFirestore(firestoreApp));
export async function getAllEvents() {
  cov_fmldnhf83().f[0]++;
  const snapshot = (cov_fmldnhf83().s[1]++, await Firestore_Database.collection('events').get());
  cov_fmldnhf83().s[2]++;
  return snapshot.docs.map(doc => {
    cov_fmldnhf83().f[1]++;
    cov_fmldnhf83().s[3]++;
    return doc.data();
  });
}
export default async function handler(req, res) {
  cov_fmldnhf83().f[2]++;
  cov_fmldnhf83().s[4]++;
  if (req.method === 'GET') {
    cov_fmldnhf83().b[0][0]++;
    cov_fmldnhf83().s[5]++;
    res.status(200).json(await getAllEvents().then(function (data) {
      cov_fmldnhf83().f[3]++;
      cov_fmldnhf83().s[6]++;
      return data;
    }));
  } else {
    cov_fmldnhf83().b[0][1]++;
  }
}

// Event (id: int)
// -> title: (string)
// -> location: (map)
//  -> type: (string)
//  -> data: (string)
// -> date: (map)
//  -> weekday: (string)
//  -> day: (string)
//  -> month: (string)
//  -> year: (string)
//  -> time: (map)
//   -> start: (string)
//   -> end: (string)
//   -> timezone: (string)
// -> description: (string)
// -> calendar: (map) 
//  -> link: (hyperlink: string))
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmaXJlc3RvcmVBcHAiLCJnZXRGaXJlc3RvcmUiLCJGaXJlc3RvcmVfRGF0YWJhc2UiLCJnZXRBbGxFdmVudHMiLCJzbmFwc2hvdCIsImNvbGxlY3Rpb24iLCJnZXQiLCJkb2NzIiwibWFwIiwiZG9jIiwiZGF0YSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwidGhlbiJdLCJzb3VyY2VzIjpbImFsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaXJlc3RvcmVBcHAgIH0gZnJvbSAnLi4vLi4vLi4vZGF0YWJhc2UnO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tICdmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmUnO1xyXG5jb25zdCBGaXJlc3RvcmVfRGF0YWJhc2UgPSBnZXRGaXJlc3RvcmUoZmlyZXN0b3JlQXBwKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxFdmVudHMoKSB7XHJcbiAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IEZpcmVzdG9yZV9EYXRhYmFzZS5jb2xsZWN0aW9uKCdldmVudHMnKS5nZXQoKTtcclxuICAgIHJldHVybiBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4gZG9jLmRhdGEoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGF3YWl0IGdldEFsbEV2ZW50cygpLnRoZW4oZnVuY3Rpb24oZGF0YSkgeyByZXR1cm4gZGF0YSB9KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEV2ZW50IChpZDogaW50KVxyXG4vLyAtPiB0aXRsZTogKHN0cmluZylcclxuLy8gLT4gbG9jYXRpb246IChtYXApXHJcbi8vICAtPiB0eXBlOiAoc3RyaW5nKVxyXG4vLyAgLT4gZGF0YTogKHN0cmluZylcclxuLy8gLT4gZGF0ZTogKG1hcClcclxuLy8gIC0+IHdlZWtkYXk6IChzdHJpbmcpXHJcbi8vICAtPiBkYXk6IChzdHJpbmcpXHJcbi8vICAtPiBtb250aDogKHN0cmluZylcclxuLy8gIC0+IHllYXI6IChzdHJpbmcpXHJcbi8vICAtPiB0aW1lOiAobWFwKVxyXG4vLyAgIC0+IHN0YXJ0OiAoc3RyaW5nKVxyXG4vLyAgIC0+IGVuZDogKHN0cmluZylcclxuLy8gICAtPiB0aW1lem9uZTogKHN0cmluZylcclxuLy8gLT4gZGVzY3JpcHRpb246IChzdHJpbmcpXHJcbi8vIC0+IGNhbGVuZGFyOiAobWFwKSBcclxuLy8gIC0+IGxpbms6IChoeXBlcmxpbms6IHN0cmluZykpXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7QUFBQTtBQUFBO0FBZlosU0FBU0EsWUFBWSxRQUFTLG1CQUFtQjtBQUNqRCxTQUFTQyxZQUFZLFFBQVEsMEJBQTBCO0FBQ3ZELE1BQU1DLGtCQUFrQiw0QkFBR0QsWUFBWSxDQUFDRCxZQUFZLENBQUM7QUFFckQsT0FBTyxlQUFlRyxZQUFZLEdBQUc7RUFBQTtFQUNqQyxNQUFNQyxRQUFRLDRCQUFHLE1BQU1GLGtCQUFrQixDQUFDRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUNDLEdBQUcsRUFBRTtFQUFDO0VBQ3JFLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxHQUFHLENBQUNDLEdBQUcsSUFBSTtJQUFBO0lBQUE7SUFBQSxPQUFBQSxHQUFHLENBQUNDLElBQUksRUFBRTtFQUFELENBQUMsQ0FBQztBQUMvQztBQUVBLGVBQWUsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtFQUFBO0VBQUE7RUFDNUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO0lBQUE7SUFBQTtJQUN0QkQsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxNQUFNYixZQUFZLEVBQUUsQ0FBQ2MsSUFBSSxDQUFDLFVBQVNQLElBQUksRUFBRTtNQUFBO01BQUE7TUFBRSxPQUFPQSxJQUFJO0lBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbkYsQ0FBQztJQUFBO0VBQUE7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIn0=