Cypress Readme
==============

What is it?
-----------

Cypress is a testing suite that we have chosen it allows us to do: 1.
End to End tests 1. Components Tests 1. Integration Tests 1. Unit-tests

The application is easy to use, and they have great errors.
`Documentation +
Why <https://docs.cypress.io/guides/overview/why-cypress#What-you-ll-learn>`__

Say We have the ``cypress`` folder in ``webapp/src`` We can invoke all
of the tests after ``npm ci`` and ``npm run dev`` using the command
``npx cypress run --e2e`` ### Breakdown of npx cypress command 1.
``npx cypress`` access the ``cypress`` command through ``npx`` since
it’s not installed globally 1. ``cypress run`` access the ``run``
subcommand through ``cypress`` 1. ``--e2e`` run all e2e tests you could
specify a command using the ``spec`` ie test location

::

   describe('Get Screenshots', () => {
       let screenshot_options = {
           capture : "fullPage",
       };
       let get_options = {
           "timeout" : 10000, 
       };
       it('passes', () => {
           let webPath = 'http://localhost:3000';
           cy.log("Beginning Screenshot test");
           cy.visit(webPath);
               cy.get('[data-cy = "nav-bar-option-About"', get_options)
               .should('be.visible');
           cy.screenshot('base', screenshot_options);
           cy.fixture('../fixtures/pages.json').then((page_json) => {
               let pages = page_json["pages"];
               for (var page in pages){
                   let baseSubPage = pages[page];
                   let subPage = webPath + "/" + baseSubPage;
                   cy.log(`Visiting subpage: ${subPage}`);
                   cy.visit(subPage);
                   cy.get('[data-cy = "nav-bar-option-About"', get_options)
                       .should('be.visible');
                   cy.screenshot(baseSubPage , screenshot_options);

               }
           });
       })
   })

::

   {"pages":["about","opportunities","socials","team"]}

Explanation
~~~~~~~~~~~

1.  ``describe``: takes a string that serves as the name and function
    here we use a closure
2.  ``*options``: on these lines we configure options for the test to be
    used later
3.  ``it``: a keyword that takes a string that describes a test
4.  ``webpath``: configuration of the base url
5.  ``cy.visit``: a cypress function that takes us to a string in this
    case it’s the ``webPath`` from the previous step
6.  ``cy.get``: is interesting, we are able to get a particular
    attribute in the code and ensure that it’s visible, it’s relatively
    safe since we may have to wait for the page to load
7.  ``cy.screenshot``: allows us to take a screenshot it takes options
    in the form of JSON
8.  ``cy.fixture``: allows us to load a fixture, this one has been
    generated for us, when that loads we then.
9.  grab the pages object from the json
10. loop through pages, and take screenshots with our webPath combined
    with the subpages that our fixture gives
