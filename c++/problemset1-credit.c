//CS50 - MY SOLUTION

#include <cs50.h>
#include <stdio.h>
#include <math.h>

int main(void)
{
    long card, divi1 = 1, divi2 = 10;
    int digi, sum1 = 0, sum2 = 0;

    do
    {
        card = get_long("Credit Card Number: ");
    }
    while (card < 1000000000); //Minimum lengh

    //Sum of the digits that weren’t multiplied by 2
    for (long i = card; i > 10000000; i /= 10)
    {
        digi = (card / divi1) % 10;
        divi1 *= 100;
        sum1 += digi;
    }
    // Number’s second-to-last digit multiplied by 2,
    // split and sum each other
    for (long i = card; i > 100000000; i /= 10)
    {
        digi = (((card / divi2) % 10) * 2);
        int dr = digi % 10;
        int dl = (digi / 10) % 10;
        divi2 *= 100;
        sum2 += dr + dl;
    }

    //Checksum
    if (((sum1 + sum2) % 10) == 0)
    {
        //AMERICAN EXPRESS
        if (((card / 10000000000000) % 100) == 34 ||
            ((card / 10000000000000) % 100) == 37)
        {
            printf("AMEX\n");
        }

        else //VISA
            if (((card / 1000000000000000) % 10) == 4 ||
                ((((card / 1000000000000) % 10) == 4) && (((card / 1000000000000) < 5))))
            {
                printf("VISA\n");
            }

            else //MASTER
                if (((card / 100000000000000) % 100) == 51 ||
                    ((card / 100000000000000) % 100) == 52 ||
                    ((card / 100000000000000) % 100) == 53 ||
                    ((card / 100000000000000) % 100) == 54 ||
                    ((card / 100000000000000) % 100) == 55)
                {
                    printf("MASTERCARD\n");
                }

                else
                {
                    printf("INVALID\n");
                }
    }
    else
    {
        printf("INVALID\n");
    }
}
