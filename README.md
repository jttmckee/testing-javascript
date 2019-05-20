#Testing practice with Jest

Playing around with testing javascript through jest.  This is an [Odin Project](https://www.theodinproject.com/home) assignment.  Unless you followed the link from the [assignment](https://www.theodinproject.com/courses/javascript/lessons/testing-practice?ref=lnav) itself, there's probably nothing here of interest.  Feel free to look though.

##ES6 syntax
If you have come from the Odin Project and are about to start the assignment, beware as Jest doesn't seem to recognize at least some ES6 syntax.  So that means using `module.exports()` instead of `export` etc.  Alternatively, here's what you need to do to use modern syntax:

###Set up NPM
You should have done this anyway to install jest but just in case (command line):
`npm init`

###Install Babel
At the command line:
```
npm install --save-dev babel-cli babel-core
npm install --save-dev babel-jest babel-polyfill
npm install --save-dev @babel/preset-env

```
###Configure Babel
Create the Babel config file at the command line:
`touch .babelrc`
The following configuration should work
```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": 3
      }
    ]
  ]
}

```
If you get an error, or warning, about corejs; either change the version number above to match the corejs in your' package.json' or install corejs 3:
`npm install --save core-js@3`
(Don't do both!)

###Conclusion
Facebook claim Jest works straight out of the box.  I've just started to learn it so perhaps in other aspects but certainly not if you want to use modern javascript syntax!
