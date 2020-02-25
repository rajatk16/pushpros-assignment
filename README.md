# PushPros Assignment


Using Bootstrap, I have created a simple page with a table that is empty by default.

When the user clicks on a button, an AJAX get request is triggered to pull some data from http://aimtell.com/files/sites.json and fill the table.

### Note
The `LOAD DATA FROM API` button might not work because of Cross-Origin Read Blocking (CORB), which is an algorithm that identifies and blocks suspicious cross-origin resource loads in web browsers before they reach the web page. 

CORB reduces the risk of leaking sensitive data by keeping it further from cross-origin web pages. In most browsers, it keeps such data out of untrusted script execution contexts. In browsers with Site Isolation, it can keep such data out of untrusted renderer processes entirely, helping even against side channel attacks like Spectre.

I came across this issue while trying to work around CORS, which is a whole other beast. 

While I am still figuring out how to fix the CORB issue. I have created another button that lets the user load data from the local JSON file inside the data folder.