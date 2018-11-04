#include <utils_functions.h>

std::string to_string(float number)
{
	std::ostringstream buff;
	buff << number;
	return buff.str();
}