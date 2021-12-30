### Description

  Proof of concept 1- An attempt to model a DFA that accepts strings totalling 25 with inputs only with 5, 10 and 25. So, the string "55555" is in the language of the DFA but "101010" is not. Each conditional is meant to describe the transition states of the DFA.

  Proof of concept 2- An attempt to model a PDA that accepts the language On1n for n is greater or equal to 0. So, "000111" is accepted but "10" is not.


# Run

To run the app, start by installing any npm packages

`yarn install`

To recompile any TS code into JS, run the following

`yarn type`

or `yarn type -w` in a separate terminal if you want the TS file to auto-compile.

(These commands are defined in package.json)

You may also opt into more TS options by modifying tsconfig.json
