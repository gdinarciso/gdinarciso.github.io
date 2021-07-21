//CS50 - MY SOLUTION

#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <math.h>
#include <ctype.h>

int main(void)
{
    //variable declaration
    int letter = 0, word = 0, sentence = 0;

    //To solve using "while" loops, the variable word must initialize to 1
    //int letter = 0, word = 1, sentence = 0;

    //User's input
    string text = get_string("Text: ");

    // Solving using "while" loops
    /*  int i = 0;
        while (i < strlen(text))
            {
                if (isalpha (text[i]))
                {
                    letter++;
                }

                if (isblank (text[i]))
                {
                    word++;
                }

                if (text[i] == '!' || text[i] == '?')
                {
                    sentence++;
                }

                if (text[i] == '.')
                {
                    if ((text[i-1] == 'r' && text[i-2] == 'M') ||
                        (text[i-1] == 's' && text[i-2] == 'r' && text [i-3] == 'M'))
                    {
                        word++;
                    }
                    else sentence++;
                }
                i++;
            } */

    //Solving using "for" loops:
    for (int i = 0; i <= strlen(text); i++)
    {
        if (isalpha(text[i]))
            //((text[i] >= 'A' && text[i] <= 'Z') ||
            //(text[i] >= 'a' && text[i] <= 'z'))
        {
            letter++;
        }

        if ((isgraph(text[i]) && isblank(text[i - 1])) ||
            text[i] == '\0')
            //(text[i] == ' ' && text[i-1] != '.'))
        {
            word++;
        }

        if (text[i] == '.')
        {
            if ((text[i - 1] == 'r' && text[i - 2] == 'M') ||
                (text[i - 1] == 's' && text[i - 2] == 'r' && text [i - 3] == 'M'))
            {
                word++;
            }
            else
            {
                sentence++;
            }
        }

        if (text[i] == '!' || text[i] == '?')
        {
            sentence++;
        }
    }

    //printf("%i letter(s)\n", letter);
    //printf("%i word(s)\n", word);
    //printf("%i sentence(s)\n", sentence);

    float L = (((float) letter * 100) / (float) word);
    float S = (((float) sentence * 100) / (float) word);
    //printf ("L = %f S = %f\n", L, S);
    float result = round((0.0588 * L) - (0.296 * S) - 15.8);

    if (result > 1 && result < 16)
    {
        printf("Grade %.f\n", result);
    }

    if (result < 1)
    {
        printf("Before Grade 1\n");
    }

    if (result >= 16)
    {
        printf("Grade 16+\n");
    }
}
