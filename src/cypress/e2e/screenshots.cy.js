describe('Get Screenshots', () => {
	let screenshot_options = {
		capture : "fullPage",
	};
	let get_options = {
		"timeout" : 10000, 
	};
	it('passes', () => {
		let webPath = 'http://localhost:3000';
		cy.visit(webPath);
    		cy.get('[data-cy = "nav-bar-About"', get_options)
			.should('be.visible');
		cy.screenshot('base', screenshot_options);
		cy.fixture('../fixtures/pages.json').then((page_json) => {
			let pages = page_json["pages"];
			for (var page in pages){
				let baseSubPage = pages[page];
				let subPage = webPath + "/" + baseSubPage;
				cy.visit(subPage);
				cy.get('[data-cy = "nav-bar-About"', get_options)
					.should('be.visible');
				cy.screenshot(baseSubPage , screenshot_options);

			}
		});
	})
})

