//CS50 - MY SOLUTION

#include <stdio.h>
#include <cs50.h>
#include <ctype.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, string argv[])
{
    if (argc < 2 || argc > 2)
    {
        printf("Usage: ./substitution key\n");
        return 1;
    }

    int leng = strlen(argv[1]);
    for (int i = 0; i < leng; i++)
    {
        if (isdigit(argv[1][i]) || ispunct(argv[1][i]))
        {
            printf("Usage: ./substitution key\n");
            return 1;
        }
    }

    if (leng < 26 || leng > 26)
    {
        printf("Key must contain 26 characters.\n");
        return 1;
    }

    if (leng == 26)
    {
        for (int i = leng; i > 0; i--)
        {
            int j = i - 1;
            while (j >= 0)
            {
                if (argv[1][i] == argv[1][j] ||
                    argv[1][i] == (argv[1][j] + 32) ||
                    argv[1][i] == (argv[1][j] - 32))
                {
                    printf("Key must contain 26 characters different from each other.\n");
                    return 1;
                }
                j--;
            }
        }

        string text = get_string("plaintext: ");
        printf("\nciphertext: ");
        for (int i = 0; i < strlen(text); i++)
        {
            if (isalpha(text[i]))
            {
                if (isupper(text[i]))
                {
                    int UP = 65, key = 0;
                    while (text[i] != UP)
                    {
                        UP++;
                        key++;
                    }
                    if (text[i] == UP)
                    {
                        if (isupper(argv[1][key]))
                        {
                            printf("%c", argv[1][key]);
                        }
                        else
                        {
                            printf("%c", (argv[1][key] - 32));
                        }
                    }
                }

                if (islower(text[i]))
                {
                    int lo = 97, key = 0;
                    while (text[i] != lo)
                    {
                        lo++;
                        key++;
                    }
                    if (text[i] == lo)
                    {
                        if (islower(argv[1][key]))
                        {
                            printf("%c", argv[1][key]);
                        }
                        else
                        {
                            printf("%c", (argv[1][key] + 32));
                        }
                    }
                }
            }
            else
            {
                printf("%c", text[i]);
            }
        }
    }
    printf("\n");
    return 0;
}
