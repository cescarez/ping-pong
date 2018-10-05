# _Ping-Pong_

_Epicodus Week 10, last updated Oct. 1, 2018_

#### By _**Christabel Escarez**_

## Description

A webpage that will display a list of numbers starting with a user input number and count up to a user specified final number, replacing every third number with "ping", every fifth number with "pong" and every fifteenth number with "ping-pong".

## Setup/Installation Requirements

* _Clone repository:_ https://github.com/cescarez/ping-pong.git
* _Open index.html_
* _Submit a number._

## Specifications
| Specification | Example User Input | Expected Output |
| :-------------| :----------------- | :-------------- |
| Program gathers user input | _Input:_ "5246" | _Output:_ "5246" |
| Program ignores decimal point values in user input | _Input:_ "5246.78345" | _Output:_ "5246" |
| Program ignores non-numerical characters in user input| _Input:_ "5Ku%24LLL6op" | _Output:_ "5246" |
| Program does not allow non-numerical characters to be submitted | _Input:_ "dog" | _Output:_ Submit function does not work, input box becomes outlined in red. |
| Program does not accept negative integers or an empty input | _Input:_ "-5246" | _Output:_ Input box becomes outlined in red and displayed text reads "Please enter a whole, positive number." |
| Program counts up to user input, incremented by one and starting at one | _Input:_ "5" | _Output:_ "1, 2, 3, 4, 5" |
| Program replaces numbers divisible by three with the word "ping" | _Input:_ "5" | _Output:_ "1, 2, ping, 4, 5"|
| Program replaces numbers divisible by five with the word "pong" | _Input:_ "5" | _Output:_ "1, 2, ping, 4, pong"|
| Program replaces numbers divisible by fifteen with "ping-pong" | _Input:_ "15" | _Output:_ "1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, ping-pong"|
| Program displays created sequence of numbers and words | _Input:_ "5" | _Displayed Output:_ "1, 2, ping, 4, pong"|
| The above steps are executed anew each time the submit button is pressed | _Displayed Output:_ "1, 2, ping, 4, pong" ; _New Input:_ "3" |  _Displayed Output:_ "1, 2, ping"|


## Known Bugs

_No known bugs, to date._

## Support and contact details

_Contact christabel.escarez@gmail.com with any technical issues._

## Technologies Used

* _HTML_
* _CSS_
  * _Bootstrap 3.3.7_
* _JavaScript_
  * _jQuery 3.3.1_

### License

Copyright (c) 2018 **Christabel Escarez** :dog:

*This software is licensed under the GPL license.*

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
