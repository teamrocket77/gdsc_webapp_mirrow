function cov_298tctpgha() {
  var path = "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\pages\\api\\auth\\[...nextauth].js";
  var hash = "7121846b71a192f189401ce3b73cd959ab6bc4d0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\sanja\\Desktop\\Software\\Projects\\gdsc_webapp_mirrow\\src\\pages\\api\\auth\\[...nextauth].js",
    statementMap: {
      "0": {
        start: {
          line: 33,
          column: 12
        },
        end: {
          line: 33,
          column: 27
        }
      },
      "1": {
        start: {
          line: 40,
          column: 12
        },
        end: {
          line: 40,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 32,
            column: 17
          },
          end: {
            line: 32,
            column: 18
          }
        },
        loc: {
          start: {
            line: 32,
            column: 44
          },
          end: {
            line: 34,
            column: 9
          }
        },
        line: 32
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 39,
            column: 18
          },
          end: {
            line: 39,
            column: 19
          }
        },
        loc: {
          start: {
            line: 39,
            column: 32
          },
          end: {
            line: 41,
            column: 9
          }
        },
        line: 39
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7121846b71a192f189401ce3b73cd959ab6bc4d0"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_298tctpgha = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_298tctpgha();
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// import { FirestoreAdapter } from '@next-auth/firebase-adapter';

