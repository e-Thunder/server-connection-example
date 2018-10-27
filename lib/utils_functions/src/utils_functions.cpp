#include <Arduino.h>
#include <utils_functions.h>

template <class T, int N>
String prepare_message(T (&array)[N])
{
	String data = "content={";
	for (int i = 0; i < N; ++i)
	{
		String tmp = "param" + String(i + 1) + ":";
		data.concat(tmp);
		data.concat(String(array[i]));
		if (i < N - 1)
			data.concat(",");
		else
			data.concat("}");
	}
	return data;
}