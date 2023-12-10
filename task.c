#include <stdio.h>
int main() {
  // Declare and initialize variables
  char names[21]; // Allocate enough space for the name
  printf("Enter you name: ");
  scanf("%s", names); // Read the name into the character array
  int Age, YearOfSSCPassing;
  printf("Enter your age: ");
  scanf("%d", &Age);
  printf("Enter your ssc passing year:");
  scanf("%d",&YearOfSSCPassing);
  float AverageMarks;
  printf("\nEnter the total marks of SSC examination: ");
  scanf("%f", &AverageMarks);
  // Print values
  printf("My name is %s \n", names);
  printf("I am %d years old.\n", Age);
  printf("I passed SSC in the year %d.\n", YearOfSSCPassing);
  printf("My average marks in SSC were %.2f.\n", AverageMarks);

  return 0;
}