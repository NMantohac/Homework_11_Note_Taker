# Homework_11_Note_Taker

URL Links:
  1) GitHub: https://github.com/NMantohac/Homework_10_Team_Profile_Generator
  2) Heroku (Deployed): https://rocky-mountain-40878.herokuapp.com/
  2) Overall Function (Local Host): https://drive.google.com/file/d/1SmFssps27f-KKAYm9mc1i99Vw9ePoh5G/view
  3) Overall Function (Heroku): https://drive.google.com/file/d/1vV204FjuyUvM1d4jYPMWAQA4gunzkMOJ/view
  
## Description:
  - A note taker that allows the user to write, save, and delete notes from the webpage. There can be multiple notes and the written
    information for each note can be saved, so that the user can access it whenever its needed. Also, each note could be delete 
    if the user sees fit. In addition, the user can type in /api/notes at the end of the URL in order to retrieve the current data 
    of the notes in JSON format. 
  - The note taker is done mainly in the back-end through Javascript code (Node and Express) in Visual Studio Code, whereas the 
    HTML and CSS + Bootstrap were already completed and given. There are two javascript files, the first is index.js which is 
    responsible for information display and the write/save/delete functions in the wepbage, whereas the second is server.js and it 
    connects the index.js to the html files, as well as providing HTML routes, and retrieving data from the user and returning it in 
    JSON format. Overall, the javascript files contains variables (const/let), arrays/objects, functions (callback & error handling), 
    if-else statements, and parsing data. In addition, npm installation was used in order to install Express, so the server could 
    could be built.
  
## Technologies:
  - Visual Studio Code
  - HTML, CSS, Javascript
  - Bootstrap
  - npm - Express (server)
  
## Challenges:
  - Like the previous homework, this note taker homework became a lot easier because some of the files were already completed for us,
    which includes the HTML and CSS, and the index.js file. The primary focus was just to build the server correctly using Express 
    package. Overall, this was definitely a good experience and practice to build a server for a front-end application. 
  - I didn't have much difficulty because the README.md was pretty clear, but I did get a little stuck in writing the app.delete 
    function since there needed to be IDs for the notes. I had to look up and read documentation for certain array/object properties,
    such as forEach and splice(), in order for me to fully complete it.
  - I believe that the only new thing I learned was the way to deploy my app in Heroku. The HerokuGuide.md was extremely useful, and it
    made me realize how important and cool Heroku is for web developers!
  - I was able to solve each of my problem through referring back to class activities, time management, consistent effort, 
    patience, and using my online resources!
    
## Screenshot(s):
  
  Note Taker - Main Page:
  ![Note Taker - Main Page:](https://puu.sh/FBfSU/e71fe16f4e.png)
  
  Note Taker - Notes Page w/ Example Note:
  ![Note Taker - Notes Page w/ Example Note:](https://puu.sh/FBfTg/4d3731cf1e.png)
  
  Note Taker - Notes Page w/ Added Notes:
  ![Note Taker - Notes Page w/ Added Notes:](https://puu.sh/FBfUT/646cf58c84.png)
  
  Note Taker - Notes Page w/ Deleted Note:
  ![Note Taker - Notes Page w/ Deleted Note:](https://puu.sh/FBfV3/931b4acaa8.png)
  
  Note Taker - /api/notes in JSON format:
  ![Note Taker - /api/notes in JSON format:](https://puu.sh/FBfYB/a02a54d9d5.png)
