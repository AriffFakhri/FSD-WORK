# import time

# timestamp = time.strftime('%H:%M:%S')
# print(timestamp)

# timestamp = time.strftime('%H')
# print(timestamp)
# timestamp = time.strftime('%M')
# print(timestamp)
# timestamp = time.strftime('%S')
# print(timestamp)
# timestamp = time.strftime('%a')
# print(timestamp)

# match case statement

# x = int(input("Enter the value of x:")) 

# match x : 

#     # if x is 0
#     case 0:
#         print("x is zero")

#     case 1:
#         print("case is 1")

#     case _ if x != 90:
#         print(x, "is not 90")
#     case _ if x != 80:
#         print(x, "is not 80")
#     case _ :
#         print(x)

def day_of_week(day_number):
    match day_number:
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"
        case _:
            return "invalid day number"
        
        #test cases
print(day_of_week(11))
