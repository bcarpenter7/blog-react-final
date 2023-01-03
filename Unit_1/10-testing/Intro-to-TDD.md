# Testing
Testing is a fundamental part of the software development cycle. It is important to test to ensure that our system is working as expected. \
Testing happens at multiple different stages of our application development and we can structure the different types of test we do into a pyramid that signifies the different levels. \
There are several 'patterns' and 'antipatterns' to consider when approaching your tests. Check out [all these pyramids](http://www.testingreferences.com/here_be_pyramids.php)!

The og. test pyramid was a concept of [Mike Cohn](https://martinfowler.com/articles/practical-test-pyramid.html) \
![Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid/testPyramid.png "Mike Cohn's Test Pyramid")

The top benefits and take-aways from this approach are:
1. Write tests with different granularity
2. The more high-level you get the fewer tests you should have

***

### Unit Tests
Unit testing targets small, isolated chunks of code eg. a function. \
They are easy to implement, quick to run and give very specific feedback. \
The majority of your testing should be based around unit tests.

### Service Tests
Other terms you may hear for tests around this level are "Integration", "API" and more. \
These tests start to bring together units and test them as a group.

### UI Tests
Other terms you may hear for tests around this level are "System", "Behaviour" and more. \
This is where your complete program will start to be tested to find the end result.

### BONUS: Acceptance / End-to-End / Manual Tests
The highest level of testing, usually done manually. It is an ever growing trend in software engineering to have specialized engineers who build out sophisticated end user automation tests. These are programs written to imitate an end user's behavior to test a large variety of manual tests in an automated fashion. Typically the engineers that work on end user automation tests are called quality engineers(QE).

***

## Antipatterns
Consider the ice-cream cone antipattern next to this lovely ~~volcano~~ pyramid. What issues could this bring?
![Ice-Cream vs Volcano](https://i.stack.imgur.com/uq7Gh.png)

***

# TDD

Test Driven Development, typically referred to by the acronym, TDD, is describing a methodology in software engineering that has engineers write their unit tests before writing the code those tests are meant to verify. This process involves an engineer first writing a series of tests that cover all scenarios that could arise inside of the context of the user story they are developing for. The engineer will then go and write the code that will fulfill the test requirements.

The benefits of this process are numerous, firstly, you will always have near complete test coverage of your code. This means that you will greatly reduce bugs and more easily be able to tell when new additions to your project break code in other parts of that project. Secondly, this approach forces you to write code in a proactive way as well as write code that is easy to unit test. A common error software engineers make is that they write code that isn't easy to unit test, which results is weaker test suites and more bugs making their way into production. TDD ensures that software engineers are writing clean code with a healthy separation of concerns, as you will quickly notice that badly written code is considerably more difficult to unit test. By enforcing a test first approach to writing code you will find that your projects have cleaner code bases with a greater consideration for best practices.

The benefits of TDD are two fold, firstly you gain a robust and helpful test suite with ample code coverage, as well, you have a process that enforces better coding practices, which in turn also results in better code quality. 



***

# Tools & Frameworks
There is a plethora of testing frameworks available for you to choose from including: \
[Mocha](https://mochajs.org/) | [Tape](https://github.com/substack/tape) | [Jasmine](https://jasmine.github.io/) | [Jest](https://jestjs.io/) and many more...

Check out our walkthroughs for setting up JS Unit tests with two options:
- [Jest](Unit_1/JS-Unit-Testing-with-Jest.md)
- [Mocha & Chai](Unit_1/JS-Unit-Testing-with-Mocha-and-Chai.md)



***
