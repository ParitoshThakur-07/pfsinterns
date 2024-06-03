numbers = []
positive_num = []
num = int(input("Enter number of elements in the list : "))

for i in range(num):
    k = int(input("Enter the number : "))
    numbers.append(k)
   
    if k>0:
        positive_num.append(k)
    

print("List entered by you : ",numbers)
print("Positive numbers from the list : ",positive_num)
