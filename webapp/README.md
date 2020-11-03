start project: npm run start
test project: npm run cypress

Technology stack:
1. React + React hook
2. "use-global-hook" for global state management
3. Cypress for automation testing

Due to lack of time, there are some part stay in TODO:
1. Handling submit form
2. Remove product/group out of form
3. I only implement 1 Automation test case for POC


For react, the only issue with automation testing is selector, for
some libraries react auto-generate class and id which make it difficult 
to select correct element, with Cypress (for css-like selector) and "cypress-react-selector" 
we can solve this without too much pain!
