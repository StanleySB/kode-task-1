const getObjectProperty = (obj, path, defaultValue) => {
  let pathArr = path.split('.');
  let result = '';

  const recursionFunc = (arr, prevRes = obj) => {
    let newArr = arr.slice();
    let value = prevRes[newArr.shift()];
    if (newArr.length) {
      recursionFunc(newArr, value);
    } else {
      result = value;
    }
  };
  recursionFunc(pathArr);

  if (result === undefined) {
    return defaultValue;
  }
  return result;
};

const obj = {
  pupa: {
    lupa: {
      beep: 'boop',
    },
    foo: 'bar',
  },
};

console.log(
  getObjectProperty(obj, 'pupa.lupa'),
  getObjectProperty(obj, 'pupa.lupa.beep'),
  getObjectProperty(obj, 'pupa.foo'),
  getObjectProperty(obj, 'pupa.ne.tuda'),
  getObjectProperty(obj, 'pupa.ne.tuda', true),
  getObjectProperty(obj, 'pupa.ne.tuda', 'Default value')
);

getObjectProperty(obj, 'pupa.lupa'); // > { beep : 'boop' }
getObjectProperty(obj, 'pupa.lupa.beep'); // > 'boop'
getObjectProperty(obj, 'pupa.foo'); // > 'bar'
getObjectProperty(obj, 'pupa.ne.tuda'); // > undefined
getObjectProperty(obj, 'pupa.ne.tuda', true); // > true
getObjectProperty(obj, 'pupa.ne.tuda', 'Default value'); // > 'Default value'
