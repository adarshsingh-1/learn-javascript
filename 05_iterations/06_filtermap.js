//map() – returns new array
//filter() – returns filtered array
//reduce() – returns single value

const coding = ["js", "py", "rb", "go", "php"];

const value = coding.forEach( (item) => {
    // console.log(item)
    // return item
})

// console.log(value);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (nums) => num > 4 )

const newNums = myNums.filter( (num) => {
    return num>4
})
// console.log(newNums); 


//using for each loop
const newNums2 = []
myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
})
// console.log(newNums2);



//Example::
const books = [
    {
      title: 'Book One',
      genre: 'Fiction',
      publish: 1981,
      edition: 2004
    },
    {
      title: 'Book Two',
      genre: 'Non-Fiction',
      publish: 1992,
      edition: 2008
    },
    {
      title: 'Book Three',
      genre: 'History',
      publish: 1999,
      edition: 2007
    },
    {
      title: 'Book Four',
      genre: 'Science',
      publish: 1989,
      edition: 2010
    },
    {
      title: 'Book Five',
      genre: 'Fiction',
      publish: 2009,
      edition: 2014
    },
    {
      title: 'Book Six',
      genre: 'History',
      publish: 1987,
      edition: 2010
    },
    {
      title: 'Book Seven',
      genre: 'Science',
      publish: 1996,
      edition: 2005
    },
    {
      title: 'Book Eight',
      genre: 'History',
      publish: 2011,
      edition: 2016
    },
    {
      title: 'Book Nine',
      genre: 'Non-Fiction',
      publish: 1981,
      edition: 1989
    }
  ];

  const userBooks = books.filter( (bk) => bk.genre === 'History')
  const userBooks1 = books.filter( (bk) => bk.publish >= 2000)
  const userBooks2 = books.filter( (bk) => {return bk.publish >= 2000 && bk.genre === 'History'})

  console.log(userBooks);
  console.log(userBooks1);
  


