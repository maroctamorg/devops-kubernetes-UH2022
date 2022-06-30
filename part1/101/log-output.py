import string
import random
from time import sleep
from datetime import datetime

chars = string.ascii_letters
key = ''.join([random.choice(chars) for i in range(20)])
while(True):
    time = datetime.now()
    print(f"{datetime.now()}:\t{key}")
    sleep(5)
