const { expect } = require('chai');
const { bookSelection } = require('./bookSelection');

describe('testing book selection', () => {
    describe('test suitable genre', () => {
        it('should initiate happy case', () => {
            let suitable = bookSelection.isGenreSuitable('Horror', 25);
            expect(suitable).to.equal(`Those books are suitable`)
        })

        it('should initiate too young with horror 12 and under', () => {
            let unsuitable = bookSelection.isGenreSuitable('Horror', 12);
            expect(unsuitable).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
            let unsuitable1 = bookSelection.isGenreSuitable('Horror', 10);
            expect(unsuitable1).to.equal(`Books with Horror genre are not suitable for kids at 10 age`);
        })

        it('should initiate too young with thriller 12 and under', () => {
            let unsuitable = bookSelection.isGenreSuitable('Thriller', 12);
            expect(unsuitable).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            let unsuitable1 = bookSelection.isGenreSuitable('Thriller', 10);
            expect(unsuitable1).to.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
        })
    })

    describe('test if affordable', () => {
        it('should throw error if input is not nums', () => {
            expect(() => bookSelection.isItAffordable('kur', 1)).to.throw(Error, "Invalid input");
            expect(() => bookSelection.isItAffordable(1, 'pute')).to.throw(Error, "Invalid input");
        })
        it('should say not enough money', () => {
            expect(bookSelection.isItAffordable(2, 1)).to.equal("You don't have enough money");
        })
        it('should buy', () => {
            expect(bookSelection.isItAffordable(1, 2)).to.equal(`Book bought. You have 1$ left`)
        }) 
    })

    describe('test if wanted genre returns appropriate books', () => {
        it('should throw error if input isnt array + string', () => {
            expect(() => bookSelection.suitableTitles('sas', 1)).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles({}, 'sas')).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles(1, 1)).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles(4.3, 'sas')).to.throw(Error, 'Invalid input');
            expect(() => bookSelection.suitableTitles(['sas', 'sas'], 1)).to.throw(Error, 'Invalid input');
        })

        it('should return array of wanted genre books', () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "Thriller" )).to.eql(["The Da Vinci Code"]);

            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "The kurami", genre: "Sami" }],
             "Thriller" )).to.eql(["The Da Vinci Code"]);

             expect(bookSelection.suitableTitles([{ title: "The Ring", genre: "Horror" }, { title: "The kurami", genre: "Sami" }],
             "Horror" )).to.eql(["The Ring"]);
        })
    })
})
