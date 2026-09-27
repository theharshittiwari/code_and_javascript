// const coding=["js","Ruby","java","python","cpp"]
// const values= coding.forEach( (item)=>{
//     // console.log(item)
//     return item
// }
// )

// console.log(values)

// const mynums= [1,2,3,4,5,6,7,8,9]

// const newnums=mynums.filter((num)=>num>4)
// console.log(newnums)

// const newnums=mynums.filter((num)=>{
//     return num>4
// })
 
// console.log(newnums)

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2000}
// ]

// let userbook=books.filter((bk)=>bk.genre==='History')

// console.log(userbook)


//MAP METHOD:

// const mynums=[1,2,3,4,5,6,7,8,9]
//  const newnums=mynums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
//  console.log(newnums)

// REDUCE METHOD:

// const myNums=[1,2,3]

// // const myTotal=myNums.reduce((acc,currval)=>acc+currval,0)
// // console.log(myTotal)

// const myTotal=myNums.reduce((acc,currval)=>{
//     console.log(`acc:${acc} and currval: ${currval}`)
//     return acc+currval
// },0)

// console.log(myTotal)

const shoopingcart=[
    {
        course:"javascript",
        price:1999
    },
    {
        course:"Python",
        price:2500
    },
    {
        course:"cybersecurity",
        price:3400
    },
    {
        course:"claude",
        price:3999
    },
    {
        course:"Artifical intelligence",
        price:6000
    }
]

const myTotal=shoopingcart.reduce((acc,item)=>acc+item.price,0)
console.log(myTotal)

