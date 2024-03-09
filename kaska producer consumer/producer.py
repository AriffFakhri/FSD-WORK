from confluent_kafka import Producer

#Define Kafka config

config = {'bootstrap.servers': 'localhost:9092'}

#Create a producer object
producer = Producer(config)

# Define the topic to consume messages from
topic = 'new-topic'

def send_message(message):
    try:
        # Producing the message to the topic
        producer.produce(topic, message.encode('utf-8'))

        #poll the producer to handle message delivery
        producer.poll(timeout=1) #wait up to 1 sec

        print(f"Sent message: {message} to topic: {topic}")
    except Exception as e:
        print(f"Failed to send message: {e}")

messages = [
    "This is messsage number 1",
    "This is message number 2 with some data",
    "Another message for processing"
    "HELO"
]

for message in messages:
    send_message(message)

#Flush producer to ensure delivery
producer.flush()

#Let the producer object to none to release resources
producer = None

print("Producer finished sending massages.")