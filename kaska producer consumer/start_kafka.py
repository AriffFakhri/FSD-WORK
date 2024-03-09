import subprocess #launch subproceses
import signal #handle signals
import time #adding delays

#start zookeper
zk_command = "/kafka/bin/zookeeper-server-start.sh /kafka/kafka_2.13-3.7.0/config/zookeeper.properties"
zk_process = subprocess.Popen(zk_command.split(), stdout=subprocess.PIPE, stderr=subprocess.PIPE)
print("Zookeeper started")

#start kafka
kafka_command = "/kafka/bin/kafka-server-start.sh    /kafka/kafka_2.13-3.7.0/config/zookeeper.properties"
kafka_process = subprocess.Popen(zk_command.split(), stdout=subprocess.PIPE, stderr=subprocess.PIPE)
print("Kafka broker started")

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    print("Terminating Kafka processes")
    kafka_process.send_signal(signal.SIGINT)
    kafka_process.wait
    zk_process.wait()
    zk_process.send_signal(signal.SIGINT)
    kafka_process.wait








# import subprocess
# import signal
# import time

# # Start Zookeeper
# zk_command = "/opt/kafka/kafka_2.13-3.7.0/bin/zookeeper-server-start.sh /opt/kafka/kafka_2.13-3.7.0/config/zookeeper.properties"
# zk_process = subprocess.Popen(zk_command.split(), stdout=subprocess.PIPE, stderr=subprocess.PIPE)
# print("Zookeeper started")

# # Start Kafka
# kafka_command = "/opt/kafka/kafka_2.13-3.7.0/bin/kafka-server-start.sh /opt/kafka/kafka_2.13-3.7.0/config/server.properties"
# kafka_process = subprocess.Popen(kafka_command.split(), stdout=subprocess.PIPE, stderr=subprocess.PIPE)
# print("Kafka broker started")

# try:
#     while True:
#         time.sleep(1)
# except KeyboardInterrupt:
#     print("Terminating Kafka processes")
#     kafka_process.send_signal(signal.SIGINT)
#     kafka_process.wait()
#     zk_process.send_signal(signal.SIGINT)
#     zk_process.wait()


# import os

# kafka_path = "/opt/kafka/kafka_2.13-3.7.0/"
# zk_start_script = os.path.join(kafka_path, "bin", "zookeeper-server-start.sh")
# kafka_start_script = os.path.join(kafka_path, "bin", "kafka-server-start.sh")

# print("Zookeeper start script:", zk_start_script)
# print("Kafka start script:", kafka_start_script)
