# FriendFinder
A super lame dating app....

This is a full stack application and is a friend finder(basically a dating application).  A user fills out there name, posts a link to a photo of themselves, then they are asked ten questions on whether they agree or disagree(1-5 one being they strongly disagree...).  They will then click the submit button and a match with the most similar score is matched up with them and a modal with the name of that person and picture return.  The way the score match is calculated is the match with the least differences from the user matches with them.  Once they get matched the most recently added user gets added with all the other users(but is excluded from the match routine until another user enters a name so they can not match themselves).  A few problems I had: 1. I kept matching myself if I pressed the submit button twice and it does not make sense to match yourself. I then made the current person being added excluded from the match routine so it is impossible to match yourself, I also took into account that a user may have the exact same name as a match possibility.  Someone might think a way to get around matching yourself would be to clear the fields upon submission but what if the user does not like there first match so they fill out the fields again a second time and hate that match even more they then proceed to do it a third time with the exact same field values as the first time they would then match themselves...  A way I could have improved my application a little would be having an email field for all my users this would make users with the exact same name much more distinguishable.  I also uploaded this to heroku so there is no need to clone my repo if you would like to try it out yourself.


HEROKU: https://hostingfriendfinder.herokuapp.com/


Another way I could have vastly improved the look and user experience would be to use something like kendo which is ultra mega sick and worth the thousand dollar cost.
