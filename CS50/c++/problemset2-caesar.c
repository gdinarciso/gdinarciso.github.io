#include <stdio.h>
#include <cs50.h>
#include <ctype.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, string argv[])
{
    if (argc < 2)
    {
        printf("Missing command-line argument\n");
        return 1;
    }

    if (argc > 2)
    {
        printf("Only a single command-line argument please.\nTry again, you can do it!\n");
        return 1;
    }

    if (atoi(argv[1]) < 0)
    {
        printf("Negative integer forbidden!\n");
        return 1;
    }

    int leng = strlen(argv[1]);
    for (int i = 0; i < leng; i++)
    {
        if (isalpha(argv[1][i]) || ispunct(argv[1][i]))
        {
            printf("Usage: ./caesar key\n");
            return 1;
        }
    }
    int k = atoi(argv[1]);
    string text = get_string("plaintext: ");
    printf("ciphertext: ");
    for (int i = 0; i < strlen(text); i++)
    {
        if (isalpha(text[i]))
        {
            if (isupper(text[i]))
            {
                printf("%c", (((text[i] - 65) + k) % 26) + 65);
            }
            if (islower(text[i]))
            {
                printf("%c", (((text[i] - 97) + k) % 26) + 97);
            }
        }
        else
        {
            printf("%c", text[i]);
        }
    }
    printf("\n");
    return 0;
}