// Configure Authentication Provider.
export default NextAuth({
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_PROVIDER_CLIENT_ID,
    clientSecret: process.env.GOOGLE_PROVIDER_CLIENT_SECRET,
    authorization: process.env.GOOGLE_PROVIDER_AUTHORIZATION_URL
  })],
  adapter: null,
  // adapter: FirestoreAdapter({
  //     apiKey: process.env.FIREBASE_USER_ACCOUNT_API_KEY,
  //     authDomain: process.env.FIREBASE_USER_ACCOUNT_AUTH_DOMAIN,
  //     databaseURL: process.env.FIREBASE_USER_ACCOUNT_DATABASE_URL,
  //     projectId: process.env.FIREBASE_USER_ACCOUNT_PROJECT_ID,
  //     storageBucket: process.env.FIREBASE_USER_ACCOUNT_STORAGE_BUCKET,
  //     messagingSenderId: process.env.FIREBASE_USER_ACCOUNT_MESSAGING_SENDER_ID,
  //     appId: process.env.FIREBASE_USER_ACCOUNT_APP_ID,
  //     measurementId: process.env.FIREBASE_USER_ACCOUNT_MEASUREMENT_ID
  // }),
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    encryption: true
  },
  callbacks: {
    // Returns session token when callback is invoked.
    session: async ({
      session,
      token
    }) => {
      cov_298tctpgha().f[0]++;
      cov_298tctpgha().s[0]++;
      return session;
    },
    // Manage redirect based on whether or not the user is logged in.
    // Also known as a protected routes. If the user is not logged in,
    // redirect (resolve) to the site's landing page ('/').
    redirect: async url => {
      cov_298tctpgha().f[1]++;
      cov_298tctpgha().s[1]++;
      return Promise.resolve('/');
    }
  },
  pages: {
    //error: '/auth/error'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX1BST1ZJREVSX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9QUk9WSURFUl9DTElFTlRfU0VDUkVUIiwiYXV0aG9yaXphdGlvbiIsIkdPT0dMRV9QUk9WSURFUl9BVVRIT1JJWkFUSU9OX1VSTCIsImFkYXB0ZXIiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJqd3QiLCJlbmNyeXB0aW9uIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwicmVkaXJlY3QiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInBhZ2VzIl0sInNvdXJjZXMiOlsiWy4uLm5leHRhdXRoXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJztcclxuLy8gaW1wb3J0IHsgRmlyZXN0b3JlQWRhcHRlciB9IGZyb20gJ0BuZXh0LWF1dGgvZmlyZWJhc2UtYWRhcHRlcic7XHJcblxyXG4vLyBDb25maWd1cmUgQXV0aGVudGljYXRpb24gUHJvdmlkZXIuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9QUk9WSURFUl9DTElFTlRfSUQsXHJcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1BST1ZJREVSX0NMSUVOVF9TRUNSRVQsXHJcbiAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHByb2Nlc3MuZW52LkdPT0dMRV9QUk9WSURFUl9BVVRIT1JJWkFUSU9OX1VSTFxyXG4gICAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIGFkYXB0ZXI6IG51bGwsXHJcbiAgICAvLyBhZGFwdGVyOiBGaXJlc3RvcmVBZGFwdGVyKHtcclxuICAgIC8vICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1VTRVJfQUNDT1VOVF9BUElfS0VZLFxyXG4gICAgLy8gICAgIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX1VTRVJfQUNDT1VOVF9BVVRIX0RPTUFJTixcclxuICAgIC8vICAgICBkYXRhYmFzZVVSTDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfVVNFUl9BQ0NPVU5UX0RBVEFCQVNFX1VSTCxcclxuICAgIC8vICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1VTRVJfQUNDT1VOVF9QUk9KRUNUX0lELFxyXG4gICAgLy8gICAgIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1VTRVJfQUNDT1VOVF9TVE9SQUdFX0JVQ0tFVCxcclxuICAgIC8vICAgICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfVVNFUl9BQ0NPVU5UX01FU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgICAvLyAgICAgYXBwSWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1VTRVJfQUNDT1VOVF9BUFBfSUQsXHJcbiAgICAvLyAgICAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfVVNFUl9BQ0NPVU5UX01FQVNVUkVNRU5UX0lEXHJcbiAgICAvLyB9KSxcclxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG4gICAgand0OiB7XHJcbiAgICAgICAgZW5jcnlwdGlvbjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFJldHVybnMgc2Vzc2lvbiB0b2tlbiB3aGVuIGNhbGxiYWNrIGlzIGludm9rZWQuXHJcbiAgICAgICAgc2Vzc2lvbjogYXN5bmMoe3Nlc3Npb24sIHRva2VufSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBNYW5hZ2UgcmVkaXJlY3QgYmFzZWQgb24gd2hldGhlciBvciBub3QgdGhlIHVzZXIgaXMgbG9nZ2VkIGluLlxyXG4gICAgICAgIC8vIEFsc28ga25vd24gYXMgYSBwcm90ZWN0ZWQgcm91dGVzLiBJZiB0aGUgdXNlciBpcyBub3QgbG9nZ2VkIGluLFxyXG4gICAgICAgIC8vIHJlZGlyZWN0IChyZXNvbHZlKSB0byB0aGUgc2l0ZSdzIGxhbmRpbmcgcGFnZSAoJy8nKS5cclxuICAgICAgICByZWRpcmVjdDogYXN5bmModXJsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoJy8nKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGFnZXM6IHtcclxuICAgICAgICAvL2Vycm9yOiAnL2F1dGgvZXJyb3InXHJcbiAgICB9XHJcbn0pIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixPQUFPQSxRQUFRLE1BQU0sV0FBVztBQUNoQyxPQUFPQyxjQUFjLE1BQU0sNEJBQTRCO0FBQ3ZEOztBQUVBO0FBQ0EsZUFBZUQsUUFBUSxDQUFDO0VBQ3BCRSxTQUFTLEVBQUUsQ0FDUEQsY0FBYyxDQUFDO0lBQ1hFLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLHlCQUF5QjtJQUMvQ0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csNkJBQTZCO0lBQ3ZEQyxhQUFhLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSztFQUMvQixDQUFDLENBQUMsQ0FDTDtFQUNEQyxPQUFPLEVBQUUsSUFBSTtFQUNiO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0FDLE1BQU0sRUFBRVIsT0FBTyxDQUFDQyxHQUFHLENBQUNRLGVBQWU7RUFDbkNDLEdBQUcsRUFBRTtJQUNEQyxVQUFVLEVBQUU7RUFDaEIsQ0FBQztFQUNEQyxTQUFTLEVBQUU7SUFFUDtJQUNBQyxPQUFPLEVBQUUsT0FBTTtNQUFDQSxPQUFPO01BQUVDO0lBQUssQ0FBQyxLQUFLO01BQUE7TUFBQTtNQUNoQyxPQUFPRCxPQUFPO0lBQ2xCLENBQUM7SUFFRDtJQUNBO0lBQ0E7SUFDQUUsUUFBUSxFQUFFLE1BQU1DLEdBQUcsSUFBSztNQUFBO01BQUE7TUFDcEIsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQy9CO0VBQ0osQ0FBQztFQUNEQyxLQUFLLEVBQUU7SUFDSDtFQUFBO0FBRVIsQ0FBQyxDQUFDIn0=