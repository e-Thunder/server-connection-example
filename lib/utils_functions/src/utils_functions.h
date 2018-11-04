#ifndef _UTILS_H_
#define _UTILS_H_

#include <iostream>
#include <string>
#include <sstream>

std::string to_string(float number);

template <class T, int N>
std::string prepare_message(T (&array)[N])
{
	std::string data = "content={";
	for (int i = 0; i < N; ++i)
	{
		std::string tmp = "param" + to_string(i + 1) + ":";
		data.append(tmp);
		data.append(to_string(array[i]));
		if (i < N - 1)
			data.append(",");
		else
			data.append("}");
	}
	return data;
}

#endif // _UTILS_H_