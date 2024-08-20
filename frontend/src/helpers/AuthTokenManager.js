const AuthTokenManager = {
  set: (t) => {
      try {
          if (!window.localStorage) {
              throw new Error("Incompatible function");
          }

          const tokenFragment = t.split(".");
          if (tokenFragment.length !== 3) {
              throw new Error("Incompatible string token");
          }

          const trinity = {
              father: tokenFragment[0],
              child: tokenFragment[1],
              creator: tokenFragment[2],
          };
          let counter = 0;
          for (const [key, value] of Object.entries(trinity)) {
            localStorage.setItem(key, reverseString(value ));
          }

          for (const [key] of Object.entries(trinity)) {
              if (localStorage.getItem(key) !== null) {
                  counter++;
              }
          }

          return counter === Object.keys(trinity).length;
      } catch (_) {
          console.log(_);
          return false;
      }
  },
  get: () => {
      try {
          if (!window.localStorage) {
              throw new Error("Incompatible function");
          }

          const trinity = {
              father: "",
              child: "",
              creator: "",
          };

          let tmp = {};
          for (const [key, value] of Object.entries(trinity)) {
              if (value) {
              }
              const val = localStorage.getItem(key);
              if (val !== null) {
                  tmp[key] = reverseString(val.toString());
              }
          }

          tmp = tmp;
          if (tmp.father !== undefined && tmp.child !== undefined && tmp.creator !== undefined) {
              return `${tmp.father}.${tmp.child}.${tmp.creator}`;

          }
          return ""
      } catch (_) {
          return "";
      }
  },
  setRefreshKey: (t) => {
      try {
          if (!window.localStorage) {
              throw new Error("Incompatible function");
          }

          const tokenFragment = t.split(".");
          if (tokenFragment.length !== 3) {
              throw new Error("Incompatible string token");
          }

          const trinity = {
              girl: tokenFragment[0],
              pint: tokenFragment[1],
              mary: tokenFragment[2],
          };
          let counter = 0;
          for (const [key, value] of Object.entries(trinity)) {
            localStorage.setItem(key, reverseString(value));
          }

          for (const [key] of Object.entries(trinity)) {
              if (localStorage.getItem(key) !== null) {
                  counter++;
              }
          }

          return counter === Object.keys(trinity).length;
      } catch (_) {
          console.log(_);
          return false;
      }
  },
  getRefreshKey: () => {
      try {
          if (!window.localStorage) {
              throw new Error("Incompatible function");
          }

          const trinity = {
              girl: "",
              pint: "",
              mary: "",
          };

          let tmp = {};
          for (const [key, value] of Object.entries(trinity)) {
              if (value) {
              }
              const val = localStorage.getItem(key);
              if (val !== null) {
                  tmp[key] = reverseString(val.toString());
              }
          }

          tmp = tmp;
          if (tmp.girl !== undefined && tmp.pint !== undefined && tmp.mary !== undefined) {
              return `${tmp.girl}.${tmp.pint}.${tmp.mary}`;

          }
          return ""
      } catch (_) {
          return "";
      }
  },
  removeToken: () => {
      localStorage.clear()
  },
};

export const reverseString = (str) => {
  var separarCadena = str.split("");
  var invertirArreglo = separarCadena.reverse();
  var unirArreglo = invertirArreglo.join("");
  return unirArreglo;
};

export default AuthTokenManager;

