//MY OWN CODE

#include <stdio.h>
#include <cs50.h>
#include <math.h>

int main (void)
{
    long number = get_long ("Number: ");
    long divisor = get_long ("Divisor: ");
    long r = (number % divisor);
    printf ("The remainder is: %li\n", r);
}
