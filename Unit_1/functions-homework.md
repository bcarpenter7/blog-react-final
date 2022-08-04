# Functions homework - part 1

## 1. The introduction
Write a function named greetings that:
- takes 1 argument, a name
- when called for example `greetings('kasun')` should console log "nice to meet you kasun!"
- when called for example `greetings('neil')` should console log "nice to meet you neil!"

## 2. Which number's bigger?
Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.
- Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

## 3. Combine Words
Example: 
```javascript
combineWords('dog', 'house');
=> "doghouse"
```

## 4. The World Translator
Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
- Call that function for each of the supported languages and log the result to make sure it works.

## 5. The Grade Assigner
Write a function named assignGrade that:
- takes 1 argument, a number score.
- returns a grade for the score, either "A", "B", "C", "D", or "F".
- Call that function for a few different scores and log the result to make sure it works.
- A few examples:
```javascript
assignGrade(83)
=> "A"

assignGrade(68)
=> "C"

assignGrade(52)
=> "D"
```

## 6. Lengths
Write a function `lengths` that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string:
```javascript
lengths(['my', 'cake', 'pudding'])
// => [2,4,7]
```