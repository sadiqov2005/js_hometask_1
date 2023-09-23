// first homework
function reverseArray(anyArray) {
    let reversedArray = [];
    for (let i = anyArray.length - 1, j = 0; i >= 0; i--, j++) {
      reversedArray[j] = anyArray[i];
    }
    console.log(reversedArray);
  }
  
  reverseArray([2, 1, 2, 3]);

//second one

  function findSingleInt(arr) {
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j] && i != j) {
          count++;
        }
      }
      if (count == 0) {
        console.log(arr[i]);
      }
    }
  }
  
  findSingleInt([2, 2, 3, 5, 6, 9, 6, 5, 9]);




  //third one 
  function changeElements(arr) {
    let changedElements = [];
    for (let i = 0; i < arr.length; i += 2) {
      if (i == arr.length - 1) {
        changedElements[i] = arr[i];
      } else {
        changedElements[i] = arr[i + 1];
        changedElements[i + 1] = arr[i];
      }
    }
    console.log(changedElements);
  }
  
  changeElements([1, 2, 3, 4, 5, 6, 7]);



  //fourth one 
  function compareTwoArrays(arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] == arr2[i]) {
        count++;
      }
    }
    if (arr1.length != count || arr1.length != arr2.length) {
      console.log("False");
    } else {
      console.log("True");
    }
  }
  
  compareTwoArrays([1, 2, 3], [1, 2, 3]);