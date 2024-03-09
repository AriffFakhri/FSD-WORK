from confluent_kafka import Consumer

#Define Kafka config

config = {'bootstrap.servers': 'localhost:9092',
          'group.id' : 'my-consumer-group'
          }

# create a consumer object
consumer = Consumer(config)

# Define the topic to consume messages from
topic = 'new-topic'

# Create a function to process our received messages
def process_message(message):
    #Accessing messagw value
    value = message.value().decode('utf-8') # Decode our message (assuming utf8)
    print(f"Received message: {value} from topic: {topic}")
    #Replace this with actual processing

#Subscribe to a topic
    consumer.subscribe({topic})

# Pull messages continuously
try: 
    while True:
        msg = consumer.poll(timeout=1) # wait up to 1 sec for massage
        if msg is None:
            continue # No message received within timeout
        elif msg.error():
            print("Consumer error: {}".format(msg.error()))
            continue
        else:
            process_message(msg)
except KeyboardInterrupt:
    pass #Handle keyboard interrupt

# Close the consumer
consumer.close()

print('Consumer stopped consuming messages')