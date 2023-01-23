function cov_10tfjyzdji() {
  var path = "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\themes\\theme.js";
  var hash = "72a7138e55608ca34ce32a6efdd22d0f55a2b3d1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\themes\\theme.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 14
        },
        end: {
          line: 27,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "72a7138e55608ca34ce32a6efdd22d0f55a2b3d1"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_10tfjyzdji = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_10tfjyzdji();
import { createTheme } from "@mui/material/styles";
import { blue, grey, red } from "@mui/material/colors";
const theme = (cov_10tfjyzdji().s[0]++, createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      alternate: grey[700]
    },
    secondary: {
      main: blue[500]
    },
    hashtags: {
      main: "#FF69B4"
    },
    button: {
      main: "#FFBB00",
      contrastText: "#FFF"
    },
    themeColor: {
      blue: "#46A8F6",
      green: "#34A853",
      red: "#EF5350",
      yellow: "#FBBC04"
    }
  }
}));
export default theme;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsImJsdWUiLCJncmV5IiwicmVkIiwidGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJhbHRlcm5hdGUiLCJzZWNvbmRhcnkiLCJoYXNodGFncyIsImJ1dHRvbiIsImNvbnRyYXN0VGV4dCIsInRoZW1lQ29sb3IiLCJncmVlbiIsInllbGxvdyJdLCJzb3VyY2VzIjpbInRoZW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XHJcbmltcG9ydCB7IGJsdWUsIGdyZXksIHJlZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiO1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiBcIiNGRkZGRkZcIixcclxuICAgICAgYWx0ZXJuYXRlOiBncmV5WzcwMF0sXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46IGJsdWVbNTAwXSxcclxuICAgIH0sXHJcbiAgICBoYXNodGFnczoge1xyXG4gICAgICBtYWluOiBcIiNGRjY5QjRcIixcclxuICAgIH0sXHJcbiAgICBidXR0b246IHtcclxuICAgICAgbWFpbjogXCIjRkZCQjAwXCIsXHJcbiAgICAgIGNvbnRyYXN0VGV4dDogXCIjRkZGXCJcclxuICAgIH0sXHJcbiAgICB0aGVtZUNvbG9yOiB7XHJcbiAgICAgIGJsdWU6IFwiIzQ2QThGNlwiLFxyXG4gICAgICBncmVlbjogXCIjMzRBODUzXCIsXHJcbiAgICAgIHJlZDogXCIjRUY1MzUwXCIsXHJcbiAgICAgIHllbGxvdzogXCIjRkJCQzA0XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7QUFBQTtBQUFBO0FBZlosU0FBU0EsV0FBVyxRQUFRLHNCQUFzQjtBQUNsRCxTQUFTQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsR0FBRyxRQUFRLHNCQUFzQjtBQUV0RCxNQUFNQyxLQUFLLDZCQUFHSixXQUFXLENBQUM7RUFDeEJLLE9BQU8sRUFBRTtJQUNQQyxPQUFPLEVBQUU7TUFDUEMsSUFBSSxFQUFFLFNBQVM7TUFDZkMsU0FBUyxFQUFFTixJQUFJLENBQUMsR0FBRztJQUNyQixDQUFDO0lBQ0RPLFNBQVMsRUFBRTtNQUNURixJQUFJLEVBQUVOLElBQUksQ0FBQyxHQUFHO0lBQ2hCLENBQUM7SUFDRFMsUUFBUSxFQUFFO01BQ1JILElBQUksRUFBRTtJQUNSLENBQUM7SUFDREksTUFBTSxFQUFFO01BQ05KLElBQUksRUFBRSxTQUFTO01BQ2ZLLFlBQVksRUFBRTtJQUNoQixDQUFDO0lBQ0RDLFVBQVUsRUFBRTtNQUNWWixJQUFJLEVBQUUsU0FBUztNQUNmYSxLQUFLLEVBQUUsU0FBUztNQUNoQlgsR0FBRyxFQUFFLFNBQVM7TUFDZFksTUFBTSxFQUFFO0lBQ1Y7RUFDRjtBQUNGLENBQUMsQ0FBQztBQUVGLGVBQWVYLEtBQUsifQ==