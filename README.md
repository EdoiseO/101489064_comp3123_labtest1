# COMP3123 Lab Test 1

Phillip Onofua | Student ID: 101489064 | COMP3123 Lab Test 1

JavaScript ES6 and Node.js exercises. Uses only built-in Node.js functionality; no package installation is needed.

## Repository

https://github.com/EdoiseO/101489064_comp3123_labtest1

## Project structure

```text
101489064_comp3123_labtest1/
  README.md
  question-1/lowerCaseWords.js
  question-2/promises.js
  question-3/add.js
  question-3/remove.js
  screenshots/
```

## Run

Open a terminal at the project folder and run:

```shell
node question-1/lowerCaseWords.js
node question-2/promises.js
node question-3/add.js
node question-3/remove.js
```

### Question 1 - ES6 features

`lowerCaseWords` returns a Promise, filters out non-string entries and converts the remaining strings to lowercase. The supplied mixed array resolves to `[ 'pizza', 'wings' ]`. A separate non-array test is rejected by the Promise executor and its error message is printed by `.catch()`.

### Question 2 - Promises

`resolvedPromise` and `rejectedPromise` independently settle after a 500 ms timeout. Their respective `.then()` and `.catch()` handlers print:

```text
{ message: 'delayed success!' }
{ error: 'delayed exception!' }
```

### Question 3 - File module

`add.js` creates `question-3/Logs` if absent, changes the process working directory into it, and writes text to `log0.txt` through `log9.txt`, printing their names. The `wx` flag protects existing files from being overwritten; running creation again before removal will raise `EEXIST`.

`remove.js` lists the files in that same scoped `Logs` directory, deletes them, prints their names, and removes the now-empty folder. If `Logs` does not exist, the removal script makes no changes. Do not place unrelated files inside this disposable exercise folder.

The scripts locate `Logs` relative to themselves, so creation and removal use the same directory on Windows and macOS.

## Screenshot evidence

The `screenshots` folder contains genuine VS Code captures of the executed programs. A separate screenshot PDF is provided with the submission files.
