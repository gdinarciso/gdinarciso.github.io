//CS50 - My solution

#include "helpers.h"

int blurpixel(int height, int width, RGBTRIPLE image[height][width]);

// Convert image to grayscale
void grayscale(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            float gray = round(image[i][j].rgbtRed + image[i][j].rgbtBlue + image[i][j].rgbtGreen) / 3.0;
            image[i][j].rgbtRed = gray;
            image[i][j].rgbtGreen = gray;
            image[i][j].rgbtBlue = gray;
        }
    }
    return;
}

// Convert image to sepia
void sepia(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            float sepiaRed = round(.393 * image[i][j].rgbtRed + .769 * image[i][j].rgbtGreen + .189 * image[i][j].rgbtBlue);
            float sepiaGreen = round(.349 * image[i][j].rgbtRed + .686 * image[i][j].rgbtGreen + .168 * image[i][j].rgbtBlue);
            float sepiaBlue = round(.272 * image[i][j].rgbtRed + .534 * image[i][j].rgbtGreen + .131 * image[i][j].rgbtBlue);
            if (sepiaRed > 255) {sepiaRed = 255;}
            if (sepiaGreen > 255) {sepiaGreen = 255;}
            if (sepiaBlue > 255) {sepiaBlue = 255;}
            image[i][j].rgbtRed = sepiaRed;
            image[i][j].rgbtGreen = sepiaGreen;
            image[i][j].rgbtBlue = sepiaBlue;
        }
    }
    return;
}

// Reflect image horizontally
void reflect(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0; i < height; i++)
    {
        for (int j = 0, w = round((float) width / 2); j < w; j++)
        {
            RGBTRIPLE temp = image[i][j];
            image[i][j]= image[i][(width - j)];
            image[i][(width - j)] = temp;
        }
    }
    return;
}

// Blur image
void blur(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            if ((i == 0 && j == 0) ||
                (i > 0 && j == width) ||
                (i == height && j > 0) ||
                (i == height && j == width))
            {

            }
            else
            {
                int Red = 0, Green = 0, Blue = 0;
                for (int l = i - 1; l < i + 2; l++)
                {
                    for (int c = j - 1; c < j + 2; c++)
                    {
                        Red += image[l][c].rgbtRed;
                        Green += image[l][c].rgbtGreen;
                        Blue += image[l][c].rgbtBlue;
                    }
                }
                image[i][j].rgbtRed = round(Red / 9.0);
                image[i][j].rgbtGreen = round(Green / 9.0);
                image[i][j].rgbtBlue = round(Blue / 9.0);
            }
        }
    }
    return;
}

            /*
            if ((i == 0 && j == 0) || (i == 0 && j == width) ||
                (i == height && j == 0) || (i == height && j == width))
            {
                int Red = 0, Green = 0, Blue = 0;
                for (int line = -1; line < 1; line++)
                {
                    for (int colum = 0 ; colum < 2; colum++)
                    {
                        Red += image[line][colum].rgbtRed;
                        Green += image[line][colum].rgbtGreen;
                        Blue += image[line][colum].rgbtBlue;
                    }
                }
                image[i][j].rgbtRed = round(Red / 4.0);
                image[i][j].rgbtGreen = round(Green / 4.0);
                image[i][j].rgbtBlue = round(Blue / 4.0);
            }
            else
            if ((i == 0 && j > 0) || (i == 0 && j == width - 1) || (i > 0 && j == 0) ||
                (i == height - 1 && j == 0) || (i == height && j > 0) || (i == height && j == width - 1) ||
                (i == height - 1 && j == width) || (i > 0 && j == width))
            {
                int Red = 0, Green = 0, Blue = 0;
                for (int line = 0; line < 3; line++)
                {
                    for (int colum = 0 ; colum < 2; colum++)
                    {
                        Red += image[line][colum].rgbtRed;
                        Green += image[line][colum].rgbtGreen;
                        Blue += image[line][colum].rgbtBlue;
                    }
                }
                image[i][j].rgbtRed = round(Red / 6.0);
                image[i][j].rgbtGreen = round(Green / 6.0);
                image[i][j].rgbtBlue = round(Blue / 6.0);
            }
            else
            {

            if ((i > 0 && j < width - 1) || (i < height - 1 && j < width - 1))
                {
                int Red = 0, Green = 0, Blue = 0;
                for (int l = i - 1; l < 3; l++)
                {
                    for (int c = j - 1 ; c < 3; c++)
                    {
                        Red += image[l][c].rgbtRed;
                        Green += image[l][c].rgbtGreen;
                        Blue += image[l][c].rgbtBlue;
                    }
                }
                image[i][j].rgbtRed = round(Red / 9.0);
                image[i][j].rgbtGreen = round(Green / 9.0);
                image[i][j].rgbtBlue = round(Blue / 9.0);
            }
            */
