# utils__number

Prototype Number Utilities  
I created these utilities some time ago for my own projects. They will have gone through numerous versions, I've tried to keep them small, only including operations I find myself doing time after time.
I finally found the time to make proper repros and read me files so I could upload them. I hope you find them as useful as I do!

### Version
2.1

# Installation
As these are Prototypes and not framework functions, all you need to do is load the file as part of your stack. I recommend after your other library includes.

# Usage

### addCommas
Parses a number and adds commas in the correct places. (In most cases toLocaleString has now superceded this, but it still has it's uses)
```javascript
( Number ).addCommas();
//3333000.42 => 3,333,000.42
```

### addRounding
Parses a number and rounds it in a manner similar to Facebook.
```javascript
( Number ).addRounding();
//12000 => 12K
//1200000 => 1.2M
//1200000000 => 1.2B
//Up to QN
```

# Change Log
2.1 Added addRounding function.  
2.0 Rebuilt script to be prototypes instead of framework functions.  
1.0 Added addCommas function.  

# License
MIT  
It's Free!
