### Blinking terminal cursor after "axel":"axel is {age} {measure} old"
#### requirements:
* [ ] when name is clicked on open a birthday input (date picker + time?)
* [ ] when date is picked, display age and measure
+ [ ] leaderboard like guest list
+ [ ] optional? LinkedIn integration/verification
- [ ] display blinking cursor
? [ ] ? when user inputs 'i'/'ia'/'iao'/'enter' also open birthday input like vim input mode :)
? [ ] ? birthday input should be keyboard navigable (arrows/hjkl for navigation, enter for selection, exit with esc/q)


### mockup:
[modal]
    name: _________
]input:John

[modal]
    name: John
{input:enter}

[date-modal]
    date_picker
{pick_date, confirm}

[time-modal]
    Do you know *when* you were born?
                00:00 

              [confirm] 
{18:34}

[time-modal]
    Do you know *when* you were born?
                18:34 

              [confirm]
{enter/confirm} 

[main]
    John is 23 years old!
{}

### mockup with linkedin:
[modal]
    name: _________
{input:John}

[modal]
    name: John
{input:enter}

[modal]
    date_picker
{pick_date, confirm}

leaderboard
-------------LEADERBOARD/ GUEST LIST-------------

    name   |   age   |   
----------------------------------------------
    axel   23.01203824951745 years old 
    john   23.01203824951745 years old 
    jane   23.01203824951745 years old
    bob    23.01203824951745 years old
    alice  23.01203824951745 years old

    [Sign in with LinkedIn to save to leaderboard]

