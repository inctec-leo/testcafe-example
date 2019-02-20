# testcafe-example
A working example for problems using role and nock. 

## Set up the project
```
npm install
```
## Run the test
```
npm run test
```

You will see a long delay executing the role after page load, this is the output running on Ubuntu: 

```
Main Page
Creating story mock request
Call to nock took 9.197799682617188 milliseconds.
Creating role
Call to create role took 32411.24609708786 milliseconds.
looking for list selector
```