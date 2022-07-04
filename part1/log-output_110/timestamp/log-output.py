import os
import string
import random
from time import sleep
from datetime import datetime

#chars = string.ascii_letters
#key = ''.join([random.choice(chars) for i in range(20)])
while(True):
    time = datetime.now()
    #status = f"{datetime.now()}:\t{key}"
    status = f"{datetime.now()}"
    print(status)
    with open(f"{os.environ['DB_DIR']}/status.txt", "a") as f:
        f.write(f"{status}\n")
    sleep(5)
