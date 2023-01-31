describe('This test is attempting to log into the dashboard', () => {
 	it('passes', () => {
 		let webPath = 'http://localhost:3000/login';
 		cy.log("Beginning Login test");
 		cy.visit(webPath);
 		// type pertinent information in for testing
     		cy.get('[id=username]').type('admin');
     		cy.get('[id=password').type('admin');
 		// submit page redirected to 
     		cy.get('[type=submit').click();
 	})
 })
