//This endpoint has been disabled for security reasons. As the code below stands, it would accept anyone's JSON and forward
//it directly to the database without any authentication or validation. Do not uncomment without implementing auth.

// import { firestoreApp  } from '../../../database';
// import { getFirestore } from 'firebase-admin/firestore';
// const Firestore_Database = getFirestore(firestoreApp);
// export default async function handler(req, res) {
//     if(req.method !== 'POST')
//     {
//       res.status(405).send({message: 'Only POST requests at this endpoint, please'})
//       return;
//     }
//     const newref = Firestore_Database.collection('applicants').doc(`${req.body.firstName}-${req.body.lastName}-${req.body.email}`.toLowerCase());
//     await newref.set(req.body);
//     res.status(200).send()
//   }
function cov_n3oq2uuhv() {
  var path = "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\pages\\api\\applicants\\submit.js";
  var hash = "ee544e37c3e52b687b63f890e02d86c2e1b1417d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\pages\\api\\applicants\\submit.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ee544e37c3e52b687b63f890e02d86c2e1b1417d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_n3oq2uuhv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_n3oq2uuhv();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsic3VibWl0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vVGhpcyBlbmRwb2ludCBoYXMgYmVlbiBkaXNhYmxlZCBmb3Igc2VjdXJpdHkgcmVhc29ucy4gQXMgdGhlIGNvZGUgYmVsb3cgc3RhbmRzLCBpdCB3b3VsZCBhY2NlcHQgYW55b25lJ3MgSlNPTiBhbmQgZm9yd2FyZFxyXG4vL2l0IGRpcmVjdGx5IHRvIHRoZSBkYXRhYmFzZSB3aXRob3V0IGFueSBhdXRoZW50aWNhdGlvbiBvciB2YWxpZGF0aW9uLiBEbyBub3QgdW5jb21tZW50IHdpdGhvdXQgaW1wbGVtZW50aW5nIGF1dGguXHJcblxyXG4vLyBpbXBvcnQgeyBmaXJlc3RvcmVBcHAgIH0gZnJvbSAnLi4vLi4vLi4vZGF0YWJhc2UnO1xyXG4vLyBpbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tICdmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmUnO1xyXG4vLyBjb25zdCBGaXJlc3RvcmVfRGF0YWJhc2UgPSBnZXRGaXJlc3RvcmUoZmlyZXN0b3JlQXBwKTtcclxuLy8gZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4vLyAgICAgaWYocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKVxyXG4vLyAgICAge1xyXG4vLyAgICAgICByZXMuc3RhdHVzKDQwNSkuc2VuZCh7bWVzc2FnZTogJ09ubHkgUE9TVCByZXF1ZXN0cyBhdCB0aGlzIGVuZHBvaW50LCBwbGVhc2UnfSlcclxuLy8gICAgICAgcmV0dXJuO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgY29uc3QgbmV3cmVmID0gRmlyZXN0b3JlX0RhdGFiYXNlLmNvbGxlY3Rpb24oJ2FwcGxpY2FudHMnKS5kb2MoYCR7cmVxLmJvZHkuZmlyc3ROYW1lfS0ke3JlcS5ib2R5Lmxhc3ROYW1lfS0ke3JlcS5ib2R5LmVtYWlsfWAudG9Mb3dlckNhc2UoKSk7XHJcbi8vICAgICBhd2FpdCBuZXdyZWYuc2V0KHJlcS5ib2R5KTtcclxuLy8gICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKClcclxuLy8gICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUE7RUFBQTtFQUFBO0lBQUE7RUFBQTtFQUFBO0VBQUE7SUFBWTtJQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7QUFBQTtBQUFBIn0=