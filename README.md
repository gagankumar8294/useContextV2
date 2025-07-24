# useContextV2
useContext with custom provider and all functions handling in a single file

1. added all the code in the v1 of use context
2. in this v2 context will be using custom provider in the same context file
3. created customProvider as component and use it like provider in App component
4. passing all the children component in the itemcontext.provider
5. created useValue Custom hook and exported as a function and use it in child compoents
    use it in child compoents like navabr , item context to destructure & retrive the data from the useValue
6. we don't need to import itemcontext & useContext for any child components
7. now only this is to import useValue and just use it in child componenents