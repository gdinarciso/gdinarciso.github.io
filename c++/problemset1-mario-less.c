//CS50 - MY SOLUTION

#include <cs50.h>
#include <stdio.h>

int main(void)
{

    int height;
    //integer variable declaration

    do
        //will as for the height at least once
    {
        height = get_int("Height:");
        //ask for the desired height
    }
    while (height > 8 || height < 1);
    //limits the height between 1 and 8
    for (int i = 0; i < height; i++)
        //conditions the pyramid to be built according
        //to the desired height
    {
        for (int j = (i + 1); j < height; j++)
            //insert blank spaces according to the height limitation
        {
            printf(" ");
        }
        for (int jj = -1; jj < i; jj++)
            //insert hashs as the builder loop continue
        {
            printf("#");
        }
        printf("\n");
    }
}
