

// 22 05 2023
// ЭТА ХУЙНЯ ТАК И НЕ РАБОТАЕТ

a1 = ["live", "strong", "arp"]
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
// const a1 = ["live", "xyz", "ve",];
// const a2 = ["lively", "alive", "harp",];
const Z1 = ["ect, or, omm, wh, oint"];
const Z2 = ["to,have,(mladen's,(since,have,perfect,is,a,Ruby,for,best,have,reference,browse,I,glad,you,should,somewhere).,I,what,your,here"];


function inArray(array1, array2) {
  let newArr1 = [], newArr2 = [];
  let restructArr1, restructArr2;

  newArr1 = array1
    .reduce((previous, current) => {
      const spliters = current.split(',');
      // console.log(spliters);
      return previous.concat(spliters);
    }, []);

  newArr2 = array2
    .reduce((previous, current) => {

      const spliters = current.split(',');

      // console.log(current);
      // console.log(spliters);

      return previous.concat(spliters);
    }, []);
  // debugger;
  restructArr1 = newArr1.map((item) => {
    return item.split('')
      .filter((item) => {
        return item !== ' ';
      });
  });
  restructArr2 = newArr2.map((item) => {
    return item.split('')
      .filter((item) => {
        return item !== ' ';
      });
  });


  console.log(newArr1);
  console.log(newArr2);
  console.log(restructArr1);
  console.log(restructArr2);
  const converterArray1 = restructArr1
    .reduce((previous1, current1) => {
      // console.log(current1);

      const converterArray2 = restructArr2
        .reduce((previous2, current2) => {
          const setupArray = [];
          // console.log(current1);

          const elemenetArray1 = current1
            .reduce((previous11, current11) => {

              const findArray2 = current2
                .find((item) => {
                  return item === current11;
                })


              if (findArray2) {
                return previous11.concat(current11)
              }
              else {
                return previous11;
              }
            }, '');

          if (elemenetArray1 === current1.join('')) {
            setupArray[0] = elemenetArray1;
          }

          return previous2.concat(setupArray);
        }, [])

      return previous1.concat(
        converterArray2
          .find((item) => {
            return item === current1.join('');
          })
      );
    }, [])

  const saveArray =
    converterArray1
      .filter((item) => {
        return item !== undefined;
      })

  // вывод данных
  return saveArray.sort();
}


// console.log(
//   inArray(a1, a2)
// );
console.log(
  inArray(Z1, Z2)
);

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// a1 = ["xyz", "live", "strong"]
// inArray(a1, a2), ["live", "strong"]
// a1 = ["live", "strong", "arp"]
// inArray(a1, a2), ["arp", "live", "strong"])
// a1 = ["tarp", "mice", "bull"]
// inArray(a1, a2), []