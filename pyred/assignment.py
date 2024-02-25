import redis

# Connect to Redis server
r = redis.Redis(host='localhost', port=6379)

# Sample product dictionary
sample_product = {
    'id': 'product123',
    'quantity': 100,
    'price': 10.99
}

def batch_update_product(product_dict, quantity_increment, new_price):
    # Start a pipeline
    pipe = r.pipeline()

    # HINCRBY
    pipe.hincrby(product_dict['id'], 'quantity', quantity_increment)

    # HSET
    pipe.hset(product_dict['id'], 'price', new_price)

    # Execute pipeline
    pipe.execute()


batch_update_product(sample_product, 0, 20.48)


