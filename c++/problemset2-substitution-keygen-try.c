//CS50 - MY SOLUTION

#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void)
{
    srand ((unsigned) time(NULL));

    char key[0];
    //int keysize = get_int ("keysize: ");
    int j = 0;

    key[0] = 65 + rand() % (90 - 65 + 1);
    key[1] = 65 + rand() % (90 - 65 + 1);

    for (int i = 1; i < 27; i++)
    {
        j = (i - 1);
        while (j > 0)
        {
            while (key[i] == key [j])
            {
                key[i] = 65 + rand() % (90 - 65 + 1);
            }
            j--;
        }
        printf("%c", key[i]);

        /*

        for (j = (i - 1); j > 0; j--)
        {
            if (key[i] == key[j])
            {
                key[i] = 65 + rand() % (90 - 65 + 1);
            }
        }

        printf("%c", key[i]);
    */
    }
    printf("\n\n");
    return 0;
}
