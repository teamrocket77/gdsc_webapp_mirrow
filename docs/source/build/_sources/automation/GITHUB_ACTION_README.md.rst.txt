## What is it
-------------

It’s our way of running tests, and deployments as the project gets more
and more complicated, we need to reduce the load on the team for
testing, as well as potentially deploying, and pushing artifacts. You
can see additional documentation for them
`here <https://docs.github.com/en/actions>`__ and here is the
`marketplace <https://github.com/marketplace?type=actions>`__ ###
Walking through one of our actions

::

   name: Cypress Front End tests

   on:
     push:
     pull_request:
       types: [created, labeled]

   jobs:
     check_for_ui_ux_label:
       runs-on: ubuntu-latest
       name: Check for the UI/UX Label
       outputs:
         is_ui_ux_label_present: ${{ steps.check_pr_labels.outputs.result }} 
       steps: 
         - name: Check PR labels action step
           id: check_pr_labels
           uses: teamrocket77/check-pr-labels-on-push-action@v1.1
           with:
             github-token: ${{ secrets.GITHUB_TOKEN }}
             labels: '["UI/UX"]'

     cypress-run:
       name: Cypress run
       needs: check_for_ui_ux_label 
       if:  needs.check_for_ui_ux_label.outputs.is_ui_ux_label_present
       runs-on: ubuntu-20.04
       steps:
         - name: Checkout
           uses: actions/checkout@v3
         - name: Cypress run
           uses: cypress-io/github-action@v5
           with:
             working-directory: src
             start: npm run dev
             spec: |
               cypress/**/frontend_tests/frontend.*js
             config: supportFile=false
         - name: Get Screenshots
           uses: actions/upload-artifact@v3
           with:
             name: Front end Screenshots
             path: "**/cypress/screenshots/**/*.png"

Note:
-----

1.  The actions use yml syntax learn about it
    `here <https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html>`__
2.  ``push`` + ``pull_request`` are the events that will trigger the
    workflow
3.  ``types`` is a customization for the ``pull_request`` action this
    allows us to customize the criteria for running the workflow
4.  ``jobs`` is the section, that allows you to list off the tasks that
    you want to run. This file contains two: ``check_for_ui_ux_label``
    and ``cypress-run``
5.  Inside of jobs we are allows to define some tings like ``runs-on``,
    ``name``, ``outputs``, ``steps``, and ``if``
6.  ``runs-on``: is the operating system that you want the workflow to
    run on there’s ``Ubunutu``, ``Windows`` and ``Mac options``
7.  ``name``: is the name you want the job to take when running.
8.  ``outputs``: is how you define the return object you want to have
    the job make available to the other jobs.
9.  ``if``: is a conditional, like in the traditional sense. An if
    defined at this level defines if the workflow runs. Takes an
    expression.
10. ``steps``: is how you configure the actual steps the operation will
    take to run your job, it takes a list. Denoted by ``-``

### Inside of Steps
-------------------

1. ``name`` or ``uses`` prefixed by ``-``. ``name`` is how the steps
   will be represented when inspecting the job, ``uses`` is what you use
   when you are referring to a workflow that somone else has built

Inside of each Step after uses or name
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. ``with``, allows to define and env for the step, for instance you can
   set the ``github-token`` attribute for a workflow, maybe the
   ``working-directory`` or ``path`` ## Running —
2. To run The most friendly way to run a github action is by defining a
   test in ``.github/workflows``, that uses the ``push`` or
   ``pull_request`` action and doing just that. However there are local
   ways to test a workflow using `act <https://github.com/nektos/act>`__
