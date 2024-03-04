// continious, Holey

// SMI (small integer)
// Packed element
// Double (float, sting, function)

const arrOne = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENTS

arrOne.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrOne.push('7')
// PACKED_ELEMENTS

arrOne [10] = 11
// HOLEY_ELEMENTS


const foo = []; // element kind: PACKED_SMI_ELEMENTS

foo.push(1); // element kind: PACKED_SMI_ELEMENTS
foo[100] = 2; // element kind: HOLEY_SMI_ELEMENTS
foo.push(5.2); // element kind: PACKED_DOUBLE_ELEMENTS
foo.pop(); // element kind: PACKED_DOUBLE_ELEMENTS
foo.push('bar'); // element kind: HOLEY_ELEMENTS



// ----------General Performance Tips ----------

//1.Never access the array with out-of-bounds index 
const arr = [1, 2, 3];

console.log(arr[100] ?? 'some placeholder'); // 'some placeholder'


//2. Avoid giving the initial capacity to the array 
const foo = new Array(3); // element kind: HOLEY_SMI_ELEMENTS

foo[0] = 1;
foo[1] = 2;
foo[2] = 3;

//Instead we can just create an empty array and push the elements to it. 
//This will ensure the element kind is the same
const foo = []; // element kind: HOLEY_SMI_ELEMENTS

foo.push(1);
foo.push(2);
foo.push(3); // element kind: PACKED_SMI_ELEMENTS