from confluent_kafka import Consumer, KafkaError
import json

# Define Kafka config
kafka_config = {'bootstrap.servers': 'localhost:9092', 'group.id': 'my-consumer-group'}

# Create a Kafka consumer
consumer = Consumer(kafka_config)

# Define the Kafka topic
topic = 'sensor_data'

# Subscribe consumer to the topic
consumer.subscribe([topic])

# Function to process received messages
def process_message(msg):
    try:
        data = json.loads(msg.value().decode('utf-8'))
        # Process the received data (e.g., print or perform calculations)
        print("Received message:", data)
    except Exception as e:
        print("Error processing message:", e)

# Continuously consume messages
try:
    while True:
        msg = consumer.poll(timeout=1.0)
        if msg is None:
            continue
        if msg.error():
            if msg.error().code() == KafkaError._PARTITION_EOF:
                continue
            else:
                print(msg.error())
                break
        process_message(msg)
except KeyboardInterrupt:
    pass
finally:
    consumer.close()
