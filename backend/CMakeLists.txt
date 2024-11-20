cmake_minimum_required(VERSION 3.29)
project(CourseTracker)

set(CMAKE_CXX_STANDARD 17)

# Set the executable
add_executable(CourseTracker 
    src/main.cpp
    src/course.cpp
    src/assignment.cpp
)

# Include the include directory
include_directories(include)

# Add GoogleTest
include(FetchContent)
FetchContent_Declare(
  googletest
  URL https://github.com/google/googletest/archive/refs/tags/v1.15.2.zip
)

# Prevent overriding the parent project's compiler/linker settings on Windows
set(gtest_force_shared_crt ON CACHE BOOL "" FORCE)

FetchContent_MakeAvailable(googletest)

enable_testing()

# Add the test executable
add_executable(MyProjectTest 
    tests/test_assignment.cpp
    src/assignment.cpp
    #tests/test_course.cpp
    #src/course.cpp
)

# Link GoogleTest to the test executable
target_link_libraries(MyProjectTest PRIVATE gtest_main)

# Specify include directories for the test executable
target_include_directories(MyProjectTest PRIVATE include)

# Add a test to CTest
add_test(NAME MyProjectTest COMMAND MyProjectTest)