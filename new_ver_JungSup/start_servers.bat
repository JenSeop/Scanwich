@echo off
echo "* This World Bakery Server Starter *"
:: front-end 서버 실행
echo "- React Server Start"
cd .\front-end
start cmd /k "npm start"

:: front-end 서버 실행 대기
timeout /t 5

:: back-end 서버 Scanwich 실행
echo "- Django Server Start"
cd ..\back-end\scanwich
start cmd /k "python manage.py runserver 8000"

:: back-end 서버 Scanwich 실행 대기
timeout /t 5

:: back-end 서버 Analyze 실행
echo "- Django Server Start"
cd ..\analyze
start cmd /k "python manage.py runserver 8001"

:: back-end 서버 Analyze 실행 대기
timeout /t 5

:: NGINX 서버 실행
echo "- NGINX Server Start"
cd ..\..\nginx
start cmd /k "nginx"

:: 문구 출력
echo "* Server Activate Success *"
timeout /t 5