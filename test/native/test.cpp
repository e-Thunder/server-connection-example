#include <unity.h>
#include <utils_functions.h>

void test_convert_string()
{
    float a = 5.3;
    std::string b = to_string(a);
    TEST_ASSERT_EQUAL_STRING("5.3", b.c_str());
}

void test_prepare_messsage()
{
    float array[] = {5.5, 3.3};
    auto a = prepare_message(array);
    const char* expected = "content={param1:5.5,param2:3.3}";
    TEST_ASSERT_EQUAL_STRING(expected, a.c_str());
}

int main(int argc, char **argv) {
    UNITY_BEGIN();
    RUN_TEST(test_convert_string);
    RUN_TEST(test_prepare_messsage);
    UNITY_END();
    return 0;
}
