describe('q3cypress fixture', function () {
   
    
    it('q3fixture', () => {
        cy.fixture('example').then( user => {
            cy.visit('https://tastedive.com/')
            cy.get('#autocomplete-input').type(user.q)
            
        })
    })

 });


 describe('test custom command', () => {

    it('q3cypress', () => {
        cy.q3cypress('halloween', 'music').then(response => {
            cy.log(JSON.stringify(response))
            
          
        })
    })
})
