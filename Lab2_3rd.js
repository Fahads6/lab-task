var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
    a=display(library[0].author,library[0].readingStatus)
    b=display(library[1].author,library[1].readingStatus)
    c=display(library[2].author,library[2].readingStatus)
function display(a,b){
    console.log("Author Name=",a,"and","ReadingStatus=",b)

}