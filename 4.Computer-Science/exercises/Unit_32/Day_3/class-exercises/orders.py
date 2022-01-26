def get_most_ordered_dish_per_costumer(orders, customer):
    customer_orders_sum = {}

    for order in orders:
        if order['customer'] == customer:
            if order['order'] in customer_orders_sum:
                customer_orders_sum[order['order']] += 1
            else:
                customer_orders_sum[order['order']] = 1

    # Max key dict value:
    # https://stackoverflow.com/questions/268272/getting-key-with-maximum-value-in-dictionary
    return max(customer_orders_sum, key=customer_orders_sum.get)


def get_order_frequency_per_costumer(orders, customer, request):
    customer_order_frequency = 0

    for order in orders:
        if order['customer'] == customer:
            if order['order'] == request:
                customer_order_frequency += 1

    return customer_order_frequency
