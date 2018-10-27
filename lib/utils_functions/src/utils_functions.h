#ifndef _UTILS_H_
#define _UTILS_H_

#include <Arduino.h>

template <class T, int N>
String prepare_message(T (&array)[N]);

#endif // _UTILS_H_