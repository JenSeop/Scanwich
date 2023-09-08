@echo off
: front-end run server
cd .\front-end
start cmd /k "npm start"
: back-end run server
cd ..\back-end\scanwich
start cmd /k "python manage.py runserver"
: nginx run server
cd ..\..\nginx
start cmd /k "nginx"