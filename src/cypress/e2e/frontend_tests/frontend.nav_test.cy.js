describe('Nav Bar Test', () => {
  it('passes', () => {
    const home = 'http://localhost:3000';
    cy.visit(home);
    //ensure that nav bar is visible
    cy.get('a[data-cy^=nav-bar-option]').should('be.visible')
    cy.log('Visiting base page')

    //create links and cy-data list from home page as shown 
    let links = []
    let cy_data = []
    //get all sub pages that have links in navbar
    cy.get('[data-cy^=nav-bar-option-]').each(
      ($val) =>{
        // get href attr and data-cy
        cy.wrap($val).invoke('attr', 'href').then(
          (href) => {
            links.push(href)
          }
        )
        cy.wrap($val).invoke('attr', 'data-cy').then(
          (data) => {
            cy_data.push(data)
          }
        )
      }
    );

    //wrap list so it can be used by cypress
    cy.wrap(links).each((item) => {
      cy.visit(home + item);
      cy.get('a[data-cy^=nav-bar-option]').should('be.visible');
      cy.wrap(cy_data).each((data_item) => {
        cy.get(`[data-cy=${data_item}]`).should('be.visible');
      });
    });
  });
})

