import string
import random
from time import sleep
from datetime import datetime

chars = string.ascii_letters
key = ''.join([random.choice(chars) for i in range(20)])
while(True):
    time = datetime.now()
    status = f"{datetime.now()}:\t{key}"
    print(status)
    f = open("status.txt", "w")
    f.write(status)
    sleep(5)
