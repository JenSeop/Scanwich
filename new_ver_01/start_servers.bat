@echo off
:: front-end 서버 실행
cd .\front-end
start cmd /k "npm start"

:: front-end 서버가 시작될 때까지 대기 (대기 시간을 조정해야 할 수 있습니다)
timeout /t 5

:: back-end 서버 실행
cd ..\back-end\scanwich
start cmd /k "python manage.py runserver"

:: back-end 서버가 시작될 때까지 대기 (대기 시간을 조정해야 할 수 있습니다)
timeout /t 5

:: NGINX 서버 실행
cd ..\..\nginx
start cmd /k "nginx"
