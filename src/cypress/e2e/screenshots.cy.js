describe('Get Screenshots', () => {
	let options = {
		"capture" : "fullpage",
		timout: 10000
	};
	it('passes', () => {
		let webPath = 'http://localhost:3000';
		cy.visit(webPath, options);
    		cy.get('[data-cy = "nav-bar-option-About"')
			.should('be.visible');
		cy.screenshot('base');
		cy.log('Getting Fixtures');
		cy.fixture('../fixtures/pages.json').then((page_json) => {
			let pages = page_json["pages"];
			for (var page in pages){
				let baseSubPage = pages[page];
				let subPage = webPath + "/" + baseSubPage;
				cy.visit(subPage);
				cy.log(`Getting Page: ${subPage}`);
				cy.get('[data-cy = "nav-bar-option-About"')
					.should('be.visible');
				cy.screenshot(baseSubPage);
				cy.log(`Successfully Took screenshot of ${subPage}`);

			}
		});
	})
})
