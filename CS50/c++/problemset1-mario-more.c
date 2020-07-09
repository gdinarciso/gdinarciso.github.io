#include <cs50.h>
#include <stdio.h>

int main(void)
{
	int height;
	do
	{
		height = get_int ("Height:");
	}
	while (height < 1 || height > 8);
	for (int pyramid = 0; pyramid < height; pyramid++)
		{
		for (int space = (pyramid+1); space < height; space++)
		{
			printf (" ");
		}
		for (int lefthash = -1; lefthash < pyramid; lefthash++)
		{
		printf ("#");
		}
		for (int gap = -1; gap < pyramid; gap = pyramid)
		{
		printf ("  ");
		}
		for (int righthash = -1; righthash < pyramid; righthash++)
		{
		printf ("#");
		}
	printf ("\n");
	}
}
