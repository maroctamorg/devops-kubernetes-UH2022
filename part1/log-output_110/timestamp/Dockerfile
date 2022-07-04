FROM python:latest

WORKDIR /srv/log-output

COPY . .

ENV	DB_DIR="/srv/log-output/shared"

CMD ["python3", "-u", "log-output.py"]
