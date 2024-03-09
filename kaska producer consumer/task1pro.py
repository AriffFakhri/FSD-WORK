from confluent_kafka import Producer
import json
import time

# Define Kafka config
kafka_config = {'bootstrap.servers': 'localhost:9092'}

# Create a Kafka producer
producer = Producer(kafka_config)

# Define the Kafka topic
topic = 'sensor_data'

# Function to send messages to Kafka
def send_to_kafka(data):
    producer.produce(topic, json.dumps(data).encode('utf-8'))
    producer.flush()

# Sample data generation function
def generate_data():
    while True:
        # Generate sample data (replace with your actual data)
        data = {
            'timestamp': int(time.time()),
            'sensor_id': 'sensor_1',
            'reading': 25.5
        }
        send_to_kafka(data)
        time.sleep(1)  # Simulate data generation every second

if __name__ == "__main__":
    generate_data()
