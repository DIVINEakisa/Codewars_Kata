// Description:
// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

// (
// a
// p
// +
// b
// p
// +
// 1
// +
// c
// p
// +
// 2
// +
// d
// p
// +
// 3
// +
// .
// .
// .
// )
// =
// n
// ∗
// k
// (a
// p
//  +b
// p+1
//  +c
// p+2
//  +d
// p+3
//  +...)=n∗k
// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.

// Examples:
// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// FundamentalsMathematics
// Similar Kata:
// 6 kyu
// Digit-by-digit number
// 341282% of 38119kirushik1 Issue Reported
// 6 kyu
// Sum of Digits / Digital Root
// 479491990% of 25,266297,814user5783873 Issues Reported
// Beta
// Count the number of instances of three identical digits on a four-digit digital clock
// 1080% of 511travishooper2 Issues Reported
// Status:Testing & feedback needed
// Estimated Rank:
// 5 kyu
// Beta
// Guess the (prime) number, digit by digit
// 13391% of 2236macambira1 Issue Reported
// Status:Waiting for issues to be resolved
// Estimated Rank:
// 5 kyu
// More By Author:
// Check out these other kata created by g964

// 6 kyu
// Financing Plan on Planet XY140Z-n
// 2384783% of 7905,079g9642 Issues Reported
// 6 kyu
// up AND down
// 2385189% of 5853,345g964
// 7 kyu
// Easy Line
// 2936779% of 6254,183g9641 Issue Reported
// 5 kyu
// Is my friend cheating?
// 186731889% of 2,18418,724g9647 Issues Reported
// Stats:
// Created	May 12, 2015
// Published	May 12, 2015
// Warriors Trained	364248
// Total Skips	75407
// Total Code Submissions	524011
// Total Times Completed	148954
// Ruby Completions	3768
// Python Completions	57663
// C# Completions	8152
// Java Completions	14220
// JavaScript Completions	44376
// Haskell Completions	1134
// Clojure Completions	286
// CoffeeScript Completions	89
// C++ Completions	6329
// PHP Completions	3182
// Crystal Completions	37
// F# Completions	110
// Swift Completions	880
// C Completions	3088
// TypeScript Completions	2596
// Go Completions	1894
// Shell Completions	175
// OCaml Completions	61
// Julia Completions	117
// Scala Completions	406
// R Completions	202
// PowerShell Completions	89
// Kotlin Completions	960
// NASM Completions	24
// Nim Completions	30
// Rust Completions	1454
// Racket Completions	33
// Reason Completions	8
// Lua Completions	157
// CommonLisp Completions	118
// Pascal Completions	24
// Perl Completions	33
// Raku Completions	8
// Elm Completions	12
// D Completions	9
// COBOL Completions	12
// Prolog Completions	13
// Factor Completions	10
// Total Stars	3655
// % of votes with a positive feedback rating	90% of 13785
// Total "Very Satisfied" Votes	11342
// Total "Somewhat Satisfied" Votes	2214
// Total "Not Satisfied" Votes	229
// Contributors
// g964 Avatar
// jhoffner Avatar
// ZozoFouchtra Avatar
// naithar Avatar
// imjasonmiller Avatar
// kazk Avatar
// Voile Avatar
// kdmatrosov Avatar
// lbvf50mobile Avatar
// monadius Avatar
// hobovsky Avatar
// tanasovich Avatar
// uniapi Avatar
// trashy_incel Avatar
// akar-0 Avatar
// Kacarott Avatar
// dfhwze Avatar
// Just4FunCoder Avatar
// razetime Avatar
// KayleighWasTaken Avatar
// PetitLu117 Avatar

function digPow(n, p) {
  const digits = n.toString().split("").map(Number);
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(digits[i], p + i);
  }

  const k = sum / n;
  return Number.isInteger(k) && k > 0 ? k : -1;
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(695, 2));
console.log(digPow(46288, 3));
